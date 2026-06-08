import Link from 'next/link'
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MeshBackground } from '@/components/premium/MeshBackground'
import { Parallax } from '@/components/premium/Scroll'
import { MaskText, MemReveal } from '@/components/memorial/MemReveal'

/**
 * STARTSIDANS HERO
 *
 * Lugn, förtroendeingivande hero i mörk skogsgrön med varm gräddtext.
 * Vänsterställd rubrik enligt Wildkulls önskade design.
 * (Byt mesh-bakgrunden mot ett riktigt kontorsfoto när det finns – se BILDER.md.)
 */
export function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Bakgrund: mörk grön mesh med långsam parallax */}
      <Parallax speed={-40} className="absolute inset-0 scale-110">
        <MeshBackground variant="forest" />
      </Parallax>

      {/* Mjuk gräddövergång nedtill mot nästa sektion */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F3F1E9] to-transparent z-[5]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-2xl">
          <MemReveal className="mem-fade mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Sparkles size={15} className="text-gold-accent" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-cream">
              Erfaren lönekonsult · För företag, organisationer & redovisningsbyråer
            </span>
          </MemReveal>

          <h1 className="font-display text-cream text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] drop-shadow-sm mb-6">
            <MaskText>Lönehantering som</MaskText>
            <br />
            <MaskText delay={120}>skapar trygghet</MaskText>
            <br />
            <MaskText delay={240}>och frigör tid.</MaskText>
          </h1>

          <MemReveal as="p" delay={300} className="mem-fade text-base sm:text-xl text-cream/85 leading-relaxed mb-9 font-light max-w-xl">
            Outsourcing av lön, effektivisering och interimstöd – med en
            personlig och erfaren lönekonsult vid din sida.
          </MemReveal>

          <MemReveal delay={420} className="mem-fade flex flex-col sm:flex-row gap-3">
            <Link href="/tjanster" className="w-full sm:w-auto">
              <Button size="lg" className="shadow-xl w-full sm:w-auto group">
                Våra tjänster
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#loneugglan" className="w-full sm:w-auto">
              <button className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-base sm:text-lg font-semibold border-2 border-cream/60 text-cream hover:bg-cream/10 transition-colors">
                <MessageCircle size={18} />
                Fråga Löneugglan
              </button>
            </a>
          </MemReveal>
        </div>
      </div>
    </section>
  )
}
