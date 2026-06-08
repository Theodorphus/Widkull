import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ServiceData } from '@/types/service'
import { serviceIcons } from '@/lib/data/serviceIcons'
import { Reveal } from '@/components/ui/Reveal'

interface RelatedServicesSectionProps {
  relatedServices: ServiceData[]
  currentServiceSlug: string
}

const CARD_GRADIENT: Record<string, string> = {
  lonehantering: 'from-[#284035] via-[#375546] to-[#8FAE8B]',
  interimskonsult: 'from-[#1E2E26] via-[#375546] to-[#9C993C]',
  effektivisering: 'from-[#375546] via-[#4f7556] to-[#8FAE8B]',
  'samarbete-redovisningsbyraer': 'from-[#284035] via-[#4f7556] to-[#9C993C]',
}

/**
 * Relaterade tjänster – gradient-headers istället för foton.
 */
export function RelatedServicesSection({
  relatedServices,
  currentServiceSlug,
}: RelatedServicesSectionProps) {
  const filtered = relatedServices.filter((s) => s.slug !== currentServiceSlug).slice(0, 3)
  if (filtered.length === 0) return null

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Våra andra tjänster
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Utforska fler sätt vi kan hjälpa ert företag med lönen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((service, i) => {
            const gradient = CARD_GRADIENT[service.slug] ?? 'from-forest via-brand-green to-leaf'
            return (
              <Reveal key={service.slug} delay={i * 120} className="h-full">
                <Link href={`/${service.slug}`} className="block h-full group">
                  <div className="h-full overflow-hidden rounded-xl bg-white shadow-subtle border border-gray-100 hover:border-brand-green/30 hover:shadow-medium transition-all duration-300 flex flex-col">
                    <div className={`relative h-40 bg-gradient-to-br ${gradient} overflow-hidden`}>
                      <div className="absolute -top-8 -right-6 w-32 h-32 rounded-full bg-white/15 blur-2xl group-hover:scale-125 transition-transform duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 text-white/90 group-hover:scale-110 transition-transform duration-300">
                          {serviceIcons[service.slug]}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col flex-grow p-6 sm:p-7">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow mb-4">
                        {service.description.substring(0, 90)}...
                      </p>
                      <div className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm mt-auto">
                        Läs mer
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
