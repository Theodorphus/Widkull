'use client'

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ──────────────────────────────────────────────────────────────────
 * TiltCard – 3D-lutning mot pekaren + glansprick. WebGL-fri djupkänsla.
 * ────────────────────────────────────────────────────────────────── */
interface TiltCardProps {
  children: ReactNode
  className?: string
  /** Max-lutning i grader. */
  max?: number
}

export function TiltCard({ children, className = '', max = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || reducedMotion()) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    el.style.setProperty('--tilt-y', `${(px - 0.5) * 2 * max}deg`)
    el.style.setProperty('--tilt-x', `${(0.5 - py) * 2 * max}deg`)
    el.style.setProperty('--glare-x', `${px * 100}%`)
    el.style.setProperty('--glare-y', `${py * 100}%`)
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--tilt-x', '0deg')
    el.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`tilt ${className}`}
    >
      {children}
      <span className="tilt-glare" aria-hidden />
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────────
 * CountUp – räknar upp till `end` när elementet syns. Behåller suffix/prefix.
 * ────────────────────────────────────────────────────────────────── */
interface CountUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function CountUp({
  end,
  duration = 1400,
  prefix = '',
  suffix = '',
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reducedMotion()) {
      setValue(end)
      return
    }

    let raf = 0
    let start = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const tick = (t: number) => {
          if (!start) start = t
          const p = Math.min((t - start) / duration, 1)
          // easeOutCubic
          const eased = 1 - Math.pow(1 - p, 3)
          setValue(Math.round(eased * end))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}

/* ──────────────────────────────────────────────────────────────────
 * Marquee – horisontellt löpande innehåll (dupliceras för sömlös loop).
 * ────────────────────────────────────────────────────────────────── */
interface MarqueeProps {
  children: ReactNode
  /** Sekunder för ett varv. */
  speed?: number
  className?: string
}

export function Marquee({ children, speed = 32, className = '' }: MarqueeProps) {
  return (
    <div className={`marquee-mask overflow-hidden ${className}`}>
      <div
        className="marquee"
        style={{ ['--marquee-duration' as string]: `${speed}s` }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────────
 * ParallaxFrame – bild/video-ram där inre lagret driver i scroll.
 * `media` kan vara <img>, <video> eller (nu) en mesh-bakgrund.
 * Drop-in för AI-genererade foton/video senare (se BILDER.md).
 * ────────────────────────────────────────────────────────────────── */
interface ParallaxFrameProps {
  children: ReactNode
  /** Px-rörelse av inre lagret över viewporten. */
  speed?: number
  className?: string
  style?: CSSProperties
  /** Innehåll ovanpå mediet (rubrik etc.). */
  overlay?: ReactNode
}

export function ParallaxFrame({
  children,
  speed = 60,
  className = '',
  style,
  overlay,
}: ParallaxFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null)
  const layerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reducedMotion()) return
    const frame = frameRef.current
    const layer = layerRef.current
    if (!frame || !layer) return

    let raf = 0
    const update = () => {
      const rect = frame.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2)
      layer.style.transform = `translate3d(0, ${progress * speed}px, 0)`
      raf = 0
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [speed])

  return (
    <div ref={frameRef} className={`parallax-frame ${className}`} style={style}>
      <div ref={layerRef} className="parallax-layer">
        {children}
      </div>
      {overlay && <div className="relative z-10 h-full">{overlay}</div>}
    </div>
  )
}
