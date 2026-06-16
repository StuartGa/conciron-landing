import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@/App'

/**
 * Smoke tests for the Conciron landing page — verifies all major sections render.
 * This is a marketing single-page site; tests focus on presence of key content, not routing.
 */
describe('App (landing page)', () => {
  it('renders the main hero headline', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /soluciones estructurales para construir con certeza/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders all landing section anchors', () => {
    render(<App />)
    expect(document.getElementById('inicio')).toBeInTheDocument()
    expect(document.getElementById('categorias')).toBeInTheDocument()
    expect(document.getElementById('productos')).toBeInTheDocument()
    expect(document.getElementById('conocenos')).toBeInTheDocument()
    expect(document.getElementById('contacto')).toBeInTheDocument()
  })

  it('renders featured products from content layer', () => {
    render(<App />)
    expect(screen.getByText('CPC 30 R')).toBeInTheDocument()
    expect(screen.getByText('Concreto Estructural')).toBeInTheDocument()
  })

  it('renders primary CTA in header', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: /cotizar/i }).length).toBeGreaterThan(0)
  })
})
