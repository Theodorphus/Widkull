import { MetadataRoute } from 'next'
import { VISIBLE_SERVICES } from '@/lib/data/services'

const BASE_URL = 'https://www.wildkullpayroll.se'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Endast synliga tjänster i sitemap – dolda förslag listas inte.
  const servicePages = VISIBLE_SERVICES.map((service) => ({
    url: `${BASE_URL}/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/tjanster`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...servicePages,
    { url: `${BASE_URL}/om-oss`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/kunskapsbank`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
