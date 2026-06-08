import Link from 'next/link'
import { CheckCircle, Mail, CalendarCheck } from 'lucide-react'
import { HeroSection } from './HeroSection'
import { WhatIncludedSection } from './WhatIncludedSection'
import { FAQSection } from './FAQSection'
import { RelatedServicesSection } from './RelatedServicesSection'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { CTABanner } from '@/components/home/CTABanner'
import { Button } from '@/components/ui/Button'
import { Reveal, Stagger } from '@/components/premium/Scroll'
import { TiltCard } from '@/components/premium/Effects'
import { ServiceData } from '@/types/service'
import { VISIBLE_SERVICES } from '@/lib/data/services'
import { BUSINESS } from '@/lib/data/business'

interface ServicePageTemplateProps {
  service: ServiceData
  /** Valfri premium-sektion direkt efter hero (sidspecifik). */
  afterHero?: React.ReactNode
  /** Valfri premium-sektion strax före FAQ (sidspecifik). */
  beforeFAQ?: React.ReactNode
}

/**
 * SERVICE PAGE TEMPLATE — Premium service page structure
 *
 * Layout:
 * 1. Hero Section (image + title + tagline)
 * 2. Key Points Row (3 benefits)
 * 3. What's Included (grid with checkmarks)
 * 4. FAQ Accordion
 * 5. Related Services (3 related tjänster)
 * 6. CTA Banner (call to action)
 *
 * This template is used for all 6 service pages
 */
export function ServicePageTemplate({
  service,
  afterHero,
  beforeFAQ,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Startsida', href: '/' },
          { label: 'Tjänster', href: '/tjanster' },
          { label: service.title },
        ]}
      />

      {/* Hero Section */}
      <HeroSection
        title={service.title}
        tagline={service.heroTagline}
        imageSrc={service.imageSrc}
        photoSrc={service.photoSrc}
      />

      {/* Sidspecifik premium-sektion (t.ex. stat-band) */}
      {afterHero}

      {/* Key Points Row — 3 key benefits specific to this service */}
      {service.keyPoints && service.keyPoints.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <Stagger
              as="div"
              step={110}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {service.keyPoints.map((point, i) => (
                <TiltCard
                  key={i}
                  max={6}
                  className="card-sheen flex gap-4 items-start h-full bg-white rounded-2xl border border-gray-200/80 p-6 shadow-subtle"
                >
                  <div className="card-icon flex-shrink-0 w-11 h-11 rounded-xl bg-brand-green/10 flex items-center justify-center mt-0.5">
                    <CheckCircle size={24} className="text-brand-green" strokeWidth={2.5} />
                  </div>
                  <div className="flex-grow relative z-[2]">
                    <h3 className="font-bold text-gray-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </TiltCard>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* Inline CTA strip */}
      <Reveal variant="scale" className="bg-navy py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-base sm:text-lg text-center sm:text-left">
            Vill du veta mer? Boka ett kostnadsfritt möte så pratar vi om era behov.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/kontakt">
              <Button size="lg" className="w-full sm:w-auto font-bold">
                <CalendarCheck size={18} className="mr-2" />
                Boka ett möte
              </Button>
            </Link>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 text-base"
            >
              <Mail size={16} />
              {BUSINESS.email}
            </a>
          </div>
        </div>
      </Reveal>

      {/* What's Included Section */}
      <WhatIncludedSection items={service.included} />

      {/* Sidspecifik premium-sektion (t.ex. pinned showcase + marquee) */}
      {beforeFAQ}

      {/* FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <FAQSection
          faqItems={service.faq}
          title={`Vanliga frågor om ${service.title.toLowerCase()}`}
          subtitle="Allt du behöver veta om vår tjänst"
        />
      )}

      {/* Related Services */}
      <RelatedServicesSection
        relatedServices={VISIBLE_SERVICES}
        currentServiceSlug={service.slug}
      />

      {/* Final CTA Banner */}
      <CTABanner />
    </>
  )
}
