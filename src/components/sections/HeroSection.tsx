import { siteContent } from '@/data/siteContent'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PublicImage } from '@/components/ui/PublicImage'

/**
 * Full-viewport hero section — primary value proposition and CTAs for the landing page.
 */
export function HeroSection() {
  const { hero } = siteContent

  return (
    <section className="relative pt-20 h-screen min-h-[600px] flex items-center" id="inicio">
      <div className="absolute inset-0 z-0">
        <PublicImage src={hero.image} alt="" className="w-full h-full object-cover" aria-hidden />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="max-w-2xl">
          <p className="text-label-caps text-primary mb-4">{hero.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-8 max-w-lg">{hero.description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={hero.primaryCta.href} showArrow>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" showArrow>
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
