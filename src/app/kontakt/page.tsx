import { Metadata } from 'next'
import Image from 'next/image'
import { Mail, MapPin, Clock, BadgeCheck } from 'lucide-react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BokaForm } from './BokaForm'
import { OwlQuestionForm } from '@/components/owl/OwlQuestionForm'
import { MeshBackground } from '@/components/premium/MeshBackground'
import { Parallax } from '@/components/premium/Scroll'
import { MaskText, MemReveal } from '@/components/memorial/MemReveal'
import { BUSINESS } from '@/lib/data/business'

export const metadata: Metadata = {
  title: 'Kontakt | Boka ett möte | Wildkull Payroll AB',
  description:
    'Boka ett kostnadsfritt möte med Wildkull Payroll AB. Berätta om era behov inom lön så återkommer vi snabbt.',
  alternates: {
    canonical: `${BUSINESS.siteUrl}/kontakt`,
  },
}

function ContactPageStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Kontakt | Wildkull Payroll AB',
    url: `${BUSINESS.siteUrl}/kontakt`,
    description: 'Boka ett kostnadsfritt möte med Wildkull Payroll AB.',
    mainEntity: { '@id': `${BUSINESS.siteUrl}/#business` },
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

export default function KontaktPage() {
  return (
    <>
      <ContactPageStructuredData />

      <Breadcrumbs items={[{ label: 'Startsida', href: '/' }, { label: 'Kontakt' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden text-cream min-h-[400px] flex items-center py-24 px-4 sm:px-6 lg:px-8">
        <Parallax speed={-30} className="absolute inset-0 scale-110">
          <MeshBackground variant="forest" />
        </Parallax>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <MaskText>Boka ett möte</MaskText>
          </h1>
          <MemReveal as="p" delay={150} className="mem-fade text-lg sm:text-xl text-cream/85 font-light max-w-2xl mx-auto">
            Berätta om era behov så pratar vi om hur vi kan skapa trygghet och frigöra tid i er löneprocess. Kostnadsfritt och förutsättningslöst.
          </MemReveal>
        </div>
      </section>

      {/* Content */}
      <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F3F1E9]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Kontaktinformation */}
          <div className="lg:col-span-1 space-y-5">
            <h2 className="text-2xl font-bold text-[#23332A] mb-2">Kontaktuppgifter</h2>

            <InfoCard icon={<Mail size={20} />} title="E-post">
              <a href={`mailto:${BUSINESS.email}`} className="text-brand-green hover:text-brand-green-dark break-all">
                {BUSINESS.email}
              </a>
            </InfoCard>

            <InfoCard icon={<Clock size={20} />} title="Löneugglan, chatten">
              <p className="text-gray-600">{BUSINESS.owl.alwaysOn}</p>
              <p className="text-gray-500 text-sm mt-1.5">{BUSINESS.owl.replyNote}</p>
            </InfoCard>

            <InfoCard icon={<MapPin size={20} />} title="Arbetar med">
              <p className="text-gray-600">Kunder i hela Sverige, på distans.</p>
            </InfoCard>

            <InfoCard icon={<BadgeCheck size={20} />} title="Bolagsuppgifter">
              <p className="text-gray-600 text-sm">Org.nr {BUSINESS.orgNumber}</p>
              <p className="text-gray-600 text-sm">Bankgiro {BUSINESS.bankgiro}</p>
              <p className="text-gray-600 text-sm">Godkänd för F-skatt</p>
            </InfoCard>
          </div>

          {/* Formulär */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-[#E6E2D5] p-6 sm:p-8 shadow-[0_4px_24px_rgba(44,71,51,0.06)]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#23332A] mb-1">Skicka en förfrågan</h2>
              <p className="text-gray-500 text-sm">
                Fyll i formuläret så återkommer vi inom kort.
              </p>
            </div>
            <BokaForm />
          </div>
        </div>

        {/* Fråga till Löneugglan när livechatten är stängd */}
        <div id="loneugglan-fraga" className="max-w-6xl mx-auto mt-10 scroll-mt-24">
          <div className="bg-white rounded-2xl border border-[#E6E2D5] p-6 sm:p-8 shadow-[0_4px_24px_rgba(44,71,51,0.06)]">
            <div className="mb-6 flex items-start gap-4">
              <div className="relative h-[84px] w-[100px] flex-shrink-0">
                <Image
                  src="/images/Logga22-bright.png"
                  alt="Löneugglan"
                  fill
                  sizes="100px"
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#23332A] mb-1">
                  Skicka en fråga till Veronika
                </h2>
                <p className="text-gray-500 text-sm">
                  Löneugglan svarar direkt i chatten dygnet runt. Gäller frågan din
                  egen situation lämnar du den här, så svarar Veronika personligen
                  inom 24 timmar.
                </p>
              </div>
            </div>
            <OwlQuestionForm />
          </div>
        </div>
      </div>
    </>
  )
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="p-5 bg-white rounded-xl border border-[#E6E2D5]">
      <div className="flex items-center gap-2.5 mb-2 text-brand-green">
        {icon}
        <h3 className="font-semibold text-[#23332A]">{title}</h3>
      </div>
      <div className="ml-[30px]">{children}</div>
    </div>
  )
}
