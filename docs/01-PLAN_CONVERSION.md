# 01 - Plan de Conversion HTML vers Next.js

**Date:** 9 janvier 2026  
**Projet:** Escalya - Plateforme de réservation de séjours d'exception

## Objectif

Convertir les maquettes HTML statiques du dossier `/design` en application Next.js 16 avec l'App Router, en décomposant les pages en composants réutilisables et en adoptant les meilleures pratiques React/Next.js.

## Analyse de l'existant

### Structure actuelle de l'application Next.js

```
escalya/
├── app/
│   ├── layout.tsx         # Layout racine simple
│   ├── page.tsx           # Page d'accueil template Next.js
│   └── globals.css        # Styles globaux avec Tailwind CSS v4
├── package.json
└── public/
```

**Technologies installées:**
- Next.js 16.1.1
- React 19.2.3
- Tailwind CSS v4
- TypeScript 5

### Fichiers HTML à convertir

1. **home.html** → Page d'accueil
   - Hero section avec image de fond
   - Sections : "L'Art de Vivre", séjours mis en avant, témoignages
   - Navigation fixe avec effet glass
   
2. **concept.html** → Page concept/philosophie
   - Hero section avec overlay
   - Sections : philosophie, contenu en colonnes alternées
   - Style minimaliste et élégant
   
3. **catalogue.html** → Page catalogue des séjours
   - Navigation avec breadcrumbs
   - Filtres et recherche
   - Grille de cartes de séjours
   - Pagination
   
4. **detail-sejour.html** → Page détails d'un séjour
   - Galerie photo en grille
   - Système d'onglets (Programme, Hébergement, Services, Avis)
   - Sidebar avec formulaire de réservation
   - Section avis clients
   
5. **contact.html** → Page de contact
   - Formulaire de demande personnalisée
   - Informations de contact
   - FAQ

## Architecture cible

### Structure des dossiers

```
app/
├── layout.tsx                    # Layout racine avec Header global
├── page.tsx                      # Page d'accueil
├── concept/
│   └── page.tsx                  # Page concept
├── sejours/
│   ├── page.tsx                  # Catalogue des séjours
│   └── [id]/
│       └── page.tsx              # Détails d'un séjour
├── contact/
│   └── page.tsx                  # Page contact
└── globals.css                   # Styles globaux

components/
├── layout/
│   ├── Header.tsx                # Navigation principale
│   └── Footer.tsx                # Pied de page
├── home/
│   ├── HeroSection.tsx
│   ├── FeaturedStays.tsx
│   └── Testimonials.tsx
├── sejours/
│   ├── StayCard.tsx              # Carte de séjour
│   ├── StayFilters.tsx           # Filtres de recherche
│   ├── StayGallery.tsx           # Galerie photos
│   └── BookingForm.tsx           # Formulaire de réservation
├── concept/
│   ├── PhilosophySection.tsx
│   └── FeatureGrid.tsx
├── contact/
│   └── ContactForm.tsx
└── ui/
    ├── Button.tsx                # Bouton réutilisable
    ├── Card.tsx                  # Carte réutilisable
    └── Input.tsx                 # Champ de formulaire

lib/
└── types.ts                      # Types TypeScript partagés

public/
└── images/                       # Images statiques
```

### Configuration Tailwind CSS

Les fichiers HTML utilisent Tailwind CSS avec configuration personnalisée :

**Couleurs personnalisées:**
- `primary`: #1152d4 (bleu)
- `gold-accent`: #D4AF37 (or)
- `background-light`: #f6f6f8
- `background-dark`: #101622

**Polices:**
- Plus Jakarta Sans (display et sans)

**Styles personnalisés:**
- `.glass-nav` : effet verre pour la navigation
- `.text-shadow-lg` : ombre de texte

Cette configuration sera transférée dans Tailwind CSS v4 via le fichier `globals.css` avec la directive `@theme`.

## Stratégie de conversion

### Étape 1 : Configuration de base (docs/02)
- Mettre à jour `globals.css` avec les couleurs et styles personnalisés
- Configurer les polices (Plus Jakarta Sans)
- Installer Material Symbols si nécessaire

### Étape 2 : Composants communs (docs/02)
1. **Header** : Navigation responsive avec menu mobile
2. **Footer** : Pied de page avec liens et réseaux sociaux
3. **Button** : Bouton réutilisable avec variants
4. **Card** : Carte de base

### Étape 3 : Pages principales (docs/03 à 07)
Pour chaque page :
1. Créer la route Next.js
2. Extraire les composants spécifiques
3. Convertir HTML en JSX
4. Remplacer les images par `next/image`
5. Gérer l'état si nécessaire (formulaires, filtres)
6. Ajouter les métadonnées SEO

### Étape 4 : Optimisations
- Images optimisées avec `next/image`
- Lazy loading des composants
- Types TypeScript stricts
- Accessibilité (ARIA, sémantique HTML)

## Principes de conversion

1. **Composants réutilisables** : Extraire tout élément répété
2. **Server Components par défaut** : Utiliser les Server Components Next.js sauf pour l'interactivité
3. **TypeScript strict** : Typer tous les props et données
4. **Responsive** : Maintenir la responsivité des designs
5. **Accessibilité** : Ajouter les attributs ARIA manquants
6. **Performance** : Optimiser les images et le chargement
7. **SEO** : Ajouter les métadonnées appropriées

## Ordre d'implémentation

1. ✅ Documentation du plan
2. ⏳ Composants communs (Header, Footer)
3. ⏳ Page d'accueil
4. ⏳ Page concept
5. ⏳ Page catalogue
6. ⏳ Page détails séjour
7. ⏳ Page contact

## Remarques importantes

- Les fichiers HTML utilisent CDN pour Tailwind et les icônes Material → à remplacer par des solutions locales
- Images hébergées sur Google → à remplacer par des assets locaux dans `/public/images`
- Mode dark déjà présent dans les HTML → à maintenir avec `next-themes`
- Animations et transitions à préserver
- Formulaires nécessiteront validation côté client et serveur

## Prochaines étapes

Voir [02-COMPOSANTS_COMMUNS.md](./02-COMPOSANTS_COMMUNS.md) pour la création des composants de base.
