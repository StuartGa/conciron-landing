import { useEffect, useLayoutEffect, useRef, useState } from 'react'

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

function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect()
  const viewHeight = window.innerHeight || document.documentElement.clientHeight
  return rect.top < viewHeight && rect.bottom > 0
}

/**
 * Observes an element and returns `isVisible` when it enters the viewport.
 * Powers construction-themed scroll reveal animations across the landing page.
 */
export function useScrollReveal({
  threshold = 0,
  rootMargin = '0px 0px -2% 0px',
  immediate = false,
  once = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(immediate)

  useLayoutEffect(() => {
    if (immediate) {
      setIsVisible(true)
      return
    }

    const element = ref.current
    if (!element) return

    if (isInViewport(element)) {
      setIsVisible(true)
    }
  }, [immediate])

  useEffect(() => {
    if (immediate) return

    const element = ref.current
    if (!element) return

    if (once && isVisible) return

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
  }, [immediate, isVisible, once, rootMargin, threshold])

  return { ref, isVisible }
}
