'use client'

import Script from 'next/script'

/**
 * LÖNEUGGLAN – riktig chatt via Microsoft Copilot Studio.
 *
 * Skriptet ritar sin egen flytande chattbubbla och sköter både boten (alltid
 * öppen) och livechatten med Veronika (eskalering och öppettider konfigureras
 * i Copilot Studio/Teams, inte här). `lazyOnload` så att chatten inte
 * konkurrerar med sidans egna resurser.
 */
export function LoneugglanChat() {
  return (
    <Script
      id="chatbot"
      src="https://res.public.onecdn.static.microsoft/customerconnect/v1/7dttl/init.js"
      strategy="lazyOnload"
      crossOrigin="anonymous"
      // Microsofts init.js läser dessa attribut från sin egen script-tagg.
      // Spread eftersom de inte är standard-attribut som TS känner till.
      {...{ environmentId: 'f3f9fd15-eebb-e48d-9945-6f779bd37f58', region: 'europe' }}
    />
  )
}
