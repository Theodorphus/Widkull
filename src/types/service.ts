export interface FAQ {
  question: string
  answer: string
}

export interface KeyPoint {
  title: string
  description: string
}

export interface ServiceData {
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  heroTagline: string
  description: string
  /** Kort sammanfattning för kort/listor. */
  shortDescription?: string
  included: string[]
  /** Korta etiketter som visas på tjänstekort (t.ex. "Outsourcing", "Distans"). */
  badges?: string[]
  /** OG-/delningsbild (social media). */
  imageSrc: string
  /** Foto som visas på sidan (hero, kort). Skild från OG-bilden. */
  photoSrc?: string
  keyPoints?: KeyPoint[]
  faq?: FAQ[]
}
