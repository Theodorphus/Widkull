'use client'

import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from 'react'

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'blur'

/**
 * Använder en delad IntersectionObserver-hook som sätter `is-visible`
 * när elementet scrollas in. Animationen styrs helt av CSS
 * (`[data-reveal]` i globals.css), så ingen JS-animation körs per frame.
 */
function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

interface RevealProps {
  children: ReactNode
  /** Riktning/karaktär på reveal. */
  variant?: RevealVariant
  /** Fördröjning i ms (för manuell stagger). */
  delay?: number
  className?: string
  /** HTML-tagg att rendera. */
  as?: 'div' | 'section' | 'li' | 'span' | 'p'
  style?: CSSProperties
}

/**
 * Premium scroll-reveal. Fade + slide/scale/blur när elementet syns.
 * Lättviktig (CSS-transition + en IntersectionObserver). Respekterar
 * prefers-reduced-motion via globals.css.
 */
export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className = '',
  as = 'div',
  style,
}: RevealProps) {
  const { ref, visible } = useInView<HTMLElement>()
  const Tag = as as 'div'

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      data-reveal={variant}
      className={`${visible ? 'is-visible' : ''} ${className}`}
      style={{ ...style, ['--reveal-delay' as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

interface StaggerProps {
  children: ReactNode
  /** Tid mellan varje barns reveal (ms). */
  step?: number
  /** Startfördröjning innan första barnet (ms). */
  baseDelay?: number
  variant?: RevealVariant
  className?: string
  as?: 'div' | 'ul' | 'section'
}

/**
 * Wrappar varje direkt barn i en Reveal med ökande delay,
 * så att grupper (kort, listpunkter) tonar in i tur och ordning.
 */
export function Stagger({
  children,
  step = 90,
  baseDelay = 0,
  variant = 'up',
  className = '',
  as = 'div',
}: StaggerProps) {
  const Tag = as as 'div'
  const items = Children.toArray(children).filter(isValidElement) as ReactElement[]

  return (
    <Tag className={className}>
      {items.map((child, i) => (
        <Reveal key={child.key ?? i} variant={variant} delay={baseDelay + i * step}>
          {child}
        </Reveal>
      ))}
    </Tag>
  )
}

interface ParallaxProps {
  children: ReactNode
  /** Px-förflyttning relativt scroll. Negativt = motsatt håll. */
  speed?: number
  className?: string
  style?: CSSProperties
  /** Lägg på en mjuk opacitets-fade vid kanterna. */
  fade?: boolean
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Lättviktig parallax via requestAnimationFrame + transform.
 * Delad variant av memorial/Parallax men med valfri kant-fade,
 * tänkt för dekor och bakgrundslager. Ingen extern lib.
 */
export function Parallax({
  children,
  speed = 40,
  className = '',
  style,
  fade = false,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const el = ref.current
    if (!el) return

    let frame = 0
    const update = () => {
      const rect = el.getBoundingClientRect()
      const viewportH = window.innerHeight
      const progress =
        (rect.top + rect.height / 2 - viewportH / 2) /
        (viewportH / 2 + rect.height / 2)
      setOffset(progress * speed)
      if (fade) setOpacity(1 - Math.min(Math.abs(progress), 1) * 0.6)
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
  }, [speed, fade])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(0, ${offset}px, 0)`,
        opacity: fade ? opacity : style?.opacity,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
