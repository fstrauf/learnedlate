import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import puppeteer from 'puppeteer'
import http from 'http'
import { createRequire } from 'module'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distPath = path.join(__dirname, '..', 'dist')
const articlesPath = path.join(__dirname, '..', 'articles.json')

// Read articles
const articlesData = JSON.parse(fs.readFileSync(articlesPath, 'utf8'))
const publishedArticles = articlesData.articles.filter(a => a.status === 'published')

const staticRoutes = [
  '/',
  '/blog',
  '/projects',
  '/services',
  '/cv',
  '/mvp-development',
  '/fractional-cto',
  '/ai-implementation',
  '/automation',
  '/seo-automation',
  '/now',
  '/life-balance-visualizer',
  '/life-calendar',
  '/concentric-circles',
]

const articleRoutes = publishedArticles.map(a => `/blog/${a.url_slug}`)
const allRoutes = [...staticRoutes, ...articleRoutes]

console.log(`🚀 Starting prerendering for ${allRoutes.length} routes...\n`)

// Simple static file server
function createServer(rootPath, port) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(rootPath, req.url === '/' ? 'index.html' : req.url)
      
      // For SPA routes, serve index.html
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(rootPath, 'index.html')
      }
      
      const ext = path.extname(filePath)
      const contentType = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
      }[ext] || 'application/octet-stream'
      
      try {
        const content = fs.readFileSync(filePath)
        res.writeHead(200, { 'Content-Type': contentType })
        res.end(content)
      } catch (err) {
        res.writeHead(404)
        res.end('Not found')
      }
    })
    
    server.listen(port, () => {
      console.log(`  📡 Dev server running on http://localhost:${port}`)
      resolve(server)
    })
  })
}

async function prerender() {
  const port = 3456
  const server = await createServer(distPath, port)
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  try {
    for (const route of allRoutes) {
      const page = await browser.newPage()
      
      // Construct the file path
      let outputPath
      if (route === '/') {
        outputPath = path.join(distPath, 'index.html')
      } else if (route === '/blog') {
        outputPath = path.join(distPath, 'blog', 'index.html')
      } else if (route.startsWith('/blog/')) {
        const slug = route.replace('/blog/', '')
        outputPath = path.join(distPath, 'blog', `${slug}.html`)
      } else {
        outputPath = path.join(distPath, `${route}.html`)
      }

      // Ensure directory exists
      const dir = path.dirname(outputPath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }

      // Skip root index.html (we already have it from the build)
      if (route === '/') {
        console.log(`  ⏭️  Skipping ${route} (already exists from build)`)
        await page.close()
        continue
      }

      const url = `http://localhost:${port}${route}`
      
      console.log(`  📝 Prerendering ${route}...`)
      
      await page.goto(url, { waitUntil: 'networkidle0' })
      
      // Wait for Vue to render
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Get the HTML
      const html = await page.content()

      // Write the file
      fs.writeFileSync(outputPath, html)
      const size = (fs.statSync(outputPath).size / 1024).toFixed(1)
      console.log(`  ✅ Written ${size} KB to ${path.relative(distPath, outputPath)}`)

      await page.close()
    }

    console.log(`\n✅ Prerendering complete!`)
    console.log(`   - ${staticRoutes.length} static routes`)
    console.log(`   - ${articleRoutes.length} article routes`)
    
  } catch (error) {
    console.error(`\n❌ Prerendering failed:`, error)
    process.exit(1)
  } finally {
    await browser.close()
    server.close()
    console.log(`  📡 Dev server stopped`)
  }
}

prerender()
