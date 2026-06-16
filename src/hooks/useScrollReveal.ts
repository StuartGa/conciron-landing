import { useEffect, useRef, useState } from 'react'

export interface UseScrollRevealOptions {
  /** Intersection ratio to trigger reveal (0–1) */
  threshold?: number
  /** IntersectionObserver rootMargin */
  rootMargin?: string
  /** Reveal on mount without waiting for scroll (hero content) */
  immediate?: boolean
  /** Only animate once; does not hide when scrolling away */
  once?: boolean
}

/**
 * Observes an element and returns `isVisible` when it enters the viewport.
 * Powers construction-themed scroll reveal animations across the landing page.
 */
export function useScrollReveal({
  threshold = 0.12,
  rootMargin = '0px 0px -6% 0px',
  immediate = false,
  once = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(immediate)

  useEffect(() => {
    if (immediate) {
      setIsVisible(true)
      return
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [immediate, once, rootMargin, threshold])

  return { ref, isVisible }
}
