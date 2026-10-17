import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const BASE_URL = "https://morello-portfolio.vercel.app";
const DESCRIPTION =
  "Portfolio Danadyaksa Morello Hisyam Prayata — desainer visual & pengembang digital asal Malang. Berfokus pada desain grafis, branding, UI/UX, dan pengembangan web.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Morello Portfolio — Crafting Visuals That Tell Stories",
    template: "%s | Morello Portfolio",
  },
  description: DESCRIPTION,
  keywords: [
    "Danadyaksa Morello",
    "Morello Portfolio",
    "Graphic Designer Malang",
    "UI/UX Designer",
    "Web Developer",
    "Visual Branding",
    "Portfolio Indonesia",
  ],
  authors: [{ name: "Danadyaksa Morello Hisyam Prayata", url: BASE_URL }],
  creator: "Danadyaksa Morello Hisyam Prayata",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Morello Portfolio",
    title: "Morello Portfolio — Crafting Visuals That Tell Stories",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Morello Portfolio — Crafting Visuals That Tell Stories",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "g85cUBHOhnv0KHFxn3R9d1qghU7Wd-5JrMhZOYm8alk",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${instrumentSans.variable} ${inter.variable} bg-[#F8F9FA] text-[#1A1A1A] antialiased`}>
        {children}
      </body>
    </html>
  );
}
