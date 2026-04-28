import { describe, it, expect } from 'vitest'
import { parseMarkdown, mergePostWithFrontmatter } from './index'
import type { BlogPost } from './types'

describe('parseMarkdown', () => {
  it('parses basic frontmatter', () => {
    const raw = `---
title: "Hello World"
description: "A test post"
date: "2026-04-29"
---
# Content
This is the body.
`
    const result = parseMarkdown(raw)
    expect(result.data.title).toBe('Hello World')
    expect(result.data.description).toBe('A test post')
    expect(result.data.date).toBe('2026-04-29')
    expect(result.content.trim()).toBe('# Content\nThis is the body.')
  })

  it('preserves nested FAQ arrays', () => {
    const raw = `---
title: "FAQ Post"
faq:
  - question: "What is this?"
    answer: "This is a test."
  - question: "Why?"
    answer: "Because testing matters."
---
Content here.
`
    const result = parseMarkdown(raw)
    expect(result.data.faq).toHaveLength(2)
    expect(result.data.faq[0].question).toBe('What is this?')
    expect(result.data.faq[0].answer).toBe('This is a test.')
    expect(result.data.faq[1].question).toBe('Why?')
  })

  it('preserves nested howTo objects with steps', () => {
    const raw = `---
title: "HowTo Post"
howTo:
  name: "How to test"
  description: "Testing guide"
  steps:
    - name: "Step one"
      text: "Do the first thing"
    - name: "Step two"
      text: "Do the second thing"
---
Content here.
`
    const result = parseMarkdown(raw)
    expect(result.data.howTo.name).toBe('How to test')
    expect(result.data.howTo.steps).toHaveLength(2)
    expect(result.data.howTo.steps[0].name).toBe('Step one')
    expect(result.data.howTo.steps[0].text).toBe('Do the first thing')
  })

  it('preserves citations array', () => {
    const raw = `---
title: "Cited Post"
citations:
  - source: "Source A"
    url: "https://example.com/a"
    date: "2026-04-29"
  - source: "Source B"
---
Content here.
`
    const result = parseMarkdown(raw)
    expect(result.data.citations).toHaveLength(2)
    expect(result.data.citations[0].source).toBe('Source A')
    expect(result.data.citations[0].url).toBe('https://example.com/a')
    expect(result.data.citations[1].source).toBe('Source B')
  })

  it('handles frequentlyAskedQuestions alias', () => {
    const raw = `---
title: "Alias Post"
frequentlyAskedQuestions:
  - question: "Q1"
    answer: "A1"
---
Content here.
`
    const result = parseMarkdown(raw)
    expect(result.data.frequentlyAskedQuestions).toHaveLength(1)
    expect(result.data.frequentlyAskedQuestions[0].question).toBe('Q1')
  })

  it('handles content without frontmatter', () => {
    const raw = '# Just content\nNo frontmatter here.'
    const result = parseMarkdown(raw)
    expect(result.data).toEqual({})
    expect(result.content).toBe(raw)
  })
})

describe('mergePostWithFrontmatter', () => {
  const basePost: BlogPost = {
    title: 'Base Title',
    slug: 'base-slug',
    excerpt: 'Base excerpt',
    publishDate: '2025-01-01',
    author: 'Base Author',
    tags: ['base'],
    category: 'Base',
    metaDescription: 'Base meta',
    readingTime: 5
  }

  it('maps canonicalUrl from canonical alias', () => {
    const result = mergePostWithFrontmatter(basePost, { canonical: 'https://example.com/canonical' }, '')
    expect(result.canonicalUrl).toBe('https://example.com/canonical')
  })

  it('maps modifiedDate from updated_date alias', () => {
    const result = mergePostWithFrontmatter(basePost, { updated_date: '2026-04-29' }, '')
    expect(result.modifiedDate).toBe('2026-04-29')
  })

  it('maps image from ogImage alias', () => {
    const result = mergePostWithFrontmatter(basePost, { ogImage: '/img.png' }, '')
    expect(result.image).toBe('/img.png')
  })

  it('preserves nested FAQ as both faqItems and faq', () => {
    const faq = [{ question: 'Q?', answer: 'A.' }]
    const result = mergePostWithFrontmatter(basePost, { faq }, '')
    expect(result.faqItems).toEqual(faq)
    expect(result.faq).toEqual(faq)
  })

  it('preserves nested howTo', () => {
    const howTo = { name: 'How to X', steps: [{ name: 'Step 1', text: 'Do it' }] }
    const result = mergePostWithFrontmatter(basePost, { howTo }, '')
    expect(result.howTo).toEqual(howTo)
  })

  it('preserves citations', () => {
    const citations = [{ source: 'Source 1', url: 'https://example.com' }]
    const result = mergePostWithFrontmatter(basePost, { citations }, '')
    expect(result.citations).toEqual(citations)
  })
})
