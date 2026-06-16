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
    <Card hover className="min-w-0 p-5 flex flex-col rounded-sm bg-surface-container">
      <div
        className={cn(
          'h-40 mb-4 bg-surface-container-high overflow-hidden flex items-center justify-center',
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
      <h3 className="text-lg font-bold text-white mb-1">{product.title}</h3>
      <p className="text-sm text-on-surface-variant mb-4 grow">{product.description}</p>
      <Button variant="tertiary" href={product.href} className="text-xs uppercase p-0 min-h-0">
        Ver detalles
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Button>
    </Card>
  )
}
