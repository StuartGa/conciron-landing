import type { Stat } from '@/types'
import { StatIcon } from './icons'

interface StatItemProps {
  stat: Stat
  light?: boolean
}

/**
 * Experience stat block (years, deliveries, coverage, support).
 *
 * @param light - Adapts colors for the light `ExperienceSection` background
 */
export function StatItem({ stat, light = false }: StatItemProps) {
  return (
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
      <div
        className={
          light
            ? 'w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-4'
            : 'w-12 h-12 bg-primary/20 text-primary flex items-center justify-center mb-4'
        }
      >
        <StatIcon name={stat.icon} />
      </div>
      <h4 className={light ? 'text-3xl font-extrabold text-gray-900 mb-1' : 'text-3xl font-extrabold text-white mb-1'}>
        {stat.value}
      </h4>
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide text-label-caps">
        {stat.label}
      </p>
    </div>
  )
}
