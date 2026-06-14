import Image from 'next/image'
import { Check, Clock, MessageCircle } from 'lucide-react'
import { StartChatButton } from '@/components/owl/StartChatButton'
import { Reveal } from '@/components/premium/Scroll'
import { MaskText } from '@/components/memorial/MemReveal'
import { BUSINESS } from '@/lib/data/business'

/**
 * "FRÅGA LÖNEUGGLAN" — startsidans signatursektion.
 *
 * Maskoten (uggla) till vänster, innehåll till höger: tillgänglighet och
 * ämnen man kan fråga om. Själva chatten är Löneugglan (LoneugglanChat),
 * vår egen Claude-drivna chattbubbla nere till höger – knappen här öppnar den.
 */
export function OwlSection() {
  const { owl } = BUSINESS

  return (
    <section id="loneugglan" className="relative mt-2 sm:mt-4 z-20 px-4 sm:px-6 lg:px-8 pb-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#F7F4EC] border border-[#E4DECB] shadow-[0_30px_60px_-30px_rgba(44,71,51,0.45)]">
            {/* dekorativ guld-orb */}
            <div className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 rounded-full bg-gold-accent/10 blur-3xl" />

            <div className="grid lg:grid-cols-[300px_1fr] gap-6 sm:gap-10 p-6 sm:p-10 items-center">
              {/* Maskot – bilden har egen grön bakgrund, så vi ramar in den i en
                  rundad grön platta så att kanten blir en avsiktlig designdetalj. */}
              <div className="relative mx-auto w-52 sm:w-64 lg:w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gold-accent/15 blur-xl" />
                <div className="relative overflow-hidden rounded-3xl border border-gold-accent/30 bg-brand-green shadow-[0_18px_36px_-18px_rgba(40,64,53,0.6)]">
                  <Image
                    src="/images/home/Uggla1.png"
                    alt="Löneugglan, Wildkull Payrolls maskot"
                    width={1402}
                    height={1122}
                    className="float-icon w-full h-auto"
                    priority
                  />
                </div>
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
                  Ställ din fråga direkt i chatten.
                </p>
                <p className="text-gray-700 mb-5">
                  Löneugglan svarar dygnet runt. Har du frågor om:
                </p>

                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-7">
                  {owl.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-gray-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-accent flex-shrink-0" />
                      <span className="inline-block first-letter:uppercase">{topic}</span>
                    </li>
                  ))}
                </ul>

                {/* Fördelar / öppettider */}
                <div className="grid sm:grid-cols-2 gap-3 mb-7">
                  <Feature icon={<Check size={16} />} text="Svar dygnet runt på allmänna frågor" />
                  <Feature icon={<Clock size={16} />} text="Personliga frågor besvaras inom 24h" />
                  <Feature icon={<Check size={16} />} text="Bygger på en erfaren lönekonsults kunskap" />
                  <Feature icon={<MessageCircle size={16} />} text="Klicka på chattikonen nere till höger" />
                </div>

                <StartChatButton />
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
