# Cozy Grove

Website for Cozy Grove, a 24-hour certified care home and Direct Support Professional (DSP) provider in Scappoose, Oregon serving individuals with intellectual and developmental disabilities. I built this pro bono.

Next.js with `next-intl`. The site is bilingual, English and Arabic, so that Arabic-speaking families can read it in their own language. Arabic renders right-to-left.

## Structure

Every route is nested under `app/[locale]/`, so the same pages exist in both languages and all copy comes from `messages/en.json` and `messages/ar.json` rather than being written into the components.

```
app/[locale]/page.tsx                home
app/[locale]/about/page.tsx
app/[locale]/contact/page.tsx
app/[locale]/services/care-home/page.tsx
app/[locale]/services/dsp/page.tsx
messages/en.json                     English copy
messages/ar.json                     Arabic copy
```

Adding or changing text means editing the two message files. A missing key in one language is the thing to watch for, since it falls back rather than failing loudly.

## Running it

```bash
npm install
npm run dev       # localhost:3000
npm run build
```
