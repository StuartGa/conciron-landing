import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { PublicImage } from '@/components/ui/PublicImage'

describe('PublicImage', () => {
  it('prefixes src with BASE_URL for GitHub Pages compatibility', () => {
    render(<PublicImage src="/images/hero.jpg" alt="Hero" />)
    const img = document.querySelector('img')
    expect(img).toHaveAttribute('src', `${import.meta.env.BASE_URL}images/hero.jpg`)
  })
})
