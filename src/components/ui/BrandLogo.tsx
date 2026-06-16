import type { ImgHTMLAttributes } from 'react'
import { PublicImage } from '@/components/ui/PublicImage'
import { cn } from '@/lib/cn'

interface BrandLogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /** Path under `public/` (typically `brand.logo`) */
  src: string
  /** Apply white tint for dark header/footer backgrounds */
  onDark?: boolean
  /**
   * Removes baked-in black background from JPEG/PNG brand assets via blend mode.
   * Enabled by default for full-color orange logos on dark surfaces.
   */
  knockoutBackground?: boolean
}

/**
 * Brand mark for header and footer on dark surfaces.
 * Orange logos use `mix-blend-lighten` so black pixels disappear into the charcoal background.
 */
export function BrandLogo({
  src,
  className,
  onDark = false,
  knockoutBackground = true,
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
