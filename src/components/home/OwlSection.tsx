import Image from 'next/image'
import { Check, Clock, Moon, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/premium/Scroll'
import { MaskText } from '@/components/memorial/MemReveal'
import { BUSINESS } from '@/lib/data/business'

/**
 * "FRÅGA LÖNEUGGLAN" — startsidans signatursektion.
 *
 * Maskoten (uggla) till vänster, innehåll till höger: gratis första fråga,
 * öppettider och ämnen man kan fråga om. Knappen är i nuläget statisk och
 * pekar mot den flytande chattbubblan (OwlChatWidget). Den riktiga
 * AI-chatten kopplas in senare.
 */
export function OwlSection() {
  const { owl } = BUSINESS

  return (
    <section id="loneugglan" className="relative -mt-10 sm:-mt-16 z-20 px-4 sm:px-6 lg:px-8 pb-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#F7F4EC] border border-[#E4DECB] shadow-[0_30px_60px_-30px_rgba(44,71,51,0.45)]">
            {/* dekorativ guld-orb */}
            <div className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 rounded-full bg-gold-accent/10 blur-3xl" />

            <div className="grid lg:grid-cols-[300px_1fr] gap-6 sm:gap-10 p-6 sm:p-10 items-center">
              {/* Maskot */}
              <div className="relative mx-auto w-52 sm:w-64 lg:w-full">
                <div className="absolute inset-0 rounded-full bg-brand-green/5 blur-2xl" />
                <Image
                  src="/images/owl-mascot.svg"
                  alt="Löneugglan – Wildkull Payrolls maskot"
                  width={320}
                  height={340}
                  className="relative float-icon w-full h-auto"
                  priority
                />
              </div>

              {/* Innehåll */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-green">
                    <MaskText>Fråga Löneugglan</MaskText>
                  </h2>
                </div>
                <p className="italic text-gray-500 mb-5">{owl.intro}</p>

                <p className="text-lg font-bold text-brand-green-dark mb-2">
                  {owl.firstFree}
                </p>
                <p className="text-gray-700 mb-5">
                  Ställ din fråga direkt i chatten. Har du frågor om:
                </p>

                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-7">
                  {owl.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-gray-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-accent flex-shrink-0" />
                      <span className="capitalize">{topic}</span>
                    </li>
                  ))}
                </ul>

                {/* Fördelar / öppettider */}
                <div className="grid sm:grid-cols-2 gap-3 mb-7">
                  <Feature icon={<Check size={16} />} text="Svar från erfaren lönekonsult" />
                  <Feature icon={<Moon size={16} />} text={owl.eveningText} />
                  <Feature icon={<Clock size={16} />} text={owl.hoursText} />
                  <Feature icon={<MessageCircle size={16} />} text="Klicka på chattikonen nere till höger" />
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-green-dark transition-colors shadow-md"
                  >
                    <MessageCircle size={18} />
                    Starta chatten
                  </a>
                  <span className="font-serif italic text-gray-500">
                    Klicka här för att chatta →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2.5 text-sm text-gray-700">
      <span className="flex-shrink-0 h-7 w-7 rounded-full bg-brand-green-lighter text-brand-green flex items-center justify-center">
        {icon}
      </span>
      <span>{text}</span>
    </div>
  )
}
