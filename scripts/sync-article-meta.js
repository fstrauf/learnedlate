#!/usr/bin/env node
/**
 * Sync article metadata from markdown files to articles.json
 * Extracts excerpt/meta_description from markdown frontmatter
 *
 * Matching rules mirror src/blog/index.ts resolvePostModulePath
 * (file → article direction): exact basename, extract slug, canonicalize, aliases.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');

// --- Pure match helpers (keep in sync with src/blog/index.ts) ---

function basenameStem(filePath) {
  return filePath.split('/').pop()?.replace(/\.(md|mdx)$/i, '') || '';
}

function extractSlugFromPath(filePath) {
  const base = basenameStem(filePath);

  const dateMatch = base.match(/^\d{4}-\d{2}-\d{2}-(.+)$/);
  if (dateMatch) return dateMatch[1];

  const numMatch = base.match(/^\d+_(.+)$/);
  if (numMatch) return numMatch[1];

  return base;
}

function canonicalizeSlug(s) {
  let out = String(s).trim().toLowerCase();
  const dateMatch = out.match(/^\d{4}-\d{2}-\d{2}-(.+)$/);
  if (dateMatch) out = dateMatch[1];
  const numMatch = out.match(/^\d+_(.+)$/);
  if (numMatch) out = numMatch[1];
  return out.replace(/_/g, '-');
}

// NOTE: public url_slug is the route key; MDX may use date/N_ prefixes and
// underscores — matching must canonicalize; do not "fix" by rewriting live URLs here.
const SLUG_ALIAS_MAP = {
  'crm-software-nz-guide-2025': 'crm_software_nz_blog_post',
  technical_co_founder_vs_fractional_cto_which_is_right_for_your_startup:
    '054_technical_co_founder_vs_fractional_cto_which_is_right_for_your_startup_2026',
  how_to_hire_developers_for_your_startup_a_non_technical_founders_complete_guide:
    '055_how_to_hire_developers_for_your_startup_a_non_technical_founders_complete_guide_2026',
  when_to_hire_your_first_developer_a_startup_founders_timing_readiness_guide:
    '058_when_to_hire_your_first_developer_a_startup_founders_timing_readiness_guide_2026',
  'cloud-migration-checklist-small-business-2025-nz':
    '068_cloud_migration_checklist_for_small_businesses_2025_nz_edition',
  'part-time-cto-hourly-rates-nz-2026-guide':
    '073_part_time_cto_hourly_rates_in_new_zealand_2026_market_guide_for_startups'
};

// Invert alias: MDX stem → url_slug
const STEM_TO_URL_SLUG = Object.fromEntries(
  Object.entries(SLUG_ALIAS_MAP).map(([urlSlug, stem]) => [stem, urlSlug])
);

/**
 * Find article for a markdown file using multi-strategy matching
 * (inverse of resolvePostModulePath: file → url_slug).
 */
function findArticleForFile(filename, articles) {
  const stem = basenameStem(filename);
  const extracted = extractSlugFromPath(filename);
  const canonStem = canonicalizeSlug(stem);
  const canonExtracted = canonicalizeSlug(extracted);

  // 1. Exact basename stem === url_slug
  let match = articles.find((a) => a.url_slug === stem);
  if (match) return match;

  // 2. Exact extractSlugFromPath === url_slug
  match = articles.find((a) => a.url_slug === extracted);
  if (match) return match;

  // 3. Canonicalize match (unique)
  const canonMatches = articles.filter((a) => {
    const c = canonicalizeSlug(a.url_slug);
    return c === canonStem || c === canonExtracted;
  });
  if (canonMatches.length === 1) return canonMatches[0];
  if (canonMatches.length > 1) {
    const prefer = canonMatches.find((a) => a.url_slug === stem);
    return prefer || canonMatches[0];
  }

  // 4. Explicit alias map (stem → url_slug)
  const aliasedSlug = STEM_TO_URL_SLUG[stem];
  if (aliasedSlug) {
    match = articles.find((a) => a.url_slug === aliasedSlug);
    if (match) return match;
  }

  return undefined;
}

// --- Main ---

const articlesPath = path.join(ROOT_DIR, 'articles.json');
const articlesData = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));

const postsDir = path.join(ROOT_DIR, 'src', 'blog', 'posts');
const markdownFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));

console.log(`📄 Found ${markdownFiles.length} markdown files`);
console.log(`📝 Found ${articlesData.articles.length} articles in articles.json`);

let updatedCount = 0;
let skippedCount = 0;
let unmatchedCount = 0;

for (const filename of markdownFiles) {
  const filePath = path.join(postsDir, filename);
  const content = fs.readFileSync(filePath, 'utf-8');

  const { data } = matter(content);

  if (!data || Object.keys(data).length === 0) {
    console.log(`⚠️  No frontmatter found in ${filename}`);
    skippedCount++;
    continue;
  }

  const article = findArticleForFile(filename, articlesData.articles);

  if (!article) {
    console.log(`⚠️  No matching article found for ${filename} (stem: ${basenameStem(filename)}, extract: ${extractSlugFromPath(filename)})`);
    unmatchedCount++;
    skippedCount++;
    continue;
  }

  const needsExcerpt = !article.excerpt && !article.meta_description;
  const hasFrontmatterExcerpt = data.excerpt || data.summary || data.metaDescription || data.description;

  if (needsExcerpt && hasFrontmatterExcerpt) {
    const excerpt = data.excerpt || data.summary || data.metaDescription || data.description;
    article.excerpt = excerpt;
    updatedCount++;
    console.log(`✅ Updated "${article.url_slug}" with excerpt: "${excerpt.substring(0, 60)}..."`);
  } else {
    skippedCount++;
  }
}

fs.writeFileSync(articlesPath, JSON.stringify(articlesData, null, 2));

console.log(`\n🎉 Done!`);
console.log(`   - ${updatedCount} articles updated with excerpts`);
console.log(`   - ${skippedCount} articles skipped (already had excerpt, no frontmatter, or unmatched)`);
console.log(`   - ${unmatchedCount} files with no matching article`);
console.log(`\n💾 Updated ${articlesPath}`);
