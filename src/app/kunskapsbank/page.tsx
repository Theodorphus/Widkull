import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { MeshBackground } from '@/components/premium/MeshBackground'
import { Parallax, Reveal } from '@/components/premium/Scroll'
import { MaskText, MemReveal } from '@/components/memorial/MemReveal'
import { BUSINESS } from '@/lib/data/business'

export const metadata: Metadata = {
  title: 'Kunskapsbank – Lön, semester & förmåner förklarat',
  description:
    'Wildkull Payrolls kunskapsbank: enkla guider och svar om lön, semester, förmåner och anställning. Lönekunskap förklarad på vanlig svenska.',
  alternates: {
    canonical: `${BUSINESS.siteUrl}/kunskapsbank`,
  },
}

// PLATSHÅLLARE – ersätt med riktiga artiklar när innehållet finns.
const ARTICLES = [
  {
    title: 'Så fungerar semesterlön',
    excerpt: 'Sammalöneregeln, procentregeln och semesterårsavslut – förklarat steg för steg.',
    tag: 'Semester',
  },
  {
    title: 'Förmånsbeskattning – det här bör du veta',
    excerpt: 'Vanliga förmåner, hur de beskattas och vad arbetsgivaren behöver rapportera.',
    tag: 'Förmåner',
  },
  {
    title: 'Vad är AGI och hur fungerar det?',
    excerpt: 'Arbetsgivardeklaration på individnivå – vad som rapporteras och när.',
    tag: 'Skatt',
  },
  {
    title: 'Sjukfrånvaro och karensavdrag',
    excerpt: 'Hur sjuklön, karensavdrag och sjukfrånvaro hänger ihop i löneberäkningen.',
    tag: 'Frånvaro',
  },
]

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
            <MaskText>Lönekunskap på vanlig svenska</MaskText>
          </h1>
          <MemReveal as="p" delay={150} className="mem-fade text-xl text-cream/85 font-light max-w-2xl mx-auto">
            Enkla guider och svar om lön, semester, förmåner och anställning.
          </MemReveal>
        </div>
      </section>

      {/* Artiklar (platshållare) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F3F1E9]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ARTICLES.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <div className="h-full bg-white rounded-2xl p-7 border border-[#E6E2D5] shadow-[0_4px_24px_rgba(44,71,51,0.06)] card-lift">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-brand-green-lighter text-brand-green-dark">
                    {a.tag}
                  </span>
                  <h2 className="text-xl font-bold text-[#23332A] mt-4 mb-2">{a.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{a.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-brand-green/60 font-semibold text-sm">
                    Kommer snart
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">
              Har du en fråga redan nu? Löneugglan svarar gärna.
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
