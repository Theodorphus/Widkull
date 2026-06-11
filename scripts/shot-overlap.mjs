import { chromium } from 'playwright'
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()
await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' })
await page.waitForTimeout(1000)
// Scrolla ner till där hero möter Löneugglan-sektionen
await page.evaluate(() => window.scrollTo(0, window.innerHeight * 0.62))
await page.waitForTimeout(900)
await page.screenshot({ path: 'audit-shots/overlap.png' })
await browser.close()
