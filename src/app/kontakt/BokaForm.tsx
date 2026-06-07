'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

/**
 * Enkelt "Boka ett möte"-formulär.
 *
 * I demot skickas inget – vi visar bara en bekräftelse i UI:t. Koppla mot
 * /api/contact (Resend) i backend-fasen. Fälten är medvetet enkla.
 */
export function BokaForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="flex flex-col items-center text-center py-10">
        <div className="h-14 w-14 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
          <CheckCircle className="text-brand-green" size={30} />
        </div>
        <h3 className="text-xl font-bold text-[#23332A] mb-2">Tack för din förfrågan!</h3>
        <p className="text-gray-600 max-w-sm">
          (Demo – inget skickades.) I den färdiga versionen landar meddelandet
          direkt i Veronikas inkorg och du får en bekräftelse.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
      className="space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Namn" name="namn" placeholder="För- och efternamn" required />
        <Field label="Företag" name="foretag" placeholder="Företagsnamn" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="E-post" name="epost" type="email" placeholder="namn@foretag.se" required />
        <Field label="Telefon" name="telefon" type="tel" placeholder="070-123 45 67" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#23332A] mb-1.5">
          Vad gäller det?
        </label>
        <select
          name="amne"
          className="w-full px-4 py-3 rounded-lg border border-[#D9D4C5] bg-white text-gray-700 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-colors"
        >
          <option>Lönehantering</option>
          <option>Interimskonsult</option>
          <option>Effektivisering</option>
          <option>Samarbete med redovisningsbyrå</option>
          <option>Annat</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#23332A] mb-1.5">
          Meddelande
        </label>
        <textarea
          name="meddelande"
          rows={5}
          placeholder="Berätta kort om ert företag och vad ni behöver hjälp med…"
          className="w-full px-4 py-3 rounded-lg border border-[#D9D4C5] bg-white text-gray-700 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-green text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-brand-green-dark transition-colors shadow-md"
      >
        <Send size={18} />
        Skicka förfrågan
      </button>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-[#23332A] mb-1.5">
        {label} {required && <span className="text-brand-green">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border border-[#D9D4C5] bg-white text-gray-700 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-colors"
      />
    </div>
  )
}
