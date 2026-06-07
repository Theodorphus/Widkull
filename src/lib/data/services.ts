import { ServiceData } from '@/types/service'

export const SERVICES: ServiceData[] = [
  {
    slug: 'lonehantering',
    title: 'Lönehantering',
    seoTitle: 'Lönehantering & löneoutsourcing | Wildkull Payroll AB',
    seoDescription:
      'Outsourca hela eller delar av er lönehantering till en erfaren lönekonsult. Trygg, korrekt och i tid – varje månad. Wildkull Payroll AB.',
    heroTagline: 'Vi tar hand om lönen – ni får tid över till verksamheten',
    description:
      'Vi tar hand om hela eller delar av er löneprocess – korrekt, tryggt och i tid. Du får en personlig lönekonsult som känner ert företag och ser till att allt blir rätt varje månad, från tidrapporter till utbetalning och bokföringsunderlag.',
    shortDescription:
      'Vi tar hand om hela eller delar av er löneprocess – korrekt, tryggt och i tid.',
    included: [
      'Löpande lönekörning varje månad',
      'Hantering av tidrapporter, frånvaro och avvikelser',
      'Skatter, arbetsgivaravgifter och AGI till Skatteverket',
      'Reseräkningar, utlägg och förmåner',
      'Semesterberäkning och semesterårsavslut',
      'Lönespecifikationer till de anställda',
      'Bokföringsunderlag till er eller er redovisningsbyrå',
      'Rapportering till Fora, Collectum och kollektivavtal',
    ],
    badges: ['Outsourcing', 'På distans', 'Fast kontaktperson'],
    imageSrc: '/images/og/lonehantering.png',
    keyPoints: [
      {
        title: 'Rätt lön i tid',
        description:
          'Lönerna blir korrekta och betalas ut i tid – varje månad, helt utan stress för dig.',
      },
      {
        title: 'En personlig kontakt',
        description:
          'Du får en fast lönekonsult som kan ert företag, inte ett anonymt supportnummer.',
      },
      {
        title: 'Trygghet och sekretess',
        description:
          'Vi arbetar enligt gällande lagar och kollektivavtal och hanterar känsliga uppgifter säkert.',
      },
    ],
    faq: [
      {
        question: 'Kan ni ta över vår befintliga löneprocess?',
        answer:
          'Ja. Vi gör en trygg överlämning från ert nuvarande system eller löneansvarig, kartlägger era rutiner och kör därefter lönen löpande åt er. Du märker ingen lucka i kvaliteten.',
      },
      {
        question: 'Vilka lönesystem arbetar ni i?',
        answer:
          'Vi är vana vid de vanligaste systemen på marknaden och kan arbeta i ert befintliga system eller föreslå ett som passar er. Hör av dig så berättar vi mer.',
      },
      {
        question: 'Hur fungerar det om någon av våra anställda har en fråga om sin lön?',
        answer:
          'De kan vända sig direkt till oss. Vi besvarar frågor om lönespecifikationer, semester, avdrag och förmåner på ett pedagogiskt sätt – så slipper ni mellanhanden.',
      },
      {
        question: 'Passar det även mindre företag?',
        answer:
          'Absolut. Vi hjälper allt från enmansbolag till större organisationer. Du betalar för det stöd du behöver, utan onödiga fasta kostnader.',
      },
    ],
  },
  {
    slug: 'interimskonsult',
    title: 'Interimskonsult',
    seoTitle: 'Interim lönekonsult – tillfälligt stöd | Wildkull Payroll AB',
    seoDescription:
      'Tillfällig förstärkning till löneavdelningen vid frånvaro, arbetstoppar eller rekrytering. Erfaren interim lönekonsult från Wildkull Payroll AB.',
    heroTagline: 'Tillfällig förstärkning när ni behöver den som mest',
    description:
      'Tillfällig förstärkning vid frånvaro, arbetstoppar eller rekrytering. När er löneansvariga är sjuk, föräldraledig eller slutar kliver vi in och håller lönen igång – utan att ni tappar tempo eller kvalitet.',
    shortDescription:
      'Tillfällig förstärkning vid frånvaro, arbetstoppar eller rekrytering.',
    included: [
      'Snabb inhopp vid sjukdom eller föräldraledighet',
      'Överbryggning under pågående rekrytering',
      'Extra resurs vid arbetstoppar och årsavslut',
      'Upplärning och stöd till befintlig personal',
      'Dokumentation av rutiner och processer',
      'Flexibelt upplägg – på plats eller på distans',
    ],
    badges: ['Snabb start', 'Flexibelt', 'Erfaren'],
    imageSrc: '/images/og/interimskonsult.png',
    keyPoints: [
      {
        title: 'Igång snabbt',
        description:
          'Vi sätter oss snabbt in i era rutiner och håller lönen rullande från dag ett.',
      },
      {
        title: 'Ingen kunskapslucka',
        description:
          'Vi dokumenterar arbetet så att er nästa löneansvariga får en mjuk start.',
      },
      {
        title: 'Du betalar för tiden',
        description:
          'Hyr in kompetensen exakt så länge ni behöver den – inte en dag längre.',
      },
    ],
    faq: [
      {
        question: 'Hur snabbt kan ni vara på plats?',
        answer:
          'Oftast med kort varsel. Hör av dig så tidigt du kan så löser vi en bra överlämning, men vi är vana vid att kliva in även akut.',
      },
      {
        question: 'Kan ni arbeta på distans?',
        answer:
          'Ja, vi arbetar i normalfallet på distans men kan vara på plats vid behov, beroende på uppdrag och ort.',
      },
      {
        question: 'Hjälper ni till att lära upp vår nya löneansvariga?',
        answer:
          'Gärna. Vi dokumenterar processerna och kan finnas med som stöd under introduktionen så att övergången blir trygg.',
      },
    ],
  },
  {
    slug: 'effektivisering',
    title: 'Effektivisering',
    seoTitle: 'Effektivisering av löneprocessen | Wildkull Payroll AB',
    seoDescription:
      'Vi hjälper er att modernisera och effektivisera löneprocessen – bättre rutiner, rätt systemstöd och färre fel. Wildkull Payroll AB.',
    heroTagline: 'Modernare rutiner, färre fel och mindre manuellt arbete',
    description:
      'Vi hjälper er att modernisera löneavdelningen och era arbetssätt. Genom att se över rutiner, systemstöd och flöden får ni en löneprocess som tar mindre tid, ger färre fel och blir lättare att lita på.',
    shortDescription:
      'Vi hjälper löneavdelningen att modernisera processer och arbetssätt.',
    included: [
      'Kartläggning av nuvarande löneprocess',
      'Identifiering av flaskhalsar och manuella moment',
      'Förslag på rätt systemstöd och integrationer',
      'Förbättrade rutiner och tydliga checklistor',
      'Stöd vid byte eller uppgradering av lönesystem',
      'Utbildning av personal i nya arbetssätt',
    ],
    badges: ['Processöversyn', 'Systemstöd', 'Utbildning'],
    imageSrc: '/images/og/effektivisering.png',
    keyPoints: [
      {
        title: 'Spara tid',
        description:
          'Vi rensar bort manuella moment så att lönen tar mindre tid varje månad.',
      },
      {
        title: 'Färre fel',
        description:
          'Tydliga rutiner och rätt systemstöd minskar risken för misstag och rättelser.',
      },
      {
        title: 'Trygg förändring',
        description:
          'Vi tar med personalen på resan så att de nya arbetssätten faktiskt används.',
      },
    ],
    faq: [
      {
        question: 'Var börjar ni?',
        answer:
          'Vi börjar med en kartläggning av hur lönen fungerar idag. Utifrån den föreslår vi konkreta förbättringar, prioriterade efter vad som ger mest nytta snabbast.',
      },
      {
        question: 'Måste vi byta lönesystem?',
        answer:
          'Inte nödvändigtvis. Ofta finns mycket att vinna i befintligt system. Om ett byte är motiverat hjälper vi er att välja rätt och genomföra det tryggt.',
      },
      {
        question: 'Hjälper ni till under själva genomförandet?',
        answer:
          'Ja. Vi stannar kvar och stöttar under införandet och utbildar personalen, så att förbättringarna blir verklighet och inte bara en rapport.',
      },
    ],
  },
  {
    slug: 'samarbete-redovisningsbyraer',
    title: 'Samarbete med redovisningsbyråer',
    seoTitle: 'Lönepartner för redovisningsbyråer | Wildkull Payroll AB',
    seoDescription:
      'Bli er byrås lönepartner. Vi tar hand om lönehanteringen till era kunder så att ni kan erbjuda lön utan att bygga egen avdelning. Wildkull Payroll AB.',
    heroTagline: 'Erbjud era kunder lön – utan att bygga en egen avdelning',
    description:
      'Vi blir er byrås lönepartner och erbjuder lönehantering till era kunder. Ni kan erbjuda ett komplett tjänsteutbud med lön, samtidigt som ni slipper bygga upp och bemanna en egen löneavdelning. Diskret, smidigt och alltid i ert namn.',
    shortDescription:
      'Vi blir er lönepartner och erbjuder lönehantering till era kunder.',
    included: [
      'Lönehantering åt era kunder i ert namn',
      'Flexibel kapacitet – ni skalar upp och ner efter behov',
      'En fast kontaktperson för byrån',
      'Tydlig ansvarsfördelning och sekretess',
      'Stöd vid kundfrågor om lön',
      'Möjlighet att hänvisa komplexa löneärenden till oss',
    ],
    badges: ['White label', 'Skalbart', 'Lönepartner'],
    imageSrc: '/images/og/samarbete-redovisningsbyraer.png',
    keyPoints: [
      {
        title: 'Komplett erbjudande',
        description:
          'Erbjud era kunder lön utan att rekrytera och bemanna en egen löneavdelning.',
      },
      {
        title: 'I ert namn',
        description:
          'Vi arbetar diskret i bakgrunden – kunden upplever en sömlös tjänst från er byrå.',
      },
      {
        title: 'Skala efter behov',
        description:
          'Ta in lönekapacitet när ni behöver den och slipp fasta kostnader när ni inte gör det.',
      },
    ],
    faq: [
      {
        question: 'Märker våra kunder att lönen läggs ut?',
        answer:
          'Vi anpassar oss efter hur ni vill arbeta. Många byråer väljer att vi arbetar diskret i bakgrunden, medan andra presenterar oss som sin lönepartner. Ni bestämmer.',
      },
      {
        question: 'Hur fördelas ansvaret mellan oss?',
        answer:
          'Vi sätter upp en tydlig ansvarsfördelning och sekretessöverenskommelse från start, så att alla vet vem som gör vad. Ni har kvar kundrelationen.',
      },
      {
        question: 'Kan vi börja med en enstaka kund?',
        answer:
          'Absolut. Många börjar med en eller ett par kunder för att se hur samarbetet fungerar, och utökar sedan i takt med efterfrågan.',
      },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((service) => service.slug)
}
