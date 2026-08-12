import { useId, useState, type FormEvent } from 'react'
import { siteContent } from '@/data/siteContent'
import { Container, Button } from '@/components/ui'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/config/site'

const fieldClass =
  'w-full min-h-12 rounded-sm border border-outline-variant/50 bg-surface px-4 text-white placeholder:text-on-surface-variant/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'

const labelClass =
  'block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2'

/**
 * Contáctanos — visible form with Nombre, Empresa, Teléfono, Email, Estado, Mensaje.
 */
export function CtaSection() {
  const { cta } = siteContent
  const formId = useId()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const company = String(data.get('company') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const state = String(data.get('state') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const subject = encodeURIComponent(`Cotización Conciron — ${name || company || 'Nuevo proyecto'}`)
    const body = encodeURIComponent(
      [
        `Nombre: ${name}`,
        `Empresa: ${company}`,
        `Teléfono: ${phone}`,
        `Email: ${email}`,
        `Estado: ${state}`,
        '',
        message,
      ].join('\n'),
    )

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    form.reset()
  }

  return (
    <section id="contacto" className="bg-surface py-16 md:py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary opacity-5 blur-3xl" />
      <Container className="max-w-3xl relative z-10">
        <ScrollReveal variant="layer">
          <div className="bg-surface-container-high border border-outline-variant/40 p-8 md:p-12">
            <p className="text-label-caps text-primary mb-3 text-center">{cta.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">
              {cta.title}
            </h2>

            {submitted ? (
              <p className="text-center text-on-surface-variant" role="status">
                {cta.form.successMessage}
              </p>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor={`${formId}-name`} className={labelClass}>
                      {cta.form.nameLabel}
                    </label>
                    <input
                      id={`${formId}-name`}
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor={`${formId}-company`} className={labelClass}>
                      {cta.form.companyLabel}
                    </label>
                    <input
                      id={`${formId}-company`}
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor={`${formId}-phone`} className={labelClass}>
                      {cta.form.phoneLabel}
                    </label>
                    <input
                      id={`${formId}-phone`}
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor={`${formId}-email`} className={labelClass}>
                      {cta.form.emailLabel}
                    </label>
                    <input
                      id={`${formId}-email`}
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={fieldClass}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor={`${formId}-state`} className={labelClass}>
                    {cta.form.stateLabel}
                  </label>
                  <select
                    id={`${formId}-state`}
                    name="state"
                    required
                    defaultValue=""
                    className={`${fieldClass} appearance-none`}
                  >
                    <option value="" disabled>
                      Selecciona un estado
                    </option>
                    {cta.form.states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor={`${formId}-message`} className={labelClass}>
                    {cta.form.messageLabel}
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    required
                    rows={4}
                    className={`${fieldClass} py-3 resize-y min-h-28`}
                  />
                </div>
                <div className="flex justify-center pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    className="px-8 py-4 text-base w-full sm:w-auto min-h-12 uppercase tracking-wide"
                  >
                    {cta.form.submitLabel} <span aria-hidden>→</span>
                  </Button>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
