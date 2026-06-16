import { cn } from '@/lib/cn'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  className?: string
  titleClassName?: string
  light?: boolean
}

/**
 * Reusable section title block with eyebrow label and headline.
 *
 * @param light - When true, uses dark text for light-background sections (Experience, About)
 */
export function SectionHeader({
  eyebrow,
  title,
  className,
  titleClassName,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <p className="text-label-caps text-primary mb-2">{eyebrow}</p>
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight',
          light ? 'text-gray-900' : 'text-white',
          titleClassName,
        )}
      >
        {title}
      </h2>
    </div>
  )
}
