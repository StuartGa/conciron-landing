import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandLogo } from '@/components/ui/BrandLogo'

describe('BrandLogo', () => {
  it('knocks out black background on orange logos by default', () => {
    render(<BrandLogo src="/images/logo-conciron-orange.webp" alt="Conciron" />)
    const img = document.querySelector('img')
    expect(img).toHaveClass('mix-blend-lighten')
    expect(img).not.toHaveClass('invert')
  })

  it('applies white tint when onDark is true', () => {
    render(<BrandLogo src="/images/logo-conciron.webp" alt="Conciron" onDark />)
    const img = document.querySelector('img')
    expect(img).toHaveClass('brightness-0', 'invert')
    expect(img).not.toHaveClass('mix-blend-lighten')
  })

  it('can disable background knockout', () => {
    render(
      <BrandLogo
        src="/images/logo-conciron-orange.webp"
        alt="Conciron"
        knockoutBackground={false}
      />,
    )
    const img = document.querySelector('img')
    expect(img).not.toHaveClass('mix-blend-lighten')
  })
})
