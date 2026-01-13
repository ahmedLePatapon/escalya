import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Escalya | Séjours d'Exception Tout-Inclus",
  description:
    "Plateforme de réservation de séjours d'exception tout-inclus dans les plus prestigieuses et authentiques destinations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${plusJakartaSans.variable} antialiased bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <html lang="fr" className="scroll-smooth">
          <body className={cn(jakarta.variable, "antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50")}>
            {children}
          </body>
        </html>
        );
        <html lang="fr" className="scroll-smooth">
          <head>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
          </head>
          <body className={cn(jakarta.variable, "antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50")}>
            {children}
          </body>
        </html>
        );
}
