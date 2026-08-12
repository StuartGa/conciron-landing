import { siteContent } from '@/data/siteContent'
import { Container } from '@/components/ui'
import { IdentityIcon, ValueIcon } from '@/components/ui/icons'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ScrollRevealStagger } from '@/components/ui/ScrollRevealStagger'

/**
 * Sobre la empresa — Misión, Visión, Propósito y Valores (con iconos).
 */
export function AboutSection() {
  const { about } = siteContent
  const purpose = about.identity.find((card) => card.id === 'purpose')
  const identityCards = about.identity.filter((card) => card.id !== 'purpose')

  return (
    <section id="conocenos" className="bg-surface-light text-gray-900 py-16 md:py-20">
      <Container>
        <ScrollReveal className="mb-12" variant="rise">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
            {about.eyebrow}
          </h2>
        </ScrollReveal>

        <ScrollRevealStagger
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8"
          staggerMs={110}
          variant="layer"
        >
          {identityCards.map((card) => (
            <div key={card.id} className="bg-white p-7 md:p-8 border border-gray-100 shadow-sm flex flex-col">
              <div className="text-primary mb-5">
                <IdentityIcon icon={card.icon} className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">{card.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </ScrollRevealStagger>

        {purpose ? (
          <ScrollReveal className="mb-14" variant="rise">
            <blockquote className="bg-gray-900 text-white p-8 md:p-10 border-l-4 border-primary">
              <div className="text-primary mb-4">
                <IdentityIcon icon={purpose.icon} className="w-10 h-10" />
              </div>
              <h3 className="text-label-caps text-primary mb-3">{purpose.title}</h3>
              <p className="text-xl md:text-2xl font-semibold leading-snug">“{purpose.description}”</p>
            </blockquote>
          </ScrollReveal>
        ) : null}

        <ScrollReveal variant="rise">
          <div className="border-t border-gray-200 pt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-8">{about.valuesLabel}</h3>
            <ScrollRevealStagger
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              staggerMs={70}
              variant="layer"
            >
              {about.values.map((value) => (
                <div
                  key={value.id}
                  className="bg-white border border-gray-100 p-6 flex flex-col items-start gap-4"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-primary/10 text-primary">
                    <ValueIcon name={value.icon} className="w-8 h-8 text-primary" />
                  </span>
                  <div>
                    <p className="font-bold text-gray-900 mb-2">{value.label}</p>
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
