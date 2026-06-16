import type { SiteContent } from '@/types'

/**
 * Central content store for the Conciron single-page landing site.
 *
 * All copy, images paths, and navigation anchors live here so sections remain
 * presentational. Edit this file to update marketing content without touching UI code.
 *
 * @see docs/API.md for the `SiteContent` schema
 */
export const siteContent: SiteContent = {
  brand: {
    name: 'Conciron',
    tagline: 'Materiales que construyen confianza',
    logoHeader: '/images/logo-conciron-orange.png',
    logo: '/images/logo-conciron.png',
    logoIcon: '/images/logo-icon.png',
    logoWhite: '/images/logo-conciron-white.png',
  },

  navigation: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Productos', href: '#productos' },
    { label: 'Conócenos', href: '#conocenos' },
    { label: 'Contacto', href: '#contacto' },
  ],

  hero: {
    eyebrow: 'Materiales que construyen confianza',
    title: 'Soluciones estructurales para construir con certeza.',
    description:
      'Más de 35 años suministrando concreto, cemento y acero para proyectos de alta exigencia en México.',
    primaryCta: { label: 'Solicitar cotización', href: '#contacto' },
    secondaryCta: { label: 'Ver soluciones', href: '#categorias' },
    image: '/images/hero.jpg',
    imageAlt: 'Vertido de concreto en obra de construcción',
  },

  categories: [
    {
      id: 'cemento',
      title: 'Cemento',
      description:
        'Cemento Portland Compuesto y Mortero de Albañilería de alta calidad.',
      image: '/images/category-cemento.png',
      imageAlt: 'Presentación de sacos de cemento Conciron',
      href: '#productos',
    },
    {
      id: 'concreto',
      title: 'Concreto',
      description:
        'Concreto premezclado y empaquetado para todo tipo de proyectos.',
      image: '/images/category-concreto.jpg',
      imageAlt: 'Servicio de concreto premezclado',
      href: '#productos',
    },
    {
      id: 'aceros',
      title: 'Aceros Estructurales',
      description:
        'Varilla de alto grado, perfiles, alambre y más para refuerzo estructural.',
      image: '/images/category-acero.jpg',
      imageAlt: 'Acero estructural en obra',
      href: '#productos',
    },
  ],

  experience: {
    eyebrow: 'Experiencia que sostiene grandes proyectos',
    title: 'Más de tres décadas construyendo confianza.',
    description:
      'Somos sus principales aliados comprometidos con la calidad, el servicio y la puntualidad en cada entrega.',
    cta: { label: 'Conócenos más', href: '#conocenos' },
    stats: [
      { id: 'years', value: '35+', label: 'Años de experiencia', icon: 'calendar' },
      { id: 'delivery', value: 'Entregas', label: 'Puntuales', icon: 'delivery' },
      { id: 'coverage', value: 'Cobertura', label: 'Operativa', icon: 'coverage' },
      { id: 'support', value: 'Atención', label: 'Personalizada', icon: 'support' },
    ],
  },

  operational: {
    eyebrow: 'Precisión que construye proyectos',
    title: 'Precisión operativa para proyectos que no admiten errores.',
    description:
      'Materiales certificados, procesos controlados y un equipo comprometido con la excelencia en cada detalle.',
    image: '/images/operational.jpg',
    imageAlt: 'Obra de construcción industrial',
  },

  products: {
    eyebrow: 'Productos Destacados',
    title: 'Soluciones para cada etapa de tu obra.',
    viewAllHref: '#productos',
    items: [
      {
        id: 'cpc-30r',
        title: 'CPC 30 R',
        description:
          'Cemento Portland Compuesto, Clase Resistente 30 de Resistencia Rápida. Cumple NMX-C-414-ONNCCE.',
        image: '/images/product-cpc-30r.jpg',
        imageAlt: 'Saco Cemento CPC 30 R',
        href: '#contacto',
        imageFit: 'contain',
      },
      {
        id: 'cpc-30rs',
        title: 'CPC 30 RS',
        description:
          'Cemento Portland Compuesto resistente a sulfatos. Cumple NMX-C-414-ONNCCE.',
        image: '/images/product-cpc-30rs.jpg',
        imageAlt: 'Saco Cemento CPC 30 RS',
        href: '#contacto',
        imageFit: 'contain',
      },
      {
        id: 'albanileria',
        title: 'CPO Blanco Albañilería',
        description:
          'Mortero para trabajos de albañilería. Cumple NMX-C-021-ONNCCE.',
        image: '/images/product-albanileria.png',
        imageAlt: 'Saco Mortero de Albañilería',
        href: '#contacto',
        imageFit: 'contain',
      },
      {
        id: 'concreto-estructural',
        title: 'Concreto Estructural',
        description:
          'Alta especificación para proyectos que requieren resistencia, durabilidad y seguridad estructural.',
        image: '/images/product-concreto.jpg',
        imageAlt: 'Camión revolvedora de concreto',
        href: '#contacto',
        imageFit: 'cover',
      },
    ],
  },

  capacity: {
    eyebrow: 'Capacidad Operativa',
    title: 'Cumplimos en tiempo, volumen y especificación.',
    description:
      'Contamos con flotilla propia para asegurar entregas continuas y confiables en obra.',
    image: '/images/capacity-truck.jpg',
    imageAlt: 'Camión revolvedora Conciron',
    features: [
      'Flota propia moderna',
      'Cobertura en múltiples estados',
      'Volúmenes a la medida',
      'Soporte técnico y comercial',
    ],
  },

  about: {
    eyebrow: 'Sobre Conciron',
    title: 'Construimos más que estructuras, construimos relaciones duraderas.',
    description:
      'Empresa familiar con más de 35 años de experiencia en el suministro de materiales de construcción con presencia en México. Como aliados comerciales de Cementos Moctezuma, nos comprometemos a ofrecer soluciones integrales respaldadas por un servicio profesional.',
    ctaLabel: 'Conoce nuestra historia',
    identity: [
      {
        id: 'mission',
        title: 'Misión',
        description:
          'Somos una empresa familiar con más de 35 años de trayectoria en el suministro de cemento, concreto y aceros estructurales. Nos comprometemos a ofrecer soluciones integrales respaldadas por un servicio profesional, entregas puntuales y atención personalizada.',
        icon: 'mission',
      },
      {
        id: 'vision',
        title: 'Visión',
        description:
          'Consolidarnos como el proveedor de referencia en materiales para la construcción en México, reconocidos por nuestra capacidad de atender los proyectos más exigentes con excelencia operativa y confiabilidad.',
        icon: 'vision',
      },
      {
        id: 'purpose',
        title: 'Propósito',
        description:
          'Suministramos los materiales que edifican México, con la solidez, la seriedad y el compromiso que distinguen a nuestra empresa desde hace más de 35 años.',
        icon: 'purpose',
      },
    ],
    valuesLabel: 'Valores que nos definen:',
    values: [
      { id: 'compliance', label: 'Cumplimiento', icon: 'compliance' },
      { id: 'integrity', label: 'Integridad', icon: 'integrity' },
      { id: 'service', label: 'Servicio', icon: 'service' },
      { id: 'commitment', label: 'Compromiso', icon: 'commitment' },
      { id: 'legacy', label: 'Legado', icon: 'legacy' },
    ],
  },

  cta: {
    eyebrow: '¿Tienes un proyecto en mente?',
    title: 'Hablemos de tu próximo proyecto.',
    button: { label: 'Contactar ahora', href: 'mailto:cotizaciones@conciron.com.mx' },
    email: 'cotizaciones@conciron.com.mx',
  },

  footer: {
    description:
      'Más de 35 años construyendo proyectos, certidumbre y confianza para el desarrollo y crecimiento en México.',
    linkGroups: [
      {
        title: 'Soluciones',
        links: [
          { label: 'Cemento', href: '#productos' },
          { label: 'Concreto', href: '#productos' },
          { label: 'Acero Estructural', href: '#productos' },
          { label: 'Obras Realizadas', href: '#conocenos' },
        ],
      },
      {
        title: 'Empresa',
        links: [
          { label: 'Conócenos', href: '#conocenos' },
          { label: 'Misión, Visión y Valores', href: '#conocenos' },
          { label: 'Capacidad Operativa', href: '#experiencia' },
        ],
      },
    ],
    contact: {
      phone: '55 1234 5678',
      email: 'cotizaciones@conciron.com.mx',
      formHref: '#contacto',
    },
    copyright: '© 2026 Conciron. Todos los derechos reservados.',
    legal: [
      { label: 'Aviso de privacidad', href: '#' },
      { label: 'Términos y condiciones', href: '#' },
    ],
  },
}
