import { lazy, Suspense } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SkipLink } from '@/components/seo/SkipLink'
import { StructuredData } from '@/components/seo/StructuredData'
import { HeroSection } from '@/components/sections/HeroSection'
import { CategoriesSection } from '@/components/sections/CategoriesSection'

/** Below-the-fold sections — lazy loaded to reduce initial JS bundle */
const ExperienceSection = lazy(() =>
  import('@/components/sections/ExperienceSection').then((m) => ({ default: m.ExperienceSection })),
)
const OperationalSection = lazy(() =>
  import('@/components/sections/OperationalSection').then((m) => ({ default: m.OperationalSection })),
)
const FeaturedProductsSection = lazy(() =>
  import('@/components/sections/FeaturedProductsSection').then((m) => ({
    default: m.FeaturedProductsSection,
  })),
)
const CapacitySection = lazy(() =>
  import('@/components/sections/CapacitySection').then((m) => ({ default: m.CapacitySection })),
)
const AboutSection = lazy(() =>
  import('@/components/sections/AboutSection').then((m) => ({ default: m.AboutSection })),
)
const CtaSection = lazy(() =>
  import('@/components/sections/CtaSection').then((m) => ({ default: m.CtaSection })),
)

/**
 * Root landing page composition.
 *
 * This is a single-page marketing site (no routing). Sections are composed
 * vertically and linked via anchor navigation (`#inicio`, `#productos`, etc.).
 */
export default function App() {
  return (
    <>
      <StructuredData />
      <SkipLink />
      <Header />
      <main id="main-content">
        <HeroSection />
        <CategoriesSection />
        <Suspense fallback={null}>
          <ExperienceSection />
          <OperationalSection />
          <FeaturedProductsSection />
          <CapacitySection />
          <AboutSection />
          <CtaSection />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
