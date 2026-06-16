import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { HeroSection } from '@/components/sections/HeroSection'
import { CategoriesSection } from '@/components/sections/CategoriesSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { OperationalSection } from '@/components/sections/OperationalSection'
import { FeaturedProductsSection } from '@/components/sections/FeaturedProductsSection'
import { CapacitySection } from '@/components/sections/CapacitySection'
import { AboutSection } from '@/components/sections/AboutSection'
import { CtaSection } from '@/components/sections/CtaSection'

/**
 * Root landing page composition.
 *
 * This is a single-page marketing site (no routing). Sections are composed
 * vertically and linked via anchor navigation (`#inicio`, `#productos`, etc.).
 */
export default function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ExperienceSection />
        <OperationalSection />
        <FeaturedProductsSection />
        <CapacitySection />
        <AboutSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
