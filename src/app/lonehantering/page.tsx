import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { ServiceStructuredData } from '@/components/seo/ServiceStructuredData'
import { getServiceBySlug } from '@/lib/data/services'
import { generateServiceMetadata } from '@/lib/utils/seo'

const SLUG = 'lonehantering'

export const metadata: Metadata = generateServiceMetadata({
  title: 'Lönehantering',
  description:
    'Outsourca hela eller delar av er lönehantering till en erfaren lönekonsult. Trygg, korrekt och i tid – varje månad.',
  slug: SLUG,
  imageSrc: '/images/og/wildkull-og.png',
})

export default function LonehanteringPage() {
  const service = getServiceBySlug(SLUG)
  if (!service) return <div>Tjänsten hittades inte</div>
  return (
    <>
      <ServiceStructuredData service={service} slug={SLUG} />
      <ServicePageTemplate service={service} />
    </>
  )
}
