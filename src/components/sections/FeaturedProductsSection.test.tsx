import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeaturedProductsSection } from '@/components/sections/FeaturedProductsSection'

describe('FeaturedProductsSection', () => {
  it('shows five products initially', () => {
    render(<FeaturedProductsSection />)
    expect(screen.getByText('CPC 30 R')).toBeInTheDocument()
    expect(screen.getByText('CPC 40 RS')).toBeInTheDocument()
    expect(screen.queryByText('Concreto Estructural')).not.toBeInTheDocument()
  })

  it('expands to show all products when the arrow control is clicked', async () => {
    const user = userEvent.setup()
    render(<FeaturedProductsSection />)

    await user.click(screen.getByRole('button', { name: /ver más productos/i }))

    expect(screen.getByText('Concreto Convencional')).toBeInTheDocument()
    expect(screen.getByText('Concreto Estructural')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /ver menos productos/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
