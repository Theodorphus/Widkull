import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'
import { SmoothScroll } from '@/components/premium/SmoothScroll'
import { ScrollProgress } from '@/components/premium/ScrollProgress'
import { OwlChatWidget } from '@/components/owl/OwlChatWidget'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
  weight: ['700', '800'],
})

// Serif för en mer förtroendeingivande, "kontorsmässig" ton i rubriker/citat.
const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
})

/**
 * ROOT LAYOUT METADATA
 *
 * Global SEO-konfiguration för Wildkull Payroll AB
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  || 'https://wildkullpayroll.se'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Wildkull Payroll AB | Lönehantering, interimstöd & rådgivning',
    template: '%s | Wildkull Payroll AB',
  },
  description:
    'Lönehantering som skapar trygghet och frigör tid. Outsourcing, interimstöd, effektivisering och samarbete med redovisningsbyråer – med en erfaren lönekonsult vid din sida.',

  keywords: [
    'lönehantering',
    'löneoutsourcing',
    'lönekonsult',
    'interim lönekonsult',
    'effektivisering löneprocess',
    'lön redovisningsbyrå',
    'lönepartner',
    'payroll Sverige',
    'Wildkull Payroll',
  ],

  authors: [{ name: 'Wildkull Payroll AB' }],
  creator: 'Wildkull Payroll AB',

  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: siteUrl,
    siteName: 'Wildkull Payroll AB',
    title: 'Wildkull Payroll AB | Lönehantering som skapar trygghet',
    description:
      'Outsourcing, interimstöd, effektivisering och samarbete med redovisningsbyråer. Lönehantering med en personlig och erfaren lönekonsult.',
    images: [
      {
        url: '/images/og/wildkull-og.png',
        width: 1200,
        height: 630,
        alt: 'Wildkull Payroll AB – Lönehantering som skapar trygghet och frigör tid',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Wildkull Payroll AB | Lönehantering & lönekonsult',
    description:
      'Lönehantering som skapar trygghet och frigör tid. Outsourcing, interimstöd och rådgivning.',
    images: ['/images/og/wildkull-og.png'],
  },

  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv" className={`${inter.variable} ${jakarta.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <SmoothScroll />
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Flytande chattknapp för Löneugglan (statisk i demot) */}
        <OwlChatWidget />
        <Analytics />
      </body>
    </html>
  )
}
