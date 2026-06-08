export interface NavItem {
  label: string
  href: string
}

import { VISIBLE_SERVICES } from './services'

export interface NavDropdownItem extends NavItem {
  slug: string
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Hem', href: '/' },
  { label: 'Om oss', href: '/om-oss' },
  { label: 'Kunskapsbank', href: '/kunskapsbank' },
  { label: 'Kontakt', href: '/kontakt' },
]

// Härleds från tjänstedatan så meny, grid och ordning alltid är i synk.
// Dolda tjänster (t.ex. ej bekräftade förslag) filtreras bort automatiskt.
export const SERVICES_NAV: NavDropdownItem[] = VISIBLE_SERVICES.map((service) => ({
  label: service.title,
  href: `/${service.slug}`,
  slug: service.slug,
}))

export const FOOTER_LINKS: NavItem[] = [
  { label: 'Hem', href: '/' },
  { label: 'Våra tjänster', href: '/tjanster' },
  { label: 'Om oss', href: '/om-oss' },
  { label: 'Kunskapsbank', href: '/kunskapsbank' },
  { label: 'Kontakt', href: '/kontakt' },
]
