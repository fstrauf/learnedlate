/**
 * Pure slug-matching helpers shared by runtime (Vite) and Node scripts.
 * No Vite-only APIs — safe to import from Node with --experimental-strip-types.
 */

// Extract slug from file path (strip date / numeric prefixes; keep underscores)
export function extractSlugFromPath(filePath: string): string {
  const base = filePath.split('/').pop()?.replace(/\.(md|mdx)$/i, '') || ''

  // Remove date prefix (YYYY-MM-DD-slug)
  const dateMatch = base.match(/^\d{4}-\d{2}-\d{2}-(.+)$/)
  if (dateMatch) {
    return dateMatch[1]
  }

  // Remove numeric prefix (046_slug)
  const numMatch = base.match(/^\d+_(.+)$/)
  if (numMatch) {
    return numMatch[1]
  }

  return base
}

/** Basename stem without extension (no prefix stripping). */
export function basenameStem(filePath: string): string {
  return filePath.split('/').pop()?.replace(/\.(md|mdx)$/i, '') || ''
}

/**
 * Canonicalize a slug for comparison:
 * strip YYYY-MM-DD-, strip leading N_, _→-, lowercase.
 */
export function canonicalizeSlug(s: string): string {
  let out = s.trim().toLowerCase()
  const dateMatch = out.match(/^\d{4}-\d{2}-\d{2}-(.+)$/)
  if (dateMatch) out = dateMatch[1]
  const numMatch = out.match(/^\d+_(.+)$/)
  if (numMatch) out = numMatch[1]
  return out.replace(/_/g, '-')
}

// NOTE: public url_slug is the route key; MDX may use date/N_ prefixes and
// underscores — matching must canonicalize; do not "fix" by rewriting live URLs here.
/** Explicit url_slug → MDX file stem aliases (only these 6). */
export const SLUG_ALIAS_MAP: Record<string, string> = {
  'crm-software-nz-guide-2025': 'crm_software_nz_blog_post',
  technical_co_founder_vs_fractional_cto_which_is_right_for_your_startup:
    '054_technical_co_founder_vs_fractional_cto_which_is_right_for_your_startup_2026',
  how_to_hire_developers_for_your_startup_a_non_technical_founders_complete_guide:
    '055_how_to_hire_developers_for_your_startup_a_non_technical_founders_complete_guide_2026',
  when_to_hire_your_first_developer_a_startup_founders_timing_readiness_guide:
    '058_when_to_hire_your_first_developer_a_startup_founders_timing_readiness_guide_2026',
  'cloud-migration-checklist-small-business-2025-nz':
    '068_cloud_migration_checklist_for_small_businesses_2025_nz_edition',
  'part-time-cto-hourly-rates-nz-2026-guide':
    '073_part_time_cto_hourly_rates_in_new_zealand_2026_market_guide_for_startups'
}

/**
 * Resolve a public url_slug to an MDX module path.
 * 1. Exact basename stem === slug (fixes date-/numeric-prefixed url_slugs)
 * 2. Exact extractSlugFromPath(path) === slug
 * 3. Unique canonicalize(extract|basename) === canonicalize(slug)
 * 4. Explicit alias map → basename stem
 * Prefer exact basename when multiple candidates.
 */
export function resolvePostModulePath(
  slug: string,
  modulePaths: string[]
): string | undefined {
  if (!slug || modulePaths.length === 0) return undefined

  // 1. Exact basename stem
  const exactBasename = modulePaths.filter((p) => basenameStem(p) === slug)
  if (exactBasename.length === 1) return exactBasename[0]
  if (exactBasename.length > 1) return exactBasename[0]

  // 2. Exact extractSlugFromPath
  const exactExtract = modulePaths.filter((p) => extractSlugFromPath(p) === slug)
  if (exactExtract.length === 1) return exactExtract[0]
  if (exactExtract.length > 1) {
    // Prefer exact basename among these if any
    const prefer = exactExtract.find((p) => basenameStem(p) === slug)
    return prefer || exactExtract[0]
  }

  // 3. Canonicalize match (unique)
  const canonSlug = canonicalizeSlug(slug)
  const canonMatches = modulePaths.filter((p) => {
    const stem = basenameStem(p)
    return (
      canonicalizeSlug(stem) === canonSlug ||
      canonicalizeSlug(extractSlugFromPath(p)) === canonSlug
    )
  })
  if (canonMatches.length === 1) return canonMatches[0]
  if (canonMatches.length > 1) {
    const prefer = canonMatches.find((p) => basenameStem(p) === slug)
    return prefer || canonMatches[0]
  }

  // 4. Explicit alias map
  const aliasedStem = SLUG_ALIAS_MAP[slug]
  if (aliasedStem) {
    const aliasMatch = modulePaths.find((p) => basenameStem(p) === aliasedStem)
    if (aliasMatch) return aliasMatch
  }

  return undefined
}
