import { describe, expect, it } from 'vitest'
import { siteConfig, absoluteUrl } from '@/config/site'
import { buildStructuredData } from '@/lib/structuredData'

describe('siteConfig SEO', () => {
  it('has required metadata for Lighthouse SEO audits', () => {
    expect(siteConfig.title.length).toBeGreaterThan(10)
    expect(siteConfig.description.length).toBeGreaterThan(50)
    expect(siteConfig.description.length).toBeLessThanOrEqual(160)
    expect(siteConfig.url).toMatch(/^https:\/\//)
    expect(siteConfig.lang).toBe('es')
  })

  it('builds absolute URLs for Open Graph and canonical', () => {
    expect(absoluteUrl()).toBe(siteConfig.url)
    expect(absoluteUrl('/images/hero.jpg')).toBe(`${siteConfig.url}/images/hero.jpg`)
  })
})

describe('buildStructuredData', () => {
  it('returns valid Schema.org graphs', () => {
    const graphs = buildStructuredData()
    expect(graphs.length).toBeGreaterThanOrEqual(3)
    expect(graphs[0]).toMatchObject({
      '@type': 'Organization',
      name: 'Conciron',
    })
  })
})
