/**
 * Single source of truth for static sitemap routes (path / priority / changefreq).
 * Consumed by generate-sitemap.js and verify-links.js.
 */

/** GTM money URLs — must appear in staticRoutes (asserted by verify-links). */
export const MONEY_PATHS = [
  '/services/strategy',
  '/services/implementation',
  '/services/engineering',
  '/contact',
  '/ai-readiness-checklist',
  '/about',
]

export const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/blog', priority: '0.9', changefreq: 'weekly' },
  // GTM money URLs — keep in sync with routes.ts pillar pages
  { path: '/services/strategy', priority: '0.9', changefreq: 'monthly' },
  { path: '/services/implementation', priority: '0.9', changefreq: 'monthly' },
  { path: '/services/engineering', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
  { path: '/ai-readiness-checklist', priority: '0.9', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/case-studies', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects', priority: '0.8', changefreq: 'monthly' },
  { path: '/cv', priority: '0.7', changefreq: 'monthly' },
  { path: '/mvp-development', priority: '0.5', changefreq: 'monthly' },
  { path: '/fractional-cto', priority: '0.5', changefreq: 'monthly' },
  { path: '/seo-automation', priority: '0.6', changefreq: 'monthly' },
  { path: '/sap-solution-architecture', priority: '0.5', changefreq: 'monthly' },
  { path: '/sap-custom-development', priority: '0.5', changefreq: 'monthly' },
  { path: '/now', priority: '0.7', changefreq: 'weekly' },
  { path: '/life-balance-visualizer', priority: '0.6', changefreq: 'monthly' },
  { path: '/life-calendar', priority: '0.6', changefreq: 'monthly' },
  { path: '/concentric-circles', priority: '0.6', changefreq: 'monthly' },
]
