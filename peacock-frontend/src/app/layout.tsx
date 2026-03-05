import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peacock Resources LLP | Engineering",
  description: "Total Outsourcing Solutions provider.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-700" style={{ fontFamily: "var(--font-body), sans-serif" }}>
        <Navbar />
        <main className="flex-grow pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
