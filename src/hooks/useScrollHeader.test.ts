import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useScrollHeader } from '@/hooks/useScrollHeader'

describe('useScrollHeader', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns false when scroll is below threshold', () => {
    const { result } = renderHook(() => useScrollHeader(50))
    expect(result.current).toBe(false)
  })

  it('returns true when scroll exceeds threshold', () => {
    const { result } = renderHook(() => useScrollHeader(50))

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current).toBe(true)
  })

  it('respects custom threshold', () => {
    const { result } = renderHook(() => useScrollHeader(200))

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 150, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current).toBe(false)
  })
})
