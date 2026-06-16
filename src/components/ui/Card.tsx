import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

/**
 * Base surface card with optional hover lift animation.
 *
 * @param hover - Enables `card-hover` transform on mouse over
 */
export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface-container-high border border-outline-variant/40',
        hover && 'card-hover',
        className,
      )}
    >
      {children}
    </div>
  )
}
