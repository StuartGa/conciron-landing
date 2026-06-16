import { siteContent } from '@/data/siteContent'
import { Container, Button } from '@/components/ui'

export function CtaSection() {
  const { cta } = siteContent

  return (
    <section id="contacto" className="bg-surface py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary opacity-5 blur-3xl" />
      <Container className="max-w-4xl relative z-10 text-center">
        <div className="bg-surface-container-high border border-outline-variant/40 p-8 md:p-12">
          <p className="text-label-caps text-primary mb-3">{cta.eyebrow}</p>
          <h2 className="text-4xl font-extrabold text-white mb-8">{cta.title}</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button
              href={cta.button.href}
              variant="primary"
              className="px-8 py-4 text-lg w-full sm:w-auto min-h-12"
            >
              {cta.button.label} <span aria-hidden>→</span>
            </Button>
            <div className="text-on-surface-variant flex items-center gap-2 text-sm">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {cta.email}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
