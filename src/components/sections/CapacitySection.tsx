import { siteContent } from '@/data/siteContent'

export function CapacitySection() {
  const { capacity } = siteContent

  return (
    <section className="bg-surface-container-high border-t border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-0 h-64 lg:h-auto relative min-h-[16rem]">
          <img
            src={capacity.image}
            alt={capacity.imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
          <p className="text-label-caps text-primary mb-4">{capacity.eyebrow}</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight">
            {capacity.title}
          </h2>
          <p className="text-on-surface-variant mb-8">{capacity.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capacity.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
