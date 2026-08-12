import { siteContent } from '@/data/siteContent'
import type { ProductGroup } from '@/types'
import { Container } from '@/components/ui/Container'
import { ProductCard } from '@/components/ui/ProductCard'
import { PublicImage } from '@/components/ui/PublicImage'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ScrollRevealStagger } from '@/components/ui/ScrollRevealStagger'
import { cn } from '@/lib/cn'

/**
 * Official catalog: Cemento (envasado + granel), Concreto, Aceros, Otros.
 */
export function FeaturedProductsSection() {
  const { products } = siteContent
  const lines = groupByLine(products.groups)

  return (
    <section className="py-16 md:py-20 bg-surface" id="productos">
      <Container>
        <ScrollReveal className="mb-12 border-b border-surface-container-high pb-6" variant="rise">
          <h2 className="text-3xl font-extrabold text-white">{products.title}</h2>
        </ScrollReveal>

        <div className="space-y-20">
          {lines.map((line) => (
            <div key={line.name}>
              <ScrollReveal className="mb-8" variant="rise">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">{line.name}</h3>
              </ScrollReveal>
              <div className="space-y-14">
                {line.groups.map((group) => (
                  <ProductGroupBlock key={group.id} group={group} hideLine />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function groupByLine(groups: ProductGroup[]) {
  const lines: { name: string; groups: ProductGroup[] }[] = []
  for (const group of groups) {
    const current = lines[lines.length - 1]
    if (current && current.name === group.line) {
      current.groups.push(group)
    } else {
      lines.push({ name: group.line, groups: [group] })
    }
  }
  return lines
}

function ProductGroupBlock({ group, hideLine = false }: { group: ProductGroup; hideLine?: boolean }) {
  const hasCatalog = Boolean(group.catalog && group.catalog.length > 0)
  const showTitle = group.title !== group.line

  return (
    <ScrollReveal variant="rise">
      <section id={group.id} className="scroll-mt-28">
        {(showTitle || (!hideLine && group.line)) && (
          <div className="mb-6">
            {!hideLine ? (
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary mb-1">{group.line}</p>
            ) : null}
            {showTitle ? <h4 className="text-xl md:text-2xl font-bold text-white">{group.title}</h4> : null}
            {group.description ? (
              <p className="mt-2 text-sm md:text-base text-on-surface-variant max-w-3xl">{group.description}</p>
            ) : null}
          </div>
        )}

        {!showTitle && group.description ? (
          <p className="mb-6 text-sm md:text-base text-on-surface-variant max-w-3xl">{group.description}</p>
        ) : null}

        {group.image && !hasCatalog && group.items.length === 0 ? (
          <div className="mb-6 overflow-hidden">
            <PublicImage
              src={group.image}
              alt={group.imageAlt ?? group.title}
              className="w-full h-56 md:h-80 object-cover"
              loading="lazy"
              width={1200}
              height={640}
            />
          </div>
        ) : null}

        {group.items.length > 0 ? (
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
        ) : null}

        {hasCatalog ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {group.image ? (
              <div className="overflow-hidden bg-surface-container-high min-h-64">
                <PublicImage
                  src={group.image}
                  alt={group.imageAlt ?? group.title}
                  className="w-full h-full min-h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
            ) : null}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary mb-4">Productos</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-on-surface-variant">
                {group.catalog?.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {group.catalogNote ? (
                <p className="mt-5 text-sm text-on-surface-variant/80 leading-relaxed">{group.catalogNote}</p>
              ) : null}
            </div>
          </div>
        ) : null}
      </section>
    </ScrollReveal>
  )
}
