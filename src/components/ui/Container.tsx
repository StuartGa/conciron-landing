import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
  id?: string
}

/**
 * Max-width content wrapper with responsive horizontal padding.
 * Used across all landing sections for consistent layout rhythm.
 *
 * @param as - Semantic HTML element (`div` or `section`)
 * @param id - Optional anchor ID for in-page navigation
 */
export function Container({ children, className, as: Tag = 'div', id }: ContainerProps) {
  return (
    <Tag id={id} className={cn('max-w-7xl mx-auto px-5 sm:px-6 lg:px-8', className)}>
      {children}
    </Tag>
  )
}
