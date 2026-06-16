import { describe, expect, it } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

describe('useScrollReveal', () => {
  it('reveals immediately when immediate option is set', () => {
    const { result } = renderHook(() => useScrollReveal({ immediate: true }))
    expect(result.current.isVisible).toBe(true)
  })
})
