import { describe, expect, it } from 'vitest'
import { assetUrl } from '@/lib/assetUrl'

describe('assetUrl', () => {
  it('resolves paths under the Vite base URL', () => {
    expect(assetUrl('/images/hero.jpg')).toBe(`${import.meta.env.BASE_URL}images/hero.jpg`)
  })

  it('accepts paths without a leading slash', () => {
    expect(assetUrl('images/hero.jpg')).toBe(`${import.meta.env.BASE_URL}images/hero.jpg`)
  })
})
