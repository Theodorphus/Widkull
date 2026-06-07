'use client'

import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { BUSINESS } from '@/lib/data/business'

/**
 * FLYTANDE CHATTKNAPP – "Löneugglan"
 *
 * I demot är panelen statisk: den visar ett välkomstmeddelande och låter
 * besökaren skriva, men inget skickas ännu. Här kopplas senare in den
 * riktiga AI-chatten (t.ex. via Claude API) – se TODO nedan.
 */
export function OwlChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Chattpanel */}
      {open && (
        <div className="w-[20rem] sm:w-[22rem] rounded-2xl bg-white shadow-2xl border border-[#E4DECB] overflow-hidden animate-[fadeInUp_0.25s_ease-out]">
          {/* Header */}
          <div className="bg-brand-green text-white px-4 py-3 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white/15 flex items-center justify-center text-lg">
              🦉
            </div>
            <div className="leading-tight">
              <p className="font-bold text-sm">{BUSINESS.owl.name}</p>
              <p className="text-[11px] text-white/80">Lönehjälp · {BUSINESS.owl.hoursText}</p>
            </div>
          </div>

          {/* Meddelanden */}
          <div className="px-4 py-4 space-y-3 bg-[#F7F4EC] max-h-72 overflow-y-auto">
            <Bubble>
              Hej! Jag är Löneugglan 🦉 Din första fråga är gratis. Vad undrar du
              över – lön, semester, förmåner eller något annat?
            </Bubble>
            <p className="text-center text-[11px] text-gray-400 pt-1">
              Demo – chatten kopplas på inom kort.
            </p>
          </div>

          {/* Inmatning (inaktiv i demot) */}
          <div className="border-t border-[#E4DECB] p-2 flex items-center gap-2 bg-white">
            <input
              type="text"
              placeholder="Skriv din fråga…"
              disabled
              className="flex-1 px-3 py-2 text-sm rounded-lg bg-gray-100 text-gray-500 outline-none cursor-not-allowed"
            />
            <button
              disabled
              className="h-9 w-9 flex items-center justify-center rounded-lg bg-brand-green/40 text-white cursor-not-allowed"
              aria-label="Skicka"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Knapp */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Stäng chatten' : 'Öppna chatten med Löneugglan'}
        className="h-14 w-14 rounded-full bg-brand-green text-white shadow-xl flex items-center justify-center hover:bg-brand-green-dark hover:scale-105 transition-all"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}

function Bubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 text-sm text-gray-700 shadow-sm max-w-[90%]">
      {children}
    </div>
  )
}
