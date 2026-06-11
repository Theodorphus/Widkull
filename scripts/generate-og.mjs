// Genererar public/images/og/wildkull-og.png (1200x630) från en HTML-mall.
// Körs manuellt: node scripts/generate-og.mjs
import { chromium } from 'playwright'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const owl = readFileSync(resolve('public/images/owl-crest.png')).toString('base64')

const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Inter:wght@400;600&display=swap" rel="stylesheet">
<style>
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Inter', sans-serif; color: #F3F1E9;
    background-color: #284035;
    background-image:
      radial-gradient(at 18% 22%, rgba(143,174,139,.40) 0, transparent 50%),
      radial-gradient(at 82% 12%, rgba(55,85,70,.65) 0, transparent 45%),
      radial-gradient(at 75% 78%, rgba(30,46,38,.85) 0, transparent 55%),
      radial-gradient(at 30% 85%, rgba(156,153,60,.20) 0, transparent 45%);
  }
  .wrap { display: flex; align-items: center; gap: 64px; padding: 0 90px; }
  img { width: 280px; height: auto; filter: drop-shadow(0 16px 32px rgba(20,32,26,.5)); }
  h1 { font-family: 'Playfair Display', serif; font-size: 64px; font-weight: 600; line-height: 1.1; margin-bottom: 22px; }
  p.tag { font-size: 28px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: #C9C46A; margin-bottom: 18px; }
  p.motto { font-size: 30px; font-weight: 400; color: rgba(243,241,233,.88); line-height: 1.4; max-width: 640px; }
</style></head>
<body>
  <div class="wrap">
    <img src="data:image/png;base64,${owl}" alt="">
    <div>
      <p class="tag">Wildkull Payroll AB</p>
      <h1>Lönehantering som skapar trygghet och frigör tid</h1>
      <p class="motto">Outsourcing · Effektivisering · Interimstöd · Rådgivning</p>
    </div>
  </div>
</body></html>`

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.setContent(html, { waitUntil: 'networkidle' })
await page.waitForTimeout(500)
await page.screenshot({ path: 'public/images/og/wildkull-og.png' })
await browser.close()
console.log('OG-bild skapad: public/images/og/wildkull-og.png')
