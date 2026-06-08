'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { MAIN_NAV, SERVICES_NAV } from '@/lib/data/navigation'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/50 backdrop-blur-sm shadow-none'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18">
        {/* Logo + Företagsnamn */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-10 w-11 flex-shrink-0">
            <Image
              src="/images/owl-crest.png"
              alt="Wildkull Payroll AB logotyp"
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-snug">
            <span className="font-display font-extrabold tracking-tight text-brand-green text-[16px] sm:text-[18px] leading-none transition-colors duration-200">
              Wildkull Payroll AB
            </span>
            <span className="hidden sm:block text-[10px] text-[#1A1A1A]/60 font-semibold tracking-[0.18em] uppercase mt-1">
              Lönehantering · Effektivisering · Rådgivning
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {MAIN_NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-gray-700 hover:text-brand-green hover:bg-gray-100 px-3 py-1.5 rounded-md transition-colors">
              {item.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-brand-green hover:bg-gray-100 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1">
              Tjänster
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                {SERVICES_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:text-brand-green hover:bg-green-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link href="/kontakt">
            <Button>Boka ett möte</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </header>
  )
}
