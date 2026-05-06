#!/usr/bin/env node
/**
 * Fix broken internal blog links in markdown files
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.join(__dirname, '..')

const articlesPath = path.join(ROOT_DIR, 'articles.json')
const articlesData = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'))
const publishedSlugs = new Set(
  articlesData.articles
    .filter(a => a.status === 'published')
    .map(a => a.url_slug)
)

const postsDir = path.join(ROOT_DIR, 'src', 'blog', 'posts')
const files = fs.readdirSync(postsDir)
  .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
  .map(f => path.join(postsDir, f))

// Build a slug map: for any variation, find the best published slug
function findPublishedSlug(slug) {
  if (publishedSlugs.has(slug)) return slug
  
  const kebab = slug.replace(/_/g, '-')
  if (publishedSlugs.has(kebab)) return kebab
  
  const snake = slug.replace(/-/g, '_')
  if (publishedSlugs.has(snake)) return snake
  
  return null
}

let totalFixes = 0
let totalRemovals = 0
let totalMdFixes = 0

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8')
  let originalContent = content
  const relativePath = path.relative(ROOT_DIR, file)
  let fileFixes = 0
  let fileRemovals = 0
  let fileMdFixes = 0
  
  // Fix 1: Broken /blog/ links
  // Match markdown links: [text](/blog/slug/)
  const mdLinkPattern = /\[([^\]]*)\]\(\/blog\/([^\s\)]+)\)/g
  let match
  
  while ((match = mdLinkPattern.exec(originalContent)) !== null) {
    const fullMatch = match[0]
    const linkText = match[1]
    const rawSlug = match[2]
    const slug = rawSlug.replace(/\/$/, '')
    
    if (!publishedSlugs.has(slug)) {
      const correctSlug = findPublishedSlug(slug)
      if (correctSlug) {
        // Replace with correct slug (always add trailing slash for consistency)
        const replacement = `[${linkText}](/blog/${correctSlug}/)`
        content = content.split(fullMatch).join(replacement)
        totalFixes++
        fileFixes++
      } else {
        // Remove the link, keep the text
        content = content.split(fullMatch).join(linkText)
        totalRemovals++
        fileRemovals++
      }
    }
  }
  
  // Fix 2: Relative .md links: [text](./filename.md)
  const mdExtPattern = /\[([^\]]*)\]\(([^\s\)]+\.md)\)/g
  while ((match = mdExtPattern.exec(originalContent)) !== null) {
    const fullMatch = match[0]
    const linkText = match[1]
    const mdPath = match[2]
    const baseName = path.basename(mdPath, '.md')
    const correctSlug = findPublishedSlug(baseName)
    if (correctSlug) {
      content = content.split(fullMatch).join(`[${linkText}](/blog/${correctSlug}/)`)
      totalMdFixes++
      fileMdFixes++
    } else {
      content = content.split(fullMatch).join(linkText)
      totalMdFixes++
      fileMdFixes++
    }
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf-8')
    console.log(`✏️  ${relativePath} (${fileFixes} fixes, ${fileRemovals} removals, ${fileMdFixes} md-ext fixes)`)
  }
}

console.log(`\nDone! ${totalFixes} links fixed, ${totalRemovals} links removed, ${totalMdFixes} .md links fixed.`)
