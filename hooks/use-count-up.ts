import { useRef, useEffect, useState, useCallback } from "react"

interface UseCountUpOptions {
  end: number
  duration?: number
  isActive: boolean
  suffix?: string
  prefix?: string
}

/**
 * Lightweight count-up animation hook using requestAnimationFrame.
 * Only runs when isActive is true, resets when false.
 * No re-renders outside of the animation loop.
 */
export function useCountUp({
  end,
  duration = 1200,
  isActive,
  suffix = "",
  prefix = "",
}: UseCountUpOptions): string {
  const [display, setDisplay] = useState("0")
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  const animate = useCallback(
    (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * end)

      setDisplay(`${prefix}${current}${suffix}`)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    },
    [end, duration, prefix, suffix]
  )

  useEffect(() => {
    if (isActive) {
      startTimeRef.current = null
      rafRef.current = requestAnimationFrame(animate)
    } else {
      // Reset immediately when out of view
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      setDisplay(`0`)
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isActive, animate])

  return display
}
