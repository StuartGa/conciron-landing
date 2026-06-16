import type { ImgHTMLAttributes } from 'react'
import { assetUrl } from '@/lib/assetUrl'
import { cn } from '@/lib/cn'

interface PublicImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Path under `public/` (e.g. `/images/hero.jpg`) */
  src: string
}

/**
 * Image tag for static files in `public/`, with correct base path on GitHub Pages.
 */
export function PublicImage({ src, className, ...props }: PublicImageProps) {
  return <img src={assetUrl(src)} className={cn(className)} {...props} />
}
