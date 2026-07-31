#!/usr/bin/env node
/**
 * Sync article metadata from markdown files to articles.json
 * Extracts excerpt/meta_description from markdown frontmatter
 *
 * Matching uses the same resolvePostModulePath as runtime
 * (url_slug → file). Pure matchers live in src/blog/slug-match.ts.
 *
 * Requires Node 22+ with type stripping (or run via package.json script).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import {
  resolvePostModulePath,
  basenameStem
} from '../src/blog/slug-match.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');

// --- Main ---

const articlesPath = path.join(ROOT_DIR, 'articles.json');
const articlesData = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));

const postsDir = path.join(ROOT_DIR, 'src', 'blog', 'posts');
const markdownFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
// Paths in the same style as Vite import.meta.glob keys
const modulePaths = markdownFiles.map(f => `./posts/${f}`);

console.log(`📄 Found ${markdownFiles.length} markdown files`);
console.log(`📝 Found ${articlesData.articles.length} articles in articles.json`);

let updatedCount = 0;
let skippedCount = 0;
let unmatchedCount = 0;

// Drive matching in the same direction as runtime: for each article, resolve → file
for (const article of articlesData.articles) {
  const matchingPath = resolvePostModulePath(article.url_slug, modulePaths);

  if (!matchingPath) {
    console.log(`⚠️  No matching MDX file found for url_slug "${article.url_slug}"`);
    unmatchedCount++;
    skippedCount++;
    continue;
  }

  const filename = matchingPath.split('/').pop();
  const filePath = path.join(postsDir, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(content);

  if (!data || Object.keys(data).length === 0) {
    console.log(`⚠️  No frontmatter found in ${filename} (url_slug: ${article.url_slug})`);
    skippedCount++;
    continue;
  }

  const needsExcerpt = !article.excerpt && !article.meta_description;
  const hasFrontmatterExcerpt = data.excerpt || data.summary || data.metaDescription || data.description;

  if (needsExcerpt && hasFrontmatterExcerpt) {
    const excerpt = data.excerpt || data.summary || data.metaDescription || data.description;
    article.excerpt = excerpt;
    updatedCount++;
    console.log(`✅ Updated "${article.url_slug}" ← ${basenameStem(matchingPath)} with excerpt: "${excerpt.substring(0, 60)}..."`);
  } else {
    skippedCount++;
  }
}

fs.writeFileSync(articlesPath, JSON.stringify(articlesData, null, 2));

console.log(`\n🎉 Done!`);
console.log(`   - ${updatedCount} articles updated with excerpts`);
console.log(`   - ${skippedCount} articles skipped (already had excerpt, no frontmatter, or unmatched)`);
console.log(`   - ${unmatchedCount} articles with no matching MDX file`);
console.log(`\n💾 Updated ${articlesPath}`);
