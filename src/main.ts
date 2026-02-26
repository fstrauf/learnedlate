import { createApp as createVueApp } from 'vue'
import { createHead } from '@vueuse/head'
import './style.css'
import App from './App.vue'
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import routes from './router/routes'
import { usePostHog } from './plugins/posthog'

// Environment check
const isSSR = typeof window === 'undefined'

export function createApp() {
  const app = createVueApp(App)
  const head = createHead()
  
  // Create router with appropriate history
  const router = createRouter({
    history: isSSR ? createMemoryHistory() : createWebHistory(),
    routes,
  })
  
  // Initialize PostHog only on client side
  if (!isSSR) {
    usePostHog()
  }
  
  app.use(head)
  app.use(router)
  
  return { app, router, head }
}

// Client-side only: mount the app
if (!isSSR) {
  const { app, router } = createApp()
  
  router.isReady().then(() => {
    app.mount('#app')
  })
}
