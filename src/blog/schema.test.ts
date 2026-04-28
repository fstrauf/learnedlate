import { describe, it, expect } from 'vitest'
import { buildArticleSchema } from './schema'
import type { BlogPost } from './types'

describe('buildArticleSchema', () => {
  const basePost: BlogPost = {
    title: 'Test Article',
    slug: 'test-article',
    excerpt: 'A test article excerpt.',
    publishDate: '2025-01-01',
    author: 'Test Author',
    tags: ['tag1', 'tag2'],
    category: 'Testing',
    metaDescription: 'Meta description',
    readingTime: 5,
    content: 'This is the article content.'
  }

  it('returns Article and BreadcrumbList schemas', () => {
    const schemas = buildArticleSchema(basePost, 'Description')
    expect(schemas).toHaveLength(2)
    expect(schemas[0]).toMatchObject({ '@type': 'Article' })
    expect(schemas[1]).toMatchObject({ '@type': 'BreadcrumbList' })
  })

  it('uses canonicalUrl when provided', () => {
    const post = { ...basePost, canonicalUrl: 'https://example.com/custom' }
    const schemas = buildArticleSchema(post, 'Description')
    const article = schemas[0] as any
    expect(article['@id']).toBe('https://example.com/custom#article')
    expect(article.mainEntityOfPage['@id']).toBe('https://example.com/custom')

    const breadcrumb = schemas[1] as any
    const lastItem = breadcrumb.itemListElement[breadcrumb.itemListElement.length - 1]
    expect(lastItem.item).toBe('https://example.com/custom')
  })

  it('falls back to slug-based URL when no canonical', () => {
    const schemas = buildArticleSchema(basePost, 'Description')
    const article = schemas[0] as any
    expect(article['@id']).toBe('https://www.learnedlate.com/blog/test-article#article')
    expect(article.mainEntityOfPage['@id']).toBe('https://www.learnedlate.com/blog/test-article')
  })

  it('uses absolute image URL when relative image is provided', () => {
    const post = { ...basePost, image: '/custom.png' }
    const schemas = buildArticleSchema(post, 'Description')
    const article = schemas[0] as any
    expect(article.image).toBe('https://www.learnedlate.com/custom.png')
  })

  it('preserves absolute image URL when provided', () => {
    const post = { ...basePost, ogImage: 'https://cdn.example.com/img.png' }
    const schemas = buildArticleSchema(post, 'Description')
    const article = schemas[0] as any
    expect(article.image).toBe('https://cdn.example.com/img.png')
  })

  it('uses modifiedDate when available', () => {
    const post = { ...basePost, modifiedDate: '2026-04-29' }
    const schemas = buildArticleSchema(post, 'Description')
    const article = schemas[0] as any
    expect(article.dateModified).toBe('2026-04-29')
  })

  it('falls back to publishDate when modifiedDate is missing', () => {
    const schemas = buildArticleSchema(basePost, 'Description')
    const article = schemas[0] as any
    expect(article.dateModified).toBe('2025-01-01')
  })

  it('includes author name from post', () => {
    const schemas = buildArticleSchema(basePost, 'Description')
    const article = schemas[0] as any
    expect(article.author.name).toBe('Test Author')
  })

  it('includes keywords from tags', () => {
    const schemas = buildArticleSchema(basePost, 'Description')
    const article = schemas[0] as any
    expect(article.keywords).toBe('tag1, tag2')
  })
})
