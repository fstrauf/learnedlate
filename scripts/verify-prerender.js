import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distPath = path.join(__dirname, '..', 'dist')
const articlesPath = path.join(__dirname, '..', 'articles.json')

// Check if dist folder exists
if (!fs.existsSync(distPath)) {
  console.error('❌ Dist folder not found. Run "npm run build" first.')
  process.exit(1)
}

const articlesData = JSON.parse(fs.readFileSync(articlesPath, 'utf8'))
const articles = articlesData.articles.filter(a => a.status === 'published')

console.log('Verifying prerendered files...\n')

let errors = []
let success = []

// Check static pages
const staticPages = ['index.html']
staticPages.forEach(page => {
  const fullPath = path.join(distPath, page)
  if (!fs.existsSync(fullPath)) {
    errors.push(`Missing: ${page}`)
  } else {
    success.push(`✅ ${page}`)
  }
})

// Check blog index
const blogIndexPath = path.join(distPath, 'blog', 'index.html')
if (!fs.existsSync(blogIndexPath)) {
  // Check if /blog.html exists instead (prerender might create this)
  const blogHtmlPath = path.join(distPath, 'blog.html')
  if (fs.existsSync(blogHtmlPath)) {
    success.push('✅ blog.html')
  } else {
    errors.push('Missing: blog/index.html or blog.html')
  }
} else {
  success.push('✅ blog/index.html')
}

// Check blog posts
articles.forEach(article => {
  const blogPath = path.join(distPath, 'blog', `${article.url_slug}.html`)
  if (!fs.existsSync(blogPath)) {
    errors.push(`Missing blog post: blog/${article.url_slug}.html`)
  }
})

// Summary
console.log(`\n📊 Verification Summary:`)
console.log(`   - Total published articles: ${articles.length}`)
console.log(`   - Static pages checked: ${staticPages.length + 1}`)

if (errors.length > 0) {
  console.error(`\n❌ Prerender verification FAILED:`)
  console.error(`   - ${errors.length} errors found`)
  errors.slice(0, 10).forEach(e => console.error(`      ❌ ${e}`))
  if (errors.length > 10) {
    console.error(`      ... and ${errors.length - 10} more`)
  }
  process.exit(1)
} else {
  console.log(`\n✅ All files prerendered successfully!`)
  console.log(`   - ${articles.length} blog posts`)
  console.log(`   - ${staticPages.length + 1} static pages`)
  console.log('\n✅ Prerender verification PASSED')
}
