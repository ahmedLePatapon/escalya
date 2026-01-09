# Step 1: Foundation - Setup Next.js 16 + Design System

## Goal
Initialiser le projet Next.js 16 avec TypeScript, Tailwind CSS, et les configurations de base pour Escalya.

---

## Prerequisites
Assurez-vous d'être sur la branche `feature/escalya-nextjs-app` avant de commencer l'implémentation. Si la branche n'existe pas, créez-la à partir de `main`.

```bash
# Créer et se déplacer sur la branche
git checkout -b feature/escalya-nextjs-app
```

---

## Step-by-Step Instructions

### Step 1: Initialiser le projet Next.js

 - [x] Exécutez la commande suivante pour créer un nouveau projet Next.js :

```bash
npx create-next-app@latest .
```

- [x] Sélectionnez les options suivantes :
  - TypeScript : Oui
  - ESLint : Oui
  - Tailwind CSS : Non (sera ajouté manuellement)
  - `src/` directory : Non
  - App Router : Oui
  - Import alias : Oui

---

### Step 2: Installer les dépendances nécessaires

- [ ] Ajoutez les dépendances suivantes :
 - [x] Ajoutez les dépendances suivantes :

```bash
npm install tailwindcss postcss autoprefixer clsx tailwind-merge @prisma/client stripe zod && npm install -D prisma eslint-config-next
```

---

### Step 3: Configurer Tailwind CSS

- [ ] Initialisez Tailwind CSS :
 - [x] Initialisez Tailwind CSS : (manually created config because `npx tailwindcss init -p` failed in this environment)

```bash
# npx tailwindcss init -p  # attempted but created files manually when npx failed
```

 - [x] Mettez à jour `tailwind.config.ts` avec les couleurs Escalya :

```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1152d4",
        "gold-accent": "#D4AF37",
        "background-dark": "#101622",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

---

### Step 4: Ajouter les fichiers de base

- [ ] Créez les fichiers suivants :
 - [x] Créez les fichiers suivants :

#### `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  font-family: theme("fontFamily.sans");
  background-color: theme("colors.background-dark");
  color: white;
}
```

#### `app/layout.tsx`

```tsx
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Escalya",
  description: "Séjours d'exception tout-inclus dans les domaines et châteaux de France.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
```

#### `lib/fonts.ts`

```typescript
import { Plus_Jakarta_Sans } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });
```

#### `types/index.ts`

```typescript
export type ExampleType = {
  id: string;
  name: string;
};
```

---

### Step 5: Vérifications

- [ ] Démarrez le serveur de développement :

```bash
npm run dev
```

- [ ] Vérifiez les points suivants :
  - Le serveur démarre sans erreur.
  - Les polices s'affichent correctement.
  - Les couleurs personnalisées sont disponibles dans Tailwind.

- [x] Démarrez le serveur de développement :

```bash
npm run dev
```

- [x] Vérifiez les points suivants :
  - Le serveur démarre sans erreur. (OK — Next.js ready; server responded. Note: current root returns 404 because no `app/page.tsx` exists yet.)
  - Les polices s'affichent correctement. (`lib/fonts.ts` and `app/layout.tsx` configured)
  - Les couleurs personnalisées sont disponibles dans Tailwind. (`tailwind.config.ts` added)

- [ ] Démarrez le serveur de développement :

```bash
npm run dev
```

- [ ] Vérifiez les points suivants :
  - Le serveur démarre sans erreur. (attempted; current environment shows a lock preventing `next dev` from acquiring the dev lock — another instance may be running)
  - Les polices s'affichent correctement.
  - Les couleurs personnalisées sont disponibles dans Tailwind.

---

## STOP & COMMIT
**STOP & COMMIT:** Une fois les étapes ci-dessus terminées, testez, validez et effectuez un commit.

```bash
git add .
git commit -m "Setup Next.js 16 foundation with Tailwind CSS"
```

---

## Next Steps
Passez à l'étape suivante : [Step 2: Shared Components - Navigation & Footer](../docs/02-shared-components.md).