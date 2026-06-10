import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage()
const errors = []
page.on('pageerror', (e) => errors.push(e.message))

await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' })

const script = await page.evaluate(() => {
  const el = document.getElementById('chatbot')
  return el && {
    src: el.getAttribute('src'),
    environmentId: el.getAttribute('environmentId'),
    region: el.getAttribute('region'),
  }
})
console.log('script tag:', JSON.stringify(script))

const button = await page.locator('img.chatclient-button').count()
console.log('chat button rendered:', button > 0)

await page.locator('img.chatclient-button').click()
await page.waitForTimeout(5000)
const iframeSrc = await page.evaluate(() => {
  const f = document.querySelector('iframe[title="Customer Connect chat bot assistant"]')
  return f ? f.src : null
})
console.log('chat iframe src:', iframeSrc)

console.log('page errors:', JSON.stringify(errors))

await browser.close()
