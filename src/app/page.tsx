import type { Metadata } from 'next'
import { ShieldCheck, Zap, UserRound, Award } from 'lucide-react'
import { Hero } from '@/components/home/Hero'
import { OfferBanner } from '@/components/home/OfferBanner'
import { OwlSection } from '@/components/home/OwlSection'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { USPRow } from '@/components/sections/USPRow'
import { PricingSection } from '@/components/home/PricingSection'
import { CTABanner } from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Wildkull Payroll AB | Lönehantering som skapar trygghet och frigör tid',
  description:
    'Outsourcing, interimstöd, effektivisering och samarbete med redovisningsbyråer. Lönehantering med en personlig och erfaren lönekonsult.',
  alternates: {
    canonical: 'https://wildkullpayroll.se',
  },
}

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Kampanj – Första månaden gratis (juli–september) */}
      <OfferBanner />

      {/* 3. Fråga Löneugglan – signatursektion */}
      <OwlSection />

      {/* 3. Tjänster – fyra kort */}
      <ServicesGrid />

      {/* 4. Därför väljer företag Wildkull */}
      <USPRow
        title="Därför väljer företag Wildkull Payroll"
        subtitle="Trygghet, erfarenhet och en personlig kontakt, från första mötet till varje lönekörning."
        items={[
          {
            icon: ShieldCheck,
            title: 'Tryggt & säkert',
            description:
              'Vi arbetar enligt gällande lagar och kollektivavtal och hanterar känsliga uppgifter med högsta säkerhet.',
          },
          {
            icon: Zap,
            title: 'Effektivt & modernt',
            description:
              'Vi effektiviserar och skapar smidiga processer med rätt systemstöd för mindre manuellt arbete.',
          },
          {
            icon: UserRound,
            title: 'Personligt & nära',
            description:
              'Du får en personlig kontakt som förstår ditt företags behov, inte ett anonymt supportnummer.',
          },
          {
            icon: Award,
            title: 'Erfarenhet du kan lita på',
            description:
              'Lång erfarenhet av lön, HR och rådgivning i olika branscher och bolag.',
          },
        ]}
      />

      {/* 5. Pris – transparent prisbild */}
      <PricingSection />

      {/* 6. Avslutande CTA – boka möte */}
      <CTABanner />
    </>
  )
}
