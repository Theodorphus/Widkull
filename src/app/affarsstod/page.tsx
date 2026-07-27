import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { ServiceStructuredData } from '@/components/seo/ServiceStructuredData'
import { getServiceBySlug } from '@/lib/data/services'
import { generateServiceMetadata } from '@/lib/utils/seo'

const SLUG = 'affarsstod'

export const metadata: Metadata = generateServiceMetadata({
  title: 'Affärsstöd',
  description:
    'Ett samlat affärsstöd med lön, ekonomi och HR. Välj hela paketet eller bara den del du behöver – allt levererat av en erfaren konsult.',
  slug: SLUG,
  imageSrc: '/images/og/wildkull-og.png',
})

export default function AffarsstodPage() {
  const service = getServiceBySlug(SLUG)
  if (!service) return <div>Tjänsten hittades inte</div>
  return (
    <>
      <ServiceStructuredData service={service} slug={SLUG} />
      <ServicePageTemplate service={service} />
    </>
  )
}
