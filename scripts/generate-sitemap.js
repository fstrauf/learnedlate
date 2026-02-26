import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const articlesPath = path.join(__dirname, '..', 'articles.json')
const articlesData = JSON.parse(fs.readFileSync(articlesPath, 'utf8'))
const articles = articlesData.articles

const baseUrl = 'https://www.learnedlate.com'
const today = new Date().toISOString().split('T')[0]

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/blog', priority: '0.9', changefreq: 'weekly' },
  { path: '/projects', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.8', changefreq: 'monthly' },
  { path: '/cv', priority: '0.7', changefreq: 'monthly' },
  { path: '/mvp-development', priority: '0.8', changefreq: 'monthly' },
  { path: '/fractional-cto', priority: '0.8', changefreq: 'monthly' },
  { path: '/ai-implementation', priority: '0.8', changefreq: 'monthly' },
  { path: '/automation', priority: '0.8', changefreq: 'monthly' },
  { path: '/seo-automation', priority: '0.8', changefreq: 'monthly' },
  { path: '/now', priority: '0.6', changefreq: 'weekly' },
  { path: '/life-balance-visualizer', priority: '0.6', changefreq: 'monthly' },
  { path: '/life-calendar', priority: '0.6', changefreq: 'monthly' },
  { path: '/concentric-circles', priority: '0.6', changefreq: 'monthly' },
]

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

// Add static routes
staticRoutes.forEach(route => {
  sitemap += `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`
})

// Add article routes
const publishedArticles = articles.filter(a => a.status === 'published')
publishedArticles.forEach(article => {
  const lastmod = article.published_date || today
  sitemap += `  <url>
    <loc>${baseUrl}/blog/${article.url_slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`
})

sitemap += '</urlset>\n'

const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml')
fs.writeFileSync(outputPath, sitemap)
console.log(`✅ Sitemap generated successfully!`)
console.log(`   - ${staticRoutes.length} static routes`)
console.log(`   - ${publishedArticles.length} article routes`)
console.log(`   - Total: ${staticRoutes.length + publishedArticles.length} URLs`)
console.log(`   - Output: ${outputPath}`)
