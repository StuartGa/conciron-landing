import { siteContent } from '@/data/siteContent'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StatItem } from '@/components/ui/StatItem'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ScrollRevealStagger } from '@/components/ui/ScrollRevealStagger'

/**
 * Experience and trust indicators — stats grid with light background contrast.
 */
export function ExperienceSection() {
  const { experience } = siteContent

  return (
    <section className="bg-surface-light text-gray-900 py-20" id="experiencia">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <ScrollReveal className="lg:w-1/2" variant="slide-left">
            <SectionHeader
              eyebrow={experience.eyebrow}
              title={experience.title}
              light
              className="mb-6"
            />
            <p className="text-gray-600 mb-8 text-lg">{experience.description}</p>
            <Button href={experience.cta.href} showArrow>
              {experience.cta.label}
            </Button>
          </ScrollReveal>
          <ScrollRevealStagger
            className="lg:w-1/2 grid grid-cols-2 gap-8 w-full"
            staggerMs={100}
            variant="layer"
          >
            {experience.stats.map((stat) => (
              <StatItem key={stat.id} stat={stat} light />
            ))}
          </ScrollRevealStagger>
        </div>
      </Container>
    </section>
  )
}
