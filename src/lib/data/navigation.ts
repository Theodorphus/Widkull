export interface NavItem {
  label: string
  href: string
}

export interface NavDropdownItem extends NavItem {
  slug: string
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Hem', href: '/' },
  { label: 'Om oss', href: '/om-oss' },
  { label: 'Kunskapsbank', href: '/kunskapsbank' },
  { label: 'Kontakt', href: '/kontakt' },
]

export const SERVICES_NAV: NavDropdownItem[] = [
  { label: 'Lönehantering', href: '/lonehantering', slug: 'lonehantering' },
  { label: 'Interimskonsult', href: '/interimskonsult', slug: 'interimskonsult' },
  { label: 'Effektivisering', href: '/effektivisering', slug: 'effektivisering' },
  {
    label: 'Samarbete redovisningsbyråer',
    href: '/samarbete-redovisningsbyraer',
    slug: 'samarbete-redovisningsbyraer',
  },
]

export const FOOTER_LINKS: NavItem[] = [
  { label: 'Hem', href: '/' },
  { label: 'Våra tjänster', href: '/tjanster' },
  { label: 'Om oss', href: '/om-oss' },
  { label: 'Kunskapsbank', href: '/kunskapsbank' },
  { label: 'Kontakt', href: '/kontakt' },
]
