# Codday996 Solutions — Premium Digital Studio

Landing page jasa website, web app, dashboard, dan aplikasi custom untuk bisnis berkembang. Dibuat menggunakan React 19, Vite 8, Framer Motion, dan PWA.

## Apa yang ada di halaman

- Editorial hero, visual produk asli, tipografi Manrope + Instrument Serif, palet off-white/forest/lime.
- Desktop navbar dan **floating bottom navbar mobile dengan 5 menu berlabel** — tidak memakai hamburger.
- Animasi ringan CSS dan Framer Motion dengan dukungan `prefers-reduced-motion`.
- Layanan, portfolio interaktif 6 proyek dengan tombol demo dan toggle screenshot desktop/mobile bila tersedia.
- Tahapan kerja, kalkulator estimasi biaya langsung, FAQ, WhatsApp prefilled dan footer.
- SEO metadata dasar dan PWA.

## Harga kalkulator

Nilai dapat diubah pada `src/shared/estimate.js`. Semua angka ditampilkan sebagai **simulasi awal**, bukan penawaran final; biaya domain, hosting, dan pihak ketiga dipisah.

## Development

```bash
npm ci
npm run dev
npm run lint
node --test tests/estimate.test.js
npm run build
```

Review kode dan tes GitHub Actions akan berjalan otomatis pada PR. Sesudah merge, deploy sesuai pipeline Cloudflare Pages Anda. Jangan mengklaim website versi baru live sebelum branch di-merge dan proses deploy berhasil.

## Struktur baru

- `src/landing/LandingPage.jsx` — konten dan interaksi landing page.
- `src/landing/Estimator.jsx` — kalkulator dengan state React.
- `src/landing/landing.css` — design system dan responsivitas.
- `src/shared/estimate.js` — fungsi kalkulasi dan pesan WhatsApp.
- `src/shared/data.js` — data portfolio, layanan, dan kontak.
- `design-system/codday996/MASTER.md` — keputusan desain dan quality bar.

## Catatan

Aset showcase adalah screenshot proyek milik repo yang sudah ada. Tidak ada testimoni, logo klien, klaim metrik, atau angka omzet yang dibuat-buat. Referensi desain: UI/UX Pro Max dan 21st.dev, dibuat ulang khusus untuk brand ini tanpa menyalin komponen berlisensi secara langsung.
