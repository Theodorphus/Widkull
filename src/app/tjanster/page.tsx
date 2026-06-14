import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { MeshBackground } from '@/components/premium/MeshBackground'
import { Parallax, Reveal } from '@/components/premium/Scroll'
import { MaskText, MemReveal } from '@/components/memorial/MemReveal'
import { CTABanner } from '@/components/home/CTABanner'
import { VISIBLE_SERVICES } from '@/lib/data/services'
import { serviceIcons } from '@/lib/data/serviceIcons'
import { BUSINESS } from '@/lib/data/business'

export const metadata: Metadata = {
  title: 'Våra tjänster | Lönehantering, interim & rådgivning',
  description:
    'Lönehantering, effektivisering och interimskonsult. Flexibla lönelösningar för företag och organisationer.',
  alternates: {
    canonical: `${BUSINESS.siteUrl}/tjanster`,
  },
}

export default function TjansterPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Startsida', href: '/' }, { label: 'Tjänster' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden text-cream min-h-[420px] flex items-center py-24 px-4 sm:px-6 lg:px-8">
        <Parallax speed={-30} className="absolute inset-0 scale-110">
          <MeshBackground variant="forest" />
        </Parallax>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <MaskText>Våra tjänster</MaskText>
          </h1>
          <MemReveal as="p" delay={150} className="mem-fade text-xl text-cream/85 font-light max-w-2xl mx-auto">
            Flexibla lösningar inom lön, rådgivning och effektivisering för
            företag och organisationer.
          </MemReveal>
        </div>
      </section>

      {/* Tjänster */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F3F1E9]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {VISIBLE_SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 100} className="h-full">
              <Link href={`/${service.slug}`} className="block h-full group">
                <div className="card-lift h-full flex flex-col bg-white rounded-2xl p-7 sm:p-8 border border-[#E6E2D5] shadow-[0_4px_24px_rgba(44,71,51,0.06)]">
                  <div className="card-icon h-14 w-14 rounded-xl bg-brand-green flex items-center justify-center text-white mb-5">
                    <div className="w-7 h-7">{serviceIcons[service.slug]}</div>
                  </div>
                  <h2 className="text-2xl font-bold text-[#23332A] mb-3 group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {service.shortDescription ?? service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.included.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check size={16} className="text-brand-green flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-2 text-brand-green font-bold mt-auto">
                    Läs mer
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
