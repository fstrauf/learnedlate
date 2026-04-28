import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ArticleFAQ from './ArticleFAQ.vue'

describe('ArticleFAQ', () => {
  it('renders visible questions and answers', () => {
    const items = [
      { question: 'What is this?', answer: 'This is a test.' },
      { question: 'Why?', answer: 'Because testing matters.' }
    ]

    const wrapper = mount(ArticleFAQ, {
      props: { items }
    })

    const headings = wrapper.findAll('h3')
    expect(headings).toHaveLength(2)
    expect(headings[0].text()).toBe('What is this?')
    expect(headings[1].text()).toBe('Why?')

    const paragraphs = wrapper.findAll('p')
    expect(paragraphs[0].text()).toBe('This is a test.')
    expect(paragraphs[1].text()).toBe('Because testing matters.')
  })

  it('renders section title', () => {
    const wrapper = mount(ArticleFAQ, {
      props: { items: [{ question: 'Q', answer: 'A' }] }
    })
    expect(wrapper.find('h2').text()).toBe('Frequently Asked Questions')
  })

  it('matches JSON-LD FAQ source data', () => {
    // This test documents the contract: visible FAQ must come from the same data as JSON-LD
    const items = [
      { question: 'JSON-LD Question', answer: 'JSON-LD Answer' }
    ]
    const wrapper = mount(ArticleFAQ, { props: { items } })
    expect(wrapper.text()).toContain('JSON-LD Question')
    expect(wrapper.text()).toContain('JSON-LD Answer')
  })
})
