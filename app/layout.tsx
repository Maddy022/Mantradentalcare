import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DentalSchema } from "@/components/DentalSchema";
import { MobileFloatingBar } from "@/components/layout/MobileFloatingBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mantra Dental Care | Family Dentist in Rajkot",
    template: "%s | Mantra Dental Care",
  },
  description:
    "Expert dental care in Rajkot, Gujarat. Cleanings, implants, cosmetic dentistry, orthodontics, and more. Book your appointment today at Mantra Dental Care.",
  keywords: [
    "dentist rajkot",
    "dental clinic rajkot",
    "teeth whitening rajkot",
    "dental implants rajkot",
    "invisalign rajkot",
    "root canal treatment rajkot",
    "cosmetic dentistry rajkot",
    "pediatric dentist rajkot",
  ],
  openGraph: {
    title: "Mantra Dental Care | Family Dentist in Rajkot",
    description:
      "Expert dental care with a gentle touch in Rajkot, Gujarat. Book your appointment today.",
    type: "website",
    locale: "en_IN",
    siteName: "Mantra Dental Care",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <body className="antialiased">
        <DentalSchema />
        <Navbar />
        <main className="min-h-screen pt-16 sm:pt-20 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileFloatingBar />
      </body>
    </html>
  );
}
