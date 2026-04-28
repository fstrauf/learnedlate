import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ArticleCitations from './ArticleCitations.vue'

describe('ArticleCitations', () => {
  it('renders visible source names and links', () => {
    const citations = [
      { source: 'Source A', url: 'https://example.com/a' },
      { source: 'Source B', url: 'https://example.com/b' }
    ]

    const wrapper = mount(ArticleCitations, {
      props: { citations }
    })

    const links = wrapper.findAll('a')
    expect(links).toHaveLength(2)
    expect(links[0].text()).toBe('Source A')
    expect(links[0].attributes('href')).toBe('https://example.com/a')
    expect(links[1].text()).toBe('Source B')
  })

  it('renders source without link when url is missing', () => {
    const citations = [{ source: 'Unlinked Source' }]
    const wrapper = mount(ArticleCitations, { props: { citations } })

    expect(wrapper.find('a').exists()).toBe(false)
    expect(wrapper.text()).toContain('Unlinked Source')
  })

  it('renders dates when provided', () => {
    const citations = [{ source: 'Dated Source', date: '2026-04-29' }]
    const wrapper = mount(ArticleCitations, { props: { citations } })
    expect(wrapper.text()).toContain('29 April 2026')
  })

  it('renders numbered references', () => {
    const citations = [
      { source: 'One' },
      { source: 'Two' },
      { source: 'Three' }
    ]
    const wrapper = mount(ArticleCitations, { props: { citations } })
    const items = wrapper.findAll('li')
    expect(items[0].text()).toContain('[1]')
    expect(items[1].text()).toContain('[2]')
    expect(items[2].text()).toContain('[3]')
  })
})
