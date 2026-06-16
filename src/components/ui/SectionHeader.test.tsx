import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionHeader } from '@/components/ui/SectionHeader'

describe('SectionHeader', () => {
  it('renders eyebrow and title for landing sections', () => {
    render(<SectionHeader eyebrow="Productos" title="Soluciones para tu obra" />)
    expect(screen.getByText('Productos')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Soluciones para tu obra' })).toBeInTheDocument()
  })

  it('uses light text colors when light prop is set', () => {
    render(<SectionHeader eyebrow="Sobre" title="Conciron" light />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('text-gray-900')
  })
})
