import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Koyash — House of Trust | Luxury Silver Gifting",
  description:
    "Premium silver gifts from Delhi — 925 Sterling Silver, BIS Hallmarked, with global shipping. Explore our curated collections of silver coins, god idols, kids utensils, and more.",
  keywords: "silver gifts, 925 sterling silver, BIS hallmarked, silver coins, god idols, Delhi, luxury gifting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${poppins.variable} font-poppins bg-cream antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
