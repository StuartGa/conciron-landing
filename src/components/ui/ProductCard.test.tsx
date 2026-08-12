import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductCard } from '@/components/ui/ProductCard'
import type { Product } from '@/types'

const mockProduct: Product = {
  id: 'test',
  title: 'CPC 30 R',
  description: 'Cemento Portland Compuesto',
  image: '/images/product-cpc-30r.webp',
  imageAlt: 'Saco de cemento',
  href: '#contacto',
  ctaLabel: 'Cotizar',
}

describe('ProductCard', () => {
  it('renders product title and description on the landing grid', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('CPC 30 R')).toBeInTheDocument()
    expect(screen.getByText('Cemento Portland Compuesto')).toBeInTheDocument()
  })

  it('links to the quote form with Cotizar CTA', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByRole('link', { name: /cotizar/i })).toHaveAttribute('href', '#contacto')
  })

  it('fills a uniform 4:3 image frame', () => {
    render(<ProductCard product={mockProduct} />)
    const image = screen.getByRole('img', { name: 'Saco de cemento' })
    expect(image).toHaveClass('object-cover')
    expect(image.parentElement).toHaveClass('aspect-[4/3]')
  })
})
