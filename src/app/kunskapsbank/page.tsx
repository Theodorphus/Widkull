import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { MeshBackground } from '@/components/premium/MeshBackground'
import { Parallax } from '@/components/premium/Scroll'
import { MaskText, MemReveal } from '@/components/memorial/MemReveal'
import { KunskapsbankArticles } from './KunskapsbankArticles'
import { BUSINESS } from '@/lib/data/business'

export const metadata: Metadata = {
  title: 'Kunskapsbank | Lön, semester & förmåner förklarat',
  description:
    'Wildkull Payrolls kunskapsbank: vanliga lönefel, vad en anställd kostar, semesterlön och när det är dags att ta hjälp. Lönekunskap förklarad på vanlig svenska.',
  alternates: {
    canonical: `${BUSINESS.siteUrl}/kunskapsbank`,
  },
}

export default function Kunskapsbank() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Startsida', href: '/' }, { label: 'Kunskapsbank' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden text-cream min-h-[380px] flex items-center py-20 px-4 sm:px-6 lg:px-8">
        <Parallax speed={-30} className="absolute inset-0 scale-110">
          <MeshBackground variant="forest" />
        </Parallax>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
            <BookOpen size={15} className="text-gold-accent" />
            Kunskapsbank
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <MaskText>Gör du rätt med lönerna?</MaskText>
          </h1>
          <MemReveal as="p" delay={150} className="mem-fade text-xl text-cream/85 font-light max-w-2xl mx-auto">
            Sitter du hemma på kvällar och helger och försöker få lönen att gå
            ihop? Lön är sällan så enkelt som det ser ut. Här går vi igenom var det
            brukar bli fel och hur du vet om det är värt att ta hjälp.
          </MemReveal>
        </div>
      </section>

      {/* Artiklar */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F3F1E9]">
        <div className="max-w-4xl mx-auto">
          <KunskapsbankArticles />

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">
              Har du en fråga redan nu? Löneugglan svarar gärna, dygnet runt.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-brand-green font-semibold border-2 border-brand-green/30 px-6 py-3 rounded-lg hover:bg-brand-green hover:text-white transition-colors"
            >
              Kontakta oss
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
