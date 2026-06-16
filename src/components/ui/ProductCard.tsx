import type { Product } from '@/types'
import { Card } from './Card'
import { Button } from './Button'
import { PublicImage } from './PublicImage'
import { cn } from '@/lib/cn'

interface ProductCardProps {
  product: Product
}

/**
 * Featured product card for the horizontal/grid product showcase.
 * Supports `contain` or `cover` image fitting via `product.imageFit`.
 */
export function ProductCard({ product }: ProductCardProps) {
  const fit = product.imageFit ?? 'contain'

  return (
    <Card hover className="flex h-full min-w-0 flex-col rounded-sm bg-surface-container p-5">
      <div
        className={cn(
          'mb-4 flex h-40 shrink-0 items-center justify-center overflow-hidden bg-surface-container-high',
          fit === 'contain' ? 'p-4' : '',
        )}
      >
        <PublicImage
          src={product.image}
          alt={product.imageAlt}
          className={cn('h-full w-full', fit === 'contain' ? 'object-contain' : 'object-cover')}
          loading="lazy"
          width={600}
          height={600}
        />
      </div>
      <div className="flex min-h-0 flex-1 flex-col">
        <h3 className="mb-1 line-clamp-2 min-h-14 text-lg font-bold text-white" title={product.title}>
          {product.title}
        </h3>
        <p
          className="mb-4 line-clamp-3 min-h-[3.75rem] flex-1 text-sm text-on-surface-variant"
          title={product.description}
        >
          {product.description}
        </p>
        <Button variant="tertiary" href={product.href} className="mt-auto shrink-0 p-0 text-xs uppercase min-h-0">
          Ver detalles
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Button>
      </div>
    </Card>
  )
}
