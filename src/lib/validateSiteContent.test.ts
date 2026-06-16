import { describe, expect, it } from 'vitest'
import { siteContent } from '@/data/siteContent'
import { getLandingSectionAnchors, validateSiteContent } from '@/lib/validateSiteContent'

describe('validateSiteContent', () => {
  it('validates the production landing content', () => {
    const result = validateSiteContent(siteContent)
    expect(result.valid).toBe(true)
    expect(result.errors).toHaveLength(0)
  })

  it('fails when required sections are empty', () => {
    const result = validateSiteContent({
      ...siteContent,
      categories: [],
      products: { ...siteContent.products, items: [] },
    })
    expect(result.valid).toBe(false)
    expect(result.errors.length).toBeGreaterThan(0)
  })
})

describe('getLandingSectionAnchors', () => {
  it('returns navigation anchor hrefs for the single-page layout', () => {
    const anchors = getLandingSectionAnchors(siteContent)
    expect(anchors).toContain('#inicio')
    expect(anchors).toContain('#productos')
    expect(anchors).toContain('#contacto')
  })
})
