/**
 * WHAT'S INCLUDED SECTION
 *
 * Displays all services included in a package
 * Shows with checkmark icon, title, and optional description
 *
 * Supports both simple strings and structured data:
 * - Simple: items={["Dammsugning", "Putsning"]}
 * - Complex: items={[{ title: "...", icon: "..." }]}
 */

import { CheckCircle } from 'lucide-react'
import { Reveal } from '@/components/premium/Scroll'
import { MaskText } from '@/components/memorial/MemReveal'

interface IncludedItem {
  title: string
  icon?: React.ReactNode
  description?: string
}

interface WhatIncludedSectionProps {
  items: (string | IncludedItem)[]
  title?: string
  subtitle?: string
}

export function WhatIncludedSection({
  items,
  title = 'Vad ingår i tjänsten?',
  subtitle,
}: WhatIncludedSectionProps) {
  // Normalize items to object format
  const normalizedItems = items.map((item) => {
    if (typeof item === 'string') {
      return { title: item, icon: <CheckCircle size={20} className="text-brand-green" strokeWidth={2.5} /> }
    }
    return { icon: <CheckCircle size={20} className="text-brand-green" strokeWidth={2.5} />, ...item }
  })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            <MaskText>{title}</MaskText>
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {normalizedItems.map((item, index) => (
            <Reveal key={index} variant="up" delay={index * 70} className="h-full">
              <div className="card-lift card-sheen flex items-start gap-4 p-5 bg-[#F7F7F7] rounded-xl border border-[#E5E5E5] hover:border-brand-green/40 h-full">
                <div className="card-icon flex-shrink-0 w-9 h-9 rounded-lg bg-white border border-[#E5E5E5] flex items-center justify-center shadow-subtle">
                  {item.icon}
                </div>
                <div className="flex-grow pt-1 relative z-[2]">
                  <p className="font-semibold text-gray-900 leading-snug">{item.title}</p>
                  {item.description && (
                    <p className="text-sm text-gray-500 leading-relaxed mt-1">{item.description}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
