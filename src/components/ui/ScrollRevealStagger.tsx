import type { ElementType, ReactNode } from 'react'
import { Children, isValidElement } from 'react'
import { useScrollReveal, type UseScrollRevealOptions } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/cn'

export interface ScrollRevealStaggerProps extends UseScrollRevealOptions {
  children: ReactNode
  className?: string
  id?: string
  /** Delay between each child reveal in ms */
  staggerMs?: number
  variant?: 'rise' | 'slide-left' | 'slide-right' | 'layer'
  as?: ElementType
}

/**
 * Staggers child reveals — like placing blocks one after another during construction.
 */
export function ScrollRevealStagger({
  children,
  className,
  id,
  staggerMs = 120,
  variant = 'rise',
  as: Tag = 'div',
  ...observerOptions
}: ScrollRevealStaggerProps) {
  const { ref, isVisible } = useScrollReveal(observerOptions)

  return (
    <Tag
      ref={ref}
      id={id}
      className={cn('scroll-reveal-stagger', isVisible && 'scroll-reveal-stagger--visible', className)}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child
        return (
          <div
            key={child.key ?? index}
            className={cn('scroll-reveal-stagger__item', `scroll-reveal-stagger__item--${variant}`)}
            style={{ transitionDelay: `${index * staggerMs}ms` }}
          >
            {child}
          </div>
        )
      })}
    </Tag>
  )
}
