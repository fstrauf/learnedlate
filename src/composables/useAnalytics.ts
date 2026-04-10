import { onMounted } from 'vue'

// Analytics event types
export type AnalyticsEvent =
  | 'cta_click'
  | 'lead_magnet_signup'
  | 'calendly_booking_started'
  | 'calendly_booking_completed'
  | 'page_view'
  | 'service_page_view'
  | 'contact_form_submit'

// Event properties interface
interface EventProperties {
  [key: string]: string | number | boolean | undefined
}

// Track an analytics event
export function trackEvent(event: AnalyticsEvent, properties?: EventProperties) {
  // PostHog tracking
  if (typeof window !== 'undefined' && (window as any).posthog) {
    (window as any).posthog.capture(event, properties)
  }

  // Console log in development
  if (import.meta.env.DEV) {
    console.log('[Analytics]', event, properties)
  }
}

// Track CTA clicks with specific context
export function trackCTAClick(
  ctaText: string,
  location: string,
  destination: string,
  additionalProps?: EventProperties
) {
  trackEvent('cta_click', {
    cta_text: ctaText,
    location,
    destination,
    ...additionalProps,
  })
}

// Track service page views
export function trackServiceView(serviceName: string) {
  trackEvent('service_page_view', {
    service_name: serviceName,
  })
}

// Track lead magnet conversions
export function trackLeadMagnet(
  magnetId: string,
  magnetName: string,
  emailDomain: string
) {
  trackEvent('lead_magnet_signup', {
    magnet_id: magnetId,
    magnet_name: magnetName,
    email_domain: emailDomain,
  })
}

// Composable for page-level analytics
export function usePageAnalytics(pageName: string) {
  onMounted(() => {
    trackEvent('page_view', {
      page_name: pageName,
      url: window.location.pathname,
    })
  })
}

// Setup Calendly event listeners
export function setupCalendlyTracking() {
  if (typeof window === 'undefined') return

  // Listen for Calendly events
  window.addEventListener('message', (e) => {
    if (e.data.event && e.data.event.startsWith('calendly.')) {
      const calendlyEvent = e.data.event.replace('calendly.', '')

      switch (calendlyEvent) {
        case 'event_type_viewed':
          trackEvent('calendly_booking_started', {
            event_type: e.data.payload?.event_type?.name,
          })
          break
        case 'event_scheduled':
          trackEvent('calendly_booking_completed', {
            event_type: e.data.payload?.event_type?.name,
            invitee_email: e.data.payload?.invitees?.[0]?.email?.split('@')[1],
          })
          break
      }
    }
  })
}

// Track button clicks with data attributes
export function trackButtonClick(event: MouseEvent) {
  const button = (event.target as HTMLElement).closest('[data-track]')
  if (!button) return

  const trackData = button.getAttribute('data-track')
  if (!trackData) return

  try {
    const data = JSON.parse(trackData)
    trackEvent(data.event || 'cta_click', {
      ...data,
      element: button.tagName.toLowerCase(),
    })
  } catch {
    // If not valid JSON, treat as simple event name
    trackEvent(trackData as AnalyticsEvent)
  }
}

// Auto-track all links with data-track attribute
export function initAutoTracking() {
  if (typeof window === 'undefined') return

  document.addEventListener('click', (e) => {
    trackButtonClick(e)
  })

  // Setup Calendly tracking
  setupCalendlyTracking()
}
