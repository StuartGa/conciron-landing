import { siteContent } from '@/data/siteContent'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StatItem } from '@/components/ui/StatItem'
import { Button } from '@/components/ui/Button'

/**
 * Experience and trust indicators — stats grid with light background contrast.
 */
export function ExperienceSection() {
  const { experience } = siteContent

  return (
    <section className="bg-surface-light text-gray-900 py-20" id="experiencia">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
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
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-8 w-full">
            {experience.stats.map((stat) => (
              <StatItem key={stat.id} stat={stat} light />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
