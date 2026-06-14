import { Sparkles, ArrowRight, MessageCircle, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PhotoBackground } from '@/components/premium/PhotoBackground'
import { Parallax } from '@/components/premium/Scroll'
import { MaskText, MemReveal } from '@/components/memorial/MemReveal'

/**
 * STARTSIDANS HERO
 *
 * Lugn, förtroendeingivande hero i mörk skogsgrön med varm gräddtext.
 * Vänsterställd rubrik enligt Wildkulls önskade design.
 * Kontorsfoto i bakgrunden med mörk overlay; forest-mesh ligger kvar som
 * fallback under fotot (visas om bilden saknas).
 */
export function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Bakgrund: kontorsfoto med långsam parallax (mesh som fallback under) */}
      <Parallax speed={-40} className="absolute inset-0 scale-110">
        <PhotoBackground
          src="/images/home/hero.png"
          variant="forest"
          overlay="medium"
          objectPosition="center 20%"
          priority
          alt=""
        />
      </Parallax>

      {/* Extra mörkning från vänster – bildens vänsterhalva är ljus, så detta
          säkrar läsbarheten för den vänsterställda rubriken. */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-forest-deep/80 via-forest-deep/30 to-transparent" />

      {/* Mjuk gräddövergång nedtill mot nästa sektion */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F3F1E9] to-transparent z-[5]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32 w-full">
        <div className="max-w-2xl">
          <MemReveal className="mem-fade mb-7 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Sparkles size={15} className="text-gold-accent" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-cream">
              Erfaren lönekonsult · För företag, organisationer & redovisningsbyråer
            </span>
          </MemReveal>

          <h1 className="font-display text-cream text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.12] sm:leading-[1.08] drop-shadow-sm mb-8">
            <MaskText>Lönehantering som</MaskText>
            <br />
            <MaskText delay={120}>skapar trygghet</MaskText>
            <br />
            <MaskText delay={240}>och frigör tid.</MaskText>
          </h1>

          <MemReveal as="p" delay={300} className="mem-fade text-base sm:text-xl text-cream/85 leading-relaxed mb-9 font-light max-w-xl">
            Outsourcing av lön, effektivisering och interimstöd. Du får en
            personlig och erfaren lönekonsult vid din sida.
          </MemReveal>

          <MemReveal delay={420} className="mem-fade flex flex-col sm:flex-row gap-3">
            <Button href="/tjanster" size="lg" className="shadow-xl w-full sm:w-auto group">
              Våra tjänster
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="#loneugglan"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-base sm:text-lg font-semibold border-2 border-cream/60 text-cream hover:bg-cream/10 transition-colors"
            >
              <MessageCircle size={18} />
              Fråga Löneugglan
            </a>
          </MemReveal>

          {/* Förtroenderad – svarar direkt på "kan jag lita på henne?" */}
          <MemReveal delay={540} className="mem-fade mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cream/80">
            {[
              'I lönebranschen sedan 2011',
              'Kunder i hela Sverige',
              'Godkänd för F-skatt',
            ].map((text) => (
              <span key={text} className="inline-flex items-center gap-2">
                <Check size={15} className="text-gold-accent flex-shrink-0" />
                {text}
              </span>
            ))}
          </MemReveal>
        </div>
      </div>
    </section>
  )
}
