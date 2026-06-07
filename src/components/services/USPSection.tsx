interface USPItem {
  title: string
  description: string
  icon?: string
}

interface USPSectionProps {
  usps?: USPItem[]
}

const defaultUSPs: USPItem[] = [
  {
    title: 'Hälsa & Välbefinnande',
    description:
      'En ren arbetsplats reducerar sjukdomar och allerger. Renare luft ökar välmåendet för din personal.',
    icon: '❤️',
  },
  {
    title: 'Ökad Produktivitet',
    description:
      'Anställda är mer fokuserade och motiverade i en ren, organiserad miljö. Det är väl dokumenterat.',
    icon: '⚡',
  },
  {
    title: 'Professionellt Intryck',
    description:
      'Kunder och partners blir imponerade av ett välskött kontor. Det säger något om ditt företag.',
    icon: '💼',
  },
  {
    title: 'Sparad Tid & Pengar',
    description:
      'Du slipper administrera städning internt. Vi hanterar allt så du fokuserar på ditt kärnbusiness.',
    icon: '💰',
  },
]

export function USPSection({ usps = defaultUSPs }: USPSectionProps) {
  return (
    <section className="bg-gray-900 text-white py-section-lg px-section-sm">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Varför välja oss?</h2>
          <p className="text-xl text-gray-300">
            Professionell städning som gör skillnad för ditt företag
          </p>
        </div>

        {/* USPs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="group flex gap-6 p-6 rounded-card hover:bg-gray-800 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-green text-white text-3xl group-hover:scale-110 transition-transform duration-300 shadow-strong">
                  {usp.icon || '✓'}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-green transition-colors">
                  {usp.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {usp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-gray-700">
          <p className="text-gray-300 mb-6">
            Redo att märka skillnaden en professionell städservice kan göra?
          </p>
          <a
            href="/kontakt#offert"
            className="inline-block px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-600 transition-colors duration-300"
          >
            Få gratis offert →
          </a>
        </div>
      </div>
    </section>
  )
}
