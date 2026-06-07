import Link from 'next/link'
import { SERVICES } from '@/lib/data/services'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-7xl font-bold text-brand-green mb-4">404</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Sidan hittades inte</h1>
      <p className="text-gray-500 max-w-md mb-10">
        Sidan du letar efter finns inte eller har flyttats. Prova en av länkarna nedan.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <Link
          href="/"
          className="px-5 py-2.5 bg-navy text-white rounded-lg font-semibold hover:bg-petrol transition-colors"
        >
          Startsida
        </Link>
        <Link
          href="/tjanster"
          className="px-5 py-2.5 bg-white text-navy border border-navy rounded-lg font-semibold hover:bg-gray-50 transition-colors"
        >
          Våra tjänster
        </Link>
        <Link
          href="/kontakt"
          className="px-5 py-2.5 bg-brand-green text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Kontakta oss
        </Link>
      </div>

      <div className="border-t border-gray-100 pt-10 w-full max-w-lg">
        <p className="text-sm text-gray-400 mb-4 uppercase tracking-wide font-semibold">Populära tjänster</p>
        <div className="flex flex-wrap justify-center gap-2">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="text-sm text-navy hover:text-brand-green underline underline-offset-2 transition-colors"
            >
              {service.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
