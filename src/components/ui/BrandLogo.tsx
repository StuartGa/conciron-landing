import type { ImgHTMLAttributes } from 'react'
import { PublicImage } from '@/components/ui/PublicImage'
import { cn } from '@/lib/cn'

interface BrandLogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /** Path under `public/` (typically `brand.logo`) */
  src: string
  /** Apply white tint for dark header/footer backgrounds */
  onDark?: boolean
  /**
   * Removes baked-in black background from legacy JPEG/WebP brand assets via blend mode.
   * Prefer transparent PNG assets and keep this `false`.
   */
  knockoutBackground?: boolean
}

/**
 * Brand mark for header and footer on dark surfaces.
 * Transparent PNG logos render as-is; legacy assets can still use `knockoutBackground`.
 */
export function BrandLogo({
  src,
  className,
  onDark = false,
  knockoutBackground = false,
  ...props
}: BrandLogoProps) {
  return (
    <span className="inline-flex">
      <PublicImage
        src={src}
        className={cn(
          onDark && 'brightness-0 invert',
          knockoutBackground && !onDark && 'mix-blend-lighten',
          className,
        )}
        {...props}
      />
    </span>
  )
}
