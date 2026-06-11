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
    firstFree: 'Första frågan är gratis.',
    /** Öppettider för livechatten – "vanligtvis" eftersom Veronika kan få förhinder. */
    hoursText: 'Vanligtvis tis, tors & sön 19–20',
    hoursNote:
      'Övriga tider svarar Löneugglan på vanliga frågor – eller lämna din fråga i formuläret så återkommer Veronika vid nästa chattillfälle.',
    eveningText: 'Kvällsöppet',
    topics: ['lön', 'förmåner', 'semester', 'sjukfrånvaro och ledigheter', 'anställningar'],
  },
  noHiddenFees: 'Tydliga villkor och en personlig kontakt – inga överraskningar.',
  facebook: 'https://www.facebook.com/wildkullpayroll',
  instagram: 'https://www.instagram.com/wildkullpayroll',
} as const
