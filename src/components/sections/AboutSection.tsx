import { siteContent } from '@/data/siteContent'
import { Container, Button, ValueChip } from '@/components/ui'
import { IdentityIcon } from '@/components/ui/icons'

export function AboutSection() {
  const { about } = siteContent

  return (
    <section id="conocenos" className="bg-surface-light text-gray-900 py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <p className="text-label-caps text-primary mb-2">{about.eyebrow}</p>
            <h2 className="text-4xl font-extrabold mb-6 leading-tight text-gray-900">{about.title}</h2>
            <p className="text-gray-600 mb-6">{about.description}</p>
            <Button variant="primary" className="text-sm px-6 py-2 min-h-12">
              {about.ctaLabel}
            </Button>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {about.identity.map((card) => (
              <div key={card.id} className="bg-white p-6 border border-gray-100 flex flex-col">
                <div className="text-primary mb-4">
                  <IdentityIcon icon={card.icon} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm font-semibold text-gray-500 mb-4">{about.valuesLabel}</p>
          <div className="flex flex-wrap gap-4">
            {about.values.map((value) => (
              <ValueChip key={value.id} value={value} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
