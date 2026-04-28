import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ArticleHowTo from './ArticleHowTo.vue'

describe('ArticleHowTo', () => {
  it('renders visible step names and text', () => {
    const howTo = {
      name: 'How to Test',
      description: 'A testing guide',
      steps: [
        { name: 'Step One', text: 'Do the first thing.' },
        { name: 'Step Two', text: 'Do the second thing.' }
      ]
    }

    const wrapper = mount(ArticleHowTo, {
      props: { howTo }
    })

    const headings = wrapper.findAll('h3')
    expect(headings).toHaveLength(2)
    expect(headings[0].text()).toBe('Step One')
    expect(headings[1].text()).toBe('Step Two')

    const stepParagraphs = wrapper.findAll('li p')
    expect(stepParagraphs[0].text()).toBe('Do the first thing.')
    expect(stepParagraphs[1].text()).toBe('Do the second thing.')
  })

  it('renders step numbers', () => {
    const howTo = {
      steps: [
        { name: 'First', text: 'Text' },
        { name: 'Second', text: 'Text' },
        { name: 'Third', text: 'Text' }
      ]
    }

    const wrapper = mount(ArticleHowTo, { props: { howTo } })
    const numbers = wrapper.findAll('span.font-bold')
    expect(numbers[0].text()).toBe('1')
    expect(numbers[1].text()).toBe('2')
    expect(numbers[2].text()).toBe('3')
  })

  it('falls back to default title when name is missing', () => {
    const howTo = { steps: [{ name: 'Step', text: 'Text' }] }
    const wrapper = mount(ArticleHowTo, { props: { howTo } })
    expect(wrapper.find('h2').text()).toBe('Step-by-Step Guide')
  })

  it('renders description when provided', () => {
    const howTo = {
      name: 'Guide',
      description: 'This is the description.',
      steps: [{ name: 'Step', text: 'Text' }]
    }
    const wrapper = mount(ArticleHowTo, { props: { howTo } })
    expect(wrapper.text()).toContain('This is the description.')
  })
})
