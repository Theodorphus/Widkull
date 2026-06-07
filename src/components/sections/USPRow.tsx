/**
 * USP ROW — "Varför välja Fixar Lukas?"
 *
 * 4-column layout showcasing key benefits
 * Mobile: stacks to 1 column
 * Tablet: 2 columns
 * Desktop: 4 columns
 *
 * Used on:
 * - Home page (after services)
 * - Service pages (key points for that service)
 */

import { LucideIcon } from 'lucide-react'
import { Icon } from '@/components/ui/Icon'

interface USPItem {
  icon: LucideIcon
  title: string
  description: string
}

interface USPRowProps {
  title?: string
  subtitle?: string
  items: USPItem[]
}

export function USPRow({
  title = 'Varför välja Fixar Lukas?',
  subtitle = 'Lokal, noggrann och personlig – jag fixar måstena runt hemmet så du slipper.',
  items,
}: USPRowProps) {
  return (
    <section className="bg-[#E8F5E9] py-10 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-3 sm:mb-4 tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-[#A5D6A7] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex gap-4"
            >
              {/* Checkmark circle */}
              <div className="flex-shrink-0 mt-0.5 h-9 w-9 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                <Icon icon={item.icon} size={18} color="brand" />
              </div>

              <div>
                <h3 className="font-semibold text-[#1A1A1A] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
