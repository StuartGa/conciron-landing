import type { Product } from '@/types'
import { Card } from './Card'
import { Button } from './Button'
import { PublicImage } from './PublicImage'

interface ProductCardProps {
  product: Product
}

/**
 * Product card for catalog groups. Fixed 4:3 image frame so every card matches.
 */
export function ProductCard({ product }: ProductCardProps) {
  const ctaLabel = product.ctaLabel ?? 'Cotizar'

  return (
    <Card hover className="flex h-full min-w-0 flex-col rounded-sm bg-surface-container p-5">
      <div className="relative mb-4 aspect-[4/3] w-full shrink-0 overflow-hidden bg-surface-container-highest">
        <PublicImage
          src={product.image}
          alt={product.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          width={800}
          height={600}
        />
      </div>
      <div className="flex min-h-0 flex-1 flex-col">
        {product.presentation ? (
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
            {product.presentation}
          </p>
        ) : null}
        <h3 className="mb-1 text-lg font-bold text-white" title={product.title}>
          {product.title}
        </h3>
        {product.subtitle ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
            {product.subtitle}
          </p>
        ) : null}
        <p className="mb-3 text-sm leading-relaxed text-on-surface-variant">{product.description}</p>
        {product.highlights && product.highlights.length > 0 ? (
          <div className="mb-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">Ventajas</p>
            <ul className="space-y-1.5 text-sm text-on-surface-variant">
              {product.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <Button variant="tertiary" href={product.href} className="mt-auto shrink-0 p-0 text-xs uppercase min-h-0">
          {ctaLabel}
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Button>
      </div>
    </Card>
  )
}
