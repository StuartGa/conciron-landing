export interface NavLink {
  label: string
  href: string
}

export interface Category {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  href: string
}

export interface Product {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  href: string
  imageFit?: 'contain' | 'cover'
  /** Packaging / presentation hint shown on the card */
  presentation?: string
  subtitle?: string
  highlights?: string[]
  ctaLabel?: string
}

export interface ProductGroup {
  id: string
  title: string
  /** Parent line (e.g. Cemento) for clear hierarchy */
  line: string
  description?: string
  image?: string
  imageAlt?: string
  catalog?: string[]
  catalogNote?: string
  items: Product[]
}

export interface Stat {
  id: string
  value: string
  label: string
  icon: StatIcon
}

export type StatIcon = 'calendar' | 'delivery' | 'coverage' | 'support'

export interface ValueChip {
  id: string
  label: string
  description?: string
  icon: ValueIcon
}

export type ValueIcon =
  | 'compliance'
  | 'integrity'
  | 'service'
  | 'commitment'
  | 'legacy'

export interface IdentityCard {
  id: string
  title: string
  description: string
  icon: 'mission' | 'vision' | 'purpose'
}

export interface FooterLinkGroup {
  title: string
  links: NavLink[]
}

export interface ContactInfo {
  phone: string
  /** Kept for structured data / backend; not shown in the marketing UI */
  email: string
  formHref: string
}

export interface ContactFormCopy {
  nameLabel: string
  companyLabel: string
  phoneLabel: string
  emailLabel: string
  stateLabel: string
  messageLabel: string
  submitLabel: string
  successMessage: string
  states: string[]
}

export interface SiteContent {
  brand: {
    name: string
    tagline: string
    /** Full-color brand mark (orange) for header on dark backgrounds */
    logoHeader: string
    /** Stylized orange icon mark for footer */
    logoFooter: string
    logo: string
    logoIcon: string
    logoWhite: string
  }
  navigation: NavLink[]
  hero: {
    eyebrow?: string
    title: string
    description?: string
    primaryCta: NavLink
    secondaryCta?: NavLink
    image: string
    imageAlt: string
  }
  categories: Category[]
  experience: {
    eyebrow: string
    title: string
    description: string
    cta: NavLink
    stats: Stat[]
  }
  operational: {
    eyebrow: string
    title: string
    description: string
    image: string
    imageAlt: string
  }
  products: {
    eyebrow: string
    title: string
    viewAllHref: string
    /** Number of product groups shown before the user expands the list */
    initialVisibleGroupCount: number
    groups: ProductGroup[]
  }
  capacity: {
    eyebrow: string
    title: string
    description: string
    image: string
    imageAlt: string
    features: string[]
  }
  about: {
    eyebrow: string
    title: string
    description: string
    ctaLabel: string
    identity: IdentityCard[]
    valuesLabel: string
    values: ValueChip[]
  }
  cta: {
    eyebrow: string
    title: string
    button: NavLink
    form: ContactFormCopy
  }
  footer: {
    description: string
    linkGroups: FooterLinkGroup[]
    contact: ContactInfo
    copyright: string
    legal: NavLink[]
  }
}
