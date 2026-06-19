'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/Accordion'
import { Reveal } from '@/components/premium/Scroll'
import { MaskText } from '@/components/memorial/MemReveal'
import { FAQ } from '@/types/service'

interface FAQSectionProps {
  faqItems?: FAQ[]
  title?: string
  subtitle?: string
}

/**
 * FAQ SECTION — Using Accordion component from Sprint 1
 *
 * Displays frequently asked questions in an accordion
 * with smooth animations and premium styling
 */
export function FAQSection({
  faqItems = [],
  title = 'Vanliga frågor',
  subtitle,
}: FAQSectionProps) {
  if (!faqItems || faqItems.length === 0) {
    return null
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            <MaskText>{title}</MaskText>
          </h2>
          {subtitle && (
            <Reveal as="p" delay={120} className="text-lg sm:text-xl text-gray-600">
              {subtitle}
            </Reveal>
          )}
        </div>

        {/* Accordion */}
        <Reveal variant="up" className="bg-white rounded-xl border border-gray-200 p-8 sm:p-10 shadow-subtle">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        {/* CTA Box */}
        <Reveal variant="scale" className="mt-12 p-8 sm:p-10 bg-brand-green/10 rounded-xl border border-brand-green/30 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Har du fler frågor?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Hör av dig så svarar vi gärna och ger dig ett personligt prisförslag inom 24 timmar.
          </p>
          <Link href="/kontakt#offert">
            <Button variant="primary" size="lg">
              Skicka en förfrågan
            </Button>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
