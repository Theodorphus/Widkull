import Link from 'next/link'
import { Gift, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/premium/Scroll'
import { BUSINESS } from '@/lib/data/business'

/**
 * KAMPANJBAND – "Första månaden gratis" för nya kunder (juli–september).
 *
 * Visas bara när BUSINESS.offer.active är true. Sätt den till false i
 * business.ts när kampanjen löpt ut, så försvinner bandet automatiskt.
 */
export function OfferBanner() {
  const { offer, priceFrom } = BUSINESS
  if (!offer.active) return null

  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8 pt-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-brand-green text-cream shadow-[0_20px_40px_-20px_rgba(44,71,51,0.6)]">
            {/* dekorativ guld-orb */}
            <div className="pointer-events-none absolute -top-12 -right-8 h-44 w-44 rounded-full bg-gold-accent/15 blur-3xl" />

            <div className="relative flex flex-col sm:flex-row sm:items-center gap-5 p-6 sm:p-8">
              <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-cream/10 border border-cream/20 flex items-center justify-center">
                <Gift size={24} className="text-gold-accent" />
              </div>

              <div className="flex-grow">
                <span className="text-gold-accent font-semibold tracking-widest text-xs uppercase">
                  {offer.label}
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-extrabold mt-1 mb-1.5">
                  {offer.headline}
                </h2>
                <p className="text-cream/85 text-sm sm:text-base leading-relaxed max-w-2xl">
                  {offer.text}
                </p>
                <p className="text-cream/60 text-xs mt-2">{priceFrom}.</p>
              </div>

              <Link
                href="/kontakt"
                className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-cream text-brand-green-dark font-bold px-6 py-3 rounded-lg hover:bg-white transition-colors shadow-md"
              >
                Kom igång
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
