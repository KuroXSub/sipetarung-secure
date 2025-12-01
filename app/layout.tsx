import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Import headers untuk mengambil nonce
import { headers } from 'next/headers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistem Secure",
  description: "Aman dengan Next.js Middleware",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // AMBIL NONCE DARI HEADER
  // Note: Kita perlu await headers() di Next.js versi terbaru
  const headersList = await headers(); 
  const nonce = headersList.get('x-nonce') || '';

  return (
    <html lang="en">
      {/* Tempelkan nonce ke body atau script jika diperlukan, 
          tapi Next.js otomatis menangani Script component jika ada nonce di header/middleware */}
      <body className={inter.className}>
        {/* Kita tidak perlu manual inject ke style tag karena Next.js 
            akan membaca header x-nonce atau CSP secara otomatis untuk script/style internal */}
        {children}
      </body>
    </html>
  );
}