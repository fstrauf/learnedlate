import matter from 'gray-matter'
import articlesData from '../../articles.json'
import type { BlogPost, FAQItem, HowToData, Citation } from './types'
export type { BlogPost, FAQItem, HowToData, Citation }

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

// Extract slug from file path (strip date / numeric prefixes; keep underscores)
export function extractSlugFromPath(filePath: string): string {
  const base = filePath.split('/').pop()?.replace(/\.(md|mdx)$/i, '') || ''

  // Remove date prefix (YYYY-MM-DD-slug)
  const dateMatch = base.match(/^\d{4}-\d{2}-\d{2}-(.+)$/)
  if (dateMatch) {
    return dateMatch[1]
  }

  // Remove numeric prefix (046_slug)
  const numMatch = base.match(/^\d+_(.+)$/)
  if (numMatch) {
    return numMatch[1]
  }

  return base
}

/** Basename stem without extension (no prefix stripping). */
export function basenameStem(filePath: string): string {
  return filePath.split('/').pop()?.replace(/\.(md|mdx)$/i, '') || ''
}

/**
 * Canonicalize a slug for comparison:
 * strip YYYY-MM-DD-, strip leading N_, _→-, lowercase.
 */
export function canonicalizeSlug(s: string): string {
  let out = s.trim().toLowerCase()
  const dateMatch = out.match(/^\d{4}-\d{2}-\d{2}-(.+)$/)
  if (dateMatch) out = dateMatch[1]
  const numMatch = out.match(/^\d+_(.+)$/)
  if (numMatch) out = numMatch[1]
  return out.replace(/_/g, '-')
}

// NOTE: public url_slug is the route key; MDX may use date/N_ prefixes and
// underscores — matching must canonicalize; do not "fix" by rewriting live URLs here.
/** Explicit url_slug → MDX file stem aliases (only these 6). */
export const SLUG_ALIAS_MAP: Record<string, string> = {
  'crm-software-nz-guide-2025': 'crm_software_nz_blog_post',
  technical_co_founder_vs_fractional_cto_which_is_right_for_your_startup:
    '054_technical_co_founder_vs_fractional_cto_which_is_right_for_your_startup_2026',
  how_to_hire_developers_for_your_startup_a_non_technical_founders_complete_guide:
    '055_how_to_hire_developers_for_your_startup_a_non_technical_founders_complete_guide_2026',
  when_to_hire_your_first_developer_a_startup_founders_timing_readiness_guide:
    '058_when_to_hire_your_first_developer_a_startup_founders_timing_readiness_guide_2026',
  'cloud-migration-checklist-small-business-2025-nz':
    '068_cloud_migration_checklist_for_small_businesses_2025_nz_edition',
  'part-time-cto-hourly-rates-nz-2026-guide':
    '073_part_time_cto_hourly_rates_in_new_zealand_2026_market_guide_for_startups'
}

/**
 * Resolve a public url_slug to an MDX module path.
 * 1. Exact basename stem === slug (fixes date-/numeric-prefixed url_slugs)
 * 2. Exact extractSlugFromPath(path) === slug
 * 3. Unique canonicalize(extract|basename) === canonicalize(slug)
 * 4. Explicit alias map → basename stem
 * Prefer exact basename when multiple candidates.
 */
export function resolvePostModulePath(
  slug: string,
  modulePaths: string[]
): string | undefined {
  if (!slug || modulePaths.length === 0) return undefined

  // 1. Exact basename stem
  const exactBasename = modulePaths.filter((p) => basenameStem(p) === slug)
  if (exactBasename.length === 1) return exactBasename[0]
  if (exactBasename.length > 1) return exactBasename[0]

  // 2. Exact extractSlugFromPath
  const exactExtract = modulePaths.filter((p) => extractSlugFromPath(p) === slug)
  if (exactExtract.length === 1) return exactExtract[0]
  if (exactExtract.length > 1) {
    // Prefer exact basename among these if any
    const prefer = exactExtract.find((p) => basenameStem(p) === slug)
    return prefer || exactExtract[0]
  }

  // 3. Canonicalize match (unique)
  const canonSlug = canonicalizeSlug(slug)
  const canonMatches = modulePaths.filter((p) => {
    const stem = basenameStem(p)
    return (
      canonicalizeSlug(stem) === canonSlug ||
      canonicalizeSlug(extractSlugFromPath(p)) === canonSlug
    )
  })
  if (canonMatches.length === 1) return canonMatches[0]
  if (canonMatches.length > 1) {
    const prefer = canonMatches.find((p) => basenameStem(p) === slug)
    return prefer || canonMatches[0]
  }

  // 4. Explicit alias map
  const aliasedStem = SLUG_ALIAS_MAP[slug]
  if (aliasedStem) {
    const aliasMatch = modulePaths.find((p) => basenameStem(p) === aliasedStem)
    if (aliasMatch) return aliasMatch
  }

  return undefined
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

// Load full post content including markdown
export function loadPostContent(slug: string): BlogPost | undefined {
  const post = getBlogPostBySlug(slug)
  if (!post) return undefined

  const modules = getPostModules()
  const matchingPath = resolvePostModulePath(slug, Object.keys(modules))

  if (matchingPath) {
    const raw = modules[matchingPath]
    const { data, content } = parseMarkdown(raw)
    return mergePostWithFrontmatter(post, data, content)
  }

  return post
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
