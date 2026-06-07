'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'

interface ParallaxProps {
  children: React.ReactNode
  /** Hur mycket elementet rör sig relativt scroll (px per skärm). Negativt = saktare. */
  speed?: number
  className?: string
  style?: CSSProperties
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Lättviktig parallax via requestAnimationFrame + transform.
 * Ingen extern lib. Respekterar prefers-reduced-motion.
 */
export function Parallax({ children, speed = 30, className = '', style }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const el = ref.current
    if (!el) return

    let frame = 0
    const update = () => {
      const rect = el.getBoundingClientRect()
      const viewportH = window.innerHeight
      // -1 (precis nedanför vyn) .. 1 (precis ovanför vyn)
      const progress = (rect.top + rect.height / 2 - viewportH / 2) / (viewportH / 2 + rect.height / 2)
      setOffset(progress * speed)
      frame = 0
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [speed])

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transform: `translate3d(0, ${offset}px, 0)`, willChange: 'transform' }}
    >
      {children}
    </div>
  )
}
