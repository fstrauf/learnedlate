export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  publishDate: string
  author: string
  tags: string[]
  category: string
  metaDescription: string
  content?: string
  readingTime?: number
}
