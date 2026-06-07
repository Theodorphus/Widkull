import { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, Heart, GraduationCap, Sparkles } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { MeshBackground } from '@/components/premium/MeshBackground'
import { Parallax, Reveal } from '@/components/premium/Scroll'
import { MaskText, MemReveal } from '@/components/memorial/MemReveal'
import { BUSINESS } from '@/lib/data/business'

export const metadata: Metadata = {
  title: 'Om oss – Wildkull Payroll AB',
  description:
    'Bakom Wildkull Payroll AB står Veronika Wildkull, senior lönekonsult. Lång erfarenhet av lön, HR och rådgivning – med en personlig och trygg kontakt.',
  alternates: {
    canonical: `${BUSINESS.siteUrl}/om-oss`,
  },
}

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Trygghet',
    description: 'Korrekt lön i tid, enligt lagar och kollektivavtal. Känsliga uppgifter i säkra händer.',
  },
  {
    icon: Heart,
    title: 'Personligt',
    description: 'Du har alltid samma kontaktperson – någon som lär känna ditt företag på riktigt.',
  },
  {
    icon: GraduationCap,
    title: 'Erfarenhet',
    description: 'Lång erfarenhet av lön, HR och rådgivning i olika branscher och bolag.',
  },
  {
    icon: Sparkles,
    title: 'Pedagogiskt',
    description: 'Vi förklarar krångliga löneregler på ett begripligt sätt – för dig och dina anställda.',
  },
]

export default function OmOss() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Startsida', href: '/' }, { label: 'Om oss' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden text-cream min-h-[440px] flex items-center py-24 px-4 sm:px-6 lg:px-8">
        <Parallax speed={-30} className="absolute inset-0 scale-110">
          <MeshBackground variant="forest" />
        </Parallax>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <MaskText>Hej, jag heter Veronika</MaskText>
          </h1>
          <MemReveal as="p" delay={150} className="mem-fade text-xl text-cream/90 font-light">
            Senior lönekonsult och grundare av Wildkull Payroll AB.
          </MemReveal>
        </div>
      </section>

      {/* Berättelse + värden */}
      <SectionWrapper>
        <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#23332A] mb-6">
              <MaskText>Lite om mig</MaskText>
            </h2>
            {/* PLATSHÅLLARTEXT – ersätt med Veronikas egna ord */}
            <p className="text-lg text-gray-600 mb-4">
              Jag är Veronika Wildkull och driver Wildkull Payroll AB. Med många år bakom mig
              som lönekonsult hjälper jag företag, organisationer och redovisningsbyråer att få
              ordning och trygghet i sin lönehantering.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Lön är mer än siffror – det handlar om förtroende. När lönen är rätt och kommer i
              tid skapas trygghet för både arbetsgivare och anställda. Min ambition är att ta hand
              om det med samma omsorg som om det vore mitt eget bolag.
            </p>
            <p className="text-lg text-gray-700 font-medium border-l-4 border-gold-accent pl-4 italic">
              ”{BUSINESS.motto}.”
            </p>
            <p className="mt-6 text-sm text-gray-400">
              (Platshållartext – fyll gärna i din egen berättelse, erfarenhet och eventuella omdömen.)
            </p>
          </div>

          <div className="bg-[#F3F1E9] p-8 rounded-2xl border border-[#E6E2D5]">
            <h3 className="text-2xl font-bold text-[#23332A] mb-6">Det här står vi för</h3>
            <ul className="space-y-5">
              {VALUES.map((v) => (
                <li key={v.title} className="flex gap-4">
                  <span className="flex-shrink-0 h-11 w-11 rounded-xl bg-brand-green/10 flex items-center justify-center">
                    <v.icon className="text-brand-green" size={22} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-[#23332A]">{v.title}</h4>
                    <p className="text-gray-600 text-sm">{v.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="text-center">
          <Link href="/kontakt">
            <Button size="lg" className="font-bold">
              Boka ett möte
            </Button>
          </Link>
        </div>
      </SectionWrapper>
    </>
  )
}
