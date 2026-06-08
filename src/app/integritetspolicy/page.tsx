import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { MeshBackground } from '@/components/premium/MeshBackground'
import { Parallax } from '@/components/premium/Scroll'
import { MaskText } from '@/components/memorial/MemReveal'
import { BUSINESS } from '@/lib/data/business'

export const metadata: Metadata = {
  title: 'Integritetspolicy – Wildkull Payroll AB',
  description:
    'Så hanterar Wildkull Payroll AB dina personuppgifter när du kontaktar oss via webbplatsen. Vi värnar om din integritet och följer GDPR.',
  alternates: {
    canonical: `${BUSINESS.siteUrl}/integritetspolicy`,
  },
  // Juridisk sida – inget vi vill ranka på i sök.
  robots: { index: false, follow: true },
}

export default function IntegritetspolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Startsida', href: '/' }, { label: 'Integritetspolicy' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden text-cream min-h-[320px] flex items-center py-20 px-4 sm:px-6 lg:px-8">
        <Parallax speed={-30} className="absolute inset-0 scale-110">
          <MeshBackground variant="forest" />
        </Parallax>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <MaskText>Integritetspolicy</MaskText>
          </h1>
          <p className="text-lg text-cream/85 font-light max-w-2xl mx-auto">
            Vi värnar om din integritet och är öppna med hur vi hanterar dina uppgifter.
          </p>
        </div>
      </section>

      {/* Innehåll */}
      <SectionWrapper className="bg-[#F3F1E9]">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#E6E2D5] p-7 sm:p-10 shadow-[0_4px_24px_rgba(44,71,51,0.06)]">
          <article className="prose-policy space-y-8">
            <p className="text-gray-600">
              Den här policyn beskriver hur {BUSINESS.name} (”vi”, ”oss”) behandlar dina
              personuppgifter när du besöker vår webbplats {BUSINESS.siteUrl.replace('https://', '')} eller
              kontaktar oss. Vi följer dataskyddsförordningen (GDPR).
            </p>

            <Section title="Personuppgiftsansvarig">
              <p>
                {BUSINESS.name} (org.nr {BUSINESS.orgNumber}) är personuppgiftsansvarig för
                behandlingen av dina personuppgifter. Har du frågor om hur vi hanterar dina
                uppgifter är du välkommen att kontakta oss på{' '}
                <a href={`mailto:${BUSINESS.email}`} className="text-brand-green hover:text-brand-green-dark">
                  {BUSINESS.email}
                </a>
                .
              </p>
            </Section>

            <Section title="Vilka uppgifter vi samlar in">
              <p>
                När du fyller i kontaktformuläret på webbplatsen samlar vi in de uppgifter du
                själv lämnar – normalt ditt namn, din e-postadress och innehållet i ditt
                meddelande. Vi samlar inte in fler uppgifter än de du väljer att dela med dig av.
              </p>
            </Section>

            <Section title="Varför vi behandlar uppgifterna">
              <p>
                Vi använder uppgifterna enbart för att besvara din förfrågan, återkomma till dig
                och vid behov fortsätta en dialog om våra tjänster. Den rättsliga grunden är vårt
                berättigade intresse av att kunna svara på din kontakt, alternativt att vidta
                åtgärder på din begäran inför ett eventuellt avtal.
              </p>
            </Section>

            <Section title="Hur länge vi sparar uppgifterna">
              <p>
                Vi sparar din förfrågan så länge det behövs för att hantera ärendet och en
                eventuell fortsatt kontakt. Leder kontakten inte vidare raderar vi uppgifterna när
                de inte längre fyller något syfte. Blir du kund kan uppgifter behöva sparas längre
                för att uppfylla krav i bokförings- och skattelagstiftning.
              </p>
            </Section>

            <Section title="Vilka vi delar uppgifter med">
              <p>
                Vi säljer aldrig dina uppgifter och delar dem inte med tredje part i
                marknadsföringssyfte. Uppgifter kan behandlas av de leverantörer som driver vår
                webbplats och e-post, och de behandlar då uppgifterna för vår räkning enligt avtal.
                Uppgifter kan lämnas ut om vi enligt lag är skyldiga att göra det.
              </p>
            </Section>

            <Section title="Cookies och statistik">
              <p>
                Webbplatsen använder inte cookies för spårning, annonsering eller
                besökaranalys. Eventuella cookies som krävs för att webbplatsen ska fungera
                tekniskt innehåller ingen information som identifierar dig som person.
              </p>
            </Section>

            <Section title="Dina rättigheter">
              <p>
                Du har rätt att begära ett utdrag av de uppgifter vi har om dig, att få felaktiga
                uppgifter rättade och att i många fall få dina uppgifter raderade. Du har också
                rätt att invända mot vår behandling. Hör av dig till{' '}
                <a href={`mailto:${BUSINESS.email}`} className="text-brand-green hover:text-brand-green-dark">
                  {BUSINESS.email}
                </a>{' '}
                så hjälper vi dig. Om du anser att vi behandlar dina uppgifter felaktigt har du
                rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY).
              </p>
            </Section>

            <Section title="Ändringar i policyn">
              <p>
                Vi kan komma att uppdatera den här policyn. Den senaste versionen finns alltid
                publicerad här på webbplatsen.
              </p>
            </Section>
          </article>
        </div>
      </SectionWrapper>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-[#23332A] mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </section>
  )
}
