import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandLogo } from '@/components/ui/BrandLogo'

describe('BrandLogo', () => {
  it('applies white tint classes for dark backgrounds by default', () => {
    render(<BrandLogo src="/images/logo-conciron.png" alt="Conciron" />)
    const img = document.querySelector('img')
    expect(img).toHaveClass('brightness-0', 'invert')
  })

  it('omits tint when onDark is false', () => {
    render(<BrandLogo src="/images/logo-conciron.png" alt="Conciron" onDark={false} />)
    const img = document.querySelector('img')
    expect(img).not.toHaveClass('invert')
  })
})
