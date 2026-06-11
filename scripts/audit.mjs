// Engångsskript: skärmdumpar + konsol-/nätverksfel för alla sidor.
import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

const BASE = 'http://localhost:3000'
const pages = [
  '/', '/tjanster', '/lonehantering', '/effektivisering', '/interimskonsult',
  '/samarbete-redovisningsbyraer', '/om-oss', '/kunskapsbank', '/kontakt',
  '/integritetspolicy', '/finns-inte-404',
]

mkdirSync('audit-shots', { recursive: true })
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()

const problems = []
page.on('console', (msg) => {
  if (msg.type() === 'error') problems.push(`[console] ${page.url()} :: ${msg.text()}`)
})
page.on('response', (res) => {
  if (res.status() >= 400 && !res.url().includes('finns-inte-404'))
    problems.push(`[http ${res.status()}] ${res.url()} (on ${page.url()})`)
})

async function scrollThrough(pg) {
  await pg.evaluate(async () => {
    const step = window.innerHeight / 2
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 120))
    }
    window.scrollTo(0, 0)
  })
  await pg.waitForTimeout(900)
}

for (const p of pages) {
  await page.goto(BASE + p, { waitUntil: 'networkidle' })
  await scrollThrough(page)
  const name = p === '/' ? 'home' : p.replace(/\//g, '_').replace(/^_/, '')
  await page.screenshot({ path: `audit-shots/${name}.png`, fullPage: true })
}

// mobilvy av startsidan + kontakt
const mob = await browser.newContext({ viewport: { width: 390, height: 844 } })
const mp = await mob.newPage()
for (const p of ['/', '/kontakt']) {
  await mp.goto(BASE + p, { waitUntil: 'networkidle' })
  await scrollThrough(mp)
  await mp.screenshot({ path: `audit-shots/mobile-${p === '/' ? 'home' : 'kontakt'}.png`, fullPage: true })
}

console.log(problems.length ? problems.join('\n') : 'Inga konsol-/nätverksfel.')
await browser.close()
