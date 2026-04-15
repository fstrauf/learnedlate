#!/usr/bin/env node
/**
 * Verify internal links point to valid published articles
 * and mailto links have Cloudflare obfuscation protection.
 *
 * Usage:
 *   node scripts/verify-links.js           # checks Vue files + mailto only
 *   node scripts/verify-links.js --all     # also checks markdown files
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.join(__dirname, '..')

const checkAll = process.argv.includes('--all')

// ─────────────────────────────────────────────────────────────
// 1. Load valid article slugs from articles.json
// ─────────────────────────────────────────────────────────────
const articlesPath = path.join(ROOT_DIR, 'articles.json')
const articlesData = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'))
const publishedSlugs = new Set(
  articlesData.articles
    .filter(a => a.status === 'published')
    .map(a => a.url_slug)
)

let hasError = false

// ─────────────────────────────────────────────────────────────
// 2. Scan Vue files for /blog/ links
// ─────────────────────────────────────────────────────────────
function scanVueFiles() {
  const viewsDir = path.join(ROOT_DIR, 'src', 'views')
  const componentsDir = path.join(ROOT_DIR, 'src', 'components')
  const files = []

  for (const dir of [viewsDir, componentsDir]) {
    if (!fs.existsSync(dir)) continue
    const entries = fs.readdirSync(dir)
      .filter(f => f.endsWith('.vue'))
      .map(f => path.join(dir, f))
    files.push(...entries)
  }

  const blogLinkPattern = /href="\/blog\/([^"]+)"/g
  const mailtoAnchorPattern = /<a[^>]*href="mailto:[^"]*"[^>]*>/g

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8')
    const relativePath = path.relative(ROOT_DIR, file)

    // Check blog links
    let match
    while ((match = blogLinkPattern.exec(content)) !== null) {
      const rawSlug = match[1]
      // Remove trailing slash if present
      const slug = rawSlug.replace(/\/$/, '')
      if (!publishedSlugs.has(slug)) {
        console.error(`❌ Broken blog link in ${relativePath}: /blog/${rawSlug}`)
        hasError = true
      }
    }

    // Check mailto links without data-cfemail
    let m
    while ((m = mailtoAnchorPattern.exec(content)) !== null) {
      const anchorTag = m[0]
      if (!anchorTag.includes('data-cfemail=""')) {
        console.error(`❌ Unprotected mailto link in ${relativePath}: ${anchorTag}`)
        hasError = true
      }
    }
  }
}

// ─────────────────────────────────────────────────────────────
// 3. Scan markdown files for /blog/ links
// ─────────────────────────────────────────────────────────────
function scanMarkdownFiles() {
  const postsDir = path.join(ROOT_DIR, 'src', 'blog', 'posts')
  if (!fs.existsSync(postsDir)) return

  const files = fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(f => path.join(postsDir, f))

  const mdLinkPattern = /\]\(\/blog\/([^\s\)]+)\)/g

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8')
    const relativePath = path.relative(ROOT_DIR, file)

    let match
    while ((match = mdLinkPattern.exec(content)) !== null) {
      const rawSlug = match[1]
      const slug = rawSlug.replace(/\/$/, '')
      if (!publishedSlugs.has(slug)) {
        console.error(`❌ Broken blog link in ${relativePath}: /blog/${rawSlug}`)
        hasError = true
      }
    }
  }
}

// ─────────────────────────────────────────────────────────────
// Run checks
// ─────────────────────────────────────────────────────────────
if (checkAll) {
  console.log('Verifying internal blog links (Vue + markdown) and mailto protection...\n')
} else {
  console.log('Verifying internal blog links in Vue files and mailto protection...\n')
}

scanVueFiles()
if (checkAll) {
  scanMarkdownFiles()
}

if (hasError) {
  console.error('\n❌ Link verification failed. Please fix the issues above.')
  if (!checkAll) {
    console.error('   (Run with --all to also check markdown files)')
  }
  process.exit(1)
} else {
  console.log('✅ All checked links are valid and mailto links are protected.')
  if (!checkAll) {
    console.log('   (Run with --all to also check markdown files)')
  }
  process.exit(0)
}
