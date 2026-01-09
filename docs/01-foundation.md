# Step 1: Foundation - Setup Next.js 16 + Design System

**Files:**
- `package.json` (nouveau)
- `next.config.js` (nouveau)
- `tsconfig.json` (nouveau)
- `tailwind.config.ts` (nouveau)
- `postcss.config.js` (nouveau)
- `app/globals.css` (nouveau)
- `app/layout.tsx` (nouveau)
- `lib/fonts.ts` (nouveau)
- `types/index.ts` (nouveau)

**What:**
Initialiser le projet Next.js 16 avec TypeScript, Tailwind CSS configuré avec les couleurs Escalya (`primary: #1152d4`, `gold-accent: #D4AF37`, `background-dark: #101622`), et les fonts (Plus Jakarta Sans). Créer le Root Layout avec les fonts optimisées via `next/font/google`, metadata de base, et structure du `<html>` avec `dark` mode.

**Testing:**
- `npm run dev` démarre sans erreur
- Les fonts se chargent correctement
- Les couleurs custom sont disponibles dans Tailwind
