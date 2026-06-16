import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useScrollReveal, type UseScrollRevealOptions } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/cn'

export type ScrollRevealVariant = 'rise' | 'slide-left' | 'slide-right' | 'layer'

export interface ScrollRevealProps extends UseScrollRevealOptions {
  children: ReactNode
  className?: string
  variant?: ScrollRevealVariant
  /** Stagger delay in milliseconds */
  delay?: number
  as?: ElementType
  style?: CSSProperties
}

/**
 * Reveals children with a construction "build-up" motion when scrolled into view.
 */
export function ScrollReveal({
  children,
  className,
  variant = 'rise',
  delay = 0,
  as: Tag = 'div',
  style,
  ...observerOptions
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal(observerOptions)

  return (
    <Tag
      ref={ref}
      className={cn(
        'scroll-reveal',
        `scroll-reveal--${variant}`,
        isVisible && 'scroll-reveal--visible',
        className,
      )}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
