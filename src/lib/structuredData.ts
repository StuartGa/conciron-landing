import { siteConfig, absoluteUrl } from '@/config/site'
import { siteContent } from '@/data/siteContent'

/**
 * Generates Schema.org JSON-LD graphs for search engines.
 * Injected once at app mount for the single-page landing.
 */
export function buildStructuredData(): Record<string, unknown>[] {
  const logoUrl = absoluteUrl(siteContent.brand.logoHeader)

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      logo: logoUrl,
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: {
        '@type': 'Country',
        name: 'México',
      },
      sameAs: [],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: siteConfig.lang,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: siteConfig.title,
      description: siteConfig.description,
      url: siteConfig.url,
      isPartOf: { '@type': 'WebSite', url: siteConfig.url },
      about: {
        '@type': 'Thing',
        name: 'Materiales de construcción — cemento, concreto y acero estructural',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      image: absoluteUrl(siteConfig.ogImage),
      email: siteConfig.email,
      telephone: siteConfig.phone,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressCountry: siteConfig.country,
      },
    },
  ]
}
