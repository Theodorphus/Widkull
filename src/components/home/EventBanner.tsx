import Link from 'next/link'
import { CalendarDays, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/premium/Scroll'
import { BUSINESS } from '@/lib/data/business'

/**
 * EVENTNOTIS – tidsbegränsad mäss-/eventblänkare (t.ex. Enköpingsmässan).
 *
 * Visas bara när BUSINESS.event.active är true. Sätt den till false i
 * business.ts efter mässan, så försvinner notisen automatiskt.
 */
export function EventBanner() {
  const { event } = BUSINESS
  if (!event.active) return null

  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8 pt-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-brand-green/15 bg-cream shadow-[0_12px_32px_-20px_rgba(44,71,51,0.35)]">
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-5 p-6 sm:p-7">
              <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-brand-green flex items-center justify-center">
                <CalendarDays size={24} className="text-cream" />
              </div>

              <div className="flex-grow">
                <span className="text-brand-green font-semibold tracking-widest text-xs uppercase">
                  {event.label} · {event.dates}
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-extrabold text-brand-green-dark mt-1 mb-1.5">
                  {event.headline}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                  {event.text}
                </p>
              </div>

              <Link
                href="/kontakt"
                className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-brand-green text-cream font-bold px-6 py-3 rounded-lg hover:bg-brand-green-dark transition-colors shadow-md"
              >
                Kontakta oss
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
