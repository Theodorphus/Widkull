import { NextRequest } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { buildOwlSystemPrompt } from '@/lib/data/owlPrompt'

/**
 * LÖNEUGGLAN – chatt-API (Claude Haiku 4.5).
 *
 * Tar emot konversationshistoriken från klienten, anropar Claude med
 * Löneugglans systemprompt och streamar tillbaka svaret som ren text.
 * API-nyckeln (ANTHROPIC_API_KEY) ligger som miljövariabel på servern och
 * lämnar aldrig backend.
 */

// Säkerhetsgränser så att ingen kan driva upp kostnaden via stora payloads.
const MAX_MESSAGES = 20
const MAX_CHARS_PER_MESSAGE = 2000

type ChatMessage = { role: 'user' | 'assistant'; content: string }

function isValidHistory(value: unknown): value is ChatMessage[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.length <= MAX_MESSAGES &&
    value.every(
      (m) =>
        m &&
        (m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string' &&
        m.content.trim().length > 0 &&
        m.content.length <= MAX_CHARS_PER_MESSAGE,
    )
  )
}

export async function POST(request: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { error: 'Chatten är inte konfigurerad. Mejla oss på info@wildkullpayroll.se så hjälper vi dig.' },
      { status: 503 },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Ogiltig förfrågan.' }, { status: 400 })
  }

  const messages = (body as { messages?: unknown })?.messages
  if (!isValidHistory(messages)) {
    return Response.json({ error: 'Ogiltig förfrågan.' }, { status: 400 })
  }

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  try {
    const stream = anthropic.messages.stream({
      model: 'claude-haiku-4-5',
      max_tokens: 1024,
      system: buildOwlSystemPrompt(),
      messages,
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(event.delta.text))
            }
          }
        } catch (err) {
          console.error('Chat stream error:', err)
        } finally {
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    })
  } catch (error) {
    console.error('Chat route error:', error)
    return Response.json(
      { error: 'Något gick fel. Försök igen om en stund, eller mejla oss på info@wildkullpayroll.se.' },
      { status: 500 },
    )
  }
}
