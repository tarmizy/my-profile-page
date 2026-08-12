const CONFIG = {
  name: "Codday996 Solutions",
  role: "Web Developer · Mobile Developer · DevSecOps",

  whatsapp: "6282312255030",
  waMessage: "Halo Codday996 Solutions, saya tertarik dengan jasa pembuatan sistem/aplikasi Anda. Boleh diskusi kebutuhan project saya?",
  email: "tarmizy.harsha@gmail.com",

  socials: [
    { icon: "gh", url: "https://github.com/tarmizy" },
    { icon: "ig", url: "" },
    { icon: "li", url: "" },
  ],

  projects: [
    {
      name: "MDNet",
      tag: "Manajemen Pelanggan WiFi",
      for: "Penyedia jasa internet / RT-RW Net",
      desc: "Kelola pelanggan, tagihan, dan keuangan WiFi dari satu tempat. Dashboard langsung tampilkan siapa belum bayar & pendapatan bulan ini.",
      features: [
        "Dashboard: pelanggan aktif & tunggakan",
        "Tagihan, invoice & pembayaran",
        "Laporan pemasukan & pengeluaran",
        "Pengingat jatuh tempo otomatis",
      ],
      stack: ["Admin Console", "Aplikasi Mobile", "Laporan Keuangan", "Multi-User"],
      url: "https://mdnet.pages.dev/",
      accent: "#3b82f6",
      shotDesktop: "/mdnet-desktop.png", shotMobile: "/mdnet-mobile.png",
    },
    {
      name: "Tahfidz Darul Rasyid",
      tag: "Aplikasi Pondok Pesantren",
      for: "Pondok pesantren & lembaga tahfidz",
      desc: "Catat hafalan, absensi, dan perkembangan santri — semua dari HP. Orang tua bisa lihat progres anak lewat laporan rapor PDF.",
      features: [
        "Dashboard santri & pencapaian hafalan",
        "Setoran hafalan & absensi dari HP",
        "Ranking santri & laporan ujian",
        "Rapor PDF untuk wali santri",
      ],
      stack: ["Sistem Pesantren", "Progres Hafalan", "Multi-User", "Laporan"],
      url: "https://tahfidz-darul-rasyid.pages.dev/",
      accent: "#06b6d4",
      shotDesktop: "/thafiz-desktop.png", shotMobile: "/tahfiz-mobile.png",
    },
    {
      name: "TPQ Digital",
      tag: "Manajemen TPQ & Santri",
      for: "Taman Pendidikan Al-Qur'an",
      desc: "Ganti buku absen & buku prestasi manual. Pantau kehadiran dan progres bacaan tiap santri — laporan siap dibagikan ke orang tua.",
      features: [
        "Pendataan santri & pengajar",
        "Absensi & jadwal mengaji",
        "Progres bacaan / jilid",
        "Laporan kehadiran & perkembangan",
      ],
      stack: ["Sistem TPQ", "Absensi Digital", "Rapor Santri", "Responsive"],
      url: "https://tpq-digital.pages.dev/",
      accent: "#6366f1",
      shotDesktop: "/tpq-desktop.png", shotMobile: "/tpq-mobile.png",
    },
  ],

  pricing: [
    {
      name: "Profil Lembaga",
      desc: "Website profil lengkap untuk sekolah, pesantren, atau bisnis Anda.",
      price: "Rp 1.500.000",
      time: "5–10 hari kerja",
      features: [
        "Multi-halaman (profil, program, galeri, kontak)",
        "Tampilan rapi di HP & komputer",
        "Mudah ditemukan di Google",
        "Formulir kontak / tombol WhatsApp",
        "Bantuan setup domain & hosting",
      ],
    },
    {
      name: "Sistem Manajemen + Laporan",
      desc: "Aplikasi web untuk kelola data operasional harian — semua jadi otomatis.",
      price: "Rp 4.000.000",
      time: "3–6 minggu",
      featured: true,
      badge: "Paling Diminati",
      features: [
        "Dashboard ringkasan & modul data",
        "Laporan siap cetak & export",
        "Multi-user dengan hak akses",
        "Login aman & backup data",
        "Setup server, domain & langsung online",
        "Training untuk tim Anda",
        "Garansi perbaikan bug 30 hari",
      ],
    },
    {
      name: "Aplikasi Mobile / Custom",
      desc: "Aplikasi Android/iOS atau sistem besar dengan alur kerja khusus.",
      price: "Rp 8.000.000",
      time: "Timeline sesuai skala",
      features: [
        "Semua fitur Sistem Manajemen",
        "Aplikasi Android & iOS",
        "Integrasi payment / API",
        "Keamanan ekstra (DevSecOps)",
        "Deployment & maintenance",
      ],
    },
  ],

  addons: [
    { label: "Maintenance & support bulanan", price: "Rp 200rb / bln" },
    { label: "Domain + hosting (1 tahun)", price: "Rp 500rb" },
    { label: "Tambah modul / laporan baru", price: "Rp 500rb" },
    { label: "Training tambahan tim", price: "Rp 300rb / sesi" },
    { label: "Migrasi data dari Excel", price: "Rp 400rb" },
  ],

  trust: [
    { number: "3", label: "Sistem live & dipakai" },
    { number: "100%", label: "Nyaman di HP & desktop" },
    { number: "Laporan", label: "Otomatis tiap sistem" },
    { number: "< 24 jam", label: "Respon konsultasi" },
  ],

  process: [
    { step: "01", title: "Konsultasi", desc: "Ceritakan masalah Anda — gratis, tanpa komitmen." },
    { step: "02", title: "Rancangan & Harga", desc: "Fitur, tampilan, timeline, biaya — semua tertulis." },
    { step: "03", title: "Pengerjaan", desc: "Dibangun bertahap, Anda bisa pantau progres." },
    { step: "04", title: "Live + Training", desc: "Sistem online, tim dilatih, garansi maintenance." },
  ],
};

export default CONFIG;
