# SEO y optimización — Conciron Landing

Guía de las optimizaciones aplicadas para alcanzar **100 % en Lighthouse SEO** y mejorar rendimiento/estabilidad.

## Checklist Lighthouse SEO

| Auditoría | Implementación |
|-----------|----------------|
| `<title>` descriptivo | `index.html` + `src/config/site.ts` |
| Meta `description` (≤160 caracteres) | `index.html` |
| `lang` en `<html>` | `lang="es-MX"` |
| Enlace `canonical` | `index.html` → URL de producción |
| `robots.txt` válido | `public/robots.txt` |
| Sitemap | `public/sitemap.xml` |
| Imágenes con `alt` | `PublicImage` + textos en `siteContent` |
| Datos estructurados | JSON-LD vía `StructuredData` (Organization, WebSite, WebPage, LocalBusiness) |
| Enlaces descriptivos | Texto visible en CTAs y navegación |
| `viewport` meta | `index.html` |
| Open Graph / Twitter Cards | `index.html` |
| Web App Manifest | `public/manifest.webmanifest` |
| Contenido sin JavaScript | Bloque `<noscript>` en `index.html` |

## Archivos clave

```
src/config/site.ts          → URL, título, descripción, keywords
src/lib/structuredData.ts   → Generador JSON-LD
src/components/seo/         → StructuredData, SkipLink
public/robots.txt
public/sitemap.xml
public/manifest.webmanifest
```

## Rendimiento y estabilidad

| Optimización | Detalle |
|--------------|---------|
| Code splitting | Secciones bajo el fold con `React.lazy` + `Suspense` |
| Vendor chunk | `react` + `react-dom` en chunk separado (`vite.config.ts`) |
| Fuentes | Manrope + Work Sans vía `@fontsource` (latin, woff2, sin Google Fonts) |
| Imágenes | WebP optimizado (`npm run optimize-images`), preload del hero |
| Contraste | Botones primarios con `text-on-primary` |
| Encabezados | Jerarquía `h1→h2→h3` corregida; stats/footer sin niveles saltados |
| Imágenes | `loading="lazy"`, `decoding="async"`, `fetchPriority="high"` en hero |
| Error boundary | `ErrorBoundary` envuelve la app en `main.tsx` |
| Accesibilidad | `SkipLink` → `#main-content`, landmarks semánticos |

## Verificar localmente

```bash
npm run build
npm run preview
```

Abre Chrome DevTools → Lighthouse → modo **Navigation** → categorías SEO, Performance, Accessibility.

## Producción

URL canónica: **https://stuartga.github.io/conciron-landing/**

Tras cada deploy, verifica en [Google Rich Results Test](https://search.google.com/test/rich-results) que el JSON-LD sea válido.

## Mantenimiento

1. Al cambiar dominio, actualiza `src/config/site.ts`, `index.html`, `sitemap.xml` y `robots.txt`.
2. Mantén `description` entre 120–160 caracteres.
3. Ejecuta `npm run test` — incluye validación de metadatos SEO.
