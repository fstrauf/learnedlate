// PostHog Analytics Utility Functions
// These functions provide typed interfaces for tracking business events

declare global {
  interface Window {
    posthog: any
    trackEvent: (eventName: string, properties?: Record<string, any>) => void
    trackBusinessEvent: (eventName: string, properties?: Record<string, any>) => void
    trackContactEvent: (method: string, source?: string) => void
    trackServiceView: (serviceName: string, section?: string) => void
    trackBlogPostView: (postTitle: string, category: string, readingTime?: number) => void
    trackDownload: (fileName: string, fileType: string) => void
    trackNewsletterSignup: (source: string) => void
    trackFAQInteraction: (question: string, action: 'open' | 'close') => void
  }
}

// General event tracking
export const trackEvent = (eventName: string, properties: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.trackEvent) {
    window.trackEvent(eventName, properties)
  }
}

// Business-specific event tracking with predefined properties
export const trackBusinessEvent = (eventName: string, properties: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.trackBusinessEvent) {
    window.trackBusinessEvent(eventName, properties)
  }
}

// Contact form submissions and interactions
export const trackContactEvent = (method: 'email' | 'phone' | 'form' | 'linkedin', source?: string) => {
  if (typeof window !== 'undefined' && window.trackContactEvent) {
    window.trackContactEvent(method, source)
  }
}

// Service page views and interactions
export const trackServiceView = (serviceName: string, section?: string) => {
  if (typeof window !== 'undefined' && window.trackServiceView) {
    window.trackServiceView(serviceName, section)
  }
}

// Blog post engagement
export const trackBlogPostView = (postTitle: string, category: string, readingTime?: number) => {
  if (typeof window !== 'undefined' && window.trackBlogPostView) {
    window.trackBlogPostView(postTitle, category, readingTime)
  }
}

// File downloads (CV, case studies, etc.)
export const trackDownload = (fileName: string, fileType: string) => {
  if (typeof window !== 'undefined' && window.trackDownload) {
    window.trackDownload(fileName, fileType)
  }
}

// Newsletter signups
export const trackNewsletterSignup = (source: string) => {
  if (typeof window !== 'undefined' && window.trackNewsletterSignup) {
    window.trackNewsletterSignup(source)
  }
}

// FAQ interactions
export const trackFAQInteraction = (question: string, action: 'open' | 'close') => {
  if (typeof window !== 'undefined' && window.trackFAQInteraction) {
    window.trackFAQInteraction(question, action)
  }
}

// Page view tracking (automatic with PostHog, but can be manually triggered)
export const trackPageView = (pageName?: string, properties: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.posthog) {
    window.posthog.capture('$pageview', {
      page_name: pageName,
      ...properties
    })
  }
}

// Custom conversion tracking
export const trackConversion = (conversionType: string, value?: number, properties: Record<string, any> = {}) => {
  trackBusinessEvent('conversion', {
    conversion_type: conversionType,
    conversion_value: value,
    high_intent: true,
    ...properties
  })
}

// Lead scoring events
export const trackLeadAction = (action: string, score: number, properties: Record<string, any> = {}) => {
  trackBusinessEvent('lead_action', {
    action_type: action,
    lead_score: score,
    ...properties
  })
}

// Service-specific tracking helpers
export const trackCTOServiceInterest = (specific_service?: string) => {
  trackServiceView('fractional_cto', specific_service)
  trackLeadAction('cto_service_view', 10, { service_type: specific_service })
}

export const trackMVPServiceInterest = (stage?: string) => {
  trackServiceView('mvp_development', stage)
  trackLeadAction('mvp_service_view', 8, { development_stage: stage })
}

export const trackDueDiligenceInterest = () => {
  trackServiceView('technical_due_diligence')
  trackLeadAction('due_diligence_view', 12)
}

// Blog engagement tracking
export const trackBlogEngagement = (postTitle: string, engagementType: 'scroll' | 'share' | 'comment' | 'like') => {
  trackBusinessEvent('blog_engagement', {
    post_title: postTitle,
    engagement_type: engagementType,
    content_interaction: true
  })
}

// Social media tracking
export const trackSocialClick = (platform: string, action: string) => {
  trackBusinessEvent('social_interaction', {
    social_platform: platform,
    social_action: action,
    traffic_source: 'social'
  })
}

// External link tracking
export const trackExternalLink = (url: string, linkText: string) => {
  trackBusinessEvent('external_link_click', {
    external_url: url,
    link_text: linkText,
    engagement_type: 'external_navigation'
  })
} 