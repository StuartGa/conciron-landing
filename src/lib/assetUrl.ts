/**
 * Resolves a public asset path for the current deployment base.
 *
 * On GitHub Pages the app is served from `/conciron-landing/`, so absolute
 * paths like `/images/hero.jpg` would 404. This helper prefixes `import.meta.env.BASE_URL`.
 *
 * @param path - Path relative to `public/` (with or without leading slash)
 * @returns URL safe for `<img src>`, CSS `url()`, etc.
 *
 * @example
 * assetUrl('/images/hero.jpg') // => '/conciron-landing/images/hero.jpg' in production
 */
export function assetUrl(path: string): string {
  const normalized = path.replace(/^\//, '')
  const base = import.meta.env.BASE_URL
  return `${base}${normalized}`
}
