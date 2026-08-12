import { siteContent } from '@/data/siteContent'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PublicImage } from '@/components/ui/PublicImage'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

/**
 * Hero: photo + official phrase + a single Contáctanos button.
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
        <div className="max-w-3xl">
          <ScrollReveal immediate variant="rise" delay={80}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
              {hero.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal immediate variant="layer" delay={220}>
            <Button href={hero.primaryCta.href} showArrow>
              {hero.primaryCta.label}
            </Button>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
