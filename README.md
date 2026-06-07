# Wildkull Payroll AB

Hemsida för **Wildkull Payroll AB** – lönehantering, interimstöd, effektivisering och samarbete med
redovisningsbyråer. Byggd i Next.js (App Router) + Tailwind 4.

> **Status: visuellt demo.** Frontend är klar och representativ. Backend (chatbot-AI,
> formulärutskick, hosting, domän) är medvetet inte inkopplad ännu – se "Kvar att göra".

## Kom igång

```bash
npm install
cp .env.local.example .env.local   # valfritt för demot
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

## Sidor

| Route | Innehåll |
|-------|----------|
| `/` | Startsida: Hero → Fråga Löneugglan → Tjänster → "Därför väljer företag…" → CTA |
| `/tjanster` | Översikt över alla fyra tjänster |
| `/lonehantering`, `/interimskonsult`, `/effektivisering`, `/samarbete-redovisningsbyraer` | Tjänstesidor (`ServicePageTemplate`) |
| `/om-oss` | Veronikas presentation (platshållartext) |
| `/kunskapsbank` | Artikellista (platshållare – "kommer snart") |
| `/kontakt` | "Boka ett möte" + förfrågningsformulär (skickar inget ännu) |

## Struktur

- `src/lib/data/business.ts` – central plats för företagsuppgifter (mail, org.nr, Löneugglan-info, sociala medier).
- `src/lib/data/services.ts` – de fyra tjänsterna (innehåll, FAQ). Driver tjänstesidorna.
- `src/lib/data/navigation.ts` – meny- och footerlänkar.
- `src/components/home/OwlSection.tsx` – "Fråga Löneugglan"-sektionen på startsidan.
- `src/components/owl/OwlChatWidget.tsx` – flytande chattbubbla (statisk demo).
- `src/app/page.tsx` – startsidan.

## Platshållare (byts senare)

- **Uggle-maskot**: `public/images/owl-mascot.svg` och logotyp `public/images/logo.svg` är enkla
  SVG-platshållare. Ersätts med AI-genererad uggla (ComfyUI) eller Veronikas egen bild.
- **Om oss / Kunskapsbank**: platshållartext, fylls med Veronikas eget innehåll.
- **Foton**: heroes använder grön gradient-mesh i stället för foto. Lägg riktiga kontorsfoton senare.

## Kvar att göra (backend-fas)

- Riktig AI-chatbot för Löneugglan (modell, kostnad, moderering).
- Koppla kontaktformuläret till utskick (`api/contact` finns, Resend).
- Hosting + peka om domänen (Simply).

## Bygga

```bash
npm run build   # genererar även sitemap (postbuild)
npm run lint
```
