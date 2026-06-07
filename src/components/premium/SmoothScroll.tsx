'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Global smooth-scroll (Lenis). Ger en "premium" momentum-känsla på scroll.
 *
 * - Initieras INTE om användaren föredrar reducerad rörelse (då används native scroll).
 * - Stänger av CSS `scroll-behavior: smooth` medan Lenis är aktiv så de inte krockar,
 *   och återställer det vid unmount.
 * - Renderar inga DOM-element; bara en sidoeffekt. Lägg högt i trädet (root layout).
 */
export function SmoothScroll() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })

    // Lenis hanterar scrollen — låt den styra i stället för CSS smooth-scroll.
    const root = document.documentElement
    const prevScrollBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    // Låt #anchor-länkar (t.ex. /kontakt#offert) scrolla mjukt via Lenis.
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a')
      if (!target) return
      const href = target.getAttribute('href')
      if (href && href.startsWith('#') && href.length > 1) {
        const el = document.querySelector(href)
        if (el) {
          e.preventDefault()
          lenis.scrollTo(el as HTMLElement, { offset: -80 })
        }
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(raf)
      lenis.destroy()
      root.style.scrollBehavior = prevScrollBehavior
    }
  }, [])

  return null
}
