import { BUSINESS } from '@/lib/data/business'

export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'Organization'],
    '@id': `${BUSINESS.siteUrl}/#business`,
    name: BUSINESS.name,
    image: `${BUSINESS.siteUrl}/images/og/wildkull-og.png`,
    logo: `${BUSINESS.siteUrl}/images/logo.svg`,
    description:
      'Lönehantering, interimstöd, effektivisering och samarbete med redovisningsbyråer. Lönehantering som skapar trygghet och frigör tid.',
    url: BUSINESS.siteUrl,
    email: BUSINESS.email,
    foundingDate: '2023',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SE',
    },
    areaServed: { '@type': 'Country', name: 'Sverige' },
    knowsAbout: ['Lönehantering', 'Löneoutsourcing', 'HR', 'Lönerådgivning'],
    sameAs: [BUSINESS.facebook, BUSINESS.instagram],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
