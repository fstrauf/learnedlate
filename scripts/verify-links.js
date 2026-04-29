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

// Always check markdown files (was behind --all flag, now default)
const checkAll = true

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

      // Check mailto links without email_off protection
    let m
    while ((m = mailtoAnchorPattern.exec(content)) !== null) {
      const anchorStart = m.index
      const anchorTag = m[0]
      // Look for email_off comment within 30 chars before the anchor
      const before = content.slice(Math.max(0, anchorStart - 30), anchorStart)
      if (!before.includes('<!--email_off-->')) {
        console.error(`❌ Unprotected mailto link in ${relativePath}: ${anchorTag}`)
        hasError = true
      }
    }
  }
}

// ─────────────────────────────────────────────────────────────
// 3. Scan markdown files for /blog/ links and .md extensions
// ─────────────────────────────────────────────────────────────
function scanMarkdownFiles() {
  const postsDir = path.join(ROOT_DIR, 'src', 'blog', 'posts')
  if (!fs.existsSync(postsDir)) return

  const files = fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(f => path.join(postsDir, f))

  const mdLinkPattern = /\]\(\/blog\/([^\s\)]+)\)/g
  const relativeMdLinkPattern = /\]\(\.\/([^\s\)]+\.md)\)/g

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8')
    const relativePath = path.relative(ROOT_DIR, file)

    // Check absolute /blog/ links
    let match
    while ((match = mdLinkPattern.exec(content)) !== null) {
      const rawSlug = match[1]
      const slug = rawSlug.replace(/\/$/, '')
      if (!publishedSlugs.has(slug)) {
        console.error(`❌ Broken blog link in ${relativePath}: /blog/${rawSlug}`)
        hasError = true
      }
    }

    // Check relative ./filename.md links
    let mdMatch
    while ((mdMatch = relativeMdLinkPattern.exec(content)) !== null) {
      console.error(`❌ Link with .md extension in ${relativePath}: ./${mdMatch[1]}`)
      hasError = true
    }
  }
}

// ─────────────────────────────────────────────────────────────
// 3b. Check markdown files for .md extensions in links (always run)
// ─────────────────────────────────────────────────────────────
function checkMdExtensions() {
  const postsDir = path.join(ROOT_DIR, 'src', 'blog', 'posts')
  if (!fs.existsSync(postsDir)) return

  const files = fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(f => path.join(postsDir, f))

  const mdExtPattern = /\]\(([^\s\)]+\.md)\)/g

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8')
    const relativePath = path.relative(ROOT_DIR, file)

    let match
    while ((match = mdExtPattern.exec(content)) !== null) {
      console.error(`❌ Link with .md extension in ${relativePath}: ${match[1]}`)
      hasError = true
    }
  }
}

// ─────────────────────────────────────────────────────────────
// 3c. Check all markdown files are registered in articles.json
// ─────────────────────────────────────────────────────────────
function checkArticlesJsonCoverage() {
  const postsDir = path.join(ROOT_DIR, 'src', 'blog', 'posts')
  if (!fs.existsSync(postsDir)) return

  const registeredFiles = new Set(
    articlesData.articles
      .filter(a => a.file)
      .map(a => path.basename(a.file))
  )

  const files = fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))

  for (const file of files) {
    if (!registeredFiles.has(file)) {
      console.error(`❌ Blog post not registered in articles.json: src/blog/posts/${file}`)
      hasError = true
    }
  }
}

// ─────────────────────────────────────────────────────────────
// 4. Check sitemap does not include redirect-only routes
// ─────────────────────────────────────────────────────────────
function checkSitemapRedirects() {
  const routesPath = path.join(ROOT_DIR, 'src', 'router', 'routes.ts')
  const sitemapPath = path.join(ROOT_DIR, 'scripts', 'generate-sitemap.js')

  if (!fs.existsSync(routesPath) || !fs.existsSync(sitemapPath)) return

  const routesContent = fs.readFileSync(routesPath, 'utf-8')
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8')

  // Extract redirect routes from routes.ts
  const redirectPattern = /\{\s*path:\s*['"]([^'"]+)['"]\s*,\s*redirect:\s*['"]([^'"]+)['"]\s*\}/g
  const redirectRoutes = new Map()
  let rm
  while ((rm = redirectPattern.exec(routesContent)) !== null) {
    redirectRoutes.set(rm[1], rm[2])
  }

  // Extract static routes from generate-sitemap.js
  const staticRoutePattern = /\{\s*path:\s*['"]([^'"]+)['"]/g
  let sm
  while ((sm = staticRoutePattern.exec(sitemapContent)) !== null) {
    const routePath = sm[1]
    if (redirectRoutes.has(routePath)) {
      console.error(`❌ Redirect route found in sitemap staticRoutes: ${routePath} -> ${redirectRoutes.get(routePath)}`)
      hasError = true
    }
  }
}

// ─────────────────────────────────────────────────────────────
// 5. Check blog post canonical URLs match their slugs
// ─────────────────────────────────────────────────────────────
function checkCanonicalMismatch() {
  const postsDir = path.join(ROOT_DIR, 'src', 'blog', 'posts')
  if (!fs.existsSync(postsDir)) return

  const files = fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(f => path.join(postsDir, f))

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8')
    const relativePath = path.relative(ROOT_DIR, file)

    // Extract frontmatter
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/)
    if (!fmMatch) continue

    const canonicalMatch = fmMatch[1].match(/^canonical:\s*["']?(.+?)["']?$/m)
    if (!canonicalMatch) continue

    const canonical = canonicalMatch[1].trim()
    const article = articlesData.articles.find(a => a.file && a.file.includes(path.basename(file)))
    if (!article) continue

    const expectedCanonical = `https://www.learnedlate.com/blog/${article.url_slug}`
    if (canonical !== expectedCanonical) {
      console.error(`❌ Canonical mismatch in ${relativePath}`)
      console.error(`   Frontmatter: ${canonical}`)
      console.error(`   Expected:    ${expectedCanonical}`)
      hasError = true
    }
  }
}

// ─────────────────────────────────────────────────────────────
// Run checks
// ─────────────────────────────────────────────────────────────
console.log('Verifying internal blog links (Vue + markdown), mailto protection, sitemap, and canonicals...\n')

scanVueFiles()
checkSitemapRedirects()
checkCanonicalMismatch()
checkMdExtensions()
checkArticlesJsonCoverage()
if (checkAll) {
  scanMarkdownFiles()
}

if (hasError) {
  console.error('\n❌ Link verification failed. Please fix the issues above.')
  process.exit(1)
} else {
  console.log('✅ All checked links are valid, mailto links are protected, sitemap and canonicals are consistent.')
  process.exit(0)
}
