import Link from 'next/link'
import { CalendarCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MaskText } from '@/components/memorial/MemReveal'
import { MeshBackground } from '@/components/premium/MeshBackground'
import { Reveal, Parallax } from '@/components/premium/Scroll'

/**
 * CTA BANNER — mörk grön avslutande uppmaning: "Boka ett möte".
 */
export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Mörk grön mesh med långsam parallax */}
      <Parallax speed={-30} className="absolute inset-0 scale-110">
        <MeshBackground variant="forest" />
      </Parallax>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-cream">
        <Reveal as="p" className="text-gold-accent font-semibold tracking-widest text-sm uppercase mb-4">
          Kostnadsfritt möte
        </Reveal>
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold mb-4 sm:mb-5 tracking-tight">
          <MaskText>Vill du veta mer om hur vi kan hjälpa ditt företag?</MaskText>
        </h2>
        <Reveal as="p" delay={120} className="text-base sm:text-lg text-cream/85 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          Boka ett kostnadsfritt möte så pratar vi om era behov och hur vi kan
          skapa trygghet och frigöra tid i er löneprocess.
        </Reveal>

        <Reveal delay={220} className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/kontakt" size="lg" className="font-bold w-full sm:w-auto sm:px-10">
            <CalendarCheck size={18} className="mr-2" />
            Boka ett möte
          </Button>
          <Link
            href="/tjanster"
            className="inline-flex items-center justify-center font-semibold rounded-lg transition-colors px-6 py-3 text-base sm:text-lg text-cream border-2 border-cream/50 hover:bg-cream/10"
          >
            Se våra tjänster
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
