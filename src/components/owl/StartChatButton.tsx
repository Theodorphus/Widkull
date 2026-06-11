'use client'

import { MessageCircle } from 'lucide-react'

/**
 * Öppnar Löneugglan-chatten (LoneugglanChat) genom att klicka på dess
 * flytande knapp nere till höger. Knappen hittas via sin aria-label.
 */
export function StartChatButton({ className = '' }: { className?: string }) {
  function openChat() {
    const launcher = document.querySelector<HTMLButtonElement>(
      'button[aria-label="Öppna chatten med Löneugglan"]',
    )
    launcher?.click()
  }

  return (
    <button
      type="button"
      onClick={openChat}
      className={`inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-green-dark transition-colors shadow-md cursor-pointer ${className}`}
    >
      <MessageCircle size={18} />
      Starta chatten
    </button>
  )
}
