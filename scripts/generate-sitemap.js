import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const SITE_URL = 'https://www.learnedlate.com';
const POSTS_DIR = join(__dirname, '../src/blog/posts');
const OUTPUT_PATH = join(__dirname, '../public/sitemap.xml');

// Static pages configuration
const STATIC_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/blog', priority: '0.9', changefreq: 'weekly' },
  { path: '/cv', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects', priority: '0.9', changefreq: 'monthly' },
];

// Project pages configuration
const PROJECT_PAGES = [
  'expense-sorted',
  'forgd-com', 
  'life-calendar',
  'bubble-biases'
];

// Parse frontmatter from markdown content
function parseFrontmatter(content) {
  const lines = content.split('\n');
  const frontmatterEnd = lines.findIndex((line, index) => index > 0 && line.trim() === '---');
  
  if (frontmatterEnd === -1) {
    return { title: 'Untitled', date: new Date().toISOString().split('T')[0] };
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

  return frontmatter;
}

// Generate slug from filename (same logic as blog/index.ts)
function generateSlug(filename) {
  const baseFilename = filename.split('/').pop() || filename;
  return baseFilename.split('-').slice(3).join('-').replace('.md', '');
}

// Format date for sitemap
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
}

// Generate blog posts data
async function getBlogPosts() {
  try {
    const files = await readdir(POSTS_DIR);
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    
    const posts = await Promise.all(
      markdownFiles.map(async (file) => {
        const filePath = join(POSTS_DIR, file);
        const content = await readFile(filePath, 'utf-8');
        const frontmatter = parseFrontmatter(content);
        const slug = generateSlug(file);
        
        return {
          slug,
          date: frontmatter.date || new Date().toISOString().split('T')[0],
          title: frontmatter.title || 'Untitled'
        };
      })
    );
    
    // Remove duplicates by slug (keep the latest date)
    const uniquePosts = posts.reduce((acc, post) => {
      const existing = acc.find(p => p.slug === post.slug);
      if (!existing || new Date(post.date) > new Date(existing.date)) {
        if (existing) {
          const index = acc.indexOf(existing);
          acc[index] = post;
        } else {
          acc.push(post);
        }
      }
      return acc;
    }, []);
    
    // Sort by date (newest first)
    return uniquePosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// Generate sitemap XML
function generateSitemapXML(blogPosts) {
  const now = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  STATIC_PAGES.forEach(page => {
    xml += `
  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  xml += `
  
  <!-- Blog Posts -->`;

  // Add blog posts
  blogPosts.forEach(post => {
    xml += `
  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${formatDate(post.date)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  xml += `
  
  <!-- Project Detail Pages -->`;

  // Add project pages
  PROJECT_PAGES.forEach(project => {
    xml += `
  <url>
    <loc>${SITE_URL}/project/${project}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  return xml;
}

// Main function
async function generateSitemap() {
  try {
    console.log('🔍 Reading blog posts...');
    const blogPosts = await getBlogPosts();
    
    console.log(`📝 Found ${blogPosts.length} unique blog posts`);
    
    console.log('🏗️  Generating sitemap...');
    const sitemapXML = generateSitemapXML(blogPosts);
    
    console.log('💾 Writing sitemap.xml...');
    await writeFile(OUTPUT_PATH, sitemapXML, 'utf-8');
    
    console.log('✅ Sitemap generated successfully!');
    console.log(`📄 Blog posts included:`);
    blogPosts.forEach(post => {
      console.log(`   - ${post.slug} (${post.date})`);
    });
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the script
generateSitemap();