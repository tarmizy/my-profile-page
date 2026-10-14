# Landing Page & Kalkulator Estimasi

Halaman baru menggunakan `LandingPage.jsx`, `Estimator.jsx`, dan `landing.css`. Dibangun dengan React yang sudah tersedia di repo, tanpa dependency baru.

## Mengatur harga

Ubah `src/shared/estimate.js`:

- `PROJECT_TYPES`: harga dasar dan rentang waktu per jenis proyek.
- `COMPLEXITIES`: pengali harga berdasarkan skala proyek.
- `ESTIMATE_FEATURES`: biaya fitur tambahan.
- `calculateEstimate`: dasar perhitungan biaya fitur, biaya prioritas (+20%), rentang ±, dan waktu pengerjaan.

Harga yang muncul adalah **estimasi simulasi**, bukan penawaran mengikat. Biaya domain/hosting, layanan pihak ketiga, dan pajak (jika berlaku) belum termasuk.

## Konversi & informasi bisnis

- Semua tautan WhatsApp memakai nomor dan pesan dari `src/shared/data.js`.
- Kalkulator mengirim ringkasan jenis proyek, skala, fitur, prioritas, rentang biaya, perkiraan durasi, dan catatan (jika diisi) ke WhatsApp.
- Enam proyek portofolio mengambil informasi dan screenshot dari `src/shared/data.js` dan folder `public/`.
- FAQ sengaja tidak memuat testimoni atau metrik palsu. Sertakan ulasan asli hanya dengan persetujuan klien.

## Checklist sebelum live

1. Tinjau harga, kategori, rentang durasi, dan biaya tambahan.
2. Pastikan nomor WhatsApp, email, link portfolio, dan demo masih valid.
3. Jalankan `npm ci`, `npm run build`, dan `npm run lint` secara lokal / CI.
4. Uji kalkulator dan tombol WhatsApp di Android/iOS serta desktop.
5. Uji mobile menu, FAQ, serta tampilan pada layar 320px sampai desktop lebar.
6. Setelah PR direview, merge ke `main` untuk menjalankan proses deploy yang telah dikonfigurasi.
