import { siteContent } from '@/data/siteContent'
import { useScrollHeader } from '@/hooks/useScrollHeader'
import { Button } from '@/components/ui/Button'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { cn } from '@/lib/cn'

/**
 * Fixed top navigation for the Conciron landing page.
 * Applies a shadow when the user scrolls past the threshold (sticky header pattern).
 */
export function Header() {
  const scrolled = useScrollHeader()
  const { brand, navigation } = siteContent

  return (
    <header
      className={cn(
        'fixed w-full top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-surface-container-high transition-all duration-300',
        scrolled && 'shadow-md',
      )}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#inicio" className="flex items-center gap-3" aria-label={`${brand.name} — inicio`}>
            <BrandLogo src={brand.logoHeader} alt={brand.name} className="h-10 w-auto max-w-[180px]" />
            <span className="sr-only">{brand.name}</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-on-surface hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button href="#contacto" className="px-6 py-2 text-sm">
            Cotizar
          </Button>
        </div>
      </div>
    </header>
  )
}
