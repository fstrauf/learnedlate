import { createApp } from './main'

const { app, router } = createApp()

// Wait for router to be ready before mounting to avoid hydration mismatches
router.isReady().then(() => {
  app.mount('#app')
})
