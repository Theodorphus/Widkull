import Link from 'next/link'
import { Receipt, TrendingUp, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/premium/Scroll'
import { BUSINESS } from '@/lib/data/business'

/**
 * PRISSEKTION – transparent prisbild på startsidan.
 *
 * Veronika ville visa pris på sajten, likt andra löne- och redovisningsbyråer.
 * Texterna kommer från business.ts (BUSINESS.pricing) så att de hålls på ett
 * ställe. Beloppen är ungefärliga (ett typiskt spann), inte ett bindande pris.
 */
export function PricingSection() {
  const { pricing } = BUSINESS

  return (
    <section className="bg-[#F3F1E9] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#23332A] tracking-tight">
              {pricing.heading}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pris per lönespecifikation */}
          <Reveal>
            <div className="h-full bg-white rounded-2xl p-7 sm:p-8 border border-[#E6E2D5] shadow-[0_4px_24px_rgba(44,71,51,0.06)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-xl bg-brand-green-lighter flex items-center justify-center flex-shrink-0">
                  <Receipt size={20} className="text-brand-green-dark" />
                </div>
                <h3 className="font-semibold text-[#23332A]">{pricing.perSpecLabel}</h3>
              </div>
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-brand-green mb-2">
                {pricing.perSpecValue}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{pricing.note}</p>
            </div>
          </Reveal>

          {/* Vad brukar det landa på */}
          <Reveal delay={100}>
            <div className="h-full bg-white rounded-2xl p-7 sm:p-8 border border-[#E6E2D5] shadow-[0_4px_24px_rgba(44,71,51,0.06)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-xl bg-brand-green-lighter flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={20} className="text-brand-green-dark" />
                </div>
                <h3 className="font-semibold text-[#23332A]">{pricing.typicalLabel}</h3>
              </div>
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-brand-green mb-2">
                {pricing.typicalRange}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">{pricing.typicalText}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="mt-10 text-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-brand-green-dark transition-colors shadow-md"
            >
              {pricing.cta}
              <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
