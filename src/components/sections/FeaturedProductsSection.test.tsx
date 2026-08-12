import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedProductsSection } from '@/components/sections/FeaturedProductsSection'

describe('FeaturedProductsSection', () => {
  it('renders the official product structure in full', () => {
    render(<FeaturedProductsSection />)

    expect(screen.getByRole('heading', { name: 'Productos principales' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Cemento' })).toBeInTheDocument()
    expect(screen.getByText('Cemento Envasado')).toBeInTheDocument()
    expect(screen.getByText('Cemento a Granel')).toBeInTheDocument()
    expect(screen.getByText('CPC 30 R')).toBeInTheDocument()
    expect(screen.getByText('CPC 40 RS (para Tracto y Tolva)')).toBeInTheDocument()
    expect(screen.getByText('Concreto Estructural')).toBeInTheDocument()
    expect(screen.getByText('Concreto Convencional')).toBeInTheDocument()
    expect(screen.getByText('Malla Electrosoldada 6.6.10.10.')).toBeInTheDocument()
    expect(screen.getByText('Cal Hidratada')).toBeInTheDocument()
  })

  it('does not render a letterboxed group banner above Cemento Envasado cards', () => {
    render(<FeaturedProductsSection />)

    expect(
      screen.queryByRole('img', { name: 'Presentación de tres sacos de cemento Moctezuma' }),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Saco Cemento CPC 30 R' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Saco Cemento CPC 30 RS' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Saco Mortero de Albañilería' })).toBeInTheDocument()
  })
})
