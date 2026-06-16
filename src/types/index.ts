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
  email: string
  formHref: string
}

export interface SiteContent {
  brand: {
    name: string
    tagline: string
    logo: string
    logoIcon: string
    logoWhite: string
  }
  navigation: NavLink[]
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta: NavLink
    secondaryCta: NavLink
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
    items: Product[]
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
    email: string
  }
  footer: {
    description: string
    linkGroups: FooterLinkGroup[]
    contact: ContactInfo
    copyright: string
    legal: NavLink[]
  }
}
