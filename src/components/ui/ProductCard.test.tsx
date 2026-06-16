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
  imageFit: 'contain',
}

describe('ProductCard', () => {
  it('renders product title and description on the landing grid', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('CPC 30 R')).toBeInTheDocument()
    expect(screen.getByText('Cemento Portland Compuesto')).toBeInTheDocument()
  })

  it('links to product detail or contact anchor', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByRole('link', { name: /ver detalles/i })).toHaveAttribute('href', '#contacto')
  })
})
