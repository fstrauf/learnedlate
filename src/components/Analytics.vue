<template>
  <!-- This component handles PostHog analytics tracking -->
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import posthog from 'posthog-js'

// PostHog configuration from environment variables
const POSTHOG_API_KEY = import.meta.env.VITE_POSTHOG_API_KEY
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com'
const POSTHOG_DEV_MODE = import.meta.env.VITE_POSTHOG_DEV_MODE === 'true'

onMounted(() => {
  // Initialize PostHog based on environment
  if (!POSTHOG_API_KEY || POSTHOG_API_KEY === 'YOUR_POSTHOG_PROJECT_API_KEY') {
    console.warn('PostHog API key not configured. Set VITE_POSTHOG_API_KEY in your .env file.')
    return
  }

  if (import.meta.env.PROD || POSTHOG_DEV_MODE) {
    initializePostHog()
  }
})

const initializePostHog = () => {
  posthog.init(POSTHOG_API_KEY, {
    api_host: POSTHOG_HOST,
    // Automatically capture page views
    capture_pageview: true,
    // Automatically capture clicks, form submissions, etc.
    autocapture: true,
    // Enable session recording (optional)
    session_recording: {
      maskAllInputs: true,
    },
    // Custom properties for this website
    loaded: (posthog) => {
      // Set person properties
      posthog.register({
        website: 'learnedlate.com',
        business_type: 'fractional_cto',
        location: 'new_zealand',
        services: ['fractional_cto', 'mvp_development', 'technical_due_diligence']
      })
      
      // Identify the business/website
      posthog.group('company', 'learnedlate', {
        name: 'LearnedLate',
        industry: 'Technology Consulting',
        location: 'New Zealand',
        founder: 'Florian Strauf'
      })
    },
    // Privacy settings
    opt_out_capturing_by_default: false,
    respect_dnt: true,
    // Performance settings
    disable_session_recording: false,
    enable_recording_console_log: false,
  })

  // Set up global tracking functions
  setupGlobalTracking()
}

const setupGlobalTracking = () => {
  // Define tracking functions and attach to window for global access
  const trackEvent = (eventName: string, properties: Record<string, any> = {}) => {
    posthog.capture(eventName, {
      ...properties,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_title: document.title
    })
  }

  const trackBusinessEvent = (eventName: string, properties: Record<string, any> = {}) => {
    posthog.capture(eventName, {
      business_type: 'fractional_cto',
      location: 'new_zealand',
      website: 'learnedlate.com',
      ...properties
    })
  }

  const trackContactEvent = (method: string, source?: string) => {
    trackBusinessEvent('contact_initiated', {
      contact_method: method,
      contact_source: source || 'unknown',
      page_location: window.location.href,
      high_intent: true
    })
  }

  const trackServiceView = (serviceName: string, section?: string) => {
    trackBusinessEvent('service_viewed', {
      service_name: serviceName,
      service_section: section,
      engagement_type: 'page_view'
    })
  }

  const trackBlogPostView = (postTitle: string, category: string, readingTime?: number) => {
    trackBusinessEvent('blog_post_viewed', {
      post_title: postTitle,
      post_category: category,
      reading_time_minutes: readingTime,
      content_type: 'blog_post'
    })
  }

  const trackDownload = (fileName: string, fileType: string) => {
    trackBusinessEvent('file_downloaded', {
      file_name: fileName,
      file_type: fileType,
      engagement_type: 'download'
    })
  }

  const trackNewsletterSignup = (source: string) => {
    trackBusinessEvent('newsletter_signup', {
      signup_source: source,
      lead_quality: 'high',
      engagement_type: 'email_capture'
    })
  }

  const trackFAQInteraction = (question: string, action: 'open' | 'close') => {
    trackBusinessEvent('faq_interaction', {
      faq_question: question,
      interaction_type: action,
      engagement_type: 'content_interaction'
    })
  }

  // Expose tracking functions globally
  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.posthog = posthog
    // @ts-ignore
    window.trackEvent = trackEvent
    // @ts-ignore
    window.trackBusinessEvent = trackBusinessEvent
    // @ts-ignore
    window.trackContactEvent = trackContactEvent
    // @ts-ignore
    window.trackServiceView = trackServiceView
    // @ts-ignore
    window.trackBlogPostView = trackBlogPostView
    // @ts-ignore
    window.trackDownload = trackDownload
    // @ts-ignore
    window.trackNewsletterSignup = trackNewsletterSignup
    // @ts-ignore
    window.trackFAQInteraction = trackFAQInteraction
  }
}
</script> 