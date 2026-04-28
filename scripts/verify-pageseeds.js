#!/usr/bin/env node
/**
 * Verify PageSeeds compatibility in prerendered output
 *
 * Checks:
 * - Visible FAQ content appears outside JSON-LD scripts
 * - Visible HowTo content appears outside JSON-LD scripts
 * - Visible citations appear outside JSON-LD scripts
 * - FAQPage JSON-LD exists when FAQ frontmatter is present
 * - HowTo JSON-LD exists when howTo frontmatter is present
 * - No duplicate FAQPage schemas
 * - Canonical/OG URL consistency
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.join(__dirname, '..')

const postsDir = path.join(ROOT, 'src', 'blog', 'posts')
const distDir = path.join(ROOT, 'dist', 'client', 'blog')

const markdownFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'))

let errors = []
let checks = []

for (const filename of markdownFiles) {
  const filePath = path.join(postsDir, filename)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(raw)

  // Extract slug
  let slug = filename.replace(/\.(md|mdx)$/i, '')
  const dateMatch = slug.match(/^\d{4}-\d{2}-\d{2}-(.+)$/)
  if (dateMatch) slug = dateMatch[1]
  const numMatch = slug.match(/^\d+_(.+)$/)
  if (numMatch) slug = numMatch[1]

  const htmlPath = path.join(distDir, `${slug}.html`)
  if (!fs.existsSync(htmlPath)) continue

  const html = fs.readFileSync(htmlPath, 'utf-8')

  // Remove all script tags to inspect visible content only
  let htmlNoScripts = html.replace(/<script[\s\S]*?<\/script>/gi, '')
  // Decode common HTML entities for text comparison
  htmlNoScripts = htmlNoScripts
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#x27;/g, "'")

  // FAQ checks
  const faq = data.frequentlyAskedQuestions || data.faq
  if (faq && faq.length > 0) {
    const firstQuestion = faq[0].question
    const firstAnswer = faq[0].answer

    if (!htmlNoScripts.includes(firstQuestion)) {
      errors.push(`${slug}: FAQ question "${firstQuestion}" not found in visible content`)
    } else {
      checks.push(`${slug}: Visible FAQ found`)
    }

    if (!htmlNoScripts.includes(firstAnswer)) {
      errors.push(`${slug}: FAQ answer not found in visible content`)
    }

    const faqPageMatches = html.match(/"@type"\s*:\s*"FAQPage"/g)
    if (!faqPageMatches) {
      errors.push(`${slug}: FAQPage JSON-LD not found`)
    } else if (faqPageMatches.length > 1) {
      errors.push(`${slug}: Duplicate FAQPage JSON-LD found (${faqPageMatches.length})`)
    } else {
      checks.push(`${slug}: FAQPage JSON-LD found`)
    }
  }

  // HowTo checks
  if (data.howTo?.steps && data.howTo.steps.length > 0) {
    const firstStep = data.howTo.steps[0].name

    if (!htmlNoScripts.includes(firstStep)) {
      errors.push(`${slug}: HowTo step "${firstStep}" not found in visible content`)
    } else {
      checks.push(`${slug}: Visible HowTo found`)
    }

    if (!html.includes('"@type":"HowTo"') && !html.includes('"@type": "HowTo"')) {
      errors.push(`${slug}: HowTo JSON-LD not found`)
    } else {
      checks.push(`${slug}: HowTo JSON-LD found`)
    }
  }

  // Citation checks
  if (data.citations && data.citations.length > 0) {
    const firstSource = data.citations[0].source

    if (!htmlNoScripts.includes(firstSource)) {
      errors.push(`${slug}: Citation source "${firstSource}" not found in visible content`)
    } else {
      checks.push(`${slug}: Visible citations found`)
    }
  }

  // Canonical consistency
  const canonical = data.canonical || data.canonicalUrl
  if (canonical) {
    const canonicalMatch = html.match(/<link rel="canonical" href="([^"]*)"/)
    const ogUrlMatch = html.match(/<meta property="og:url" content="([^"]*)"/)

    if (canonicalMatch && canonicalMatch[1] !== canonical) {
      errors.push(`${slug}: Canonical mismatch: expected ${canonical}, got ${canonicalMatch[1]}`)
    }
    if (ogUrlMatch && ogUrlMatch[1] !== canonical) {
      errors.push(`${slug}: OG URL mismatch: expected ${canonical}, got ${ogUrlMatch[1]}`)
    }
    if (canonicalMatch && ogUrlMatch && canonicalMatch[1] === ogUrlMatch[1] && canonicalMatch[1] === canonical) {
      checks.push(`${slug}: Canonical/OG URL consistent`)
    }
  }
}

console.log('\n📋 PageSeeds Verification\n')
checks.forEach(c => console.log(`  ✅ ${c}`))

if (errors.length > 0) {
  console.error(`\n❌ ${errors.length} error(s):`)
  errors.forEach(e => console.error(`  ❌ ${e}`))
  process.exit(1)
} else {
  console.log(`\n✅ All PageSeeds checks passed!`)
}
