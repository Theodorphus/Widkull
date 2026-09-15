# DNS och Simply.com — läget och planen

Senast verifierad: 2026-09-15 (DNS-poster hämtade mot 8.8.8.8)

## Sammanfattning

Simply.com används **enbart** till domänregistrering och DNS. Varken
webbplatsen eller e-posten ligger hos dem:

- **Webbplatsen** ligger på Vercel (www → `599713123586e1b5.vercel-dns-016.com`)
- **E-posten** ligger i Microsoft 365 (MX → Outlook)
- **Utgående mejl** från kontaktformuläret går via Resend (Amazon SES)

Basic Suite (109,95 kr/mån listpris) innehåller webbhotell, MySQL och
e-postkonton som alltså står helt oanvända. Ett Linux-webbhotellskonto är
provisionerat (`linux61.unoeuro.com`, MySQL `mysql117.unoeuro.com`) men
används inte.

## Planen: nedgradera till DNS Service (0 kr/mån) — i augusti 2027

Basic Suite förnyades **9 september 2026 för 1 492,65 kr** och löper till
**23 september 2027**. Pengarna är redan betalda och sannolikt inte
återbetalningsbara, så det finns inget att vinna på att nedgradera i förtid.

**Gör nedgraderingen i augusti 2027**, ca en månad före förnyelsen.
Besparing därefter: ~1 500 kr/år.

Notera prisutvecklingen på produkten:

| Datum | Belopp |
|---|---|
| 9 sep 2025 | 1 019,88 kr |
| 9 sep 2026 | 1 492,65 kr (+46 %) |

### Domänen ska INTE sägas upp

Domänen faktureras **separat** i januari (~204 kr/år) och är oberoende av
Suite-paketet. Utgångsdatum 10 februari 2027, förnyas automatiskt.

En uppsägning av *avtalet* kan innebära att domänen inte förnyas — då
förloras wildkullpayroll.se, både sajt och mejl. Det som ska göras är att
*nedgradera produkten* och behålla domänregistreringen.

Simply-konto: S558660. Kontaktmejl där: wildkullpayroll@gmail.com.

## VIKTIGAST: DMARC-posten är beroende av Simply

`_dmarc` är en **CNAME till `dmarc.simply.com`** — alltså en tjänst Simply
kör, inte en fristående post. Värdet den löser upp till:

```
v=DMARC1; p=reject; rua=mailto:dmarc@robot.simply.com; ruf=mailto:dmarc@robot.simply.com;
```

`p=reject` betyder att mejl som inte klarar kontrollen **avvisas helt**.
Om den pekningen slutar gälla vid nedgradering kan utgående mejl börja
studsa. Kontrollera detta med supporten före nedgraderingen, och lägg vid
behov in en egen DMARC-post istället.

## Säkerhetskopia av DNS-poster (2026-09-15)

Namnservrar: `ns1.simply.com`, `ns2.simply.com`, `ns3.simply.com`
SOA serial vid kopieringen: `2026061402`

| Namn | Typ | Värde |
|---|---|---|
| `@` | A | `216.150.1.1` (Vercel) |
| `www` | CNAME | `599713123586e1b5.vercel-dns-016.com` |
| `@` | MX | `wildkullpayroll-se.mail.protection.outlook.com` (prio 0) |
| `@` | TXT | `v=spf1 include:spf.protection.outlook.com -all` |
| `@` | TXT | `MS=ms96768063` (Microsoft-verifiering) |
| `autodiscover` | CNAME | `autodiscover.outlook.com` |
| `_dmarc` | CNAME | `dmarc.simply.com` (se varning ovan) |
| `send` | TXT | `v=spf1 include:amazonses.com ~all` (Resend) |
| `resend._domainkey` | TXT | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDE0/OrtboQyZf8G542mVzqwCTVDpCMAwb+BR8q7cm3iQT/vwe8viog5S902WPE6AAeCMZCrwrQMCwf0fR0tn52XgxGgk9CQ4pY+hzegsKAYlSnuPaN1nDBkKWK68tBozmKL9El+VYk6HWHd+0RrQnC/hO22iyIkw/UMVc8ikaaxwIDAQAB` |

Alla poster ovan måste överleva nedgraderingen — faller någon bort slutar
antingen sajten, inkommande mejl eller kontaktformulärets utskick fungera.

**Google- och Bing-verifieringen ligger som filer i `public/`**
(`googlef9a193c3098998df.html`, `BingSiteAuth.xml`), inte i DNS. De berörs
alltså inte av Simply.

## Kontrollera efter nedgraderingen

```bash
nslookup -type=MX wildkullpayroll.se 8.8.8.8
nslookup -type=TXT wildkullpayroll.se 8.8.8.8
nslookup -type=CNAME _dmarc.wildkullpayroll.se 8.8.8.8
nslookup -type=TXT resend._domainkey.wildkullpayroll.se 8.8.8.8
nslookup -type=CNAME www.wildkullpayroll.se 8.8.8.8
```

Skicka därefter ett testmejl via kontaktformuläret och ett till
info@wildkullpayroll.se, för att bekräfta båda riktningarna.
