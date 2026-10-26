# Kavya Labs · Week 1: Landing page

Landing page for **Kavya Labs**, a (fictional) Bengaluru AI startup, built for the Finlatics ANDP Virtual Startup simulator.
**Kavya** is a multilingual AI assistant that answers customers on WhatsApp and the web in 12 Indian languages.

> Week 1 brief from the founder, Rohan Mehta: *Landing page with hero, features and footer.*

## What's on the page

| Section | What it contains | File |
|---|---|---|
| **Navbar** | Logo, section links, CTA, mobile hamburger menu | `components/Navbar.jsx` |
| **Hero** | Headline, value proposition, two CTAs, key stats, and a WhatsApp-style chat mockup showing the product | `components/Hero.jsx` |
| **Features** | Six feature cards (languages, channels, document training, orders and UPI, human handoff, insights) | `components/Features.jsx` |
| **How it works** | Three-step onboarding | `components/HowItWorks.jsx` |
| **Pricing** | Three plans in rupees, with the popular plan highlighted | `components/Pricing.jsx` |
| **FAQ** | Expandable questions (native `<details>`, works without JavaScript) | `components/Faq.jsx` |
| **Call to action** | Early-access banner | `components/CallToAction.jsx` |
| **Footer** | Company info, link columns, contact email, copyright | `components/Footer.jsx` |

All copy lives in `lib/content.js`, so text changes don't touch the layout code.

## Details

- **Responsive**: mobile-first layout, hamburger menu below 768px, tested at phone and desktop widths
- **Accessible**: semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), labelled menu button, keyboard-friendly FAQ
- **SEO**: page title, meta description, Open Graph tags, SVG favicon
- **Fast**: statically generated at build time, Inter font self-hosted via `next/font`

## Tech stack

Next.js 14 (Pages Router) · React 18 · Tailwind CSS · Vercel

Next.js was chosen so the same codebase can grow into Week 2 (NextAuth + Google OAuth) and Week 3 (admin dashboard).

## Run locally

```
npm install
npm run dev
```

Open http://localhost:3000.
