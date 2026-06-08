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
  phone: '070-123 45 67',
  phoneHref: '+46701234567',
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
    /** Öppettider för chatten. */
    hoursText: 'Tis, Tors & Sön 19–20',
    eveningText: 'Kvällsöppet',
    topics: ['lön', 'förmåner', 'semester', 'sjukfrånvaro och ledigheter', 'anställningar'],
  },
  noHiddenFees: 'Tydliga villkor och en personlig kontakt – inga överraskningar.',
  facebook: 'https://www.facebook.com/wildkullpayroll',
  instagram: 'https://www.instagram.com/wildkullpayroll',
} as const
