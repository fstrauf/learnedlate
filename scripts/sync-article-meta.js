#!/usr/bin/env node
/**
 * Sync article metadata from markdown files to articles.json
 * Extracts excerpt/meta_description from markdown frontmatter
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');

// Read articles.json
const articlesPath = path.join(ROOT_DIR, 'articles.json');
const articlesData = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));

// Read all markdown files
const postsDir = path.join(ROOT_DIR, 'src', 'blog', 'posts');
const markdownFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));

console.log(`📄 Found ${markdownFiles.length} markdown files`);
console.log(`📝 Found ${articlesData.articles.length} articles in articles.json`);

let updatedCount = 0;
let skippedCount = 0;

for (const filename of markdownFiles) {
  const filePath = path.join(postsDir, filename);
  const content = fs.readFileSync(filePath, 'utf-8');

  // Parse frontmatter with gray-matter
  const { data } = matter(content);

  if (!data || Object.keys(data).length === 0) {
    console.log(`⚠️  No frontmatter found in ${filename}`);
    skippedCount++;
    continue;
  }

  // Extract slug from filename - handle various patterns
  // 2025-01-08-ai-feasibility-sprint.md -> ai-feasibility-sprint
  // 046_how_much_does_a_fractional_cto_cost.md -> how_much_does_a_fractional_cto_cost
  let slug = filename.replace(/\.(md|mdx)$/i, '');

  // Remove date prefix (YYYY-MM-DD-)
  const dateMatch = slug.match(/^\d{4}-\d{2}-\d{2}-(.+)$/);
  if (dateMatch) {
    slug = dateMatch[1];
  }

  // Remove numeric prefix (046_)
  const numMatch = slug.match(/^\d+_(.+)$/);
  if (numMatch) {
    slug = numMatch[1];
  }

  // NOTE: articles.json uses UNDERSCORES in URL slugs, keep them as-is
  // slug = slug.replace(/_/g, '-');  // <-- DON'T do this

  // Find matching article
  const article = articlesData.articles.find(a => a.url_slug === slug);

  if (!article) {
    console.log(`⚠️  No matching article found for ${filename} (slug: ${slug})`);
    skippedCount++;
    continue;
  }

  // Check if article needs updating
  const needsExcerpt = !article.excerpt && !article.meta_description;
  const hasFrontmatterExcerpt = data.excerpt || data.summary || data.metaDescription || data.description;

  if (needsExcerpt && hasFrontmatterExcerpt) {
    // Use best available field from frontmatter
    const excerpt = data.excerpt || data.summary || data.metaDescription || data.description;
    article.excerpt = excerpt;
    updatedCount++;
    console.log(`✅ Updated "${slug}" with excerpt: "${excerpt.substring(0, 60)}..."`);
  } else {
    skippedCount++;
  }
}

// Write updated articles.json
fs.writeFileSync(articlesPath, JSON.stringify(articlesData, null, 2));

console.log(`\n🎉 Done!`);
console.log(`   - ${updatedCount} articles updated with excerpts`);
console.log(`   - ${skippedCount} articles skipped (already had excerpt or no frontmatter excerpt)`);
console.log(`\n💾 Updated ${articlesPath}`);
