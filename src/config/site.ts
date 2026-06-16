/**
 * Global site configuration — SEO, canonical URLs, and social metadata.
 * Single source of truth for production deployment on GitHub Pages.
 */
export const siteConfig = {
  name: 'Conciron',
  legalName: 'Conciron Materiales de Construcción',
  title: 'Conciron — Soluciones Estructurales | Cemento, Concreto y Acero en México',
  description:
    'Más de 35 años suministrando cemento, concreto y acero estructural en México. Entregas puntuales, materiales certificados y atención personalizada.',
  keywords: [
    'cemento',
    'concreto',
    'acero estructural',
    'materiales de construcción',
    'cemento Moctezuma',
    'concreto premezclado',
    'CPC 30 R',
    'México',
    'Conciron',
  ],
  /** Production URL without trailing slash */
  url: 'https://stuartga.github.io/conciron-landing',
  locale: 'es_MX',
  lang: 'es',
  ogImage: '/images/hero.webp',
  themeColor: '#f26522',
  email: 'cotizaciones@conciron.com.mx',
  phone: '+52-55-1234-5678',
  country: 'MX',
} as const

/** Builds an absolute URL for Open Graph, JSON-LD, and canonical links. */
export function absoluteUrl(path = ''): string {
  if (!path) return siteConfig.url
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteConfig.url}${normalized}`
}
