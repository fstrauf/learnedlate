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
    // Autocapture disabled to reduce PostHog event volume/cost
    capture_pageview: false,
    capture_pageleave: false,
  })

  return { posthog }
}