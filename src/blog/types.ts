export interface FAQItem {
  question: string
  answer: string
}

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  publishDate: string
  modifiedDate?: string
  author: string
  tags: string[]
  category: string
  metaDescription: string
  metaTitle?: string
  ogImage?: string
  canonicalUrl?: string
  content?: string
  readingTime?: number
  faqItems?: FAQItem[]
}
