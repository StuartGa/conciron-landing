import { siteContent } from '@/data/siteContent'
import { Container } from '@/components/ui/Container'
import { PublicImage } from '@/components/ui/PublicImage'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

/**
 * Full-width banner highlighting operational precision — background image with overlay.
 */
export function OperationalSection() {
  const { operational } = siteContent

  return (
    <section className="relative py-24 bg-surface overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <PublicImage
          src={operational.image}
          alt={operational.imageAlt}
          className="w-full h-full object-cover grayscale"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
      </div>
      <Container className="relative z-10">
        <ScrollReveal className="max-w-2xl" variant="slide-right">
          <p className="text-label-caps text-primary mb-4">{operational.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {operational.title}
          </h2>
          <p className="text-lg text-on-surface-variant">{operational.description}</p>
        </ScrollReveal>
      </Container>
    </section>
  )
}
