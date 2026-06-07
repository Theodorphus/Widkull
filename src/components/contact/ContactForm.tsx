'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { contactSchema, type ContactFormData } from '@/lib/validations/contact'

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Något gick fel. Försök igen senare.')
      }

      setSuccess(true)
      reset()
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Något gick fel')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success Message */}
      {success && (
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 flex items-start gap-3">
          <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-green-800 font-semibold">
            Tack! Vi har mottagit din förfrågan. Vi svarar inom 24 timmar.
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-800 font-medium">{error}</p>
        </div>
      )}

      {/* Name & Phone - 2 Column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Namn */}
        <div>
          <label htmlFor="namn" className="block text-sm font-semibold text-gray-900 mb-2">
            Namn *
          </label>
          <input
            type="text"
            id="namn"
            {...register('namn')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent hover:border-gray-400 transition-colors"
            placeholder="Ditt namn"
          />
          {errors.namn && (
            <p className="text-red-600 text-sm mt-1 font-medium">{errors.namn.message}</p>
          )}
        </div>

        {/* Telefon */}
        <div>
          <label htmlFor="telefon" className="block text-sm font-semibold text-gray-900 mb-2">
            Telefon *
          </label>
          <input
            type="tel"
            id="telefon"
            {...register('telefon')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent hover:border-gray-400 transition-colors"
            placeholder="+46 XXX XX XX XX"
          />
          {errors.telefon && (
            <p className="text-red-600 text-sm mt-1 font-medium">{errors.telefon.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          E-post *
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent hover:border-gray-400 transition-colors"
          placeholder="din@email.se"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1 font-medium">{errors.email.message}</p>
        )}
      </div>

      {/* Kommentar */}
      <div>
        <label htmlFor="kommentar" className="block text-sm font-semibold text-gray-900 mb-2">
          Kommentar
        </label>
        <textarea
          id="kommentar"
          {...register('kommentar')}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent hover:border-gray-400 transition-colors resize-none"
          placeholder="Beskriv dina städbehov..."
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" disabled={isLoading} className="w-full font-bold">
        {isLoading ? 'Skickar...' : 'Skicka förfrågan'}
      </Button>
    </form>
  )
}
