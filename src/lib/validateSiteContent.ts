import type { SiteContent } from '@/types'

export interface SiteContentValidationResult {
  valid: boolean
  errors: string[]
}

/**
 * Validates that landing page content has all required sections and anchor links.
 * Keeps marketing copy checks separate from UI (Single Responsibility).
 *
 * @param content - Site content object from the data layer
 * @returns Validation result with `valid` flag and human-readable `errors`
 */
export function validateSiteContent(content: SiteContent): SiteContentValidationResult {
  const errors: string[] = []

  if (!content.brand.name.trim()) errors.push('brand.name is required')
  if (!content.hero.title.trim()) errors.push('hero.title is required')
  if (content.categories.length < 1) errors.push('at least one category is required')
  if (content.products.items.length < 1) errors.push('at least one product is required')
  if (content.experience.stats.length < 1) errors.push('at least one stat is required')
  if (content.about.identity.length < 1) errors.push('at least one identity card is required')

  const requiredAnchors = ['#inicio', '#productos', '#conocenos', '#contacto']
  for (const anchor of requiredAnchors) {
    if (!content.navigation.some((n) => n.href === anchor)) {
      errors.push(`navigation missing anchor: ${anchor}`)
    }
  }

  return { valid: errors.length === 0, errors }
}

/**
 * Returns all in-page section IDs used by the landing navigation.
 *
 * @param content - Site content object
 * @returns Unique anchor hrefs from navigation links
 */
export function getLandingSectionAnchors(content: SiteContent): string[] {
  return content.navigation.map((link) => link.href)
}
