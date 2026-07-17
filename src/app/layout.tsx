import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

// Tambahkan konfigurasi metadata Google di bawah ini
export const metadata: Metadata = {
  title: "Morello Portfolio",
  description: "Portofolio profesional Morello",
  verification: {
    google: "g85cUBHOhnv0KHFxn3R9d1qghU7Wd-5JrMhZOYm8alk",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${inter.variable} bg-[#F8F9FA] text-[#1A1A1A] antialiased`}>
        {children}
      </body>
    </html>
  );
}
