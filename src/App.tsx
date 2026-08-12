import { lazy, Suspense } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SkipLink } from '@/components/seo/SkipLink'
import { StructuredData } from '@/components/seo/StructuredData'
import { HeroSection } from '@/components/sections/HeroSection'

const FeaturedProductsSection = lazy(() =>
  import('@/components/sections/FeaturedProductsSection').then((m) => ({
    default: m.FeaturedProductsSection,
  })),
)
const AboutSection = lazy(() =>
  import('@/components/sections/AboutSection').then((m) => ({ default: m.AboutSection })),
)
const CtaSection = lazy(() =>
  import('@/components/sections/CtaSection').then((m) => ({ default: m.CtaSection })),
)

/**
 * Landing structure from the official brief:
 * 1. Foto y frase + Contáctanos
 * 2. Productos principales
 * 3. Sobre la empresa
 * 4. Contáctanos (formulario)
 */
export default function App() {
  return (
    <>
      <StructuredData />
      <SkipLink />
      <Header />
      <main id="main-content">
        <HeroSection />
        <Suspense fallback={null}>
          <FeaturedProductsSection />
          <AboutSection />
          <CtaSection />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
