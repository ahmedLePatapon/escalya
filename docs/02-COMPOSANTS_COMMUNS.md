# 02 - Composants Communs

**Date:** 9 janvier 2026  
**Dépendance:** [01-PLAN_CONVERSION.md](./01-PLAN_CONVERSION.md)

## Objectif

Créer les composants réutilisables communs à toutes les pages de l'application Escalya, en commençant par la configuration globale et les composants de layout.

## 1. Configuration Tailwind CSS v4

### Mise à jour de `app/globals.css`

Les fichiers HTML utilisent une configuration Tailwind personnalisée. Nous allons l'intégrer dans Tailwind CSS v4 en utilisant la directive `@theme`.

**Fichier:** `app/globals.css`

```css
@import "tailwindcss";

@theme inline {
  /* Couleurs personnalisées */
  --color-primary: #1152d4;
  --color-gold-accent: #D4AF37;
  --color-background-light: #f6f6f8;
  --color-background-dark: #101622;
  --color-anthracite: #1a1f2b;
  
  /* Police principale */
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-sans: "Plus Jakarta Sans", sans-serif;
}

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: "Plus Jakarta Sans", sans-serif;
}

/* Styles personnalisés */
.glass-nav {
  background: rgba(16, 22, 34, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.text-shadow-lg {
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.luxury-gradient {
  background: linear-gradient(180deg, rgba(16, 22, 34, 0) 0%, rgba(16, 22, 34, 0.9) 100%);
}

/* Suppression des scrollbars pour les éléments spécifiques */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

### Mise à jour de `app/layout.tsx`

Ajout de la police Plus Jakarta Sans et configuration du mode dark.

```tsx
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";

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
      <body className={`${plusJakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

## 2. Types TypeScript

**Fichier:** `lib/types.ts`

```typescript
// Types communs pour l'application Escalya

export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
}

export interface Stay {
  id: string;
  title: string;
  location: string;
  duration: string; // ex: "3 Jours / 2 Nuits"
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  images?: string[];
  description: string;
  features: string[];
  category: "signature" | "premium" | "classic";
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface NavLink {
  label: string;
  href: string;
}
```

## 3. Composant Header

Le Header est présent sur toutes les pages avec quelques variantes. Nous créons un composant flexible.

**Fichier:** `components/layout/Header.tsx`

```tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Concept", href: "/concept" },
    { label: "Séjours", href: "/sejours" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="size-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <Link href="/">
            <h1 className="text-2xl font-extrabold tracking-tighter text-white uppercase">
              Escalya
            </h1>
          </Link>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:block px-6 py-2 rounded-lg border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-all">
            Espace Membre
          </button>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all">
            Réserver
          </button>

          {/* Menu mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 glass-nav border-b border-white/10">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
```

## 4. Composant Footer

**Fichier:** `components/layout/Footer.tsx`

```tsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-dark border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-8 text-primary">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tighter text-white uppercase">
                Escalya
              </h2>
            </div>
            <p className="text-slate-400 max-w-md">
              Vivez des séjours tout-inclus dans les plus prestigieux domaines et
              châteaux de France. Une parenthèse hors du temps orchestrée par nos
              experts.
            </p>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-white font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/concept"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Notre Concept
                </Link>
              </li>
              <li>
                <Link
                  href="/sejours"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Séjours
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-400">
              <li>contact@escalya.fr</li>
              <li>+33 1 23 45 67 89</li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Escalya. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-slate-500 hover:text-white text-sm transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="text-slate-500 hover:text-white text-sm transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              href="/cgv"
              className="text-slate-500 hover:text-white text-sm transition-colors"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

## 5. Composants UI de base

### Button

**Fichier:** `components/ui/Button.tsx`

```tsx
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-bold rounded-lg transition-all inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20",
    secondary: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
    outline: "border border-white/20 text-white hover:bg-white/10",
    ghost: "text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2 text-sm",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Card

**Fichier:** `components/ui/Card.tsx`

```tsx
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-anthracite rounded-xl overflow-hidden ${
        hover ? "transition-transform hover:scale-[1.02] cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

## 6. Mise à jour du Layout principal

**Fichier:** `app/layout.tsx` (version complète)

```tsx
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
      </body>
    </html>
  );
}
```

## Résumé des fichiers créés

✅ **Configuration:**
- `app/globals.css` - Styles globaux et configuration Tailwind
- `app/layout.tsx` - Layout racine avec Header et Footer
- `lib/types.ts` - Types TypeScript partagés

✅ **Composants de layout:**
- `components/layout/Header.tsx` - Navigation principale
- `components/layout/Footer.tsx` - Pied de page

✅ **Composants UI:**
- `components/ui/Button.tsx` - Bouton réutilisable
- `components/ui/Card.tsx` - Carte de base

## Prochaines étapes

Les composants communs sont maintenant en place. Nous pouvons passer à la conversion des pages individuelles.

Voir [03-PAGE_ACCUEIL.md](./03-PAGE_ACCUEIL.md) pour la conversion de la page d'accueil.
