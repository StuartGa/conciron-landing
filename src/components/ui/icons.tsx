import type { StatIcon as StatIconName, ValueIcon as ValueIconName } from '@/types'
import { cn } from '@/lib/cn'

interface IconProps {
  className?: string
}

const stroke = {
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  strokeWidth: 1.5,
}

/**
 * Renders the SVG icon associated with an experience stat on the landing page.
 *
 * @param name - Stat identifier (`calendar`, `delivery`, `coverage`, `support`)
 * @param className - Optional Tailwind classes for sizing and color
 */
export function StatIcon({ name, className }: { name: StatIconName; className?: string }) {
  const props = { className: cn('w-6 h-6', className), fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', 'aria-hidden': true as const }

  switch (name) {
    case 'calendar':
      return (
        <svg {...props}>
          <path {...stroke} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    case 'delivery':
      return (
        <svg {...props}>
          <path {...stroke} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    case 'coverage':
      return (
        <svg {...props}>
          <path {...stroke} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path {...stroke} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    case 'support':
      return (
        <svg {...props}>
          <path {...stroke} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
  }
}

/**
 * Renders the SVG icon for a company value chip in the About section.
 *
 * @param name - Value identifier (`compliance`, `integrity`, `service`, etc.)
 * @param className - Optional Tailwind classes
 */
export function ValueIcon({ name, className }: { name: ValueIconName; className?: string }) {
  const props = { className: cn('w-4 h-4 text-primary', className), fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', 'aria-hidden': true as const }

  switch (name) {
    case 'compliance':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    case 'integrity':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    case 'service':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'commitment':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    case 'legacy':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
  }
}

/**
 * Renders the category icon for a product line card (cement, concrete, steel).
 *
 * @param categoryId - Category slug from `siteContent.categories`
 * @param className - Optional Tailwind classes
 */
export function CategoryIcon({ categoryId, className }: { categoryId: string; className?: string }) {
  const props = { className: cn('w-6 h-6', className), fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', 'aria-hidden': true as const }

  switch (categoryId) {
    case 'cemento':
      return (
        <svg {...props}>
          <path {...stroke} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    case 'concreto':
      return (
        <svg {...props}>
          <path {...stroke} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    default:
      return (
        <svg {...props}>
          <path {...stroke} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      )
  }
}

/**
 * Renders mission, vision, or purpose icons in the About identity cards.
 */
export function IdentityIcon({ icon, className }: { icon: 'mission' | 'vision' | 'purpose'; className?: string }) {
  const props = { className: cn('w-8 h-8', className), fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', 'aria-hidden': true as const }

  switch (icon) {
    case 'mission':
      return (
        <svg {...props}>
          <path {...stroke} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    case 'vision':
      return (
        <svg {...props}>
          <path {...stroke} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path {...stroke} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    case 'purpose':
      return (
        <svg {...props}>
          <path {...stroke} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
  }
}

/** Renders a checkmark used in capacity feature lists. */
export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={cn('w-5 h-5 text-primary shrink-0 mt-1', className)} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}
