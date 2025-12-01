import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* * FIX: Server Leaks Information via "X-Powered-By"
   * ZAP Alert [cite: 19]
   * Menonaktifkan header default Next.js yang memberitahu bahwa server menggunakan Next.js.
   */
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: '/:path*', // Terapkan aturan ini ke SEMUA halaman
        headers: [
          {
            /*
             * FIX: Missing Anti-clickjacking Header
             * ZAP Alert [cite: 18]
             * Mencegah website Anda di-embed di dalam iframe situs orang lain (serangan Clickjacking).
             */
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            /*
             * FIX: X-Content-Type-Options Header Missing
             * ZAP Alert [cite: 60]
             * Mencegah browser "menebak" tipe file. Browser wajib mengikuti Content-Type yang dikirim server.
             */
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            /*
             * FIX: Content Security Policy (CSP) Header Not Set
             * ZAP Alert [cite: 16]
             * Membatasi sumber (origin) script, style, dan gambar yang boleh dimuat.
             * Note: 'unsafe-eval' dan 'unsafe-inline' mungkin dibutuhkan saat development mode.
             */
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; font-src 'self';",
          },
          {
            /*
             * FIX: Strict-Transport-Security Header Not Set
             * ZAP Alert [cite: 23]
             * Memaksa browser untuk selalu menggunakan HTTPS selama 2 tahun ke depan.
             * includeSubDomains: melindungi subdomain juga.
             * preload: memungkinkan domain masuk daftar preload browser.
             */
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            // Tambahan: Mengontrol informasi referrer saat user klik link keluar
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;