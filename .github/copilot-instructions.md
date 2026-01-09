# Escalya - Copilot Instructions

## Project Overview

**Escalya** est une plateforme de réservation de séjours d'exception tout-inclus dans les plus prestigieux domaines et châteaux de France. Le projet vise à créer une expérience de voyage court haut de gamme alliant remise en forme sportive et bien-être avec une interface moderne et élégante.

## Architecture

### Current State
Le projet contient actuellement des prototypes HTML statiques dans [design/](../design/) servant de références visuelles pour l'implémentation Next.js :
- **escalya_home_page/** - Page d'accueil avec hero section et présentation du concept
- **luxury_stays_catalog/** - Catalogue des séjours premium
- **stay_details_page/** - Page de détails d'un séjour spécifique
- **our_concept_&_philosophy/** - Page expliquant la philosophie Escalya
- **contact_&_custom_quote/** - Formulaire de contact et devis personnalisé

### Target Architecture
Application Next.js 16 avec App Router, TypeScript, et Tailwind CSS (voir [.github/instructions/nextjs-tailwind.instructions.md](instructions/nextjs-tailwind.instructions.md)).

## Design System & Branding

### Palette de Couleurs
```css
--primary: #1152d4        /* Bleu primaire pour CTA et accents */
--gold-accent: #D4AF37    /* Or pour les éléments premium */
--champagne: #D4AF37      /* Variante or (utilisé dans certains designs) */
--background-light: #f6f6f8
--background-dark: #101622
--anthracite: #1a1f2b     /* Arrière-plans secondaires en mode sombre */
```

### Typographie
- **Display/Body**: Plus Jakarta Sans (300-800 weights)
- **Serif/Headings**: Playfair Display (pour les titres élégants)
- Utiliser `next/font/google` pour optimisation

### Design Patterns
- **Dark mode first**: Tous les designs sont en mode sombre avec fond `#101622`
- **Glass morphism**: Navigation avec `backdrop-blur` et transparence
- **Hover effects**: Transformations subtiles (`scale(1.05)`, `translateY(-8px)`)
- **Gradients**: Overlays sombres sur images (`linear-gradient(rgba(0,0,0,0.4), rgba(16,22,34,1))`)
- **Rounded corners**: `rounded-lg` (0.5rem), `rounded-xl` (0.75rem), `rounded-2xl` pour cards

## Key Components Patterns

### Navigation
- Fixed header avec glass effect: `glass-nav` class
- Logo SVG géométrique (escalier stylisé)
- Navigation principale: Concept | Séjours | À propos | Contact
- Actions: "Espace Membre" + "Réserver" (bouton CTA principal)

### Hero Sections
- `h-screen min-h-[700px]` pour hauteur consistante
- Images avec overlay gradient sombre
- Titre en Playfair Display (`font-serif`)
- Sous-titre avec `text-gold-accent` et `tracking-[0.3em]`
- Double CTA: primaire (bleu) + secondaire (transparent avec border)

### Cards (Stays/Offers)
- Classe `.luxury-card` pour hover states
- Image avec effet zoom: `.image-zoom` (scale on hover)
- Overlay gradient: `.luxury-gradient`
- Badges: Prix, durée, capacité
- Border subtile: `border-white/5` → `border-primary/50` au hover

## Implementation Workflow

Lors de la conversion HTML → Next.js :

1. **Structure des pages** → routes App Router (`app/` directory)
2. **Extraire composants réutilisables** → `components/`
   - Navigation, Footer, Cards, Badges, Buttons
3. **Images** → remplacer par `<Image>` de `next/image`
4. **Tailwind config** → créer `tailwind.config.ts` avec les couleurs custom
5. **Server Components par défaut** → seuls les composants interactifs en `'use client'`
6. **Metadata** → ajouter dans chaque `page.tsx`

## Technical Conventions

### Next.js 16 Specific
- **IMPORTANT**: `params` et `searchParams` sont **async** - toujours les `await`
- Utiliser Server Components par défaut
- `'use client'` uniquement pour interactivité (formulaires, animations client-side)
- Turbopack est le bundler par défaut

### TypeScript
- Strict mode activé
- Types explicites pour les props
- Interfaces pour les données métier (Stay, Booking, Location)

### Styling
- Tailwind utility-first
- Pas de CSS modules pour ce projet
- Classes responsive: `md:`, `lg:` breakpoints
- Dark mode: `dark:` prefix

### Data Fetching
À implémenter :
- Server Components pour fetch des séjours depuis API/DB
- Caching avec `next: { revalidate: 3600 }`
- Loading states avec `loading.tsx`
- Error boundaries avec `error.tsx`

## File Structure (Target)

```
app/
├── layout.tsx                 # Root layout, fonts, metadata
├── page.tsx                   # Home (escalya_home_page)
├── sejours/
│   ├── page.tsx              # Catalog (luxury_stays_catalog)
│   └── [id]/
│       └── page.tsx          # Details (stay_details_page)
├── concept/
│   └── page.tsx              # Philosophy (our_concept_&_philosophy)
├── contact/
│   └── page.tsx              # Contact form (contact_&_custom_quote)
components/
├── Navigation.tsx
├── Hero.tsx
├── StayCard.tsx
├── Footer.tsx
public/
├── images/
tailwind.config.ts
next.config.js
```

## Key Commands

**Development**: `npm run dev` ou `pnpm dev`  
**Build**: `npm run build`  
**Type check**: `tsc --noEmit`

## External References

- Designs de référence : [design/](../design/)
- Standards Next.js : [.github/instructions/nextjs-tailwind.instructions.md](instructions/nextjs-tailwind.instructions.md)
- Expert agent : [.github/agents/expert-nextjs-developer.agent.md](agents/expert-nextjs-developer.agent.md)

## Domain Context

**Audience cible**: Voyageurs fortunés cherchant des expériences exclusives  
**USP**: Séjours tout-inclus dans châteaux/domaines français avec service premium  
**Langue**: Français (priorité), avec support multilingue futur  
**Ton**: Luxueux, élégant, aspirationnel mais accessible
