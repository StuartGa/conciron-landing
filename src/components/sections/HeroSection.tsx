import { siteContent } from '@/data/siteContent'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PublicImage } from '@/components/ui/PublicImage'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

/**
 * Full-viewport hero section — primary value proposition and CTAs for the landing page.
 */
export function HeroSection() {
  const { hero } = siteContent

  return (
    <section className="relative pt-20 h-screen min-h-[600px] flex items-center" id="inicio">
      <div className="absolute inset-0 z-0">
        <PublicImage
          src={hero.image}
          alt={hero.imageAlt}
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
          width={1600}
          height={2133}
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="max-w-2xl">
          <ScrollReveal immediate variant="rise" delay={0}>
            <p className="text-label-caps text-primary mb-4">{hero.eyebrow}</p>
          </ScrollReveal>
          <ScrollReveal immediate variant="rise" delay={120}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              {hero.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal immediate variant="rise" delay={240}>
            <p className="text-lg md:text-xl text-on-surface-variant mb-8 max-w-lg">{hero.description}</p>
          </ScrollReveal>
          <ScrollReveal immediate variant="layer" delay={360}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={hero.primaryCta.href} showArrow>
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary" showArrow>
                {hero.secondaryCta.label}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
