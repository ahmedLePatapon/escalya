# Escalya - Application Next.js 16

**Branch:** `feature/escalya-nextjs-app`
**Description:** Conversion des designs HTML statiques en application Next.js 16 avec SEO optimisé et préparation pour base de données et paiement.

## Goal

Créer une application Next.js 16 moderne à partir des prototypes HTML existants, avec une architecture scalable préparée pour l'intégration d'une base de données (Prisma/PostgreSQL) et d'un système de paiement (Stripe). L'application sera optimisée pour le SEO avec Server Components, metadata API, et structured data.

---

## Implementation Steps

### Step 1: Foundation - Setup Next.js 16 + Design System
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

---

### Step 2: Shared Components - Navigation & Footer
**Files:**
- `components/layout/Navigation.tsx` (nouveau)
- `components/layout/Footer.tsx` (nouveau)
- `components/ui/Button.tsx` (nouveau)
- `components/ui/Icon.tsx` (nouveau)
- `components/ui/Logo.tsx` (nouveau)
- `app/layout.tsx` (mise à jour)

**What:**
Créer les composants de layout partagés extraits des designs HTML. Navigation avec effet glass (`backdrop-blur`), logo SVG Escalya, liens de navigation, et boutons "Espace Membre" + "Réserver". Footer avec 4 colonnes de liens et formulaire newsletter. Intégrer Material Symbols pour les icônes.

**Testing:**
- Navigation sticky visible sur scroll
- Hover effects fonctionnent
- Footer s'affiche correctement
- Mobile responsive (menu burger)

---

### Step 3: UI Components Library
**Files:**
- `components/ui/Badge.tsx` (nouveau)
- `components/ui/Card.tsx` (nouveau)
- `components/ui/Input.tsx` (nouveau)
- `components/ui/Textarea.tsx` (nouveau)
- `components/ui/CounterInput.tsx` (nouveau)
- `components/ui/StayCard.tsx` (nouveau)
- `components/ui/Hero.tsx` (nouveau)
- `components/ui/Testimonial.tsx` (nouveau)
- `lib/cn.ts` (nouveau - utility clsx/tailwind-merge)

**What:**
Créer la bibliothèque de composants UI réutilisables avec les patterns du design: `.luxury-card` avec hover zoom, `.luxury-gradient` overlay, badges de statut ("Member Exclusive", "All-Inclusive"), Hero section plein écran, cards de séjours avec prix/durée/capacité.

**Testing:**
- Tous les composants fonctionnent en isolation
- Hover effects conformes aux designs
- Props TypeScript bien typés

---

### Step 4: Home Page (Page d'accueil)
**Files:**
- `app/page.tsx` (nouveau)
- `app/opengraph-image.tsx` (nouveau - OG image dynamique)
- `components/sections/HomeHero.tsx` (nouveau)
- `components/sections/FeaturedStays.tsx` (nouveau)
- `components/sections/FeatureCards.tsx` (nouveau)
- `components/sections/NewsletterSection.tsx` (nouveau)
- `data/mock/stays.ts` (nouveau - données mockées)

**What:**
Implémenter la page d'accueil complète avec: Hero section (image background, CTA double), section "L'Art de Vivre" (3 feature cards), grille de séjours "Collections" (3 cards), testimonial client, section newsletter. Ajouter metadata SEO complète et Open Graph.

**Testing:**
- Page s'affiche sans erreur
- Lighthouse SEO score > 90
- Images optimisées avec `next/image`
- CTA liens vers `/sejours` et `/concept`

---

### Step 5: Concept Page (Philosophie)
**Files:**
- `app/concept/page.tsx` (nouveau)
- `components/sections/ConceptHero.tsx` (nouveau)
- `components/sections/Timeline.tsx` (nouveau)
- `components/sections/StatsSection.tsx` (nouveau)
- `components/ui/Quote.tsx` (nouveau)

**What:**
Créer la page "Notre Concept" avec: Hero full-screen avec badge "The Vision", citation philosophique, sections alternées image/texte, statistiques ("500+ Private Estates"), timeline verticale histoire 2020→2024, logos partenaires, CTA final. Server Component statique.

**Testing:**
- Rendu SSG statique
- Animations smooth au scroll
- Responsive mobile/tablet/desktop

---

### Step 6: Contact Page (Formulaire de devis)
**Files:**
- `app/contact/page.tsx` (nouveau)
- `components/forms/InquiryForm.tsx` (nouveau - Client Component)
- `components/sections/ConciergeCard.tsx` (nouveau)
- `components/sections/ContactSidebar.tsx` (nouveau)
- `lib/validations/inquiry.ts` (nouveau - Zod schema)
- `app/api/inquiry/route.ts` (nouveau - API route placeholder)

**What:**
Implémenter le formulaire de demande de devis: champs Travel Essentials (destination, dates), compteurs adultes/enfants, textarea souhaits personnalisés, checkboxes options (Private Jet, Chauffeur). Sidebar avec infos contact, carte, horaires. Validation côté client avec Zod. API route préparée pour future intégration.

**Testing:**
- Formulaire valide/invalide feedback
- Compteurs fonctionnent
- Submit affiche loading state
- API route répond 200

---

### Step 7: Catalog Page (Liste des séjours)
**Files:**
- `app/sejours/page.tsx` (nouveau)
- `app/sejours/loading.tsx` (nouveau)
- `components/sections/FilterSidebar.tsx` (nouveau - Client Component)
- `components/sections/StaysGrid.tsx` (nouveau)
- `components/ui/Breadcrumbs.tsx` (nouveau)
- `components/ui/Pagination.tsx` (nouveau)
- `components/ui/FilterChip.tsx` (nouveau)
- `lib/filters.ts` (nouveau - logique filtres)
- `data/mock/stays.ts` (mise à jour avec plus de séjours)

**What:**
Créer le catalogue des séjours avec: header avec search, breadcrumbs, sidebar filtres (destinations, durée, type), grille de StayCards avec pagination. Filtres fonctionnels avec URL state (`?destination=provence&duration=3-5`). Utiliser `useSearchParams` côté client pour les filtres, Server Component pour le rendu initial.

**Testing:**
- Filtres modifient l'URL
- Pagination fonctionne
- Loading state avec Suspense
- Mobile: filtres en drawer

---

### Step 8: Stay Details Page (Détails séjour)
**Files:**
- `app/sejours/[slug]/page.tsx` (nouveau)
- `app/sejours/[slug]/loading.tsx` (nouveau)
- `app/sejours/[slug]/not-found.tsx` (nouveau)
- `components/sections/ImageGallery.tsx` (nouveau)
- `components/sections/ItineraryTimeline.tsx` (nouveau)
- `components/sections/ServicesGrid.tsx` (nouveau)
- `components/sections/AccommodationCard.tsx` (nouveau)
- `components/booking/BookingSidebar.tsx` (nouveau - Client Component)
- `components/ui/TabsNavigation.tsx` (nouveau)
- `lib/pricing.ts` (nouveau - calcul prix)

**What:**
Page détaillée d'un séjour avec: galerie images grid, header (titre, localisation, rating), tabs sticky (Programme/Hébergement/Services), timeline itinéraire 3 jours, card hébergement, grille services inclus. Sidebar de réservation avec: sélection dates, compteurs voyageurs, calcul prix dynamique, CTA "Réserver". Params async (Next.js 16).

**Testing:**
- Route dynamique `/sejours/escapade-vignoble-bordeaux`
- `generateMetadata` avec titre dynamique
- 404 pour slug inexistant
- Prix se recalcule au changement voyageurs

---

### Step 9: Database Schema & Prisma Setup
**Files:**
- `prisma/schema.prisma` (nouveau)
- `lib/db.ts` (nouveau - Prisma client singleton)
- `types/database.ts` (nouveau - types générés)
- `.env.example` (nouveau)
- `package.json` (mise à jour dépendances)

**What:**
Définir le schéma Prisma avec les entités identifiées: `Stay`, `Location`, `ItineraryDay`, `Accommodation`, `Service`, `Booking`, `User`, `InquiryRequest`, `NewsletterSubscriber`. Relations appropriées. Configurer pour PostgreSQL. Créer le singleton Prisma pour éviter les connexions multiples en dev.

**Testing:**
- `npx prisma generate` sans erreur
- `npx prisma db push` crée les tables
- Types TypeScript générés

---

### Step 10: Data Layer & API Routes
**Files:**
- `lib/actions/stays.ts` (nouveau - Server Actions)
- `lib/actions/booking.ts` (nouveau - Server Actions)
- `lib/actions/inquiry.ts` (nouveau - Server Actions)
- `app/api/stays/route.ts` (nouveau)
- `app/api/stays/[id]/route.ts` (nouveau)
- `app/api/newsletter/route.ts` (nouveau)
- `prisma/seed.ts` (nouveau - données initiales)

**What:**
Créer la couche d'accès aux données avec Server Actions pour les mutations (créer réservation, soumettre inquiry) et API routes pour les lectures externes. Implémenter le seed avec les données des designs. Remplacer les données mockées par les vraies queries Prisma.

**Testing:**
- `npx prisma db seed` peuple la DB
- API `/api/stays` retourne les séjours
- Pages utilisent les données réelles

---

### Step 11: Payment Preparation (Stripe)
**Files:**
- `lib/stripe.ts` (nouveau - Stripe client)
- `lib/actions/checkout.ts` (nouveau - Server Action)
- `app/api/webhooks/stripe/route.ts` (nouveau - webhook placeholder)
- `app/checkout/page.tsx` (nouveau - placeholder)
- `app/checkout/success/page.tsx` (nouveau - placeholder)
- `components/booking/BookingSidebar.tsx` (mise à jour)
- `.env.example` (mise à jour avec Stripe keys)

**What:**
Préparer l'infrastructure de paiement Stripe: client Stripe initialisé, Server Action pour créer une Checkout Session, webhook endpoint pour recevoir les events (payment_intent.succeeded), pages checkout/success en placeholder. Bouton "Réserver" redirige vers Stripe Checkout (mode test).

**Testing:**
- Variables Stripe configurables via `.env`
- Flow de test avec Stripe CLI
- Webhook reçoit les events (logs)

---

### Step 12: SEO Optimization & Final Polish
**Files:**
- `app/sitemap.ts` (nouveau - sitemap dynamique)
- `app/robots.ts` (nouveau)
- `app/manifest.ts` (nouveau - PWA)
- `components/seo/JsonLd.tsx` (nouveau - structured data)
- Toutes les pages (mise à jour metadata)
- `public/` (favicon, icons)

**What:**
Finaliser l'optimisation SEO: sitemap.xml dynamique listant toutes les pages et séjours, robots.txt, manifest.json pour PWA. Ajouter structured data JSON-LD (Organization, Product, Offer, Review) sur les pages appropriées. Vérifier toutes les meta descriptions, Open Graph images, canonical URLs.

**Testing:**
- `/sitemap.xml` liste toutes les routes
- Google Rich Results Test valide le JSON-LD
- Lighthouse SEO score = 100
- Core Web Vitals dans le vert

---

## Architecture Summary

```
escalya/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Home
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── manifest.ts
│   ├── opengraph-image.tsx
│   ├── concept/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── sejours/
│   │   ├── page.tsx            # Catalog
│   │   ├── loading.tsx
│   │   └── [slug]/
│   │       ├── page.tsx        # Details
│   │       ├── loading.tsx
│   │       └── not-found.tsx
│   ├── checkout/
│   │   ├── page.tsx
│   │   └── success/page.tsx
│   └── api/
│       ├── stays/
│       ├── inquiry/
│       ├── newsletter/
│       └── webhooks/stripe/
├── components/
│   ├── layout/                 # Navigation, Footer
│   ├── ui/                     # Button, Card, Badge, Input...
│   ├── sections/               # Hero, FilterSidebar, Timeline...
│   ├── forms/                  # InquiryForm
│   ├── booking/                # BookingSidebar
│   └── seo/                    # JsonLd
├── lib/
│   ├── fonts.ts
│   ├── cn.ts
│   ├── db.ts                   # Prisma client
│   ├── stripe.ts
│   ├── pricing.ts
│   ├── filters.ts
│   ├── actions/                # Server Actions
│   └── validations/            # Zod schemas
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── types/
│   ├── index.ts
│   └── database.ts
├── data/mock/                  # Données temporaires
├── public/
│   └── images/
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## Dependencies to Install

```json
{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@prisma/client": "^6.0.0",
    "stripe": "^17.0.0",
    "zod": "^3.23.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.5.0"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "prisma": "^6.0.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^16.0.0"
  }
}
```

---

## [NEEDS CLARIFICATION]

1. **Base de données**: Préférez-vous PostgreSQL hébergé 

2. **Authentification**: implémenter l'authentification membre dès maintenant (NextAuth.js / Auth.js)
3. **Images**: Les images des designs sont des URLs Google. Avez-vous les vraies images à uploader, ou devons-nous utiliser des placeholders ?

4. **Langue**: préparer l'internationalisation (i18n) dès maintenant

5. **Hébergement cible**: Vercel

