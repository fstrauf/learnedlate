import { describe, it, expect } from 'vitest'
import { buildPostDescription } from './utils'
import type { BlogPost } from './types'

describe('buildPostDescription', () => {
  it('returns excerpt when available', () => {
    const post: BlogPost = {
      title: 'Test',
      slug: 'test',
      excerpt: 'This is the excerpt.',
      publishDate: '2025-01-01',
      author: 'Author',
      tags: [],
      category: 'General',
      metaDescription: 'Meta'
    }
    expect(buildPostDescription(post)).toBe('This is the excerpt.')
  })

  it('generates description from content when excerpt is empty', () => {
    const post: BlogPost = {
      title: 'Test',
      slug: 'test',
      excerpt: '',
      publishDate: '2025-01-01',
      author: 'Author',
      tags: [],
      category: 'General',
      metaDescription: 'Meta',
      content: '# Heading\nThis is the content that should become the description.'
    }
    expect(buildPostDescription(post)).toContain('This is the content')
  })

  it('truncates long content to 160 chars', () => {
    const longContent = 'a '.repeat(200)
    const post: BlogPost = {
      title: 'Test',
      slug: 'test',
      excerpt: '',
      publishDate: '2025-01-01',
      author: 'Author',
      tags: [],
      category: 'General',
      metaDescription: 'Meta',
      content: longContent
    }
    const result = buildPostDescription(post)
    expect(result.length).toBeLessThanOrEqual(160)
    expect(result.endsWith('...')).toBe(true)
  })

  it('strips markdown syntax from content', () => {
    const post: BlogPost = {
      title: 'Test',
      slug: 'test',
      excerpt: '',
      publishDate: '2025-01-01',
      author: 'Author',
      tags: [],
      category: 'General',
      metaDescription: 'Meta',
      content: '**Bold** and *italic* and `code`'
    }
    const result = buildPostDescription(post)
    expect(result).not.toContain('**')
    expect(result).not.toContain('*')
    expect(result).not.toContain('`')
  })
})
