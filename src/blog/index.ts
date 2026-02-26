import articlesData from '../../articles.json'
import type { BlogPost } from './types'
export type { BlogPost }

// Dynamically import all markdown files (client-side only)
// This won't work during SSR, but that's OK - we load content client-side
let postModules: Record<string, string> | null = null

function getPostModules(): Record<string, string> {
  if (postModules) return postModules
  
  // This only runs on client
  if (typeof window !== 'undefined') {
    // @ts-ignore - import.meta.glob is a Vite feature
    const modules = import.meta.glob(['./posts/*.md', './posts/*.mdx'], { 
      query: '?raw', 
      import: 'default',
      eager: true 
    }) as Record<string, string>
    postModules = modules
    return modules
  }
  
  return {}
}

// Parse frontmatter and content from markdown
export function parseMarkdown(raw: string): { data: Record<string, any>, content: string } {
  const lines = raw.split('\n')
  const frontmatterEnd = lines.findIndex((line, index) => index > 0 && line.trim() === '---')
  
  if (frontmatterEnd === -1) {
    return { data: {}, content: raw }
  }

  const frontmatterLines = lines.slice(1, frontmatterEnd)
  const content = lines.slice(frontmatterEnd + 1).join('\n').trim()

  const data: Record<string, any> = {}
  
  frontmatterLines.forEach(line => {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length > 0) {
      let value = valueParts.join(':').trim()
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      
      // Parse arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        const arrayValue = value.slice(1, -1).split(',').map(item => 
          item.trim().replace(/^["']|["']$/g, '')
        )
        data[key.trim()] = arrayValue
      } else {
        data[key.trim()] = value
      }
    }
  })

  return { data, content }
}

// Extract slug from file path
function extractSlugFromPath(filePath: string): string {
  const base = filePath.split('/').pop()?.replace(/\.(md|mdx)$/i, '') || ''
  
  // Check for date prefix pattern (YYYY-MM-DD-slug)
  const dateMatch = base.match(/^\d{4}-\d{2}-\d{2}-(.+)$/)
  if (dateMatch) {
    return dateMatch[1]
  }
  
  return base
}

// Get published articles
const publishedArticles = articlesData.articles.filter(a => a.status === 'published')

// Create blog posts list (metadata only - content loaded separately)
export const allBlogPosts: BlogPost[] = publishedArticles
  .map(article => {
    // Calculate reading time (average 200 words per minute)
    const readingTime = article.word_count ? Math.ceil(article.word_count / 200) : 5
    
    return {
      title: article.title,
      slug: article.url_slug,
      excerpt: '', // Loaded with content
      publishDate: article.published_date || '2025-01-01',
      author: 'Florian Strauf',
      tags: [], // Loaded with content
      category: 'General',
      metaDescription: '',
      content: '', // Loaded separately
      readingTime
    }
  })
  .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())

// Create a lookup map for quick access
const blogPostMap = new Map(allBlogPosts.map(p => [p.slug, p]))

// Get blog post by slug (without content)
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPostMap.get(slug)
}

// Load full post content including markdown
export function loadPostContent(slug: string): BlogPost | undefined {
  const post = getBlogPostBySlug(slug)
  if (!post) return undefined
  
  // Try to find the markdown file
  const modules = getPostModules()
  const matchingPath = Object.keys(modules).find(path => {
    const pathSlug = extractSlugFromPath(path)
    return pathSlug === slug
  })
  
  if (matchingPath) {
    const raw = modules[matchingPath]
    const { data, content } = parseMarkdown(raw)
    
    return {
      ...post,
      excerpt: data.summary || data.excerpt || '',
      tags: data.tags || [],
      category: data.category || 'General',
      metaDescription: data.metaDescription || data.summary || data.excerpt || '',
      content
    }
  }
  
  return post
}

// Get posts by category
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return allBlogPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

// Get posts by tag
export function getBlogPostsByTag(tag: string): BlogPost[] {
  return allBlogPosts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  )
}

// Get all unique categories
export function getAllCategories(): string[] {
  const categories = allBlogPosts.map(post => post.category)
  return [...new Set(categories)].sort()
}

// Get all unique tags
export function getAllTags(): string[] {
  const tags = allBlogPosts.flatMap(post => post.tags)
  return [...new Set(tags)].sort()
}

// Get recent posts (for homepage, etc.)
export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  return allBlogPosts.slice(0, limit)
}
