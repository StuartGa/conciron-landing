import { useState } from 'react'
import { siteContent } from '@/data/siteContent'
import { Container } from '@/components/ui/Container'
import { ProductCard } from '@/components/ui/ProductCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ScrollRevealStagger } from '@/components/ui/ScrollRevealStagger'
import { cn } from '@/lib/cn'

/**
 * Featured products — grouped by product line (Cemento, Concreto, Aceros, Otros).
 * Shows the first product groups by default with a prominent expand control.
 */
export function FeaturedProductsSection() {
  const { products } = siteContent
  const [expanded, setExpanded] = useState(false)

  const hasMore = products.groups.length > products.initialVisibleGroupCount
  const visibleGroups = expanded
    ? products.groups
    : products.groups.slice(0, products.initialVisibleGroupCount)

  return (
    <section className="py-16 md:py-20 bg-surface" id="productos">
      <Container>
        <ScrollReveal className="mb-10 border-b border-surface-container-high pb-6" variant="rise">
          <p className="text-label-caps text-primary mb-2">{products.eyebrow}</p>
          <h2 className="text-3xl font-extrabold text-white">{products.title}</h2>
        </ScrollReveal>

        <div className="space-y-12">
          {visibleGroups.map((group) => (
            <ScrollReveal key={group.id} variant="rise">
              <div className="mb-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary mb-1">
                  {group.line}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{group.title}</h3>
                  {group.description ? (
                    <p className="text-sm text-on-surface-variant max-w-md">{group.description}</p>
                  ) : null}
                </div>
              </div>

              <ScrollRevealStagger
                className={cn(
                  'grid items-stretch gap-6 [&>.scroll-reveal-stagger__item]:h-full',
                  'grid-cols-1 sm:grid-cols-2',
                  group.items.length >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2',
                )}
                staggerMs={90}
                variant="layer"
              >
                {group.items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </ScrollRevealStagger>
            </ScrollReveal>
          ))}
        </div>

        {hasMore && (
          <ScrollReveal className="flex justify-center pt-12" variant="rise" delay={120}>
            <button
              type="button"
              onClick={() => setExpanded((open) => !open)}
              aria-expanded={expanded}
              className={cn(
                'group inline-flex items-center gap-3 rounded-sm border-2 border-primary bg-primary/10 px-8 py-4',
                'text-base font-bold uppercase tracking-[0.08em] text-primary transition-colors',
                'hover:bg-primary hover:text-on-primary min-h-14',
              )}
            >
              <span>{expanded ? 'Ver menos productos' : 'Ver más productos'}</span>
              <span
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full border-2 border-current transition-transform duration-300',
                  expanded && 'rotate-180',
                )}
                aria-hidden
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </ScrollReveal>
        )}
      </Container>
    </section>
  )
}
