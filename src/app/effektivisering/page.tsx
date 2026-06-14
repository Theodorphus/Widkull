import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { ServiceStructuredData } from '@/components/seo/ServiceStructuredData'
import { getServiceBySlug } from '@/lib/data/services'
import { generateServiceMetadata } from '@/lib/utils/seo'

const SLUG = 'effektivisering'

export const metadata: Metadata = generateServiceMetadata({
  title: 'Effektivisering',
  description:
    'Vi hjälper er att modernisera och effektivisera löneprocessen med bättre rutiner, rätt systemstöd och färre fel.',
  slug: SLUG,
  imageSrc: '/images/og/wildkull-og.png',
})

export default function EffektiviseringPage() {
  const service = getServiceBySlug(SLUG)
  if (!service) return <div>Tjänsten hittades inte</div>
  return (
    <>
      <ServiceStructuredData service={service} slug={SLUG} />
      <ServicePageTemplate service={service} />
    </>
  )
}
