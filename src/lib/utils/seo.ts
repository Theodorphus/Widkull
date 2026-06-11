/**
 * SEO UTILITIES
 *
 * Helper functions for generating metadata across the site
 * Used in service pages and other dynamic routes
 */

import { Metadata } from 'next'
import { BUSINESS } from '@/lib/data/business'

export interface ServiceMetadataParams {
  title: string
  description: string
  slug: string
  imageSrc: string
}

/**
 * Generate metadata for service pages
 *
 * Usage:
 * export const metadata = generateServiceMetadata({
 *   title: 'Lönehantering',
 *   description: '...',
 *   slug: 'lonehantering',
 *   imageSrc: '/images/og/wildkull-og.png'
 * })
 */
export function generateServiceMetadata({
  title,
  description,
  slug,
  imageSrc,
}: ServiceMetadataParams): Metadata {
  const baseUrl = BUSINESS.siteUrl
  const url = `${baseUrl}/${slug}`

  return {
    title: `${title} | ${BUSINESS.name}`,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${BUSINESS.name}`,
      description,
      type: 'website',
      locale: 'sv_SE',
      url,
      siteName: BUSINESS.name,
      images: [
        {
          url: imageSrc,
          width: 1200,
          height: 630,
          alt: `${title} | ${BUSINESS.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${BUSINESS.name}`,
      description,
      images: [imageSrc],
    },
  }
}


/**
 * Generate service schema for structured data
 */
export function generateServiceSchema(
  serviceName: string,
  slug: string,
  description: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sverige',
    },
    url: `${BUSINESS.siteUrl}/${slug}`,
  }
}

/**
 * Generate FAQ schema for structured data
 */
export function generateFAQSchema(
  faqItems: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
