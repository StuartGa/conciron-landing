# Conciron — Landing Page

Landing page de marketing para **Conciron**, proveedor de cemento, concreto y aceros estructurales en México. Es un sitio de **una sola página** (sin enrutamiento): las secciones se enlazan con anclas (`#inicio`, `#productos`, etc.).

## Stack

| Capa | Tecnología |
|------|------------|
| UI | React 19 + TypeScript |
| Build | Vite 8 |
| Estilos | Tailwind CSS v4 + tokens de `DESIGN.md` |
| Tests | Vitest + Testing Library |
| Tipografías | Manrope (Google Fonts) + Work Sans (manual de marca) |

## Inicio rápido

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # compilación de producción
npm run test     # suite de tests
```

**Sitio publicado:** https://stuartga.github.io/conciron-landing/

Ver [docs/SEO.md](docs/SEO.md) para la guía completa de SEO y optimización Lighthouse.

Ver [docs/CLOUDFLARE.md](docs/CLOUDFLARE.md) para cabeceras CSP y seguridad con dominio propio.

## Arquitectura

```
src/
├── App.tsx                 # Composición de la landing (sin router)
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Una sección = un bloque de la página
│   └── ui/                 # Primitivos reutilizables (Button, Card…)
├── data/siteContent.ts     # Contenido desacoplado del UI
├── hooks/                  # useScrollHeader
├── lib/                    # Utilidades (cn, validateSiteContent)
├── theme/tokens.ts         # Tokens del design system
└── types/                  # Contratos TypeScript
```

### Principios SOLID aplicados

| Principio | Implementación en esta landing |
|-----------|----------------------------------|
| **S** — Responsabilidad única | Cada sección (`HeroSection`, `AboutSection`…) renderiza un solo bloque. El contenido vive en `siteContent.ts`. |
| **O** — Abierto/cerrado | `Button` extiende variantes (`primary`, `secondary`, `tertiary`) sin modificar su núcleo. |
| **L** — Sustitución de Liskov | Los componentes UI respetan sus interfaces (`Product`, `Category`, etc.). |
| **I** — Segregación de interfaces | Props pequeñas y específicas por componente (`SectionHeaderProps`, `ProductCardProps`). |
| **D** — Inversión de dependencias | Las secciones dependen de `siteContent` (abstracción), no de strings hardcodeados. |

### Patrones de diseño

- **Composition**: `App` compone secciones; `Card` compone tarjetas de categoría/producto.
- **Presentational / Container**: secciones son presentacionales; datos en `data/`.
- **Custom Hook**: `useScrollHeader` encapsula el comportamiento del header fijo.
- **Design Tokens**: colores y espaciado centralizados en `theme/tokens.ts` y `@theme` de Tailwind.

## Assets

Imágenes y logos provienen de `/Users/StuartGP/Downloads/CONCIRON WEB`:

- **Logos**: `Manual de identidad y logo/00 Identidad/PNG/`
- **Imágenes**: `Banco de imágenes/`
- **Fuentes**: `Manual de identidad y logo/02 Tipografía/Work_Sans/`

Copiados a `public/images/` y `public/fonts/`.

## Tests

```bash
npm run test           # ejecutar una vez
npm run test:watch     # modo watch
npm run test:coverage  # cobertura
```

| Archivo | Qué valida |
|---------|------------|
| `cn.test.ts` | Utilidad de clases CSS |
| `validateSiteContent.test.ts` | Integridad del contenido de la landing |
| `useScrollHeader.test.ts` | Comportamiento del header al hacer scroll |
| `Button.test.tsx` | Variantes y renderizado link/button |
| `App.test.tsx` | Smoke test: secciones y CTAs principales |

## Documentación de funciones

Cada función exportada incluye JSDoc en su archivo fuente. Ver también `docs/API.md` para el índice completo.

## Referencias

- `DESIGN.md` — Design system Industrial Integrity
- `code.html` — Prototipo HTML original (referencia visual)
