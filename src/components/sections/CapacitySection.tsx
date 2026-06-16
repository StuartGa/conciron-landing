import { siteContent } from '@/data/siteContent'
import { CheckIcon } from '@/components/ui/icons'
import { PublicImage } from '@/components/ui/PublicImage'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ScrollRevealStagger } from '@/components/ui/ScrollRevealStagger'

export function CapacitySection() {
  const { capacity } = siteContent

  return (
    <section className="bg-surface-container-high border-t border-b border-outline-variant/30 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        <ScrollReveal className="lg:w-1/2 p-0 h-64 lg:h-auto relative min-h-[16rem]" variant="slide-left">
          <PublicImage
            src={capacity.image}
            alt={capacity.imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </ScrollReveal>
        <ScrollReveal className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center" variant="slide-right" delay={120}>
          <p className="text-label-caps text-primary mb-4">{capacity.eyebrow}</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight">
            {capacity.title}
          </h2>
          <p className="text-on-surface-variant mb-8">{capacity.description}</p>
          <ScrollRevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerMs={80} variant="rise">
            {capacity.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </ScrollRevealStagger>
        </ScrollReveal>
      </div>
    </section>
  )
}
