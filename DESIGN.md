---
name: Industrial Integrity
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e1bfb3'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a88a7f'
  outline-variant: '#594138'
  surface-tint: '#ffb599'
  primary: '#ffb599'
  on-primary: '#5a1c00'
  primary-container: '#f26522'
  on-primary-container: '#4f1800'
  inverse-primary: '#a63b00'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#929190'
  on-tertiary-container: '#2a2a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb599'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#7f2b00'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  edge-margin: 20px
  gutter: 16px
---

## Brand & Style

This design system is built for high-stakes industrial and construction-tech environments. It captures a sense of structural reliability, precision engineering, and heavy-duty performance. The brand personality is authoritative and no-nonsense, yet technologically sophisticated.

The visual style is **Corporate Modern with Industrial Accents**. It utilizes high-contrast dark surfaces to evoke a premium, "heavy-metal" feel, balanced by vibrant safety-orange accents that command attention and signify action. The aesthetic is clean and high-fidelity, relying on strict grid alignment, razor-sharp typography, and tactical use of imagery to establish trust with professional contractors and project managers.

## Colors

The palette is rooted in the "Safety Orange" and "Charcoal" industrial archetype. 

- **Primary (Orange):** Used for primary actions, critical status indicators, and branding elements. It is the color of utility and visibility.
- **Secondary (White):** High-contrast clarity for typography and icons against dark backgrounds.
- **Surface & Background (Grays):** A tiered system of dark neutrals ranging from absolute black (`#000000`) for depth to charcoal (`#1A1A1A`) for card surfaces. 
- **Functional Accents:** Subtle use of deep earth tones for secondary content or divider lines to maintain the professional, grounded aesthetic.

## Typography

The typography strategy emphasizes clarity and structural strength. **Manrope** serves as the primary typeface, offering a modern, geometric build that remains highly legible on mobile screens. For technical details and metadata, **Work Sans** provides a professional, stable counterpoint.

- **Headlines:** Set with tight tracking and heavy weights to mimic the impact of industrial signage.
- **Body:** Generous line-height ensures technical specifications and long-form descriptions are readable in low-light field conditions.
- **Labels:** Use uppercase Work Sans for sub-headers and category tags to create a clear "blue-print" hierarchy.

## Layout & Spacing

The system follows a strict 4px baseline grid to ensure mathematical precision in all alignments.

For mobile web:
- **Grid:** A 4-column fluid grid with 16px gutters and 20px outer margins.
- **Rhythm:** Vertical spacing should be aggressive between distinct sections (using `lg` or `xl` units) to create a clean, high-end editorial feel.
- **Density:** Interactive elements (buttons, inputs) use a minimum 48px touch target height but maintain slim internal padding to keep the UI looking "lean" and efficient.

## Elevation & Depth

Depth is communicated through **Tonal Layering** rather than traditional drop shadows, maintaining a flat, architectural look.

- **Level 0 (Background):** Deep black (`#0D0D0D`).
- **Level 1 (Cards/Sections):** Dark charcoal (`#1A1A1A`).
- **Level 2 (Popovers/Modals):** Lighter gray (`#262626`) with a very subtle, high-spread 10% black shadow to distinguish it from the background.
- **Lines:** Dividers are 1px solid strokes in `#333333`, mimicking technical drawings.

## Shapes

The design system utilizes **Sharp (0px)** corners for all primary structural elements (sections, containers, cards). This reinforces the industrial, rigid nature of construction materials.

Subtle exceptions:
- **Buttons:** May use a microscopic 2px radius if a "softer" professional feel is required for the specific user segment, but 0px is the preferred standard.
- **Icons:** Should feature squared-off ends and consistent stroke weights to match the typeface.

## Components

### Buttons
- **Primary:** Solid Orange (`#F26522`) with White text. Sharp corners. Bold Manrope text. Often accompanied by a right-facing arrow icon `→`.
- **Secondary:** Transparent with a 2px White border (Ghost style). 
- **Tertiary:** Text-only with an underline or arrow, used for "View all" links.

### Cards
- **Product Cards:** Dark gray backgrounds, sharp corners, and high-quality photography. Text is left-aligned with a clear hierarchical transition from the Headline to the Body.
- **Value Props:** Uses icons in the Primary Orange color paired with white headings.

### Inputs & Form Fields
- Fields are defined by 1px white or light-gray bottom borders (underlined style) or fully enclosed dark-gray boxes to maintain the architectural aesthetic.
- Active states are indicated by an orange accent bar or border.

### Status Indicators
- **Industrial Chips:** Small, rectangular tags with solid background fills (Orange for active/new, Dark Gray for categories).
- **Progress Bars:** High-contrast orange on black, with no rounded caps.