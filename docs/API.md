# API — Documentación de funciones

Índice de funciones exportadas en la landing page Conciron. Cada entrada enlaza al módulo fuente.

## Utilidades (`src/lib/`)

### `cn(...classes)` — `src/lib/cn.ts`

Combina nombres de clase CSS omitiendo valores falsy.

### `validateSiteContent(content)` — `src/lib/validateSiteContent.ts`

Valida que el objeto de contenido tenga las secciones mínimas requeridas para la landing (categorías, productos, navegación con anclas).

### `getLandingSectionAnchors(content)` — `src/lib/validateSiteContent.ts`

Devuelve los `href` de navegación (`#inicio`, `#productos`, etc.).

## Hooks (`src/hooks/`)

### `useScrollHeader(threshold?)` — `src/hooks/useScrollHeader.ts`

| Parámetro | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `threshold` | `number` | `50` | Píxeles de scroll para activar estado `scrolled` |

**Retorna:** `boolean` — `true` si el usuario ha scrolleado más allá del umbral.

## Componentes UI (`src/components/ui/`)

### `Button` — `src/components/ui/Button.tsx`

Botón/enlace polimórfico para CTAs de la landing.

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Estilo visual |
| `showArrow` | `boolean` | `false` | Muestra icono de flecha |
| `href` | `string` | — | Si se define, renderiza `<a>` en lugar de `<button>` |

### `Container` — `src/components/ui/Container.tsx`

Wrapper con ancho máximo y padding horizontal consistente.

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `as` | `'div' \| 'section'` | `'div'` | Elemento HTML semántico |
| `id` | `string` | — | ID para anclas de navegación |

### `SectionHeader` — `src/components/ui/SectionHeader.tsx`

Encabezado de sección con eyebrow (label caps) y título.

### `Card` — `src/components/ui/Card.tsx`

Contenedor con fondo de superficie y borde opcional con hover.

### `CategoryCard` — `src/components/ui/CategoryCard.tsx`

Tarjeta de línea de producto (cemento, concreto, acero).

### `ProductCard` — `src/components/ui/ProductCard.tsx`

Tarjeta de producto destacado en el grid horizontal.

### `StatItem` — `src/components/ui/StatItem.tsx`

Indicador numérico de experiencia (años, entregas, etc.).

### `ValueChip` — `src/components/ui/ValueChip.tsx`

Chip de valor corporativo en la sección About.

### Iconos — `src/components/ui/icons.tsx`

| Función | Uso |
|---------|-----|
| `StatIcon` | Iconos de estadísticas en Experience |
| `ValueIcon` | Iconos de valores corporativos |
| `CategoryIcon` | Iconos por categoría de producto |
| `IdentityIcon` | Misión, visión, propósito |
| `CheckIcon` | Lista de features en Capacity |

## Layout (`src/components/layout/`)

### `Header` — `src/components/layout/Header.tsx`

Barra de navegación fija con logo, enlaces ancla y CTA "Cotizar".

### `Footer` — `src/components/layout/Footer.tsx`

Pie de página con grupos de enlaces, contacto y legal.

## Secciones (`src/components/sections/`)

Cada sección corresponde a un bloque de la landing de una sola página:

| Componente | ID ancla | Propósito |
|------------|----------|-----------|
| `HeroSection` | `#inicio` | Propuesta de valor principal |
| `CategoriesSection` | `#categorias` | Tres líneas de producto |
| `ExperienceSection` | `#experiencia` | Años de trayectoria y stats |
| `OperationalSection` | — | Banner de precisión operativa |
| `FeaturedProductsSection` | `#productos` | Grid de productos destacados |
| `CapacitySection` | — | Flotilla y capacidad logística |
| `AboutSection` | `#conocenos` | Misión, visión, valores |
| `CtaSection` | `#contacto` | Conversión final |

## Datos (`src/data/siteContent.ts`)

Objeto `siteContent` tipado como `SiteContent`. **No contiene lógica** — solo contenido editable para la landing.

## Tipos (`src/types/index.ts`)

Interfaces: `NavLink`, `Category`, `Product`, `Stat`, `ValueChip`, `IdentityCard`, `FooterLinkGroup`, `ContactInfo`, `SiteContent`.
