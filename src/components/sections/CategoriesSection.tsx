import { siteContent } from '@/data/siteContent'
import { Container } from '@/components/ui/Container'
import { CategoryCard } from '@/components/ui/CategoryCard'
import { CategoryIcon } from '@/components/ui/icons'
import { ScrollRevealStagger } from '@/components/ui/ScrollRevealStagger'

/**
 * Product category cards (cement, concrete, steel) — entry points to the catalog section.
 */
export function CategoriesSection() {
  const { categories } = siteContent

  return (
    <section className="bg-surface py-12 -mt-16 relative z-20" id="categorias" aria-labelledby="categorias-heading">
      <Container>
        <h2 id="categorias-heading" className="sr-only">
          Líneas de producto Conciron
        </h2>
        <ScrollRevealStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerMs={140}
          variant="rise"
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              icon={<CategoryIcon categoryId={category.id} />}
            />
          ))}
        </ScrollRevealStagger>
      </Container>
    </section>
  )
}
