import { Metadata } from 'next'
import Image from 'next/image'
import { ShieldCheck, Heart, GraduationCap, Sparkles } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { MeshBackground } from '@/components/premium/MeshBackground'
import { Parallax, Reveal } from '@/components/premium/Scroll'
import { MaskText, MemReveal } from '@/components/memorial/MemReveal'
import { BUSINESS } from '@/lib/data/business'

export const metadata: Metadata = {
  title: 'Om oss | Wildkull Payroll AB',
  description:
    'Bakom Wildkull Payroll AB står Veronika Wildkull, senior lönekonsult. Lång erfarenhet av lön, HR och rådgivning, med en personlig och trygg kontakt.',
  alternates: {
    canonical: `${BUSINESS.siteUrl}/om-oss`,
  },
}

// Veronikas egna värderingar (från hennes ”Vision och värderingar”): noggrannhet,
// ständig förbättring, starkt engagemang – samt den personliga servicen hon lyfter.
const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Noggrannhet',
    description: 'Korrekt lön i tid, enligt gällande lagar och avtal. Känsliga uppgifter i säkra händer.',
  },
  {
    icon: Heart,
    title: 'Personlig service',
    description: 'Skräddarsydda lösningar anpassade efter varje kunds unika behov, med en fast kontaktperson.',
  },
  {
    icon: GraduationCap,
    title: 'Lång erfarenhet',
    description: 'Över ett decennium i lönebranschen, från löneadministratör och teamleader till lönechef.',
  },
  {
    icon: Sparkles,
    title: 'Ständig förbättring',
    description: 'En passion för att effektivisera, digitalisera och utveckla löneprocesser steg för steg.',
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
            Senior lönekonsult och grundare, i lönebranschen sedan 2011.
          </MemReveal>
        </div>
      </section>

      {/* Porträtt + berättelse */}
      <SectionWrapper>
        <Reveal className="grid grid-cols-1 lg:grid-cols-[minmax(0,360px)_1fr] gap-10 lg:gap-14 mb-16 items-start">
          {/* Porträtt */}
          <div className="relative mx-auto w-full max-w-[360px]">
            <div className="absolute -inset-3 rounded-3xl bg-brand-green/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-[#E6E2D5] shadow-[0_30px_60px_-30px_rgba(44,71,51,0.45)]">
              <Image
                src="/images/veronika-2026.png"
                alt="Veronika Wildkull, senior lönekonsult och grundare av Wildkull Payroll AB"
                width={1024}
                height={1536}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <p className="mt-4 text-center">
              <span className="block font-display text-lg font-bold text-[#23332A]">
                Veronika Wildkull
              </span>
              <span className="block text-sm text-gray-500">
                Senior lönekonsult &amp; grundare
              </span>
            </p>
          </div>

          {/* Berättelse */}
          <div>
            <h2 className="font-display text-3xl font-bold text-[#23332A] mb-6">
              <MaskText>Kvinnan bakom Wildkull Payroll</MaskText>
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Jag är utbildad löneekonom med examen från Frans Schartaus Handelsinstitut i
              Stockholm och har arbetat i lönebranschen sedan 2011. Under åren har jag haft
              flera olika roller (löneadministratör, teamleader och lönechef) och deltagit i
              flera implementationsprojekt.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Som lönechef har jag byggt upp en löneavdelnings processer från grunden. Jag
              digitaliserade verksamheten och skapade rutiner, checklistor och handledningar.
              Jag har också varit med i ett omfattande projekt där jag säkerställde att de
              lönerelaterade uppgifterna hanterades korrekt vid implementeringen av ett HR-system.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Idag driver jag eget företag där jag erbjuder expertis inom outsourcing av
              lönehantering, processoptimering och utbildning. I mina uppdrag har jag
              effektiviserat löneprocesser, minskat onödiga arbetsmoment och gett stöd åt chefer
              på löneavdelningar. Jag brukar även kvalitetssäkra löneprocesser. Med en förmåga att
              identifiera och rätta felaktigheter och en genuin passion för att förbättra och
              utveckla är jag en engagerad och pålitlig partner för företag som vill ha en smidig
              och korrekt löneadministration.
            </p>
            <p className="text-lg text-gray-700 font-medium border-l-4 border-gold-accent pl-4 italic">
              ”{BUSINESS.motto}.”
            </p>
          </div>
        </Reveal>

        {/* Vision & värderingar */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-start">
          <div className="bg-dark-section text-cream rounded-2xl p-8 sm:p-10">
            <h3 className="font-display text-2xl font-bold mb-4">Vår vision</h3>
            <p className="text-cream/85 leading-relaxed mb-6">
              Att vara det självklara valet för företag som vill ha en smidig, digitaliserad och
              korrekt lönehantering.
            </p>
            <h3 className="font-display text-2xl font-bold mb-4">Våra värderingar</h3>
            <p className="text-cream/85 leading-relaxed">
              Noggrannhet, ständig förbättring och ett starkt engagemang. Med skräddarsydda
              lösningar anpassade efter just ditt företags behov erbjuder vi både
              helhetslösningar och stöd inom specifika delar av lönehanteringen, med dina behov
              i fokus och målet att skapa långsiktiga samarbeten.
            </p>
          </div>

          <div className="bg-[#F3F1E9] p-8 sm:p-10 rounded-2xl border border-[#E6E2D5]">
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
          <Button href="/kontakt" size="lg" className="font-bold">
            Boka ett möte
          </Button>
        </div>
      </SectionWrapper>
    </>
  )
}
