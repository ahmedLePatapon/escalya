# Escalya - Plateforme de Séjours d'Exception

**Escalya** est une plateforme de réservation de séjours d'exception tout-inclus dans les plus prestigieuses et authentiques destinations. Le projet vise à créer une expérience de voyage court haut de gamme alliant remise en forme sportive et bien-être avec une interface moderne et élégante.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 20+ 
- npm, yarn, pnpm ou bun

### Installation et lancement

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

```
escalya/
├── app/                      # Pages Next.js (App Router)
│   ├── page.tsx              # Page d'accueil
│   ├── concept/              # Page concept
│   ├── sejours/              # Catalogue et détails
│   └── contact/              # Page contact
├── components/               # Composants React
│   ├── layout/               # Header, Footer
│   ├── ui/                   # Composants UI réutilisables
│   └── home/                 # Composants page d'accueil
├── docs/                     # 📚 Documentation complète
├── design/                   # Maquettes HTML originales
└── lib/                      # Types et utilitaires
```

## 📚 Documentation

**Documentation complète disponible dans `/docs`** :

- **[CONVERSION_COMPLETE.md](CONVERSION_COMPLETE.md)** - Récapitulatif complet de la conversion
- **[docs/README.md](docs/README.md)** - Vue d'ensemble et référence technique
- **[docs/01-PLAN_CONVERSION.md](docs/01-PLAN_CONVERSION.md)** - Architecture et stratégie
- **[docs/02-COMPOSANTS_COMMUNS.md](docs/02-COMPOSANTS_COMMUNS.md)** - Composants de base
- **[docs/03-PAGE_ACCUEIL.md](docs/03-PAGE_ACCUEIL.md)** - Page d'accueil
- **[docs/04-PAGE_CONCEPT.md](docs/04-PAGE_CONCEPT.md)** - Page concept
- **[docs/05-PAGE_CATALOGUE.md](docs/05-PAGE_CATALOGUE.md)** - Catalogue
- **[docs/06-PAGE_DETAILS_SEJOUR.md](docs/06-PAGE_DETAILS_SEJOUR.md)** - Détails séjour
- **[docs/07-PAGE_CONTACT.md](docs/07-PAGE_CONTACT.md)** - Page contact

## 🛠️ Technologies

- **Next.js 16** - Framework React avec App Router
- **React 19** - Bibliothèque UI
- **TypeScript 5** - Typage statique
- **Tailwind CSS v4** - Framework CSS utility-first
- **Plus Jakarta Sans** - Police Google Fonts

## ✨ Fonctionnalités

- ✅ 5 pages complètes et responsive
- ✅ 17+ composants réutilisables
- ✅ Mode dark par défaut
- ✅ Images optimisées (next/image)
- ✅ SEO-friendly avec métadonnées
- ✅ Navigation responsive avec menu mobile
- ✅ Formulaires interactifs
- ✅ Architecture modulaire

## 🎯 Pages Disponibles

- `/` - Page d'accueil avec hero, séjours, témoignages
- `/concept` - Notre philosophie et approche
- `/sejours` - Catalogue des séjours disponibles
- `/sejours/[id]` - Détails d'un séjour spécifique
- `/contact` - Formulaire de demande personnalisée

## 🚧 Prochaines Étapes

### Court terme
- [ ] Ajouter les images en local dans `/public/images`
- [ ] Implémenter la logique de filtrage sur `/sejours`
- [ ] Connecter les formulaires à un backend

### Moyen terme
- [ ] Backend API (REST ou GraphQL)
- [ ] Base de données (Prisma + PostgreSQL)
- [ ] Authentification (NextAuth.js)
- [ ] CMS pour gérer les séjours

### Long terme
- [ ] Paiement (Stripe)
- [ ] Internationalisation (i18n)
- [ ] Tests (Jest + RTL)
- [ ] Déploiement (Vercel)

## 📝 Scripts Disponibles

```bash
npm run dev      # Développement
npm run build    # Build production
npm start        # Serveur production
npm run lint     # Linter ESLint
```

## 🎨 Configuration Tailwind

Couleurs personnalisées :
- `primary` : #1152d4 (bleu)
- `gold-accent` : #D4AF37 (or)
- `background-dark` : #101622
- `anthracite` : #1a1f2b

Voir [app/globals.css](app/globals.css) pour la configuration complète.

## 📄 Licence

Projet privé - Tous droits réservés.

---

**Développé avec Next.js 16** - [Documentation Next.js](https://nextjs.org/docs)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
