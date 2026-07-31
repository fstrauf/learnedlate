#!/usr/bin/env node
/**
 * Verify Prerender Script
 *
 * 1. All expected prerendered files exist in dist/client
 * 2. Published blog post HTML has non-trivial body text in .blog-content
 *    (or schema wordCount >> 1) so empty MDX shells cannot ship.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { MONEY_PATHS } from './sitemap-routes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distPath = path.join(__dirname, '..', 'dist', 'client')
const articlesPath = path.join(__dirname, '..', 'articles.json')

/** Minimum character length of body text inside .blog-content to count as non-empty */
const MIN_BODY_CHARS = 80

// Check if dist folder exists
if (!fs.existsSync(distPath)) {
  console.error('❌ Dist folder not found. Run "npm run build" first.')
  process.exit(1)
}

const articlesData = JSON.parse(fs.readFileSync(articlesPath, 'utf8'))
const articles = articlesData.articles.filter(a => a.status === 'published')

console.log('Verifying prerendered files...\n')

let errors = []
let success = []
let bodyPass = []
let bodyFail = []

// Check static pages
const staticPages = ['index.html']
staticPages.forEach(page => {
  const fullPath = path.join(distPath, page)
  if (!fs.existsSync(fullPath)) {
    errors.push(`Missing: ${page}`)
  } else {
    success.push(`✅ ${page}`)
  }
})

// GTM money URLs must be prerendered as dist HTML (sitemap advertises them)
MONEY_PATHS.forEach((moneyPath) => {
  // /services/strategy → dist/client/services/strategy/index.html
  // /contact → dist/client/contact/index.html
  const candidates = [
    path.join(distPath, moneyPath.slice(1), 'index.html'),
    path.join(distPath, `${moneyPath.slice(1)}.html`)
  ]
  const found = candidates.find((p) => fs.existsSync(p))
  if (!found) {
    errors.push(`Missing money URL prerender: ${moneyPath} (expected ${candidates[0]})`)
  } else {
    success.push(`✅ money ${moneyPath} → ${path.relative(distPath, found)}`)
  }
})

// Check blog index
const blogIndexPath = path.join(distPath, 'blog', 'index.html')
if (!fs.existsSync(blogIndexPath)) {
  const blogHtmlPath = path.join(distPath, 'blog.html')
  if (fs.existsSync(blogHtmlPath)) {
    success.push('✅ blog.html')
  } else {
    errors.push('Missing: blog/index.html or blog.html')
  }
} else {
  success.push('✅ blog/index.html')
}

/**
 * Extract non-trivial body text from prerendered blog HTML.
 * Prefer .blog-content; fall back to JSON-LD wordCount.
 */
function assessBlogBody(html, urlSlug) {
  // .blog-content body text (strip tags)
  const contentMatch = html.match(
    /class=["'][^"']*blog-content[^"']*["'][^>]*>([\s\S]*?)<\/(?:div|article|section)>/i
  )
  let bodyText = ''
  if (contentMatch) {
    bodyText = contentMatch[1]
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  }

  // Schema.org wordCount from JSON-LD
  let wordCount = 0
  const ldMatches = html.matchAll(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  )
  for (const m of ldMatches) {
    try {
      const data = JSON.parse(m[1])
      const nodes = Array.isArray(data) ? data : data['@graph'] ? data['@graph'] : [data]
      for (const node of nodes) {
        if (node && (node.wordCount != null || node.wordcount != null)) {
          wordCount = Math.max(wordCount, Number(node.wordCount || node.wordcount) || 0)
        }
      }
    } catch {
      // ignore invalid JSON-LD
    }
  }

  const hasBody = bodyText.length >= MIN_BODY_CHARS
  const hasWordCount = wordCount > 1
  return {
    urlSlug,
    ok: hasBody || hasWordCount,
    bodyChars: bodyText.length,
    wordCount
  }
}

// Check blog posts: existence + body length
articles.forEach(article => {
  const blogPath = path.join(distPath, 'blog', `${article.url_slug}.html`)
  if (!fs.existsSync(blogPath)) {
    errors.push(`Missing blog post: blog/${article.url_slug}.html`)
    bodyFail.push({ urlSlug: article.url_slug, reason: 'missing file' })
  } else {
    success.push(`✅ blog/${article.url_slug}.html`)
    const html = fs.readFileSync(blogPath, 'utf8')
    const assessment = assessBlogBody(html, article.url_slug)
    if (assessment.ok) {
      bodyPass.push(assessment)
    } else {
      bodyFail.push({
        urlSlug: article.url_slug,
        reason: `empty body (chars=${assessment.bodyChars}, wordCount=${assessment.wordCount})`
      })
    }
  }
})

// Summary
console.log(`\n📊 Verification Summary:`)
console.log(`   - Total published articles: ${articles.length}`)
console.log(`   - Static pages checked: ${staticPages.length + 1}`)
console.log(`   - Total files verified: ${success.length}`)
console.log(`   - Body gate pass: ${bodyPass.length}`)
console.log(`   - Body gate fail: ${bodyFail.length}`)

let failed = false

if (errors.length > 0) {
  console.error(`\n❌ Prerender verification FAILED (missing files):`)
  console.error(`   - ${errors.length} errors found`)
  errors.slice(0, 10).forEach(e => console.error(`      ❌ ${e}`))
  if (errors.length > 10) {
    console.error(`      ... and ${errors.length - 10} more`)
  }
  failed = true
}

// Hard fail: any published post with empty/thin body (or missing file counted above)
if (bodyFail.length > 0) {
  console.error(`\n❌ Body-length gate FAILED: empty/thin bodies not allowed`)
  console.error(`   - ${bodyFail.length}/${articles.length} published posts failed`)
  bodyFail.forEach((f) =>
    console.error(`      ❌ ${f.urlSlug}: ${f.reason}`)
  )
  failed = true
} else {
  console.log(
    `\n✅ Body-length gate passed: ${bodyPass.length}/${articles.length} published posts have non-trivial body`
  )
}

if (failed) {
  process.exit(1)
}

console.log(`\n✅ All files prerendered successfully!`)
console.log(`   - ${articles.length} blog posts`)
console.log(`   - ${staticPages.length + 1} static pages`)
console.log('\n✅ Prerender verification PASSED')
