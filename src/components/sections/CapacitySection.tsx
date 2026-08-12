import { siteContent } from '@/data/siteContent'
import { CheckIcon } from '@/components/ui/icons'
import { PublicImage } from '@/components/ui/PublicImage'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ScrollRevealStagger } from '@/components/ui/ScrollRevealStagger'

/**
 * Operational capacity band — balanced split to avoid empty dark space.
 */
export function CapacitySection() {
  const { capacity } = siteContent

  return (
    <section
      id="capacidad"
      className="bg-surface-container-high border-t border-b border-outline-variant/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-[28rem]">
        <ScrollReveal className="relative min-h-[18rem] lg:min-h-full" variant="slide-left">
          <PublicImage
            src={capacity.image}
            alt={capacity.imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            width={1280}
            height={1920}
          />
        </ScrollReveal>
        <ScrollReveal
          className="p-8 md:p-10 lg:p-12 flex flex-col justify-center gap-6"
          variant="slide-right"
          delay={100}
        >
          <div>
            <p className="text-label-caps text-primary mb-3">{capacity.eyebrow}</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
              {capacity.title}
            </h2>
            <p className="text-on-surface-variant">{capacity.description}</p>
          </div>
          <ScrollRevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4" staggerMs={70} variant="rise">
            {capacity.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-sm text-gray-300 leading-snug">{feature}</span>
              </div>
            ))}
          </ScrollRevealStagger>
        </ScrollReveal>
      </div>
    </section>
  )
}
