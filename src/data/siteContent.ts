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
    logoFooter: '/images/logo-conciron-icon.png',
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
    image: '/images/hero.webp',
    imageAlt: 'Vertido de concreto en obra de construcción',
  },

  categories: [
    {
      id: 'cemento',
      title: 'Cemento',
      description:
        'Cemento Portland Compuesto y Mortero de Albañilería de alta calidad.',
      image: '/images/category-cemento.webp',
      imageAlt: 'Presentación de sacos de cemento Conciron',
      href: '#productos',
    },
    {
      id: 'concreto',
      title: 'Concreto',
      description:
        'Concreto premezclado estructural y convencional para todo tipo de proyectos.',
      image: '/images/category-concreto.webp',
      imageAlt: 'Servicio de concreto premezclado',
      href: '#productos',
    },
    {
      id: 'aceros',
      title: 'Aceros Estructurales',
      description:
        'Varilla de alto grado, perfiles, alambre y más para refuerzo estructural.',
      image: '/images/category-acero.webp',
      imageAlt: 'Acero estructural en obra',
      href: '#productos',
    },
    {
      id: 'otros',
      title: 'Otros Productos',
      description:
        'Materiales para construcción que complementan cada etapa de tu obra.',
      image: '/images/product-materiales.webp',
      imageAlt: 'Materiales para construcción',
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
    image: '/images/operational.webp',
    imageAlt: 'Obra de construcción industrial',
  },

  products: {
    eyebrow: 'Productos Destacados',
    title: 'Soluciones para cada etapa de tu obra.',
    viewAllHref: '#productos',
    initialVisibleGroupCount: 2,
    groups: [
      {
        id: 'cemento-envasado',
        line: 'Cemento',
        title: 'Cemento Envasado',
        description: 'Presentación en saco para obra y distribución.',
        items: [
          {
            id: 'cpc-30r',
            title: 'CPC 30 R',
            description:
              'Cemento Portland Compuesto, Clase Resistente 30 de Resistencia Rápida. Cumple NMX-C-414-ONNCCE.',
            image: '/images/product-cpc-30r.webp',
            imageAlt: 'Saco Cemento CPC 30 R',
            href: '#contacto',
            imageFit: 'contain',
            presentation: 'Envasado',
            ctaLabel: 'Cotizar',
          },
          {
            id: 'cpc-30rs',
            title: 'CPC 30 RS',
            description:
              'Cemento Portland Compuesto resistente a sulfatos. Cumple NMX-C-414-ONNCCE.',
            image: '/images/product-cpc-30rs.webp',
            imageAlt: 'Saco Cemento CPC 30 RS',
            href: '#contacto',
            imageFit: 'contain',
            presentation: 'Envasado',
            ctaLabel: 'Cotizar',
          },
          {
            id: 'albanileria',
            title: 'CPD Blanco Albañilería',
            description:
              'Mortero para trabajos de albañilería. Cumple NMX-C-021-ONNCCE.',
            image: '/images/product-albanileria.webp',
            imageAlt: 'Saco Mortero de Albañilería',
            href: '#contacto',
            imageFit: 'contain',
            presentation: 'Envasado',
            ctaLabel: 'Cotizar',
          },
        ],
      },
      {
        id: 'cemento-granel',
        line: 'Cemento',
        title: 'Cemento a Granel',
        description: 'Suministro por tracto y tolva para volúmenes mayores.',
        items: [
          {
            id: 'cpc-40',
            title: 'CPC 40',
            description:
              'Cemento Portland Compuesto Clase Resistente 40 para estructuras de mayor exigencia. Cumple NMX-C-414-ONNCCE.',
            image: '/images/product-cpc-40.webp',
            imageAlt: 'Suministro de cemento CPC 40 a granel',
            href: '#contacto',
            imageFit: 'cover',
            presentation: 'Granel · Tracto y tolva',
            ctaLabel: 'Cotizar',
          },
          {
            id: 'cpc-40rs',
            title: 'CPC 40 RS',
            description:
              'Cemento resistente a sulfatos a granel (tracto y tolva). Ideal para obras con condiciones agresivas.',
            image: '/images/product-cpc-40rs.webp',
            imageAlt: 'Cemento CPC 40 RS a granel para tracto y tolva',
            href: '#contacto',
            imageFit: 'cover',
            presentation: 'Granel · Tracto y tolva',
            ctaLabel: 'Cotizar',
          },
        ],
      },
      {
        id: 'concreto',
        line: 'Concreto',
        title: 'Concreto',
        description: 'Premezclado estructural y convencional según especificación de obra.',
        items: [
          {
            id: 'concreto-estructural',
            title: 'Concreto Estructural',
            description:
              'Alta especificación para proyectos que requieren resistencia, durabilidad y seguridad estructural.',
            image: '/images/product-concreto.webp',
            imageAlt: 'Camión revolvedora de concreto estructural',
            href: '#contacto',
            imageFit: 'cover',
            ctaLabel: 'Cotizar',
          },
          {
            id: 'concreto-convencional',
            title: 'Concreto Convencional',
            description:
              'Concreto premezclado para aplicaciones generales en obra: losas, firmes, rellenos y elementos no estructurales.',
            image: '/images/product-concreto-convencional.webp',
            imageAlt: 'Servicio de concreto premezclado convencional',
            href: '#contacto',
            imageFit: 'cover',
            ctaLabel: 'Cotizar',
          },
        ],
      },
      {
        id: 'aceros',
        line: 'Aceros Estructurales',
        title: 'Aceros Estructurales',
        description: 'Refuerzo y perfiles para estructuras de concreto.',
        items: [
          {
            id: 'acero-estructural',
            title: 'Varilla y perfiles',
            description:
              'Varilla, malla, perfiles y alambre de alto grado para refuerzo estructural.',
            image: '/images/product-acero.webp',
            imageAlt: 'Malla y acero de refuerzo estructural',
            href: '#contacto',
            imageFit: 'cover',
            ctaLabel: 'Cotizar',
          },
        ],
      },
      {
        id: 'otros',
        line: 'Otros Productos',
        title: 'Otros Productos',
        description: 'Materiales complementarios para construcción.',
        items: [
          {
            id: 'materiales',
            title: 'Materiales para Construcción',
            description:
              'Insumos y materiales que acompañan el suministro de cemento, concreto y acero en obra.',
            image: '/images/product-materiales.webp',
            imageAlt: 'Materiales para construcción en obra',
            href: '#contacto',
            imageFit: 'cover',
            ctaLabel: 'Cotizar',
          },
        ],
      },
    ],
  },

  capacity: {
    eyebrow: 'Capacidad Operativa',
    title: 'Cumplimos en tiempo, volumen y especificación.',
    description:
      'Contamos con flotilla propia para asegurar entregas continuas y confiables en obra.',
    image: '/images/capacity-truck.webp',
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
    ctaLabel: 'Solicitar cotización',
    identity: [
      {
        id: 'mission',
        title: 'Misión',
        description:
          'Ofrecer cemento, concreto y aceros estructurales con servicio profesional, entregas puntuales y atención personalizada.',
        icon: 'mission',
      },
      {
        id: 'vision',
        title: 'Visión',
        description:
          'Ser el proveedor de referencia en materiales para la construcción en México, por excelencia operativa y confiabilidad.',
        icon: 'vision',
      },
      {
        id: 'purpose',
        title: 'Propósito',
        description:
          'Suministrar los materiales que edifican México, con la solidez y el compromiso de más de 35 años.',
        icon: 'purpose',
      },
    ],
    valuesLabel: 'Valores que nos definen',
    values: [
      {
        id: 'compliance',
        label: 'Cumplimiento',
        description: 'Entregamos en tiempo, volumen y especificación.',
        icon: 'compliance',
      },
      {
        id: 'integrity',
        label: 'Integridad',
        description: 'Actuamos con transparencia en cada relación comercial.',
        icon: 'integrity',
      },
      {
        id: 'service',
        label: 'Servicio',
        description: 'Acompañamos cada proyecto con atención cercana.',
        icon: 'service',
      },
      {
        id: 'commitment',
        label: 'Compromiso',
        description: 'Nos involucramos hasta ver tu obra avanzar.',
        icon: 'commitment',
      },
      {
        id: 'legacy',
        label: 'Legado',
        description: 'Más de tres décadas construyendo confianza.',
        icon: 'legacy',
      },
    ],
  },

  cta: {
    eyebrow: '¿Tienes un proyecto en mente?',
    title: 'Hablemos de tu próximo proyecto.',
    button: { label: 'Enviar solicitud', href: '#contacto' },
    form: {
      nameLabel: 'Nombre',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      messageLabel: 'Cuéntanos sobre tu proyecto',
      submitLabel: 'Solicitar cotización',
      successMessage: 'Gracias. Recibimos tu solicitud y te contactaremos pronto.',
    },
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
          { label: 'Otros Productos', href: '#productos' },
        ],
      },
      {
        title: 'Empresa',
        links: [
          { label: 'Conócenos', href: '#conocenos' },
          { label: 'Misión, Visión y Valores', href: '#conocenos' },
          { label: 'Capacidad Operativa', href: '#capacidad' },
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
      { label: 'Aviso de privacidad', href: '/legal/aviso-privacidad.html' },
      { label: 'Términos y condiciones', href: '/legal/terminos.html' },
    ],
  },
}
