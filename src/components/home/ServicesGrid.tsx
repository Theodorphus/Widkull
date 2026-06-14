import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/premium/Scroll'
import { MaskText } from '@/components/memorial/MemReveal'
import { VISIBLE_SERVICES } from '@/lib/data/services'
import { serviceIcons } from '@/lib/data/serviceIcons'

/**
 * TJÄNSTER – kort enligt Wildkulls önskade design.
 * Rena kort med ikoncirkel, kort beskrivning och "Läs mer".
 */
export function ServicesGrid() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F3F1E9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-brand-green font-semibold tracking-[0.18em] text-xs uppercase mb-3">
            Våra tjänster
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#23332A] mb-4 tracking-tight">
            <MaskText>Lösningar som passar ditt företag</MaskText>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Vi erbjuder flexibla lösningar inom lön, rådgivning och effektivisering,
            oavsett om du är företag, organisation eller redovisningsbyrå.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {VISIBLE_SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 100} className="h-full">
              <Link href={`/${service.slug}`} className="block h-full group">
                <div className="card-lift card-sheen h-full flex flex-col bg-white rounded-2xl p-6 sm:p-7 border border-[#E6E2D5] shadow-[0_4px_24px_rgba(44,71,51,0.06)]">
                  {/* Ikoncirkel */}
                  <div className="card-icon h-14 w-14 rounded-xl bg-brand-green flex items-center justify-center text-white mb-5">
                    <div className="w-7 h-7">{serviceIcons[service.slug]}</div>
                  </div>

                  <h3 className="text-xl font-bold text-[#23332A] mb-3 group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                    {service.shortDescription ?? service.description}
                  </p>

                  {service.badges && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.badges.map((badge) => (
                        <span
                          key={badge}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-brand-green-lighter text-brand-green-dark"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  <span className="inline-flex items-center gap-2 text-brand-green font-bold text-sm mt-auto">
                    Läs mer
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/tjanster"
            className="inline-flex items-center gap-2 text-brand-green font-semibold border-2 border-brand-green/30 px-6 py-3 rounded-lg hover:bg-brand-green hover:text-white transition-colors"
          >
            Se alla våra tjänster
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
