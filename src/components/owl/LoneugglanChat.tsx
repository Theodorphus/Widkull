'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'
import { BUSINESS } from '@/lib/data/business'

/**
 * LÖNEUGGLAN – egen chattbubbla driven av Claude (via /api/chat).
 *
 * Ersätter den tidigare Microsoft Copilot Studio-widgeten. Ritar en flytande
 * knapp nere till höger; öppnar ett chattfönster där svaren streamas in.
 * Vid fel hänvisas besökaren till kontaktformuläret/mejl.
 */

type Msg = { role: 'user' | 'assistant'; content: string }

const GREETING: Msg = {
  role: 'assistant',
  content:
    'Hej, jag är Löneugglan! 🦉 Fråga mig gärna om lön, semester, förmåner eller hur Wildkull Payroll kan hjälpa er. Jag svarar dygnet runt.',
}

export function LoneugglanChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([GREETING])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Rulla till botten när nya meddelanden kommer in.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, busy])

  // Fokusera inmatningen när fönstret öppnas, och stäng på Escape.
  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [open])

  async function send() {
    const text = input.trim()
    if (!text || busy) return

    const history: Msg[] = [...messages, { role: 'user', content: text }]
    // Skicka bara user/assistant-historik till API:t (hälsningen är assistant – ok).
    setMessages(history)
    setInput('')
    setBusy(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Skicka inte med den hårdkodade hälsningen som första tur till modellen –
        // Claude kräver att första meddelandet är från user.
        body: JSON.stringify({ messages: history.filter((m, i) => !(i === 0 && m === GREETING)) }),
      })

      if (!res.ok || !res.body) throw new Error('bad response')

      // Streama in svaret tecken för tecken.
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }])
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let acc = ''
      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        acc += decoder.decode(value, { stream: true })
        setMessages((prev) => {
          const next = [...prev]
          next[next.length - 1] = { role: 'assistant', content: acc }
          return next
        })
      }
      if (!acc.trim()) throw new Error('empty response')
    } catch {
      setMessages((prev) => {
        // Ta bort ev. tomt assistant-skal innan felmeddelandet.
        const base = prev[prev.length - 1]?.content === '' ? prev.slice(0, -1) : prev
        return [
          ...base,
          {
            role: 'assistant',
            content: `Oj, något gick fel just nu. Försök gärna igen, eller mejla oss på ${BUSINESS.email} så återkommer ${BUSINESS.shortName}.`,
          },
        ]
      })
    } finally {
      setBusy(false)
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {/* Flytande knapp */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Stäng chatten' : 'Öppna chatten med Löneugglan'}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-[70] h-14 w-14 rounded-full bg-brand-green text-white shadow-xl flex items-center justify-center hover:bg-brand-green-dark transition-colors cursor-pointer"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chattfönster */}
      {open && (
        <div
          role="dialog"
          aria-label="Chatt med Löneugglan"
          className="fixed bottom-24 right-5 z-[70] flex flex-col w-[calc(100vw-2.5rem)] max-w-[380px] h-[min(70vh,560px)] rounded-2xl bg-white shadow-2xl border border-[#E4DECB] overflow-hidden"
        >
          {/* Huvud */}
          <div className="flex items-center gap-3 bg-brand-green text-white px-4 py-3">
            <div className="relative h-9 w-9 flex-shrink-0">
              <Image src="/images/home/Uggla1.png" alt="" fill sizes="36px" className="object-contain" />
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-sm">Löneugglan</p>
              <p className="text-[11px] text-cream/80">{BUSINESS.owl.intro}</p>
            </div>
          </div>

          {/* Meddelanden */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#F7F4EC]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'ml-auto bg-brand-green text-white rounded-br-sm'
                    : 'mr-auto bg-white text-gray-700 border border-[#E4DECB] rounded-bl-sm'
                }`}
              >
                {m.content}
              </div>
            ))}
            {busy && messages[messages.length - 1]?.role === 'user' && (
              <div className="mr-auto bg-white text-gray-400 border border-[#E4DECB] rounded-2xl rounded-bl-sm px-3.5 py-2.5">
                <Loader2 size={16} className="animate-spin" />
              </div>
            )}
          </div>

          {/* Inmatning */}
          <div className="border-t border-[#E4DECB] bg-white p-3">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Skriv din fråga…"
                className="flex-1 resize-none max-h-28 px-3 py-2 rounded-lg border border-[#D9D4C5] text-sm text-gray-700 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-colors"
              />
              <button
                onClick={send}
                disabled={busy || !input.trim()}
                aria-label="Skicka"
                className="flex-shrink-0 h-10 w-10 rounded-lg bg-brand-green text-white flex items-center justify-center hover:bg-brand-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {busy ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </div>
            <p className="mt-2 text-[11px] text-gray-400 text-center">
              Allmän vägledning. För ditt specifika fall,{' '}
              <Link href="/kontakt" className="underline hover:text-brand-green" onClick={() => setOpen(false)}>
                kontakta {BUSINESS.shortName}
              </Link>
              .
            </p>
          </div>
        </div>
      )}
    </>
  )
}
