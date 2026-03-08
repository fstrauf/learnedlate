#!/usr/bin/env node
/**
 * Build API functions for Vercel deployment
 * Compiles TypeScript API files to JavaScript in the correct output format
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { build } from 'esbuild'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const apiDir = path.join(__dirname, '..', 'api')
const outputDir = path.join(__dirname, '..', '.vercel', 'output')
const functionsDir = path.join(outputDir, 'functions', 'api')

async function buildApi() {
  console.log('🔧 Building API functions...\n')

  // Ensure output directories exist
  fs.mkdirSync(functionsDir, { recursive: true })

  // Get all TypeScript files in api directory
  const apiFiles = fs.readdirSync(apiDir)
    .filter(f => f.endsWith('.ts'))
    .map(f => ({
      name: f.replace('.ts', ''),
      input: path.join(apiDir, f),
      output: path.join(functionsDir, `${f.replace('.ts', '.func')}`)
    }))

  for (const api of apiFiles) {
    try {
      // Create function directory
      fs.mkdirSync(api.output, { recursive: true })

      // Build with esbuild
      await build({
        entryPoints: [api.input],
        bundle: true,
        platform: 'node',
        target: 'node18',
        outfile: path.join(api.output, 'index.js'),
        format: 'cjs',
        external: ['@vercel/node'],
      })

      // Create .vc-config.json for each function
      const vcConfig = {
        runtime: 'nodejs18.x',
        handler: 'index.js',
        launcherType: 'Nodejs',
        shouldAddHelpers: true
      }
      fs.writeFileSync(
        path.join(api.output, '.vc-config.json'),
        JSON.stringify(vcConfig, null, 2)
      )

      console.log(`  ✅ Built api/${api.name}`)
    } catch (error) {
      console.error(`  ❌ Failed to build api/${api.name}:`, error.message)
      process.exit(1)
    }
  }

  // Create config.json for Vercel
  const config = {
    version: 3,
    routes: [
      { handle: 'filesystem' },
      { src: '/api/(.*)', dest: '/api/$1' },
      { src: '/blog/(.*)', dest: '/blog/$1.html' },
      { src: '/(.*)', dest: '/index.html' }
    ]
  }
  fs.writeFileSync(
    path.join(outputDir, 'config.json'),
    JSON.stringify(config, null, 2)
  )

  // Copy static files to Vercel output
  const staticDir = path.join(__dirname, '..', 'dist', 'client')
  const outputStaticDir = path.join(outputDir, 'static')
  
  if (fs.existsSync(staticDir)) {
    console.log('\n📦 Copying static files...')
    copyDir(staticDir, outputStaticDir)
    console.log(`  ✅ Static files copied`)
  }

  console.log(`\n✅ Build complete!`)
  console.log(`   - ${apiFiles.length} API functions compiled`)
  console.log(`   - Static files ready for deployment`)
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  const entries = fs.readdirSync(src, { withFileTypes: true })
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

buildApi()
