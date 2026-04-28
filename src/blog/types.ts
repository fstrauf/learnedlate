export interface FAQItem {
  question: string
  answer: string
}

export interface HowToStep {
  name: string
  text: string
  url?: string
}

export interface HowToData {
  name?: string
  description?: string
  steps?: HowToStep[]
}

export interface Citation {
  source: string
  url?: string
  date?: string
}

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  description?: string
  publishDate: string
  modifiedDate?: string
  lastModified?: string
  author: string
  tags: string[]
  category: string
  metaDescription: string
  metaTitle?: string
  ogImage?: string
  image?: string
  canonicalUrl?: string
  content?: string
  readingTime?: number
  faqItems?: FAQItem[]
  faq?: FAQItem[]
  howTo?: HowToData
  citations?: Citation[]
}
