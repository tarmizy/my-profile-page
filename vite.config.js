import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    allowedHosts: ['residual-mangle-shaft.ngrok-free.dev'],
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['codday-mark.svg', 'codday-hero-poster.webp'],
      manifest: {
        name: 'codday Digital Solutions — Sistem Manajemen Digital',
        short_name: 'codday Digital Solutions',
        description: 'Sistem manajemen berbasis web & mobile — lengkap dashboard & laporan',
        theme_color: '#0b211b',
        background_color: '#0b211b',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        icons: [
          { src: 'codday-mark.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
          { src: 'codday-mark.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}'],
        globIgnores: ['**/video-background.mp4', '**/*-desktop.png', '**/*-mobile.png', '**/Makeup-desktop.png'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'google-fonts', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } },
          },
        ],
      },
    }),
  ],
})

### Hero final

Memakai `/codday-hero-poster.webp` (gambar konsep problem → solution yang disetujui). Tidak ada video, autoplay, atau gerakan pada artwork hero. Semua sisi gambar terlihat di mobile dan desktop tanpa pemotongan (`aspect-ratio:1/1`, `object-fit:contain`).
