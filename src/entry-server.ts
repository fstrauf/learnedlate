import { createApp } from './main'
import { renderToString } from 'vue/server-renderer'
import { renderSSRHead } from '@unhead/vue/server'

import articlesData from '../articles.json'

const publishedArticles = articlesData.articles.filter(a => a.status === 'published')

// Static routes to prerender
export const staticRoutes = [
  '/',
  '/blog',
  '/projects',
  '/services',
  '/cv',
  '/mvp-development',
  '/fractional-cto',
  '/ai-implementation',
  '/automation',
  '/seo-automation',
  '/now',
  '/life-balance-visualizer',
  '/life-calendar',
  '/concentric-circles',
]

// Dynamic routes from articles
export const articleRoutes = publishedArticles.map(a => `/blog/${a.url_slug}`)

// All routes for prerendering
export const allRoutes = [...staticRoutes, ...articleRoutes]

export async function render(url: string, _manifest: Record<string, string[]> = {}) {
  const { app, router, head } = createApp()
  
  // Set the router to the desired URL
  await router.push(url)
  await router.isReady()
  
  // Get the matched components
  const matchedComponents = router.currentRoute.value.matched
  
  // SSR context for vue
  const ctx: { modules?: string[] } = {}
  
  // Render the app to string
  const appHtml = await renderToString(app, ctx)
  
  // Render head tags - access the underlying unhead instance
  const headPayload = await renderSSRHead((head as any).unhead || head)
  
  return {
    app,
    router,
    head,
    ctx,
    matchedComponents,
    appHtml,
    headPayload,
  }
}
