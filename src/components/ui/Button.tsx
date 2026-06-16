import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

interface ButtonBaseProps {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
  showArrow?: boolean
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary hover:bg-primary/90 text-white font-bold min-h-12 px-8 py-3 transition-colors',
  secondary:
    'border-2 border-on-surface/30 hover:border-primary text-white font-bold min-h-12 px-8 py-3 bg-surface/50 backdrop-blur-sm transition-colors',
  tertiary:
    'text-primary font-semibold hover:gap-2 gap-1 inline-flex items-center transition-all underline-offset-4 hover:underline',
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={cn('w-4 h-4', className)} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

/**
 * Polymorphic CTA control for the landing page.
 * Renders as `<a>` when `href` is set, otherwise `<button>`.
 *
 * @param variant - Visual style: `primary` (orange fill), `secondary` (ghost border), `tertiary` (text link)
 * @param showArrow - Appends a right-arrow icon for directional CTAs
 */
export function Button({
  variant = 'primary',
  children,
  className,
  showArrow = false,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 text-sm rounded-sm',
    variantStyles[variant],
    className,
  )

  const content = (
    <>
      {children}
      {showArrow && <ArrowIcon />}
    </>
  )

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props
    return (
      <a href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}
