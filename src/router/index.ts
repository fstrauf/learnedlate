import { createRouter, createWebHistory } from 'vue-router'
import posthog from 'posthog-js'
import routes from './routes'

const DEFAULT_TITLE = 'Florian Strauf'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  if (typeof to.meta.title === 'function') {
    document.title = `${to.meta.title(to)} | Florian Strauf` || DEFAULT_TITLE
  } else {
    document.title = to.meta.title ? `${to.meta.title}` : DEFAULT_TITLE
  }

  // Capture pageview after every route change
  try {
    posthog.capture('$pageview')
  } catch {
    // noop
  }
})

export default router
