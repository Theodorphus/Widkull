'use client'

import { useEffect, useRef, useState } from 'react'

interface MemRevealProps {
  children: React.ReactNode
  /** Fördröjning (ms) på animationen när elementet syns. */
  delay?: number
  className?: string
  /** HTML-tagg att rendera. Default div. */
  as?: 'div' | 'span' | 'p' | 'li'
}

/**
 * Lägger till klassen `is-visible` när elementet scrollas in i vyn.
 * Den faktiska animationen styrs av CSS (.mem-fade, .mask-reveal i globals.css).
 */
export function MemReveal({ children, delay = 0, className = '', as = 'div' }: MemRevealProps) {
  const ref = useRef<HTMLElement>(null)
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
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as as 'div'
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`${className} ${visible ? 'is-visible' : ''}`}
      style={delay && visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

/**
 * Masked text reveal – orden stiger upp bakom en mask när de syns.
 * Användning: <MaskText>Gravstensrengöring</MaskText>
 */
export function MaskText({
  children,
  delay = 0,
  className = '',
}: {
  children: string
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
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
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <span ref={ref} className={`mask-reveal ${visible ? 'is-visible' : ''} ${className}`}>
      <span style={delay && visible ? { animationDelay: `${delay}ms` } : undefined}>{children}</span>
    </span>
  )
}
