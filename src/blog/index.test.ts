import { describe, it, expect } from 'vitest'
import {
  parseMarkdown,
  mergePostWithFrontmatter,
  extractSlugFromPath,
  canonicalizeSlug,
  resolvePostModulePath,
  basenameStem,
  SLUG_ALIAS_MAP
} from './index'
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

describe('extractSlugFromPath', () => {
  it('strips date prefix YYYY-MM-DD-', () => {
    expect(extractSlugFromPath('./posts/2025-01-08-ai-feasibility-sprint.mdx')).toBe(
      'ai-feasibility-sprint'
    )
  })

  it('strips numeric N_ prefix', () => {
    expect(
      extractSlugFromPath('./posts/046_how_much_does_a_fractional_cto_cost_in_2025_complete_pricing_guide.mdx')
    ).toBe('how_much_does_a_fractional_cto_cost_in_2025_complete_pricing_guide')
  })

  it('returns plain stem unchanged', () => {
    expect(extractSlugFromPath('./posts/cto-responsibilities-startup.mdx')).toBe(
      'cto-responsibilities-startup'
    )
  })

  it('handles basename only (no path)', () => {
    expect(extractSlugFromPath('2025-06-22-what-is-fractional-cto-complete-guide.md')).toBe(
      'what-is-fractional-cto-complete-guide'
    )
  })
})

describe('canonicalizeSlug', () => {
  it('strips date prefix', () => {
    expect(canonicalizeSlug('2025-01-08-ai-feasibility-sprint')).toBe('ai-feasibility-sprint')
  })

  it('strips numeric N_ prefix', () => {
    expect(canonicalizeSlug('046_how_much_does_a_fractional_cto_cost')).toBe(
      'how-much-does-a-fractional-cto-cost'
    )
  })

  it('converts underscores to hyphens', () => {
    expect(canonicalizeSlug('digital_marketing_nz_guide')).toBe('digital-marketing-nz-guide')
  })

  it('lowercases', () => {
    expect(canonicalizeSlug('CRM-Software-NZ')).toBe('crm-software-nz')
  })

  it('combines strip + underscore→hyphen', () => {
    expect(
      canonicalizeSlug('054_technical_co_founder_vs_fractional_cto_which_is_right_for_your_startup_2026')
    ).toBe('technical-co-founder-vs-fractional-cto-which-is-right-for-your-startup-2026')
  })
})

describe('basenameStem', () => {
  it('returns stem without extension', () => {
    expect(basenameStem('./posts/crm_software_nz_blog_post.mdx')).toBe('crm_software_nz_blog_post')
  })
})

describe('resolvePostModulePath', () => {
  const paths = [
    './posts/2025-01-08-ai-feasibility-sprint.mdx',
    './posts/046_how_much_does_a_fractional_cto_cost_in_2025_complete_pricing_guide.mdx',
    './posts/digital_marketing_nz_guide.mdx',
    './posts/cto-responsibilities-startup.mdx',
    './posts/crm_software_nz_blog_post.mdx',
    './posts/054_technical_co_founder_vs_fractional_cto_which_is_right_for_your_startup_2026.mdx',
    './posts/055_how_to_hire_developers_for_your_startup_a_non_technical_founders_complete_guide_2026.mdx',
    './posts/058_when_to_hire_your_first_developer_a_startup_founders_timing_readiness_guide_2026.mdx',
    './posts/068_cloud_migration_checklist_for_small_businesses_2025_nz_edition.mdx',
    './posts/073_part_time_cto_hourly_rates_in_new_zealand_2026_market_guide_for_startups.mdx'
  ]

  it('exact basename match for date-prefixed url_slug', () => {
    const result = resolvePostModulePath('2025-01-08-ai-feasibility-sprint', paths)
    expect(result).toBe('./posts/2025-01-08-ai-feasibility-sprint.mdx')
  })

  it('exact basename match for numeric-prefixed url_slug', () => {
    // when url_slug equals full stem including 046_
    const withNumericSlug = [
      ...paths,
      './posts/091_ai_in_automation.mdx'
    ]
    const result = resolvePostModulePath('091_ai_in_automation', withNumericSlug)
    expect(result).toBe('./posts/091_ai_in_automation.mdx')
  })

  it('extractSlugFromPath match (stripped file prefix vs plain url_slug)', () => {
    const result = resolvePostModulePath(
      'how_much_does_a_fractional_cto_cost_in_2025_complete_pricing_guide',
      paths
    )
    expect(result).toBe(
      './posts/046_how_much_does_a_fractional_cto_cost_in_2025_complete_pricing_guide.mdx'
    )
  })

  it('canonicalizes underscore vs hyphen', () => {
    // url_slug with hyphens matching file with underscores after canonicalize
    const result = resolvePostModulePath('digital-marketing-nz-guide', paths)
    expect(result).toBe('./posts/digital_marketing_nz_guide.mdx')
  })

  it('resolves alias: crm-software-nz-guide-2025', () => {
    const result = resolvePostModulePath('crm-software-nz-guide-2025', paths)
    expect(result).toBe('./posts/crm_software_nz_blog_post.mdx')
  })

  it('resolves alias: technical co-founder vs fractional CTO', () => {
    const result = resolvePostModulePath(
      'technical_co_founder_vs_fractional_cto_which_is_right_for_your_startup',
      paths
    )
    expect(result).toBe(
      './posts/054_technical_co_founder_vs_fractional_cto_which_is_right_for_your_startup_2026.mdx'
    )
  })

  it('resolves remaining fixed aliases', () => {
    expect(
      resolvePostModulePath(
        'how_to_hire_developers_for_your_startup_a_non_technical_founders_complete_guide',
        paths
      )
    ).toContain('055_how_to_hire_developers')
    expect(
      resolvePostModulePath(
        'when_to_hire_your_first_developer_a_startup_founders_timing_readiness_guide',
        paths
      )
    ).toContain('058_when_to_hire_your_first_developer')
    expect(
      resolvePostModulePath('cloud-migration-checklist-small-business-2025-nz', paths)
    ).toContain('068_cloud_migration_checklist')
    expect(
      resolvePostModulePath('part-time-cto-hourly-rates-nz-2026-guide', paths)
    ).toContain('073_part_time_cto_hourly_rates')
  })

  it('returns undefined for non-match (loadPostContent fail-closed contract)', () => {
    // loadPostContent returns undefined when resolvePostModulePath is undefined —
    // never an empty metadata shell (see src/blog/index.ts).
    expect(resolvePostModulePath('does-not-exist-anywhere', paths)).toBeUndefined()
  })

  it('prefers exact basename when multiple candidates', () => {
    // both date-prefixed file and a plain duplicate-ish path could match via extract;
    // exact basename should win for date-prefixed slug
    const multi = [
      './posts/2025-07-22-technical-risks-kill-startup-valuations.mdx',
      './posts/2025-06-22-technical-risks-kill-startup-valuations.mdx'
    ]
    const result = resolvePostModulePath(
      '2025-07-22-technical-risks-kill-startup-valuations',
      multi
    )
    expect(result).toBe('./posts/2025-07-22-technical-risks-kill-startup-valuations.mdx')
  })

  it('alias map has exactly 6 entries', () => {
    expect(Object.keys(SLUG_ALIAS_MAP)).toHaveLength(6)
  })
})

describe('resolvePostModulePath vs real posts (published coverage)', () => {
  it('resolves all published url_slugs against src/blog/posts/*', async () => {
    // Optional integration: use vitest-compatible dynamic import of articles + fs
    const fs = await import('node:fs')
    const path = await import('node:path')
    const { fileURLToPath } = await import('node:url')

    const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
    const postsDir = path.join(root, 'src/blog/posts')
    const articlesPath = path.join(root, 'articles.json')

    const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    const modulePaths = files.map((f) => `./posts/${f}`)

    const articlesData = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'))
    const published = articlesData.articles.filter((a: { status: string }) => a.status === 'published')

    const unresolved: string[] = []
    for (const article of published) {
      const resolved = resolvePostModulePath(article.url_slug, modulePaths)
      if (!resolved) unresolved.push(article.url_slug)
    }

    // Expect full coverage of published posts; report any misses clearly
    if (unresolved.length > 0) {
      console.warn('Unresolved published slugs:', unresolved)
    }
    expect(unresolved).toEqual([])
  })
})
