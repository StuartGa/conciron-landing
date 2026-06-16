import type { ValueChip as ValueChipType } from '@/types'
import { ValueIcon } from './icons'

interface ValueChipProps {
  value: ValueChipType
}

/**
 * Corporate value chip displayed in the About section values row.
 */
export function ValueChip({ value }: ValueChipProps) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white">
      <ValueIcon name={value.icon} />
      {value.label}
    </span>
  )
}
