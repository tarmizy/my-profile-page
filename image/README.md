# Screenshot Project untuk Portfolio

Halaman `index.html` otomatis memakai screenshot asli kalau file di bawah ini ada.
Kalau file belum ada, halaman tetap tampil normal dengan mockup dashboard bawaan —
jadi tidak ada yang rusak kalau kamu upload sebagian dulu.

## Nama file yang dicari

| Project | Screenshot desktop | Screenshot HP |
| --- | --- | --- |
| MDNet | `mdnet-desktop.png` | `mdnet-mobile.png` |
| Tahfidz Darul Rasyid | `tahfidz-desktop.png` | `tahfidz-mobile.png` |
| TPQ Digital | `tpq-desktop.png` | `tpq-mobile.png` |

Ekstensi fleksibel: `.png`, `.jpg`, `.jpeg`, dan `.webp` sama-sama dikenali.
Jadi `mdnet-desktop.jpg` juga tetap terbaca — tidak perlu convert.

Taruh file langsung di folder `image/` ini.

## Ukuran yang disarankan

- **Desktop** — lebar 1440 px, tinggi 900–1000 px (rasio dipotong ke 16:10)
- **HP** — lebar 390 px, tinggi 844 px (rasio dipotong ke 9:17.5, bagian atas dipakai)

Gambar dipotong dari **bagian atas**, jadi pastikan bagian terpenting
(judul halaman, kartu statistik, grafik) ada di area atas layar.

## Halaman mana yang di-screenshot

Ambil halaman yang paling "menjual", yaitu **dashboard** — bagian yang
menampilkan angka ringkasan dan grafik laporan. Bukan halaman login.

## ⚠️ Sensor data dulu sebelum screenshot

Ini sistem produksi berisi data pribadi orang lain. Sebelum di-screenshot:

- Ganti nama pelanggan / santri dengan nama contoh
- Sensor nomor HP, alamat, NIK, dan nominal tagihan asli
- Jangan tampilkan email atau username akun asli
- Pastikan tidak ada data wali santri yang terlihat

Cara paling aman: buat beberapa data **dummy** di akun demo, lalu screenshot itu.
Selain lebih aman, tampilannya juga bisa diatur supaya terlihat lebih rapi.

## Cara ambil screenshot

**Desktop (Chrome):**
1. Buka dashboard, tekan `F12` untuk buka DevTools
2. `Ctrl+Shift+M` untuk mode device, pilih **Responsive**, set lebar `1440`
3. `Ctrl+Shift+P`, ketik `screenshot`, pilih **Capture screenshot**

**HP:** sama seperti di atas, tapi pilih device **iPhone 12 Pro** (390×844).

## Kalau mau ganti nama file

Edit `index.html`, cari `CONFIG.projects`, lalu ubah `shotDesktop` /
`shotMobile` di project yang bersangkutan. Bisa juga diisi array kalau
mau menyiapkan beberapa alternatif:

```js
shotDesktop: ["image/mdnet-dashboard.png", "image/mdnet-desktop.png"],
```
