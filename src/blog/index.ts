import matter from 'gray-matter'
import articlesData from '../../articles.json'
import type { BlogPost, FAQItem, HowToData, Citation } from './types'
// Pure slug matchers — single source of truth in slug-match.ts
import {
  extractSlugFromPath,
  basenameStem,
  canonicalizeSlug,
  SLUG_ALIAS_MAP,
  resolvePostModulePath
} from './slug-match'

export type { BlogPost, FAQItem, HowToData, Citation }
export {
  extractSlugFromPath,
  basenameStem,
  canonicalizeSlug,
  SLUG_ALIAS_MAP,
  resolvePostModulePath
}

// Dynamically import all markdown files (client-side only)
let postModules: Record<string, string> | null = null

function getPostModules(): Record<string, string> {
  if (postModules) return postModules

  // @ts-ignore - import.meta.glob is a Vite feature
  const modules = import.meta.glob(['./posts/*.md', './posts/*.mdx'], {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>
  postModules = modules
  return modules
}

// Parse frontmatter and content from markdown using gray-matter
export function parseMarkdown(raw: string): { data: Record<string, any>; content: string } {
  const parsed = matter(raw)
  return { data: parsed.data, content: parsed.content }
}

// Merge a base BlogPost with frontmatter data and markdown content
export function mergePostWithFrontmatter(
  post: BlogPost,
  data: Record<string, any>,
  content: string
): BlogPost {
  const faqItems: FAQItem[] | undefined = data.frequentlyAskedQuestions || data.faq || undefined
  const howTo: HowToData | undefined = data.howTo || undefined
  const citations: Citation[] | undefined = data.citations || undefined

  return {
    ...post,
    excerpt: data.summary || data.excerpt || post.excerpt || '',
    description: data.description || post.metaDescription || '',
    tags: data.tags || [],
    category: data.category || post.category || 'General',
    metaDescription:
      data.metaDescription || data.summary || data.excerpt || data.description || post.metaDescription || '',
    canonicalUrl: data.canonical || data.canonicalUrl || post.canonicalUrl,
    modifiedDate: data.updated_date || data.lastModified || data.modifiedDate || post.modifiedDate,
    lastModified: data.lastModified || data.updated_date || data.modifiedDate || post.modifiedDate,
    ogImage: data.ogImage || data.image || post.ogImage,
    image: data.image || data.ogImage || post.ogImage,
    author: data.author || post.author,
    readingTime: data.readingTime || post.readingTime,
    content,
    faqItems,
    faq: faqItems,
    howTo,
    citations
  }
}

// Get published articles
const publishedArticles = articlesData.articles.filter((a: any) => a.status === 'published')

// Create blog posts list (metadata only - content loaded separately)
export const allBlogPosts: BlogPost[] = publishedArticles
  .map((article: any) => {
    const readingTime = article.word_count ? Math.ceil(article.word_count / 200) : 5

    return {
      title: article.title,
      slug: article.url_slug,
      excerpt: article.meta_description || article.excerpt || '',
      publishDate: article.published_date || '2025-01-01',
      modifiedDate: article.modified_date,
      author: 'Florian Strauf',
      tags: [],
      category: 'General',
      metaDescription: article.meta_description || '',
      metaTitle: article.meta_title,
      ogImage: article.og_image,
      canonicalUrl: article.canonical_url,
      content: '',
      readingTime
    }
  })
  .sort((a: BlogPost, b: BlogPost) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())

// Create a lookup map for quick access
const blogPostMap = new Map(allBlogPosts.map((p: BlogPost) => [p.slug, p]))

// Get blog post by slug (without content)
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPostMap.get(slug)
}

// Load full post content including markdown.
// Fail-closed: if catalog has the slug but no MDX resolves, return undefined
// so BlogPostPage shows "Post not found" instead of an empty metadata shell.
export function loadPostContent(slug: string): BlogPost | undefined {
  const post = getBlogPostBySlug(slug)
  if (!post) return undefined

  const modules = getPostModules()
  const matchingPath = resolvePostModulePath(slug, Object.keys(modules))

  if (!matchingPath) {
    return undefined
  }

  const raw = modules[matchingPath]
  const { data, content } = parseMarkdown(raw)
  return mergePostWithFrontmatter(post, data, content)
}

// Get posts by category
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return allBlogPosts.filter(
    (post: BlogPost) => post.category.toLowerCase() === category.toLowerCase()
  )
}

// Get posts by tag
export function getBlogPostsByTag(tag: string): BlogPost[] {
  return allBlogPosts.filter((post: BlogPost) =>
    post.tags.some((postTag: string) => postTag.toLowerCase() === tag.toLowerCase())
  )
}

// Get all unique categories
export function getAllCategories(): string[] {
  const categories = allBlogPosts.map((post: BlogPost) => post.category)
  return [...new Set(categories)].sort()
}

// Get all unique tags
export function getAllTags(): string[] {
  const tags = allBlogPosts.flatMap((post: BlogPost) => post.tags)
  return [...new Set(tags)].sort()
}

// Get recent posts (for homepage, etc.)
export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  return allBlogPosts.slice(0, limit)
}
