import type { ImgHTMLAttributes } from 'react'
import { PublicImage } from '@/components/ui/PublicImage'
import { cn } from '@/lib/cn'

interface BrandLogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /** Path under `public/` (typically `brand.logo`) */
  src: string
  /** Apply white tint for dark header/footer backgrounds (default: true) */
  onDark?: boolean
}

/**
 * Brand mark for header and footer on dark surfaces.
 * Set `onDark={false}` when using the full-color orange logo on charcoal backgrounds.
 */
export function BrandLogo({ src, className, onDark = true, ...props }: BrandLogoProps) {
  return (
    <PublicImage
      src={src}
      className={cn(onDark && 'brightness-0 invert', className)}
      {...props}
    />
  )
}
