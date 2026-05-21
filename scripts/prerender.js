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
    let failCount = 0

    for (const route of allRoutes) {
      try {
        // Determine output path
        // Use folder structure with index.html for clean URLs (no .html extension)
        let outputPath
        if (route === '/') {
          outputPath = path.join(clientPath, 'index.html')
        } else if (route === '/blog') {
          outputPath = path.join(clientPath, 'blog', 'index.html')
        } else if (route.startsWith('/blog/')) {
          const slug = route.replace('/blog/', '')
          outputPath = path.join(clientPath, 'blog', `${slug}.html`)
        } else {
          // Create folder structure: /route/index.html for clean URLs
          // This matches the router paths (without trailing slash) 
          // and avoids Vercel's trailing slash redirects
          const routeName = route.replace(/^\//, '')
          outputPath = path.join(clientPath, routeName, 'index.html')
        }

        // Ensure directory exists
        const dir = path.dirname(outputPath)
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true })
        }

        console.log(`  📝 Prerendering ${route}...`)

        // Render the app for this route
        const { appHtml, headPayload, ctx } = await render(route, manifest)

        // Get the preload links for this route
        const preloadLinks = renderPreloadLinks(ctx.modules || [], manifest)

        // Inject the app HTML and head tags into the template
        let html = template

        // Replace the <div id="app">...</div> block with SSR-rendered appHtml
        // The client build template contains the home page content; we replace it entirely
        const appStart = html.indexOf('<div id="app">')
        const noscriptStart = html.indexOf('<noscript>')
        if (appStart !== -1 && noscriptStart !== -1) {
          html = html.substring(0, appStart) + appHtml + html.substring(noscriptStart)
        } else if (appStart !== -1) {
          // Fallback: replace from <div id="app"> to the closing </div> before </body>
          const bodyEnd = html.lastIndexOf('</body>')
          const appEnd = html.lastIndexOf('</div>', bodyEnd)
          if (appEnd !== -1) {
            html = html.substring(0, appStart) + appHtml + html.substring(appEnd + 6)
          }
        }

        // Inject preload links before </head>
        if (preloadLinks) {
          html = html.replace('</head>', `${preloadLinks}</head>`)
        }

        // Inject head tags - replace existing SEO tags with SSR-rendered ones
        if (headPayload.headTags) {
          // Remove existing SEO meta tags from template (to avoid duplicates)
          html = html.replace(/<title>.*?<\/title>/, '')
          html = html.replace(/<meta name="title"[^>]*>/, '')
          html = html.replace(/<meta name="description"[^>]*>/, '')
          html = html.replace(/<meta property="og:title"[^>]*>/g, '')
          html = html.replace(/<meta property="og:description"[^>]*>/g, '')
          html = html.replace(/<meta property="og:url"[^>]*>/, '')
          html = html.replace(/<meta property="twitter:title"[^>]*>/, '')
          html = html.replace(/<meta property="twitter:description"[^>]*>/, '')
          html = html.replace(/<link rel="canonical"[^>]*>/, '')
          
          // Insert SSR head tags before closing head
          html = html.replace('</head>', `    ${headPayload.headTags}\n  </head>`)
        }

        // Add hydration data script
        const hydrationScript = `<script>window.__INITIAL_STATE__=${JSON.stringify({ route }).replace(/</g, '\\u003c')}</script>`
        html = html.replace('</head>', `${hydrationScript}</head>`)

        // Add Cloudflare email_off comments to prevent email obfuscation
        // This prevents Cloudflare from rewriting mailto: links to /cdn-cgi/l/email-protection
        html = addCloudflareEmailOffComments(html)

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

/**
 * Add Cloudflare email_off comments around email addresses to prevent obfuscation.
 * Cloudflare's Email Address Obfuscation feature rewrites email addresses to use
 * /cdn-cgi/l/email-protection endpoint, which causes 404 errors on Vercel.
 * The <!--email_off--><!--/email_off--> comments tell Cloudflare to skip obfuscation.
 */
function addCloudflareEmailOffComments(html) {
  const protectedRegions = []
  let counter = 0

  // Protect <script> blocks (JSON-LD, hydration data, etc.)
  // so we don't inject HTML comments into valid JavaScript/JSON
  html = html.replace(/<script\b[\s\S]*?<\/script>/gi, (match) => {
    const placeholder = `__SCRIPT_PLACEHOLDER_${counter++}__`
    protectedRegions.push({ placeholder, content: match })
    return placeholder
  })

  // Protect existing email_off regions so we don't double-wrap
  html = html.replace(/<!--email_off-->[\s\S]*?<!--\/email_off-->/gi, (match) => {
    const placeholder = `__EMAILOFF_PLACEHOLDER_${counter++}__`
    protectedRegions.push({ placeholder, content: match })
    return placeholder
  })

  // Wrap remaining email addresses with Cloudflare email_off comments
  const emailPattern = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g
  html = html.replace(emailPattern, (match, email, offset) => {
    const before = html.slice(Math.max(0, offset - 40), offset)
    const after = html.slice(offset + match.length, offset + match.length + 10)

    // Skip if inside a mailto: URL (href attribute or plain text)
    if (before.includes('mailto:')) {
      return match
    }

    // Skip if inside an HTML tag attribute value
    // (e.g. href="...", data-email="...", etc.)
    const lastOpen = html.lastIndexOf('<', offset)
    const lastClose = html.lastIndexOf('>', offset)
    if (lastOpen > lastClose) {
      return match
    }

    // Skip if followed immediately by a path separator
    // (part of a URL path, not a standalone email)
    if (after.startsWith('/')) {
      return match
    }

    // Wrap with email_off comments
    return `<!--email_off-->${email}<!--/email_off-->`
  })

  // Restore protected regions in reverse order
  for (const { placeholder, content } of protectedRegions.reverse()) {
    html = html.replace(placeholder, () => content)
  }

  return html
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
