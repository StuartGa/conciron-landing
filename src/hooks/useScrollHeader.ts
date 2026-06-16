import { useEffect, useState } from 'react'

/**
 * Tracks whether the page has scrolled past a vertical threshold.
 * Used by the landing header to toggle shadow/elevation on scroll.
 *
 * @param threshold - Scroll offset in pixels before `scrolled` becomes `true` (default: 50)
 * @returns `true` when `window.scrollY > threshold`
 */
export function useScrollHeader(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
