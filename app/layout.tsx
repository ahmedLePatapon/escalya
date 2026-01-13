import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Escalya - Séjours d'exception",
  description: "Découvrez nos destinations exclusives et vivez des expériences uniques.",
  keywords: "voyage luxe, villas, chalets, séjours exception, escalya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
