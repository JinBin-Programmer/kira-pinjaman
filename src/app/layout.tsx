import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://pinjaman.themalaysianinfo.online"),
  title: {
    default: "Kalkulator Pinjaman Malaysia — Rumah, Kereta & Peribadi",
    template: "%s — Kalkulator Pinjaman",
  },
  description:
    "Kira ansuran bulanan pinjaman rumah, kereta dan peribadi. Calculate Malaysia home loan, car loan and personal loan monthly installments.",
  keywords: [
    "kalkulator pinjaman rumah", "housing loan calculator malaysia",
    "car loan calculator malaysia", "kalkulator pinjaman kereta",
    "personal loan calculator", "kalkulator pinjaman peribadi",
    "monthly installment calculator malaysia", "ansuran bulanan",
  ],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏦</text></svg>",
  },
  openGraph: { type: "website", locale: "ms_MY", siteName: "Kalkulator Pinjaman Malaysia" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7019273666606982"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10 shadow-sm">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg">
              <span className="text-2xl">🏦</span>
              <div>
                <div className="leading-none">Kalkulator Pinjaman</div>
                <div className="text-[10px] text-white/40 font-normal leading-none">Malaysia Loan Calculator</div>
              </div>
            </Link>
          </div>
        </nav>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-xs text-white/30 space-y-1">
          <p>Anggaran sahaja · For estimation purposes only</p>
          <p className="text-white/20">Semak dengan bank anda untuk kadar dan terma sebenar.</p>
          <p className="mt-2">© {new Date().getFullYear()} Kalkulator Pinjaman Malaysia</p>
        </footer>
      </body>
    </html>
  );
}
