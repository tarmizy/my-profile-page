# Landing Page — Codday996

UI dibangun ulang untuk menarik calon klien bisnis menengah dengan sistem visual editorial, fokus pada bukti karya dan konversi yang ramah di HP.

- `LandingPage.jsx`: hero gambar statis, dock, services, portfolio preview, proses kerja, FAQ, kontak.
- `Estimator.jsx`: kalkulator terhubung ke `shared/estimate.js` dan WhatsApp.
- `landing.css`: token dan komposisi visual premium; breakpoint 1120 / 860 / 520.

## Referensi desain

- UI/UX Pro Max: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- 21st.dev animated heroes: https://21st.dev/community/components/s/animated-hero
- 21st.dev mobile navigation: https://21st.dev/community/components/explore/navigation-bar-ui-design
- Design decisions: `design-system/codday996/MASTER.md`

Visual dan interaksi dibuat sebagai implementasi orisinal React + CSS yang menyesuaikan kebutuhan repo, tanpa menambah dependensi besar.

## Checklist

- Jalankan `npm ci`, `npm run lint`, `node --test tests/estimate.test.js`, `npm run build`.
- Uji 320px, 375px, 430px, 768px, 1024px, 1440px; mode landscape, keyboard, dan reduced motion.
- Pastikan semua tautan demo dan kontak masih valid sebelum merge.
- Verifikasi harga dasar, biaya fitur, dan durasi kalkulator sebelum menjadi halaman publik.

### Hero final

Memakai `/codday-hero-poster.webp` (gambar konsep problem → solution yang disetujui). Tidak ada video, autoplay, atau gerakan pada artwork hero. Semua sisi gambar terlihat di mobile dan desktop tanpa pemotongan (`aspect-ratio:1/1`, `object-fit:contain`).
