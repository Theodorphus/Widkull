import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { ServiceStructuredData } from '@/components/seo/ServiceStructuredData'
import { getServiceBySlug } from '@/lib/data/services'
import { generateServiceMetadata } from '@/lib/utils/seo'

const SLUG = 'interimskonsult'

export const metadata: Metadata = generateServiceMetadata({
  title: 'Interimskonsult',
  description:
    'Tillfällig förstärkning till löneavdelningen vid frånvaro, arbetstoppar eller rekrytering. Erfaren interim lönekonsult.',
  slug: SLUG,
  imageSrc: '/images/og/wildkull-og.png',
})

export default function InterimskonsultPage() {
  const service = getServiceBySlug(SLUG)
  if (!service) return <div>Tjänsten hittades inte</div>
  return (
    <>
      <ServiceStructuredData service={service} slug={SLUG} />
      <ServicePageTemplate service={service} />
    </>
  )
}
