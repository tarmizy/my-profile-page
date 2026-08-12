# Tarmizi — Portfolio & Sales Landing Page

Landing page portfolio dan jualan jasa sistem manajemen digital (web, mobile, dashboard & laporan).

Dibangun dengan **React + Vite**, **PWA** (bisa di-install ke home screen), dan memisahkan layout **mobile** & **desktop** ke folder terpisah.

## Tech Stack

- React 19
- Vite 8
- vite-plugin-pwa (PWA + Service Worker)
- Cloudflare Pages (deploy)

## Struktur

```
src/
├── mobile/          ← Layout mobile (< 860px)
│   ├── MobilePage.jsx
│   ├── MobileNav.jsx
│   ├── MobileHero.jsx
│   ├── MobileServices.jsx
│   ├── MobilePortfolio.jsx
│   ├── MobileFeatures.jsx
│   ├── MobilePricing.jsx
│   ├── MobileProcess.jsx
│   └── MobileContact.jsx
├── desktop/         ← Layout desktop (≥ 860px)
│   ├── DesktopPage.jsx
│   ├── DesktopNav.jsx
│   ├── DesktopHero.jsx
│   ├── DesktopServices.jsx
│   ├── DesktopPortfolio.jsx
│   ├── DesktopFeatures.jsx
│   ├── DesktopPricing.jsx
│   ├── DesktopProcess.jsx
│   └── DesktopContact.jsx
├── shared/          ← Shared config, icons, utils
│   ├── data.js       ← Semua konten (edit di sini)
│   ├── Icon.jsx
│   ├── Background.jsx
│   ├── useReveal.js
│   └── utils.js
├── App.jsx          ← Device detection (auto switch mobile/desktop)
├── main.jsx
└── index.css        ← Global styles & color palette
```

## Assets

Screenshot project & video background ada di `public/`:

- `logo.png`
- `video-background.mp4`
- `mdnet-desktop.png`, `mdnet-mobile.png`
- `thafiz-desktop.png`, `tahfiz-mobile.png`
- `tpq-desktop.png`, `tpq-mobile.png`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output di `dist/`.

## Deploy ke Cloudflare Pages

```bash
wrangler pages deploy ./dist --project-name codday --branch main
```

Live: **https://codday.pages.dev**
