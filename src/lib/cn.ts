/**
 * Merges conditional class names into a single space-separated string.
 * Filters out falsy values (`false`, `null`, `undefined`, `''`).
 *
 * @param classes - Class name segments; falsy values are omitted
 * @returns Combined class string for use in `className` props
 *
 * @example
 * cn('px-4', isActive && 'bg-primary', undefined) // => 'px-4 bg-primary'
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}
