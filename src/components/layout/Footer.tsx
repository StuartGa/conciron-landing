import { siteContent } from '@/data/siteContent'
import { BrandLogo } from '@/components/ui/BrandLogo'

/**
 * Site footer with brand info, navigation groups, contact details and legal links.
 * Single-responsibility: renders footer content from the data layer only.
 */
export function Footer() {
  const { brand, footer } = siteContent

  return (
    <footer className="bg-footer border-t border-surface-container-high pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-3 mb-6">
              <BrandLogo src={brand.logoFooter} onDark={false} alt={brand.name} className="h-10 w-auto max-w-[140px]" />
            </a>
            <p className="text-on-surface-variant mb-6 max-w-sm">{footer.description}</p>
          </div>

          {footer.linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-on-surface-variant hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contacto</h4>
            <ul className="space-y-3 text-on-surface-variant">
              <li>{footer.contact.phone}</li>
              <li>{footer.contact.email}</li>
              <li>
                <a href={footer.contact.formHref} className="text-primary hover:text-primary-bright">
                  Formulario de contacto →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-container-high pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant">
          <p>{footer.copyright}</p>
          <div className="flex gap-6">
            {footer.legal.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
