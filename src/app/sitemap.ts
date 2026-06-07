import { MetadataRoute } from 'next'
import { getAllServiceSlugs } from '@/lib/data/services'

const BASE_URL = 'https://wildkullpayroll.se'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: `${BASE_URL}/${slug}`,
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
