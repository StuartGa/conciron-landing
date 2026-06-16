import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/Button'

describe('Button', () => {
  it('renders as anchor when href is provided', () => {
    render(<Button href="#contacto">Cotizar</Button>)
    const link = screen.getByRole('link', { name: 'Cotizar' })
    expect(link).toHaveAttribute('href', '#contacto')
  })

  it('renders as button when no href', () => {
    render(<Button>Enviar</Button>)
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument()
  })

  it('applies primary variant styles by default', () => {
    render(<Button href="#x">CTA</Button>)
    expect(screen.getByRole('link')).toHaveClass('bg-primary-strong', 'text-white')
  })

  it('applies secondary variant when specified', () => {
    render(
      <Button href="#x" variant="secondary">
        Secundario
      </Button>,
    )
    expect(screen.getByRole('link')).toHaveClass('border-2')
  })

  it('shows arrow icon when showArrow is true', () => {
    const { container } = render(
      <Button href="#x" showArrow>
        Ir
      </Button>,
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
