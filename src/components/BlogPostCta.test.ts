import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import BlogPostCta from './BlogPostCta.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: { template: '<div />' } },
    { path: '/contact', component: { template: '<div />' } },
    { path: '/ai-readiness-checklist', component: { template: '<div />' } },
    { path: '/services/strategy', component: { template: '<div />' } }
  ]
})

describe('BlogPostCta', () => {
  it('renders headline and supporting line', async () => {
    await router.push('/')
    const wrapper = mount(BlogPostCta, {
      global: { plugins: [router] }
    })

    expect(wrapper.find('h2').text()).toContain('Ready for practical AI help')
    expect(wrapper.text()).toContain('Figure out where AI matters')
  })

  it('links to contact, checklist, and strategy', async () => {
    await router.push('/')
    const wrapper = mount(BlogPostCta, {
      global: { plugins: [router] }
    })

    const links = wrapper.findAll('a')
    const hrefs = links.map((l) => l.attributes('href'))

    expect(hrefs).toContain('/contact')
    expect(hrefs).toContain('/ai-readiness-checklist')
    expect(hrefs).toContain('/services/strategy')
  })

  it('includes data-track with blog_post_end_cta location', async () => {
    await router.push('/')
    const wrapper = mount(BlogPostCta, {
      global: { plugins: [router] }
    })

    const tracked = wrapper.findAll('[data-track]')
    expect(tracked.length).toBe(3)

    for (const el of tracked) {
      const raw = el.attributes('data-track')
      expect(raw).toBeTruthy()
      const data = JSON.parse(raw!)
      expect(data.event).toBe('cta_click')
      expect(data.location).toBe('blog_post_end_cta')
      expect(data.destination).toBeTruthy()
      expect(data.cta_text).toBeTruthy()
    }

    const destinations = tracked.map((el) => JSON.parse(el.attributes('data-track')!).destination)
    expect(destinations).toEqual(
      expect.arrayContaining(['/contact', '/ai-readiness-checklist', '/services/strategy'])
    )
  })
})
