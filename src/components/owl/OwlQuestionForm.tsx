'use client'

import { useState } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { BUSINESS } from '@/lib/data/business'

/**
 * "Ställ din fråga"-formulär för tider då livechatten är stängd.
 * Frågan mejlas till Veronika via /api/contact så att inget försvinner,
 * och hon svarar vid nästa chattillfälle.
 */
export function OwlQuestionForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, amne: 'Fråga till Löneugglan' }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center text-center py-8">
        <div className="h-12 w-12 rounded-full bg-brand-green/10 flex items-center justify-center mb-3">
          <CheckCircle className="text-brand-green" size={26} />
        </div>
        <h3 className="text-lg font-bold text-[#23332A] mb-1">Tack för din fråga!</h3>
        <p className="text-gray-600 text-sm max-w-sm">
          Veronika återkommer till dig vid nästa chattillfälle ({BUSINESS.owl.hoursText.toLowerCase()}).
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="owl-namn" className="block text-sm font-semibold text-[#23332A] mb-1.5">
            Namn <span className="text-brand-green">*</span>
          </label>
          <input
            id="owl-namn"
            name="namn"
            required
            placeholder="För- och efternamn"
            className="w-full px-4 py-3 rounded-lg border border-[#D9D4C5] bg-white text-gray-700 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="owl-email" className="block text-sm font-semibold text-[#23332A] mb-1.5">
            E-post <span className="text-brand-green">*</span>
          </label>
          <input
            id="owl-email"
            name="email"
            type="email"
            required
            placeholder="namn@exempel.se"
            className="w-full px-4 py-3 rounded-lg border border-[#D9D4C5] bg-white text-gray-700 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="owl-fraga" className="block text-sm font-semibold text-[#23332A] mb-1.5">
          Din fråga <span className="text-brand-green">*</span>
        </label>
        <textarea
          id="owl-fraga"
          name="meddelande"
          rows={4}
          required
          placeholder="Vad undrar du över – lön, semester, förmåner eller något annat?"
          className="w-full px-4 py-3 rounded-lg border border-[#D9D4C5] bg-white text-gray-700 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">
          Något gick fel när frågan skulle skickas. Försök igen, eller mejla oss
          direkt på {BUSINESS.email}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-green-dark transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        {status === 'sending' ? 'Skickar…' : 'Skicka din fråga'}
      </button>
    </form>
  )
}
