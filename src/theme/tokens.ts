/** Design tokens derived from DESIGN.md — Industrial Integrity system for the Conciron landing page */
export const colors = {
  surface: '#131313',
  surfaceDim: '#131313',
  surfaceBright: '#3a3939',
  surfaceContainer: '#201f1f',
  surfaceContainerHigh: '#2a2a2a',
  surfaceContainerHighest: '#353534',
  onSurface: '#e5e2e1',
  onSurfaceVariant: '#e1bfb3',
  outline: '#a88a7f',
  outlineVariant: '#594138',
  primary: '#f26522',
  primaryBright: '#ffb599',
  onPrimary: '#5a1c00',
  primaryContainer: '#f26522',
  secondary: '#c6c6c7',
  onSecondary: '#2f3131',
  background: '#131313',
  onBackground: '#e5e2e1',
  surfaceLight: '#f4f4f5',
  footer: '#0a0a0a',
} as const

export const spacing = {
  base: 4,
  xs: 8,
  sm: 16,
  md: 24,
  lg: 40,
  xl: 64,
  edgeMargin: 20,
  gutter: 16,
} as const

export const typography = {
  headlineLg: { fontFamily: 'Manrope', fontSize: '32px', fontWeight: 800, lineHeight: 1.2 },
  headlineMd: { fontFamily: 'Manrope', fontSize: '24px', fontWeight: 700, lineHeight: 1.3 },
  headlineSm: { fontFamily: 'Manrope', fontSize: '20px', fontWeight: 700, lineHeight: 1.4 },
  bodyLg: { fontFamily: 'Manrope', fontSize: '16px', fontWeight: 400, lineHeight: 1.6 },
  bodyMd: { fontFamily: 'Manrope', fontSize: '14px', fontWeight: 400, lineHeight: 1.6 },
  labelCaps: { fontFamily: 'Work Sans', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em' },
} as const

export const touchTarget = 48
