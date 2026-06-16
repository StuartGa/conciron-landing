import { useState } from 'react'
import { siteContent } from '@/data/siteContent'
import { Container } from '@/components/ui/Container'
import { ProductCard } from '@/components/ui/ProductCard'
import { cn } from '@/lib/cn'

/**
 * Featured products grid — shows five items by default with expand control for the full catalog.
 */
export function FeaturedProductsSection() {
  const { products } = siteContent
  const [expanded, setExpanded] = useState(false)

  const hasMore = products.items.length > products.initialVisibleCount
  const visibleItems = expanded
    ? products.items
    : products.items.slice(0, products.initialVisibleCount)

  return (
    <section className="py-20 bg-surface" id="productos">
      <Container>
        <div className="mb-10 border-b border-surface-container-high pb-6">
          <p className="text-label-caps text-primary mb-2">{products.eyebrow}</p>
          <h2 className="text-3xl font-extrabold text-white">{products.title}</h2>
        </div>

        <div
          className={cn(
            'grid gap-6 pb-4',
            'grid-cols-1 sm:grid-cols-2',
            expanded ? 'lg:grid-cols-3' : 'lg:grid-cols-5',
          )}
        >
          {visibleItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center pt-6">
            <button
              type="button"
              onClick={() => setExpanded((open) => !open)}
              aria-expanded={expanded}
              aria-controls="featured-products-grid"
              className="group inline-flex flex-col items-center gap-2 text-primary font-semibold text-sm transition-colors hover:text-primary-bright min-h-12"
            >
              <span>{expanded ? 'Ver menos productos' : 'Ver más productos'}</span>
              <span
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary transition-transform duration-300 group-hover:bg-primary/10',
                  expanded && 'rotate-180',
                )}
                aria-hidden
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>
        )}
      </Container>
    </section>
  )
}
