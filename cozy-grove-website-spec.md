# Website Specification Document
## Cozy Grove — Multi-Page Care Services Website

---

## 1. Project Overview

**Company Name:** Cozy Grove
**Location:** Scappoose, Oregon
**Industry:** 24-Hour Certified Care Home & Direct Support Professional (DSP) Services
**Contact Email:** Cozygrove1@gmail.com
**Contact Phone:** (503) 869-5883
**Hours:** Monday–Friday 9:00 AM – 9:00 PM

**Project Type:** Multi-page website for a family-run care home and DSP services company serving individuals with Intellectual and Developmental Disabilities (IDD) in Scappoose, Oregon.

**Primary Goals:**
- Establish professional credibility with county service coordinators to generate referrals
- Inform families about services, values, and the team behind Cozy Grove
- Present the company as trustworthy, compassionate, and highly qualified
- Serve as a shareable digital alternative to a print brochure

**Target Audiences:**
1. **County disability service coordinators** — need to see professionalism, licensing, qualifications, and available capacity
2. **Families of individuals with IDD** — need to feel trust, warmth, and confidence that their loved one will be safe and cared for

**Languages:** English + Arabic (bilingual site)

---

## 2. Tech Stack (Recommended)

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | **Next.js (App Router)** | Multi-page routing, SEO-friendly SSG, image optimization, i18n support for English/Arabic |
| Styling | **Tailwind CSS** | Rapid development, responsive by default, easy theming |
| Language | **TypeScript** | Type safety, better developer experience |
| i18n | **next-intl** or **next-i18next** | Clean internationalization for English/Arabic with RTL support |
| Hosting | **Vercel** (recommended) | Free tier, seamless Next.js integration, automatic HTTPS |
| Analytics | **Google Analytics 4** | Track traffic and referral sources |

### Arabic / RTL Support Notes
- Arabic pages must render **right-to-left (RTL)** with `dir="rtl"` on the `<html>` tag
- Use a language switcher in the navbar (e.g., "EN | عربي")
- All page content should be translated — navigation, headings, body copy, CTAs
- Font recommendation for Arabic: **Noto Sans Arabic** or **IBM Plex Sans Arabic** (both free on Google Fonts)
- Layout should mirror for RTL (navigation, text alignment, card order)

---

## 3. Branding & Design Direction

### Brand Identity: "Cozy Grove"
The name evokes a **cozy group of trees** — warmth, shelter, nature, safety. The brand should feel like a place where people are protected and cared for, surrounded by warmth and community.

### Suggested Brand Colors (Derived from Logo)

| Role | Hex | Description |
|------|-----|-------------|
| Primary | `#3C3C28` | Dark olive green — dominant logo color, use for headers, navbar, footer |
| Secondary | `#FBF4ED` | Warm cream — logo background, use for page backgrounds, light sections |
| Accent | `#C8A06E` | Warm tan/gold — from the logo's path and leaf details, use for CTAs and highlights |
| Mid-tone | `#64643C` | Olive/sage green — use for secondary text, borders, subtle accents |
| Dark | `#282814` | Near-black olive — use for body text |
| Light text | `#FFFFFF` | White — for text on dark backgrounds |

These colors are pulled directly from the logo to ensure visual consistency across the site.

### Logo
- **Logo provided** — a circular emblem featuring a cozy cabin nestled among pine trees with a winding path, chimney smoke, leaf branches, and an acorn detail. Text reads "Cozy Grove" in a serif font.
- File: `ChatGPT_Image_Apr_20__2026__09_47_30_PM.png` (to be renamed, e.g., `cozy-grove-logo.png`)
- The logo has a warm cream background (`#FBF4ED`) — use this as the site's base background color for seamless integration
- **Note:** This is a raster image (PNG). For best results on the web, consider having it traced to SVG for crisp rendering at all sizes. For launch, the PNG is fine.

### Design Principles
- **Professional yet warm** — this site must feel credible to coordinators AND comforting to families
- Clean, generous whitespace
- Soft rounded corners, warm color palette
- Placeholder stock photos of caregiving, community, homes (warm and diverse imagery — avoid clinical/sterile stock)
- Large readable text (accessibility is critical for this audience)
- Mobile-first responsive design

---

## 4. Site Structure (Multi-Page)

### Page Map

```
Home
About
Services
├── 24-Hour Care Home (SLP)
└── DSP / Attendant Care
Contact
```

A **sticky navigation bar** appears on all pages with a language switcher (EN | عربي).

---

### 4.1 Navigation Bar (Sticky — All Pages)

- Cozy Grove logo/text mark (left)
- Page links: Home | About | Services (dropdown: 24-Hour Care, DSP Services) | Contact
- Language switcher: **EN | عربي** (top right, subtle)
- Prominent **"Contact Us"** or **"Request a Referral"** CTA button (right) — styled with accent color
- Mobile: hamburger menu
- Background: dark olive `#3C3C28` or near-black `#282814`

---

### 4.2 Home Page

**Purpose:** Make a strong first impression for both coordinators and families. Communicate who Cozy Grove is in seconds.

#### Hero Section
- Large hero image (placeholder: warm caregiving stock photo — caregiver and individual smiling in a home setting)
- Headline: **"Compassionate Care, Rooted in Family"**
- Subheadline: "24-hour certified care home and DSP services in Scappoose, Oregon. Where every individual is valued, supported, and empowered."
- Two CTAs:
  - **"Learn About Our Services"** → scrolls or links to Services page
  - **"Contact Us"** → links to Contact page

#### Mission Snapshot Section
- Short 2–3 sentence mission statement
- Suggested copy:

> "At Cozy Grove, we provide safe, high-quality, and compassionate care for individuals who need a home — delivered by a team that truly understands the importance of dignity, stability, and human connection. This isn't just our work — it's our calling."

#### Why Choose Us (Key Differentiators)
- Display as icon + text cards (3–4 cards in a row):
  1. **Family-Owned & Operated** — "Built from the heart by a team that treats every individual like family."
  2. **Experienced & Qualified Team** — "Nearly 20 years combined experience. Staff with pre-med, healthcare management, and advanced degrees."
  3. **Person-Centered Care** — "We don't just provide support — we help individuals achieve their personal goals and live fulfilling lives."
  4. **Bilingual Services** — "Our team includes Arabic-speaking staff, ensuring culturally competent care for diverse communities."

#### Services Overview
- Two cards linking to the respective service pages:
  1. **24-Hour Certified Care Home** — brief description + "Learn More" link
  2. **DSP / Attendant Care Services** — brief description + "Learn More" link

#### Call to Action Banner
- Full-width warm-colored banner:
- "Ready to learn more or make a referral? We'd love to hear from you."
- **"Get in Touch"** button → Contact page

---

### 4.3 About Page

**Purpose:** Build deep trust. Tell the Cozy Grove story. Showcase the team's qualifications.

#### Our Story
- **⚠️ PLACEHOLDER — Client will rewrite this section.** The following is draft copy to show structure and tone:

> "Cozy Grove was born from a deeply personal mission. Our founders grew up watching their father — a lifelong caregiver — dedicate himself to helping others. That experience shaped who they are and inspired them to build something of their own.
>
> After moving to Oregon and spending years working in the care industry — managing multiple homes, navigating licensing, and serving clients through some of the toughest times including COVID — they knew it was time to open their own doors.
>
> Today, Cozy Grove is a true family operation. What started as a calling has become a company built on real-world experience, advanced education, and an unwavering commitment to doing right by every individual we serve."

#### Our Team
- **⚠️ PLACEHOLDER — Client will rewrite this section.** Draft copy for structure:

> "Our team brings nearly 20 years of combined experience across 5 successful care homes in Oregon. We include a co-founder with a pre-med background from Oregon State University, staff with Master's degrees in Healthcare Management, a team member currently in medical school at Portland State, and incoming staff with Master's and PhD-level education. Our admin team is bilingual in English and Arabic."

- Display team qualifications as a clean list or icon grid:
  - 5 successful homes operated across Oregon
  - Nearly 20 years combined experience
  - Pre-med background (OSU)
  - Master's in Healthcare Management
  - Medical school (PSU)
  - Advanced degrees (Master's & PhD)
  - Bilingual staff (English & Arabic)

#### Our Values
- Display as a grid of 3–4 value cards:
  1. **Dignity & Respect** — "Every individual deserves to be treated with care and humanity."
  2. **Honesty & Transparency** — "We communicate openly with families, coordinators, and our team."
  3. **Independence, Not Dependence** — "Our goal is to equip individuals with skills and confidence to thrive."
  4. **Community** — "We believe in building connections — for our clients and within the communities we serve."

---

### 4.4 Services Pages

Two separate pages, accessible via the "Services" dropdown in the nav.

#### 4.4a — 24-Hour Certified Care Home (SLP)

**Purpose:** Explain the care home offering for coordinators and families.

- **Page headline:** "24-Hour Certified Care Home"
- **Subheadline:** "A safe, supportive home in Scappoose, Oregon for individuals who need around-the-clock care."
- Content sections:
  - **What We Offer:** Explain 24-hour certified care, SLP (Supported Living Program) focus, what daily life looks like
  - **Our Home:** Description of the Scappoose property (renovated within the last 14 months, transportation available). Placeholder photos for now.
  - **Current Availability:** "We currently have 2 beds available." *(Make this easy to update — use a constant or data file)*
  - **Services Included:**
    - 24-hour supervision and support
    - Hygiene assistance
    - Medication management
    - Nutrition and meal preparation
    - Housekeeping
    - Socialization and community activities
    - Transportation
  - **Who We Serve:** Individuals with intellectual and developmental disabilities who are classified for SLP / 24-hour care
- CTA at bottom: **"Contact us to discuss placement or make a referral"** → Contact page

#### 4.4b — DSP / Attendant Care Services

**Purpose:** Explain DSP services for coordinators looking to place clients and families seeking in-home support.

- **Page headline:** "Direct Support Professional Services"
- **Subheadline:** "Skilled, compassionate support to help individuals thrive in their homes and communities."
- Content sections:
  - **What is a DSP?** Brief explanation of what Direct Support Professionals do
  - **Our Approach:** Person-centered, goal-oriented, fostering independence
  - **Services Provided:**
    - Hygiene support
    - Socialization and community inclusion
    - Housekeeping
    - Nutrition support
    - Medication management
    - Grocery assistance
    - Life skills development
  - **Service Types:** DSP, DSA (Direct Support Associate), and Relief Care
  - **Service Area:** Currently serving Scappoose, Oregon
- CTA at bottom: **"Ready to get started? Reach out to our team"** → Contact page

---

### 4.5 Contact Page

**Purpose:** Make it easy for coordinators and families to reach out.

- **Headline:** "Get in Touch"
- **Subheadline:** "Whether you're a service coordinator, a family member, or someone looking for care — we're here to help."
- Contact information displayed prominently:
  - Phone: **(503) 869-5883**
  - Email: **Cozygrove1@gmail.com**
  - Location: **Scappoose, Oregon**
- **Hours of availability:** Monday–Friday, 9:00 AM – 9:00 PM
- **Google Maps embed** (if full address is provided)
- **Simple contact form** (name, email, phone, message, submit) — sends to the Cozy Grove email
- Note: "For referrals, please email us directly at Cozygrove1@gmail.com or call (503) 869-5883."
- **Bilingual note:** "نتحدث العربية — Our team includes Arabic-speaking staff. Feel free to reach out in Arabic."

---

### 4.6 Footer (All Pages)

- Minimal and clean:
  - "Cozy Grove" name/logo
  - (503) 869-5883
  - Cozygrove1@gmail.com
  - "Scappoose, Oregon"
  - © 2026 Cozy Grove. All rights reserved.
- Language switcher (if not already in navbar)
- Optional: links to Home, About, Services, Contact

---

## 5. Tagline

**"Compassionate Care, Rooted in Family."**

---

## 6. SEO Requirements

### Technical SEO
- Static generation (Next.js SSG) for all pages
- Semantic HTML5 elements
- Proper heading hierarchy per page (single `h1`, logical `h2`/`h3`)
- Meta tags per page:
  - `<title>` — e.g., "Cozy Grove — 24-Hour Care Home & DSP Services in Scappoose, OR"
  - `<meta name="description">` — e.g., "Family-owned care home and DSP services in Scappoose, Oregon. Compassionate, qualified support for individuals with intellectual and developmental disabilities."
  - Open Graph tags for social sharing
- Canonical URLs
- XML sitemap (`/sitemap.xml`)
- `robots.txt`
- `hreflang` tags for English/Arabic versions

### Local SEO
- **JSON-LD structured data** for `LocalBusiness` schema:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cozy Grove",
    "description": "24-hour certified care home and DSP services for individuals with intellectual and developmental disabilities.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Scappoose",
      "addressRegion": "OR",
      "addressCountry": "US"
    },
    "telephone": "+15038695883",
    "email": "Cozygrove1@gmail.com",
    "url": "[website URL]",
    "areaServed": "Scappoose, Oregon"
  }
  ```
- Consistent NAP across the entire site
- Location keywords in headings and copy (e.g., "Scappoose care home", "Oregon DSP services")

### Performance
- Image optimization (Next.js `<Image>` component)
- Lazy loading for below-the-fold images
- Target: **90+ Lighthouse score** across all categories
- Core Web Vitals compliance

---

## 7. Responsive Design Requirements

| Breakpoint | Target |
|-----------|--------|
| Mobile | 320px – 767px |
| Tablet | 768px – 1023px |
| Desktop | 1024px+ |

- Navigation collapses to hamburger menu on mobile/tablet
- Cards stack to 1 column on mobile, 2 on tablet, 3+ on desktop
- Font sizes scale appropriately
- All tap targets minimum 44x44px on mobile
- Contact info and CTA buttons always easily reachable on mobile
- RTL layout mirrors correctly on all breakpoints

---

## 8. Accessibility

- WCAG 2.1 AA compliance (critical — this audience includes individuals with disabilities and their advocates)
- Alt text on all images
- Sufficient color contrast ratios (4.5:1 minimum for text)
- Keyboard navigable (tab order, focus styles)
- Screen reader-friendly landmarks and ARIA labels
- Skip-to-content link
- Large, readable font sizes (16px minimum body text)
- Clear focus indicators

---

## 9. Hosting & Deployment

**Recommended: Vercel**
- Free tier is sufficient
- Automatic HTTPS / SSL
- Custom domain support
- Automatic deployments from GitHub
- Good i18n/routing support for English + Arabic

**Domain:** Not yet purchased. Suggested options:
- `cozygrovecare.com`
- `cozygroveoregon.com`
- `cozygroveservices.com`

*(Client to purchase and connect.)*

---

## 10. Project File Structure (Suggested)

```
cozy-grove/
├── public/
│   ├── images/              # Stock/placeholder photos
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── [locale]/        # i18n routing (en, ar)
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx     # Home
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── services/
│   │   │   │   ├── care-home/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── dsp/
│   │   │   │       └── page.tsx
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ValueCard.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ContactForm.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── lib/
│   │   └── constants.ts     # Company info, service lists
│   └── messages/
│       ├── en.json          # English translations
│       └── ar.json          # Arabic translations
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 11. Environment Variables

```env
NEXT_PUBLIC_CONTACT_EMAIL=Cozygrove1@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=5038695883
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 12. Assets Checklist

| Asset | Status |
|-------|--------|
| Logo | ✅ Draft logo provided (PNG — consider SVG conversion later) |
| Brand colors | ✅ Derived from logo (Section 3) |
| Photos | 📷 Use warm, diverse stock/placeholder images for now |
| Team member details | ℹ️ General qualifications provided, no individual names/photos |
| Company email | ✅ Cozygrove1@gmail.com |
| Company phone | ✅ (503) 869-5883 |
| Location | ✅ Scappoose, Oregon (city/state only) |
| Hours of availability | ✅ Monday–Friday 9 AM – 9 PM |
| Domain name | 🔧 Client will handle |
| Tagline | ✅ "Compassionate Care, Rooted in Family." |
| About / Our Team copy | ⚠️ Placeholder — client will rewrite |
| Arabic translations | 🔧 AI-assisted draft as starting point, client to review |
| Bed availability count | ✅ 2 beds currently available |

---

## 13. Content Still Needed From Client

Before the site can be fully launched, the following must be provided:

1. **Rewritten About / Our Team copy** (placeholders are in the spec now — client to replace with their own version)
2. **Review and approve Arabic translations** (AI-assisted drafts will be generated as a starting point)
3. **Domain name** (client will purchase and provide DNS access)
4. **Any certifications or licensing details** to display (SLP endorsement status, etc.)
5. **SVG version of logo** (optional — PNG works for launch, SVG is better long-term)

*Contact info, hours, tagline, location, logo, and brand colors are all confirmed and included in this spec.*

---

## 14. Out of Scope (for initial build)

The following are explicitly **not** included in this phase:
- Careers / job postings page
- Online referral form (referrals handled via email/phone)
- Blog / content management system
- Client portal or login system
- HIPAA-compliant form submission
- Payment processing
- Multi-location support (future enhancement)
- Integration with any external systems (Asana, CRM, etc.)

Any of these can be added as future enhancements.

---

## 15. Key Differences from Connections NW Reference Site

The Connections NW site (https://connections-nw.org/) was provided as a reference for concept and structure. Key similarities and intentional differences:

| Aspect | Connections NW | Cozy Grove |
|--------|---------------|------------|
| Structure | Multi-page | Multi-page ✅ (same) |
| Services | Attendant care + employment services | 24-hour care home + DSP services |
| Audience | Coordinators + families | Coordinators + families ✅ (same) |
| Referrals | Asana form (HIPAA-compliant) | Email/phone only (simpler) |
| Careers page | Yes (recruiting DSPs) | No (not needed at launch) |
| Branding | Blues/grays, corporate feel | Warm greens/ambers, cozy natural feel |
| Bilingual | No | Yes — English + Arabic |
| DSP of the Month / Spotlights | Yes | No (not at launch) |
| Tone | Professional/corporate | Professional + warm/personal |

---

## 16. Summary

| Attribute | Value |
|----------|-------|
| Company | Cozy Grove — Scappoose, OR |
| Type | Multi-page website (Home, About, Services ×2, Contact) |
| Stack | Next.js + Tailwind CSS + TypeScript |
| Languages | English + Arabic (RTL support, AI-assisted translation as starting point) |
| Services | 24-hour certified care home (SLP) + DSP/attendant care |
| Referrals | Email (Cozygrove1@gmail.com) and phone ((503) 869-5883) |
| Hours | Monday–Friday 9 AM – 9 PM |
| Tagline | "Compassionate Care, Rooted in Family." |
| Colors | `#3C3C28` (dark olive), `#FBF4ED` (warm cream), `#C8A06E` (tan/gold accent) — derived from logo |
| Design | Warm, natural, professional — "cozy grove of trees" feel |
| SEO | Local SEO with JSON-LD, meta tags, sitemap, hreflang |
| Hosting | Vercel (recommended) |
| Photos | Stock/placeholder for now — client to provide later |
| Logo | ✅ Draft logo provided (cabin in trees emblem) |
| Domain | Client will purchase and connect |
| Availability | 2 beds currently available (care home) |

---

*This spec is ready to be used with Claude Code. The About/Our Team copy is placeholder and needs to be rewritten by the client. Arabic translations will be AI-assisted drafts for client review. Domain and logo still needed — but development of the structure, design, and English content can begin immediately.*
