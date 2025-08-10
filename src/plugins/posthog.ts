import posthog from 'posthog-js'

export function usePostHog() {
  const apiKey = import.meta.env.VITE_POSTHOG_API_KEY
  const host = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com'

  if (!apiKey) {
    // Don't initialize without required env; avoid errors in local/dev if not configured
    return { posthog }
  }

  posthog.init(apiKey, {
    api_host: host,
    person_profiles: 'identified_only',
    // Respect local dev: don't send from localhost/127.0.0.1
    capture_pageview: false, // we'll capture manually via router to ensure SPA navs are tracked
    capture_pageleave: false,
    loaded: (ph) => {
      // Capture initial load
      try {
        ph.capture('$pageview')
      } catch {
        // noop
      }
    },
  })

  // Best-effort pageleave when tab hidden or unloading
  if (typeof document !== 'undefined') {
    const handler = () => {
      try {
        posthog.capture('$pageleave')
      } catch {
        // noop
      }
    }
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') handler()
    })
    window.addEventListener('pagehide', handler)
    window.addEventListener('beforeunload', handler)
  }

  return { posthog }
}