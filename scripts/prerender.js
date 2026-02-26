#!/usr/bin/env node
/**
 * SSR-based Prerender Script
 * 
 * This script uses Vite's SSR capabilities to prerender routes at build time.
 * No Chrome/Puppeteer needed - it renders Vue components directly to HTML strings.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createServer } from 'vite'
import { render, staticRoutes, articleRoutes, allRoutes } from '../dist/server/entry-server.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distPath = path.join(__dirname, '..', 'dist')
const clientPath = path.join(distPath, 'client')

console.log(`🚀 Starting SSR prerendering for ${allRoutes.length} routes...\n`)

// Read the template HTML file
function getTemplate() {
  const templatePath = path.join(clientPath, 'index.html')
  return fs.readFileSync(templatePath, 'utf-8')
}

// Escape special regex characters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

async function prerender() {
  try {
    // Create a Vite server in middleware mode for SSR
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'custom',
      ssr: {
        noExternal: true,
      }
    })

    const template = getTemplate()
    const manifest = JSON.parse(fs.readFileSync(path.join(clientPath, '.vite', 'ssr-manifest.json'), 'utf-8'))

    // Track results
    let successCount = 0
    let skipCount = 0
    let failCount = 0

    for (const route of allRoutes) {
      try {
        // Determine output path
        let outputPath
        if (route === '/') {
          outputPath = path.join(clientPath, 'index.html')
          // Root index.html already exists from build
          console.log(`  ⏭️  Skipping ${route} (already exists from build)`)
          skipCount++
          continue
        } else if (route === '/blog') {
          outputPath = path.join(clientPath, 'blog', 'index.html')
        } else if (route.startsWith('/blog/')) {
          const slug = route.replace('/blog/', '')
          outputPath = path.join(clientPath, 'blog', `${slug}.html`)
        } else {
          outputPath = path.join(clientPath, `${route}.html`)
        }

        // Ensure directory exists
        const dir = path.dirname(outputPath)
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true })
        }

        console.log(`  📝 Prerendering ${route}...`)

        // Render the app for this route
        const { app, ctx } = await render(route, manifest)
        
        // Render to string
        const { renderToString } = await import('vue/server-renderer')
        const appHtml = await renderToString(app, ctx)

        // Get the preload links for this route
        const preloadLinks = renderPreloadLinks(ctx.modules || [], manifest)

        // Inject the app HTML into the template
        let html = template
          .replace('<!--app-html-->', appHtml)
          .replace('<!--preload-links-->', preloadLinks)

        // Add hydration data script
        const hydrationScript = `<script>window.__INITIAL_STATE__=${JSON.stringify({ route }).replace(/</g, '\\u003c')}</script>`
        html = html.replace('</head>', `${hydrationScript}</head>`)

        // Write the file
        fs.writeFileSync(outputPath, html)
        const size = (fs.statSync(outputPath).size / 1024).toFixed(1)
        console.log(`  ✅ Written ${size} KB to ${path.relative(clientPath, outputPath)}`)
        successCount++

      } catch (error) {
        console.error(`  ❌ Failed to prerender ${route}:`, error.message)
        failCount++
      }
    }

    // Close the Vite server
    await vite.close()

    // Summary
    console.log(`\n✅ Prerendering complete!`)
    console.log(`   - ${successCount} routes rendered successfully`)
    console.log(`   - ${skipCount} routes skipped (already exist)`)
    if (failCount > 0) {
      console.log(`   - ${failCount} routes failed`)
    }
    console.log(`   - ${staticRoutes.length} static routes`)
    console.log(`   - ${articleRoutes.length} article routes`)

    if (failCount > 0) {
      process.exit(1)
    }

  } catch (error) {
    console.error(`\n❌ Prerendering failed:`, error)
    process.exit(1)
  }
}

function renderPreloadLinks(modules, manifest) {
  let links = ''
  const seen = new Set()
  
  modules.forEach((id) => {
    const files = manifest[id]
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file)
          const filename = path.basename(file)
          if (filename.endsWith('.js')) {
            links += `<link rel="modulepreload" crossorigin href="${file}">\n`
          } else if (filename.endsWith('.css')) {
            links += `<link rel="stylesheet" href="${file}">\n`
          }
        }
      })
    }
  })
  
  return links
}

prerender()
