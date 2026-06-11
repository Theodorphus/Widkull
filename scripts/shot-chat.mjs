import { chromium } from 'playwright'
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()
await page.goto('http://localhost:3100/', { waitUntil: 'networkidle' })
await page.waitForTimeout(800)
// Öppna chatten via den flytande knappen
await page.click('button[aria-label="Öppna chatten med Löneugglan"]')
await page.waitForTimeout(600)
await page.screenshot({ path: 'audit-shots/chat-widget.png' })
// Närbild på själva fönstret
const dialog = page.locator('div[role="dialog"]')
await dialog.screenshot({ path: 'audit-shots/chat-window.png' })
await browser.close()
