/**
 * Gemensamma företagsuppgifter för Wildkull Payroll AB.
 * Importera härifrån i stället för att hårdkoda kontaktuppgifter.
 */
export const BUSINESS = {
  name: 'Wildkull Payroll AB',
  shortName: 'Wildkull Payroll',
  tagline: 'Lönehantering · Effektivisering · Rådgivning',
  /** Veronikas personliga ledord. */
  motto: 'Lönehantering som skapar trygghet och frigör tid',
  owner: 'Veronika Wildkull',
  ownerRole: 'Senior lönekonsult',
  // OBS: Telefonnummer saknas medvetet – lägg till Veronikas riktiga nummer
  // här (phone + phoneHref) när hon vill visa det på sajten.
  email: 'info@wildkullpayroll.se',
  siteUrl: 'https://wildkullpayroll.se',
  /** Bolagsuppgifter. */
  orgNumber: '559408-8857',
  bankgiro: '5941-5125',
  fTax: true,
  /** Vi jobbar med kunder i hela Sverige (på distans). */
  areasText: 'hela Sverige',
  /** Löneugglan – chatbotens "skyltfönster". */
  owl: {
    name: 'Löneugglan',
    intro: 'Lönehjälp när du har tid.',
    /** Löneugglan är alltid på och svarar på allmänna frågor dygnet runt. */
    alwaysOn: 'Svarar dygnet runt',
    /** Specifika frågor mejlas in – vi återkommer inom ett dygn. */
    replyTime: 'Vi svarar på personliga frågor inom 24 timmar',
    replyNote:
      'Löneugglan svarar direkt på allmänna frågor. För frågor om just din situation lämnar du en rad i formuläret, så hör vi av oss inom 24 timmar.',
    topics: ['lön', 'förmåner', 'semester', 'sjukfrånvaro och ledigheter', 'anställningar'],
  },
  noHiddenFees: 'Tydliga villkor och en personlig kontakt, inga överraskningar.',
  /** Prissättning. */
  priceFrom: 'Från 199 kr/mån per lönespecifikation',
  /**
   * Prissektion på startsidan – transparent prisbild enligt Veronikas önskemål.
   * Beloppen är medvetet ungefärliga (typiskt spann), inte ett bindande pris.
   */
  pricing: {
    heading: 'Vad kostar det att anlita Wildkull Payroll?',
    perSpecLabel: 'Pris per lönespecifikation',
    perSpecValue: 'Från 199 kr',
    note: 'Systemkostnader och eventuella tilläggstjänster tillkommer.',
    typicalLabel: 'Vad brukar det landa på?',
    typicalRange: '1 500–3 000 kr/mån',
    typicalText:
      'De flesta av våra kunder ligger mellan 1 500 och 3 000 kr/mån, beroende på antal anställda och vilka tjänster som ingår.',
    cta: 'Vill du veta vad det skulle kosta för ditt företag? Skicka ett meddelande',
  },
  /**
   * Tidsbegränsat kampanjerbjudande. Visas på startsidan.
   * Sätt `active: false` när kampanjen (juli–september) löpt ut.
   */
  offer: {
    active: true,
    label: 'Just nu',
    headline: 'Första månaden gratis för nya kunder',
    text: 'Spara tid redan första månaden. Vi sköter allt från lönebesked till rapportering. Under juli, augusti och september bjuder vi nya kunder på första månadens lönehantering, så du får prova hur det känns att lämna över utan kostnad.',
  },
  /**
   * Tidsbegränsad mäss-/eventnotis. Visas på startsidan när `active: true`.
   * Sätt `active: false` efter mässan (efter 12 september 2026) så försvinner
   * notisen automatiskt.
   */
  event: {
    active: true,
    label: 'Vi ställer ut',
    headline: 'Träffa oss på Enköpingsmässan',
    text: 'Den 11–12 september ställer vi ut på Enköpingsmässan. Kom förbi och säg hej, så pratar vi lön, ekonomi och HR – och hur vi kan hjälpa just ditt företag. Vi ses där!',
    dates: '11–12 september',
  },
  facebook: 'https://www.facebook.com/wildkullpayroll',
  instagram: 'https://www.instagram.com/wildkullpayroll',
} as const
