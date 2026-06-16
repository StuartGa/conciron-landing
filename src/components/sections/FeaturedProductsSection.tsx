import { siteContent } from '@/data/siteContent'
import { Container } from '@/components/ui/Container'
import { ProductCard } from '@/components/ui/ProductCard'
import { Button } from '@/components/ui/Button'

/**
 * Featured products grid — horizontally scrollable on mobile, 4-column on desktop.
 */
export function FeaturedProductsSection() {
  const { products } = siteContent

  return (
    <section className="py-20 bg-surface" id="productos">
      <Container>
        <div className="flex justify-between items-end mb-10 border-b border-surface-container-high pb-6">
          <div>
            <p className="text-label-caps text-primary mb-2">{products.eyebrow}</p>
            <h2 className="text-3xl font-extrabold text-white">{products.title}</h2>
          </div>
          <Button
            variant="tertiary"
            href={products.viewAllHref}
            className="hidden sm:inline-flex text-sm min-h-0 p-0"
          >
            Ver todos los productos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>

        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 scrollbar-hide snap-x">
          {products.items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-6 sm:hidden text-center">
          <Button variant="tertiary" href={products.viewAllHref} className="min-h-0 p-0">
            Ver todos los productos
          </Button>
        </div>
      </Container>
    </section>
  )
}
