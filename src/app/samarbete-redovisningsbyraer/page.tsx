import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { ServiceStructuredData } from '@/components/seo/ServiceStructuredData'
import { getServiceBySlug } from '@/lib/data/services'
import { generateServiceMetadata } from '@/lib/utils/seo'

const SLUG = 'samarbete-redovisningsbyraer'

export const metadata: Metadata = {
  ...generateServiceMetadata({
    title: 'Samarbete med redovisningsbyråer',
    description:
      'Bli er byrås lönepartner. Vi tar hand om lönehanteringen till era kunder så att ni kan erbjuda lön utan att bygga egen avdelning.',
    slug: SLUG,
    imageSrc: '/images/og/wildkull-og.png',
  }),
  // Föreslagen tjänst som är dold i meny/sitemap tills Veronika bekräftat den.
  // Noindex så att sidan inte hittas via Google innan dess.
  robots: { index: false, follow: false },
}

export default function SamarbetePage() {
  const service = getServiceBySlug(SLUG)
  if (!service) return <div>Tjänsten hittades inte</div>
  return (
    <>
      <ServiceStructuredData service={service} slug={SLUG} />
      <ServicePageTemplate service={service} />
    </>
  )
}
