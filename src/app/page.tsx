import type { Metadata } from "next";
import LoanCalculator from "@/components/LoanCalculator";

export const metadata: Metadata = {
  title: "Kalkulator Pinjaman Malaysia — Rumah, Kereta & Peribadi",
  description: "Kira ansuran bulanan pinjaman rumah, kereta dan peribadi. Termasuk kadar faedah, jumlah bayaran dan jumlah faedah. Percuma dan mudah digunakan.",
};

export default function HomePage() {
  return <LoanCalculator />;
}
