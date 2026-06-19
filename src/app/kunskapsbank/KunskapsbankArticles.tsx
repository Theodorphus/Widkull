'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/Accordion'

/**
 * KUNSKAPSBANKENS ARTIKLAR
 *
 * Riktade till företagare som sköter lönen själva på kvällar och helger och
 * undrar: gör jag rätt, riskerar jag att göra fel, är det värt att ta hjälp?
 * Innehållet kommer från Veronika (worddokument 2026-06-14). Varje artikel
 * fälls ut som ett dragspel så att sidan blir överskådlig.
 */

interface Article {
  tag: string
  title: string
  excerpt: string
  /** Renderas som artikelns brödtext. */
  body: React.ReactNode
}

const ARTICLES: Article[] = [
  {
    tag: 'Vanliga fel',
    title: '5 vanliga lönefel småföretag gör',
    excerpt:
      'Undvik de vanligaste misstagen som kostar ditt företag tid och pengar.',
    body: (
      <div className="space-y-5">
        <MistakeBlock
          n="1"
          title="Frånvaro registreras fel"
          text="Sjukdom, VAB, föräldraledighet och tjänstledighet påverkar lönen på olika sätt. Ett felregistrerat avdrag kan innebära att den anställde får för mycket eller för lite lön."
          consequence="Tidskrävande rättelser och frågor från medarbetare."
        />
        <MistakeBlock
          n="2"
          title="Semester beräknas fel"
          text="Semesterregler kan vara mer komplicerade än många tror. Semesterlön, semestertillägg och semesterskuld behöver hanteras korrekt för att undvika felaktiga utbetalningar."
          consequence="Felaktiga semesterutbetalningar och kostsamma korrigeringar."
        />
        <MistakeBlock
          n="3"
          title="Fel skatt dras"
          text="Alla anställda beskattas inte på samma sätt. Jämkning, engångsskatt och olika skattetabeller kan påverka hur mycket skatt som ska dras från lönen."
          consequence="Missnöjda medarbetare och extra administration."
        />
        <MistakeBlock
          n="4"
          title="Löneunderlag kommer in för sent"
          text="Många företag saknar tydliga rutiner för att rapportera in övertid, frånvaro, provision eller andra lönepåverkande uppgifter."
          consequence="Stressiga lönekörningar och ökad risk för fel."
        />
        <MistakeBlock
          n="5"
          title="Rapporteringen till Skatteverket stämmer inte med lönen"
          text="Lönen och arbetsgivardeklarationen (AGI) måste överensstämma. Om fel upptäcks i efterhand krävs ofta rättelser och extra arbete."
          consequence="Onödig administration och ökad risk för felrapportering."
        />
        <p>
          När lönerna blir rätt från början sparar du både tid och pengar. Och
          dina medarbetare känner sig trygga.
        </p>
        <ClosingNote
          text="Vill du slippa rättelser och osäkerhet? Kontakta oss på Wildkull Payroll."
          cta="Kontakta oss"
        />
      </div>
    ),
  },
  {
    tag: 'Kostnad',
    title: 'Vad kostar en anställd egentligen?',
    excerpt:
      'Lön, arbetsgivaravgifter, semester och pension – få koll på helheten.',
    body: (
      <div className="space-y-4">
        <p>
          När du anställer någon är månadslönen bara en del av den totala kostnaden.
          Som arbetsgivare behöver du även ta hänsyn till arbetsgivaravgifter,
          semesterlön, tjänstepension och andra kostnader som följer med
          anställningen.
        </p>
        <p>
          Det innebär att en anställd ofta kostar betydligt mer än den lön som står
          i anställningsavtalet. Hur mycket beror bland annat på lön, ålder,
          kollektivavtal, pensionslösning och eventuella förmåner.
        </p>
        <p>
          Många företagare blir överraskade över den verkliga kostnaden när de ska
          anställa sin första medarbetare eller planera för tillväxt.
        </p>
        <p className="font-semibold text-[#23332A]">
          En anställd med 30 000 kr i lön kostar ofta 45 000–50 000 kr i
          verkligheten. Vi hjälper dig räkna exakt för just ditt företag.
        </p>
        <ClosingNote text="Funderar du på att anställa, eller vill du förstå vad dina medarbetare faktiskt kostar företaget? Vi hjälper dig gärna att räkna på det." />
      </div>
    ),
  },
  {
    tag: 'Semester',
    title: 'Semester och semesterlön utan krångel',
    excerpt: 'Semesterreglerna är inte alltid så enkla som de verkar.',
    body: (
      <div className="space-y-4">
        <p>
          Semester är en uppskattad förmån för medarbetarna – men för arbetsgivare
          innebär den ofta fler regler än man först tror.
        </p>
        <p>
          Hur semesterlönen ska beräknas beror bland annat på företagets
          semesteravtal, den anställdes arbetstid och eventuella kollektivavtal.
          Dessutom behöver du hålla koll på semestertillägg, sparade semesterdagar
          och semesterskuld.
        </p>
        <p className="font-semibold text-[#23332A]">Vanliga frågor från arbetsgivare är:</p>
        <ul className="space-y-2">
          {[
            'Hur många betalda semesterdagar har den anställde?',
            'Hur beräknas semesterlön och semestertillägg?',
            'Vad händer med semestern när någon slutar?',
            'Hur påverkas företagets semesterskuld?',
          ].map((q) => (
            <li key={q} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-accent flex-shrink-0" />
              <span>{q}</span>
            </li>
          ))}
        </ul>
        <p>
          Att hantera semester korrekt handlar inte bara om att följa reglerna – det
          ger också trygghet för både arbetsgivare och medarbetare.
        </p>
        <p>
          Felaktig semesterhantering kan snabbt bli dyrt, både i tid och pengar.
          Vi hjälper dig undvika fallgroparna.
        </p>
        <ClosingNote
          text="Känner du dig osäker på semesterhanteringen? Vi hjälper företag att få kontroll på både semesterberäkningar och semesterskulder."
          cta="Osäker på semesterreglerna? Få hjälp"
        />
      </div>
    ),
  },
  {
    tag: 'Ta hjälp',
    title: 'När är det dags att ta hjälp med lönerna?',
    excerpt: 'Tecken på att lönehanteringen börjar ta mer tid än den borde.',
    body: (
      <div className="space-y-4">
        <p>
          I början väljer många företagare att hantera lönerna själva. Det kan
          fungera bra när verksamheten är liten och förutsättningarna är enkla.
        </p>
        <p>
          Men i takt med att företaget växer ökar också kraven på korrekt
          lönehantering. Fler medarbetare, olika anställningsformer, semester,
          sjukfrånvaro och rapportering innebär att lönearbetet ofta tar mer tid än
          man först räknat med.
        </p>
        <p className="font-semibold text-[#23332A]">
          Några tecken på att det kan vara dags att ta hjälp:
        </p>
        <ul className="space-y-2">
          {[
            'Du lägger flera timmar varje månad på löneadministration.',
            'Du känner dig osäker på regler kring semester, sjukfrånvaro eller arbetsgivaravgifter.',
            'Du oroar dig för att göra fel i löner eller rapportering.',
            'Företaget växer och lönearbetet blir allt mer komplext.',
            'Du vill fokusera på verksamheten istället för administration.',
          ].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-accent flex-shrink-0" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p>
          Att anlita en lönekonsult handlar inte bara om att spara tid. Det handlar
          också om att skapa trygghet och säkerställa att lönerna blir rätt – varje
          gång.
        </p>
        <p>
          De flesta företag sparar 5–10 timmar i månaden när de lämnar över
          lönerna, och slipper oron för att något blir fel.
        </p>
        <ClosingNote text="Vill du veta hur mycket tid du skulle kunna frigöra genom att lämna över lönehanteringen? Hör gärna av dig för ett förutsättningslöst samtal." />
      </div>
    ),
  },
]

export function KunskapsbankArticles() {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {ARTICLES.map((a) => (
        <AccordionItem
          key={a.title}
          value={a.title}
          className="bg-white rounded-2xl border border-[#E6E2D5] shadow-[0_4px_24px_rgba(44,71,51,0.06)] px-6 sm:px-8"
        >
          <AccordionTrigger className="py-6">
            <span className="flex flex-col items-start gap-2 text-left">
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-brand-green-lighter text-brand-green-dark">
                {a.tag}
              </span>
              <span className="text-lg sm:text-xl font-bold text-[#23332A]">{a.title}</span>
              <span className="text-sm font-normal text-gray-500">{a.excerpt}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-[15px] leading-relaxed text-gray-600">
            {a.body}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

function MistakeBlock({
  n,
  title,
  text,
  consequence,
}: {
  n: string
  title: string
  text: string
  consequence: string
}) {
  return (
    <div className="border-l-2 border-brand-green-lighter pl-4">
      <h3 className="font-bold text-[#23332A] mb-1">
        {n}. {title}
      </h3>
      <p className="mb-2">{text}</p>
      <p className="text-sm">
        <span className="font-semibold text-brand-green-dark">Konsekvens:</span>{' '}
        {consequence}
      </p>
    </div>
  )
}

function ClosingNote({ text, cta = 'Hör av dig' }: { text: string; cta?: string }) {
  return (
    <div className="mt-2 rounded-xl bg-[#F3F1E9] border border-[#E6E2D5] p-4">
      <p className="text-[#23332A]">{text}</p>
      <Link
        href="/kontakt"
        className="mt-3 inline-flex items-center gap-2 text-brand-green font-semibold text-sm hover:gap-3 transition-all"
      >
        {cta}
        <ArrowRight size={16} />
      </Link>
    </div>
  )
}
