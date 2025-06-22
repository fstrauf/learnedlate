import posthog from "posthog-js";
import type { App } from 'vue';

// PostHog configuration from environment variables
const POSTHOG_API_KEY = import.meta.env.VITE_POSTHOG_API_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com';
const POSTHOG_DEV_MODE = import.meta.env.VITE_POSTHOG_DEV_MODE === 'true';

export default {
  install(app: App) {
    // Check if API key is configured
    if (!POSTHOG_API_KEY || POSTHOG_API_KEY === 'YOUR_POSTHOG_PROJECT_API_KEY') {
      console.warn('PostHog API key not configured. Set VITE_POSTHOG_API_KEY in your .env file.');
      return;
    }

    // Only initialize in production or when dev mode is enabled
    if (!import.meta.env.PROD && !POSTHOG_DEV_MODE) {
      console.log('PostHog disabled in development mode. Set VITE_POSTHOG_DEV_MODE=true to enable.');
      return;
    }

    // Initialize PostHog with standard settings
    posthog.init(POSTHOG_API_KEY, {
      api_host: POSTHOG_HOST,
      // Automatically capture page views
      capture_pageview: true,
      // Automatically capture clicks, form submissions, etc.
      autocapture: true,
      // Privacy settings
      opt_out_capturing_by_default: false,
      respect_dnt: true,
    });

    // Make PostHog available globally
    app.config.globalProperties.$posthog = posthog;
  },
}; 