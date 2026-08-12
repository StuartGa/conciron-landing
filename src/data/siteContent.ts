import type { SiteContent } from '@/types'

const catalogNote =
  'Presentaciones y unidades de venta disponibles según producto. Para conocer existencias, especificaciones técnicas y volúmenes de suministro, contáctanos.'

/**
 * Central content store for the Conciron single-page landing site.
 * Copy and structure follow the official "Sitio web" brief.
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
    title: 'Más de 35 años construyendo confianza y fortaleciendo la infraestructura de México.',
    primaryCta: { label: 'Contáctanos', href: '#contacto' },
    image: '/images/hero.webp',
    imageAlt: 'Vertido de concreto en obra de construcción',
  },

  categories: [
    {
      id: 'cemento',
      title: 'Cemento',
      description: 'Cemento Portland Compuesto envasado y a granel, y mortero de albañilería.',
      image: '/images/product-cemento-envasado.webp',
      imageAlt: 'Presentación de tres sacos de cemento',
      href: '#cemento-envasado',
    },
    {
      id: 'concreto',
      title: 'Concreto',
      description: 'Concreto estructural y convencional según la especificación de cada obra.',
      image: '/images/category-concreto.webp',
      imageAlt: 'Servicio de concreto premezclado',
      href: '#concreto',
    },
    {
      id: 'aceros',
      title: 'Aceros Estructurales',
      description: 'Varilla, malla, alambre y más para reforzar estructuras de concreto.',
      image: '/images/category-acero.webp',
      imageAlt: 'Acero estructural en obra',
      href: '#aceros',
    },
    {
      id: 'otros',
      title: 'Otros Productos',
      description: 'Cal, yeso, pegazulejo y tabicón para albañilería y acabados.',
      image: '/images/product-materiales.webp',
      imageAlt: 'Materiales para construcción',
      href: '#otros',
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
    eyebrow: 'Productos principales',
    title: 'Productos principales',
    viewAllHref: '#productos',
    initialVisibleGroupCount: 5,
    groups: [
      {
        id: 'cemento-envasado',
        line: 'Cemento',
        title: 'Cemento Envasado',
        items: [
          {
            id: 'cpc-30r',
            title: 'CPC 30 R',
            subtitle: 'Cemento Portland Compuesto',
            description:
              'Nuestro Cemento Portland Compuesto, Clase Resistente 30 de Resistencia Rápida (CPC 30 R), cumple con las especificaciones de calidad establecidas en la Norma Mexicana NMX-C-414-ONNCCE-(VIGENTE).',
            image: '/images/product-cpc-30r.webp',
            imageAlt: 'Saco Cemento CPC 30 R',
            href: '#contacto',
            presentation: 'Envasado',
            ctaLabel: 'Cotizar',
          },
          {
            id: 'cpc-30rs',
            title: 'CPC 30 RS',
            subtitle: 'Cemento Portland Compuesto',
            description:
              'Nuestro Cemento Portland Compuesto, Clase Resistente 30 de Resistencia Rápida y Resistente a los Sulfatos (CPC 30 R RS), cumple con las especificaciones de calidad establecidas en la Norma Mexicana NMX-C-414-ONNCCE-(VIGENTE).',
            image: '/images/product-cpc-30rs.webp',
            imageAlt: 'Saco Cemento CPC 30 RS',
            href: '#contacto',
            presentation: 'Envasado',
            ctaLabel: 'Cotizar',
          },
          {
            id: 'albanileria',
            title: 'CPD Blanco Albañilería',
            subtitle: 'Cemento de Albañilería',
            description:
              'Nuestro Mortero es un producto para trabajos de albañilería, cumple con todas las especificaciones de calidad establecidas en la Norma Mexicana NMX-C-021-ONNCCE-(VIGENTE).',
            image: '/images/product-albanileria.webp',
            imageAlt: 'Saco Mortero de Albañilería',
            href: '#contacto',
            presentation: 'Envasado',
            ctaLabel: 'Cotizar',
          },
        ],
      },
      {
        id: 'cemento-granel',
        line: 'Cemento',
        title: 'Cemento a Granel',
        items: [
          {
            id: 'cpc-40',
            title: 'CPC 40',
            subtitle: 'Cemento Portland Compuesto',
            description:
              'Nuestro Cemento Portland Compuesto, Clase Resistente 40 (CPC 40), cumple con las especificaciones de calidad establecidas en la Norma Mexicana NMX-C-414-ONNCCE-(VIGENTE).',
            image: '/images/product-cpc-40.webp',
            imageAlt: 'Suministro de cemento CPC 40 a granel',
            href: '#contacto',
            presentation: 'Granel',
            ctaLabel: 'Cotizar',
          },
          {
            id: 'cpc-40rs',
            title: 'CPC 40 RS (para Tracto y Tolva)',
            subtitle: 'Cemento Portland Compuesto',
            description:
              'Nuestro Cemento Portland Compuesto, Clase Resistente 40 Resistente a los Sulfatos (CPC 40 RS), cumple con las especificaciones de calidad establecidas en la Norma Mexicana NMX-C-414-ONNCCE-(VIGENTE).',
            image: '/images/product-cpc-40rs.webp',
            imageAlt: 'Cemento CPC 40 RS a granel para tracto y tolva',
            href: '#contacto',
            presentation: 'Granel · Tracto y tolva',
            ctaLabel: 'Cotizar',
          },
        ],
      },
      {
        id: 'concreto',
        line: 'Concreto',
        title: 'Concreto',
        items: [
          {
            id: 'concreto-estructural',
            title: 'Concreto Estructural',
            description:
              'Concreto de alta especificación diseñado para proyectos que requieren resistencia, durabilidad y seguridad estructural. Ideal para edificaciones residenciales, comerciales e industriales de alta exigencia.',
            highlights: [
              'Menor contracción por secado.',
              'Mayor resistencia al desgaste e impacto.',
              'Alto desempeño estructural.',
              'Disponible en diversas especificaciones según los requerimientos del proyecto.',
            ],
            image: '/images/product-concreto.webp',
            imageAlt: 'Camión revolvedora de concreto estructural',
            href: '#contacto',
            ctaLabel: 'Cotizar',
          },
          {
            id: 'concreto-convencional',
            title: 'Concreto Convencional',
            description:
              'Concreto de uso general diseñado para estructuras menores y proyectos que no requieren un concreto de alta especificación. Ideal para construcciones residenciales y comerciales de hasta dos niveles.',
            highlights: [
              'Excelente desempeño para aplicaciones convencionales.',
              'Fabricado bajo altos estándares de calidad.',
              'Mayor uniformidad y control que el concreto elaborado en obra.',
              'Disponible en diversas especificaciones según las necesidades del proyecto.',
            ],
            image: '/images/product-concreto-convencional.webp',
            imageAlt: 'Servicio de concreto premezclado convencional',
            href: '#contacto',
            ctaLabel: 'Cotizar',
          },
        ],
      },
      {
        id: 'aceros',
        line: 'Aceros Estructurales',
        title: 'Aceros Estructurales',
        description:
          'Productos de acero diseñados para reforzar y brindar resistencia a estructuras de concreto y proyectos de construcción. Ideales para cimentaciones, columnas, losas, muros y elementos estructurales.',
        image: '/images/product-acero.webp',
        imageAlt: 'Malla electrosoldada y acero de refuerzo',
        catalog: [
          'Varilla de 3/8" a 3/4"',
          'Varilla de 1" a 1 1/2"',
          'Alambre',
          'Alambrón',
          'Anillos',
          'Clavo de 2 1/2" a 4"',
          'Clavo para Concreto',
          'Malla Electrosoldada 6.6.10.10.',
          'Malla Electrosoldada 6.6.8.8.',
          'Malla Electrosoldada 6.6.6.6.',
          'Malla Electrosoldada 6.6.4.4.',
        ],
        catalogNote,
        items: [],
      },
      {
        id: 'otros',
        line: 'Otros Productos',
        title: 'Otros Productos',
        description:
          'Productos complementarios para trabajos de construcción, albañilería y acabados, seleccionados para brindar calidad, resistencia y eficiencia en proyectos residenciales, comerciales e industriales.',
        image: '/images/product-materiales.webp',
        imageAlt: 'Materiales complementarios para construcción',
        catalog: [
          'Cal Hidratada',
          'Yeso Amarrado',
          'Pegazulejo Pega Rey Blanco',
          'Pegazulejo Solución Total Bexel',
          'Tabicón Pesado',
        ],
        catalogNote,
        items: [],
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
    eyebrow: 'Sobre la empresa',
    title: 'Construimos más que estructuras, construimos relaciones duraderas.',
    description:
      'Empresa familiar y aliados comerciales de Cementos Moctezuma, con más de 35 años suministrando materiales para la industria de la construcción en México.',
    ctaLabel: 'Contáctanos',
    identity: [
      {
        id: 'mission',
        title: 'Misión',
        description:
          'Somos una empresa familiar con más de 35 años de trayectoria en el suministro de cemento, concreto y aceros estructurales para la industria de la construcción en México. Como aliados comerciales de Cementos Moctezuma, nos comprometemos a ofrecer soluciones integrales respaldadas por un servicio profesional, entregas puntuales y atención personalizada. Nuestra razón de ser es contribuir al desarrollo de la infraestructura del país, acompañando a nuestros clientes con la confiabilidad y el compromiso que solo da una empresa construida sobre valores familiares sólidos.',
        icon: 'mission',
      },
      {
        id: 'vision',
        title: 'Visión',
        description:
          'Consolidarnos como el proveedor de referencia en materiales para la construcción en México, reconocidos por nuestra capacidad de atender los proyectos más exigentes del país con excelencia operativa y confiabilidad. Aspiramos a ser la primera llamada de los grandes constructores — no únicamente por la calidad de nuestros productos, sino por la certeza de que cumpliremos, cada vez, sin excepción.',
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
    valuesLabel: 'Valores',
    values: [
      {
        id: 'compliance',
        label: 'Cumplimiento',
        description:
          'Entregamos lo que prometemos, en el tiempo acordado. La puntualidad es una expresión de respeto hacia nuestros clientes y sus proyectos.',
        icon: 'compliance',
      },
      {
        id: 'integrity',
        label: 'Integridad',
        description: 'Actuamos con honestidad y transparencia en cada relación comercial, sin excepciones.',
        icon: 'integrity',
      },
      {
        id: 'service',
        label: 'Servicio',
        description:
          'Ponemos las necesidades del cliente en el centro de cada decisión, brindando atención cercana, ágil y orientada a soluciones.',
        icon: 'service',
      },
      {
        id: 'commitment',
        label: 'Compromiso',
        description:
          'Asumimos cada proyecto con la misma seriedad y dedicación con la que una familia cuida lo que construye.',
        icon: 'commitment',
      },
      {
        id: 'legacy',
        label: 'Legado',
        description:
          'Preservamos los principios que nos han definido por más de tres décadas y los fortalecemos para las generaciones que continuarán esta empresa.',
        icon: 'legacy',
      },
    ],
  },

  cta: {
    eyebrow: 'Contáctanos',
    title: 'Cuéntanos sobre tu proyecto.',
    button: { label: 'Enviar solicitud', href: '#contacto' },
    form: {
      nameLabel: 'Nombre',
      companyLabel: 'Empresa',
      phoneLabel: 'Teléfono',
      emailLabel: 'Email',
      stateLabel: 'Estado',
      messageLabel: 'Mensaje',
      submitLabel: 'Enviar',
      successMessage: 'Gracias. Recibimos tu solicitud y te contactaremos pronto.',
      states: [
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Ciudad de México',
        'Coahuila',
        'Colima',
        'Durango',
        'Estado de México',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas',
      ],
    },
  },

  footer: {
    description:
      'Más de 35 años construyendo confianza y fortaleciendo la infraestructura de México.',
    linkGroups: [
      {
        title: 'Soluciones',
        links: [
          { label: 'Cemento', href: '#cemento-envasado' },
          { label: 'Concreto', href: '#concreto' },
          { label: 'Acero Estructural', href: '#aceros' },
          { label: 'Otros Productos', href: '#otros' },
        ],
      },
      {
        title: 'Empresa',
        links: [
          { label: 'Conócenos', href: '#conocenos' },
          { label: 'Misión, Visión y Valores', href: '#conocenos' },
          { label: 'Contáctanos', href: '#contacto' },
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
