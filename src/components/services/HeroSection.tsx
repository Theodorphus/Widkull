import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PhotoBackground } from '@/components/premium/PhotoBackground'
import { Parallax } from '@/components/premium/Scroll'
import { MaskText, MemReveal } from '@/components/memorial/MemReveal'
import { BUSINESS } from '@/lib/data/business'

interface HeroSectionProps {
  title: string
  tagline: string
  /** OG-bild (bakåtkompatibilitet) – används inte som visningsbild. */
  imageSrc?: string
  /** Foto som visas i hero-bakgrunden. */
  photoSrc?: string
}

export function HeroSection({ title, tagline, photoSrc }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden h-[640px] flex items-center justify-center">
      {/* Per-tjänst foto – driver långsamt nedåt vid scroll */}
      <Parallax speed={-40} className="absolute inset-0 scale-105">
        <PhotoBackground src={photoSrc} overlay="none" objectPosition="center 30%" priority alt={title} />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/55 via-forest-deep/20 to-forest-deep/70" />

      {/* Dekorativa djup-lager – rör sig i olika takt för 3D-känsla utan WebGL */}
      <Parallax
        speed={80}
        className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-leaf/20 blur-3xl"
      >
        <span className="sr-only" />
      </Parallax>
      <Parallax
        speed={-40}
        className="pointer-events-none absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-gold-accent/10 blur-3xl"
      >
        <span className="sr-only" />
      </Parallax>
      {/* Långsamt roterande ringdekor */}
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full border border-white/10 spin-slow" />
      <div className="pointer-events-none absolute -left-40 bottom-1/4 h-[34rem] w-[34rem] rounded-full border border-white/[0.06] spin-slow" style={{ animationDirection: 'reverse', animationDuration: '60s' }} />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10 text-cream">
        <MemReveal className="mem-fade">
          <Link
            href="/tjanster"
            className="inline-flex items-center gap-2 text-cream/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            <span className="font-medium">Tillbaka till tjänster</span>
          </Link>
        </MemReveal>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white tracking-tight">
          <MaskText>{title}</MaskText>
        </h1>

        <MemReveal as="p" delay={150} className="mem-fade text-lg sm:text-xl mb-12 text-cream/90 max-w-3xl mx-auto leading-relaxed font-light">
          {tagline}
        </MemReveal>

        {/* Quick points */}
        <MemReveal delay={300} className="mem-fade grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          {[
            'Flexibelt upplägg efter era behov',
            'Personlig och erfaren lönekonsult',
            'Tryggt, korrekt och i tid',
          ].map((point, i) => (
            <div
              key={i}
              className="bg-white/12 backdrop-blur-md rounded-lg p-4 border border-white/25 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:border-white/40"
            >
              <p className="text-sm text-white font-medium">{point}</p>
            </div>
          ))}
        </MemReveal>

        {/* CTA Buttons */}
        <MemReveal delay={450} className="mem-fade flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/kontakt">
            <Button size="lg" variant="secondary" className="shadow-xl">
              Boka ett möte
            </Button>
          </Link>
          <a
            href={`mailto:${BUSINESS.email}`}
            className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 whitespace-nowrap text-white border-2 border-white/70 hover:bg-white hover:text-brand-green hover:-translate-y-0.5 hover:shadow-xl px-8 py-3 text-lg shadow-md"
          >
            Mejla oss
          </a>
        </MemReveal>
      </div>
    </section>
  )
}
