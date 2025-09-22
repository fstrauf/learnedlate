import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Utility function to extract frontmatter and content
function parseBlogPost(raw, filename) {
  const lines = raw.split('\n');
  const frontmatterEnd = lines.findIndex((line, index) => index > 0 && line.trim() === '---');

  if (frontmatterEnd === -1) {
    throw new Error(`Invalid frontmatter format in ${filename}`);
  }

  const frontmatterLines = lines.slice(1, frontmatterEnd);
  const frontmatter = {};

  frontmatterLines.forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      let value = valueParts.join(':').trim();

      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      frontmatter[key.trim()] = value;
    }
  });

  // Extract slug robustly
  const baseFilename = filename.split('/').pop() || filename;
  const nameWithoutExt = baseFilename.replace(/\.md$/i, '');

  let derivedSlug = '';
  const datePrefixMatch = nameWithoutExt.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
  if (datePrefixMatch) {
    derivedSlug = datePrefixMatch[4];
  } else {
    derivedSlug = nameWithoutExt;
  }

  const frontmatterSlug = typeof frontmatter.slug === 'string' ? frontmatter.slug : '';
  const rawSlug = frontmatterSlug || derivedSlug;
  const slug = sanitizeSlug(rawSlug) || sanitizeSlug(nameWithoutExt) || `post-${Math.random().toString(36).slice(2, 8)}`;

  // Publish date: prefer frontmatter, else derive from filename if present, else fallback
  let publishDate = frontmatter.date || frontmatter.publishDate;
  if (!publishDate && datePrefixMatch) {
    publishDate = `${datePrefixMatch[1]}-${datePrefixMatch[2]}-${datePrefixMatch[3]}`;
  }
  if (!publishDate) publishDate = '2025-06-22';

  return {
    slug,
    publishDate,
    title: frontmatter.title || 'Untitled',
  };
}

function sanitizeSlug(input) {
  return input
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function getBlogPosts() {
  const postsDir = path.join(__dirname, '../src/blog/posts');

  try {
    const files = await fs.readdir(postsDir);
    const markdownFiles = files.filter(file => file.endsWith('.md'));

    const posts = [];

    for (const file of markdownFiles) {
      try {
        const filePath = path.join(postsDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const post = parseBlogPost(content, file);
        posts.push(post);
      } catch (error) {
        console.warn(`Warning: Could not parse blog post ${file}:`, error.message);
      }
    }

    return posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  } catch (error) {
    console.warn('Warning: Could not read blog posts directory:', error.message);
    return [];
  }
}

async function generateSitemap() {
  const baseUrl = 'https://www.learnedlate.com';
  const today = new Date().toISOString().split('T')[0];

  // Get all blog posts
  const blogPosts = await getBlogPosts();

  // Static pages
  const staticPages = [
    {
      url: '/',
      lastmod: today,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: '/blog',
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.8'
    }
  ];

  // Create sitemap XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
${blogPosts.map(post => `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.publishDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write to public directory
  const publicSitemapPath = path.join(__dirname, '../public/sitemap.xml');
  await fs.writeFile(publicSitemapPath, sitemapXml);

  console.log(`✅ Sitemap generated successfully with ${staticPages.length} static pages and ${blogPosts.length} blog posts`);
  console.log(`📍 Written to: ${publicSitemapPath}`);
}

// Run the script
generateSitemap().catch(error => {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
});