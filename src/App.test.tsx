import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@/App'

describe('App (landing page)', () => {
  it('renders the official hero phrase', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /más de 35 años construyendo confianza y fortaleciendo la infraestructura de méxico/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders a single Contáctanos button in the hero', () => {
    render(<App />)
    const hero = document.getElementById('inicio')
    expect(hero).toBeInTheDocument()
    const heroLinks = hero?.querySelectorAll('a') ?? []
    const labels = [...heroLinks].map((link) => link.textContent?.replace(/\s+/g, ' ').trim())
    expect(labels.filter((label) => label?.startsWith('Contáctanos'))).toHaveLength(1)
    expect(labels.some((label) => label?.includes('Ver productos'))).toBe(false)
    expect(labels.some((label) => label?.includes('Ver soluciones'))).toBe(false)
  })

  it('renders the four official section anchors', async () => {
    render(<App />)
    expect(document.getElementById('inicio')).toBeInTheDocument()
    expect(await screen.findByRole('heading', { name: 'Productos principales' })).toBeInTheDocument()
    expect(document.getElementById('productos')).toBeInTheDocument()
    expect(document.getElementById('conocenos')).toBeInTheDocument()
    expect(document.getElementById('contacto')).toBeInTheDocument()
    expect(document.getElementById('categorias')).not.toBeInTheDocument()
  })

  it('renders featured products from the official catalog', async () => {
    render(<App />)
    expect(await screen.findByText('CPC 30 R')).toBeInTheDocument()
    expect(screen.getByText('CPC 40')).toBeInTheDocument()
    expect(screen.getByText('CPD Blanco Albañilería')).toBeInTheDocument()
  })
})
