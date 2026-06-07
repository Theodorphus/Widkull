import { ServiceData } from '@/types/service'
import { BUSINESS } from '@/lib/data/business'

interface ServiceStructuredDataProps {
  service: ServiceData
  slug: string
}

export function ServiceStructuredData({ service, slug }: ServiceStructuredDataProps) {
  const baseUrl = BUSINESS.siteUrl
  const serviceUrl = `${baseUrl}/${slug}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@id': `${baseUrl}/#business`,
    },
    areaServed: { '@type': 'Country', name: 'Sverige' },
    url: serviceUrl,
    image: service.imageSrc ? `${baseUrl}${service.imageSrc}` : `${baseUrl}/images/og/wildkull-og.png`,
  }

  const faqSchema = service.faq && service.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  )
}
