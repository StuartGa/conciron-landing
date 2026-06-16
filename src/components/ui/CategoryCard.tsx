import type { Category } from '@/types'
import { Card } from './Card'
import { Button } from './Button'
import { PublicImage } from './PublicImage'

interface CategoryCardProps {
  category: Category
  icon: React.ReactNode
}

/**
 * Category line card for the landing grid (cement, concrete, steel).
 * Composes `Card` + image + icon + tertiary CTA link.
 */
export function CategoryCard({ category, icon }: CategoryCardProps) {
  return (
    <Card hover className="overflow-hidden cursor-pointer group rounded-sm">
      <div className="h-48 relative overflow-hidden">
        <PublicImage
          src={category.image}
          alt={category.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          width={800}
          height={450}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high to-transparent" />
      </div>
      <div className="p-6 relative">
        <div className="w-10 h-10 bg-surface border border-outline-variant flex items-center justify-center absolute -top-12 left-6 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
        <p className="text-sm text-on-surface-variant mb-4">{category.description}</p>
        <Button variant="tertiary" href={category.href} className="text-sm p-0 min-h-0">
          Ver productos
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Button>
      </div>
    </Card>
  )
}
