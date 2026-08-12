import { siteContent } from '@/data/siteContent'
import { Container, Button } from '@/components/ui'
import { IdentityIcon } from '@/components/ui/icons'
import { ValueIcon } from '@/components/ui/icons'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ScrollRevealStagger } from '@/components/ui/ScrollRevealStagger'

/**
 * About / Conócenos — tighter layout with clear mission/vision grouping
 * and larger value icons (feedback from client notes).
 */
export function AboutSection() {
  const { about } = siteContent

  return (
    <section id="conocenos" className="bg-surface-light text-gray-900 py-16 md:py-20">
      <Container>
        <ScrollReveal className="max-w-3xl mb-12" variant="rise">
          <p className="text-label-caps text-primary mb-2">{about.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-gray-900">
            {about.title}
          </h2>
          <p className="text-gray-600 mb-6">{about.description}</p>
          <Button href="#contacto" variant="primary" className="text-sm px-6 py-2 min-h-12">
            {about.ctaLabel}
          </Button>
        </ScrollReveal>

        <ScrollRevealStagger
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14"
          staggerMs={110}
          variant="layer"
        >
          {about.identity.map((card) => (
            <div
              key={card.id}
              className="bg-white p-7 border border-gray-100 shadow-sm flex flex-col min-h-[14rem]"
            >
              <div className="text-primary mb-5">
                <IdentityIcon icon={card.icon} className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </ScrollRevealStagger>

        <ScrollReveal variant="rise">
          <div className="border-t border-gray-200 pt-10">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-gray-500 mb-8">
              {about.valuesLabel}
            </p>
            <ScrollRevealStagger
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
              staggerMs={70}
              variant="layer"
            >
              {about.values.map((value) => (
                <div
                  key={value.id}
                  className="bg-white border border-gray-100 p-6 flex flex-col items-start gap-4 min-h-[11rem]"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-primary/10 text-primary">
                    <ValueIcon name={value.icon} className="w-8 h-8 text-primary" />
                  </span>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{value.label}</p>
                    {value.description ? (
                      <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                    ) : null}
                  </div>
                </div>
              ))}
            </ScrollRevealStagger>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
