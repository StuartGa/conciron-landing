import { siteContent } from '@/data/siteContent'
import { Container } from '@/components/ui/Container'
import { PublicImage } from '@/components/ui/PublicImage'

/**
 * Full-width banner highlighting operational precision — background image with overlay.
 */
export function OperationalSection() {
  const { operational } = siteContent

  return (
    <section className="relative py-24 bg-surface">
      <div className="absolute inset-0 z-0 opacity-40">
        <PublicImage src={operational.image} alt="" className="w-full h-full object-cover grayscale" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
      </div>
      <Container className="relative z-10">
        <div className="max-w-2xl">
          <p className="text-label-caps text-primary mb-4">{operational.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {operational.title}
          </h2>
          <p className="text-lg text-on-surface-variant">{operational.description}</p>
        </div>
      </Container>
    </section>
  )
}
