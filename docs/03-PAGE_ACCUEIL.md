# 03 - Page d'Accueil

**Date:** 9 janvier 2026  
**Dépendance:** [02-COMPOSANTS_COMMUNS.md](./02-COMPOSANTS_COMMUNS.md)

## Objectif

Convertir le fichier `design/home_page/home.html` en page d'accueil Next.js (`app/page.tsx`) avec une décomposition en composants réutilisables.

## Analyse de la page d'accueil

La page d'accueil contient les sections suivantes :

### 1. Hero Section
- Image de fond avec dégradé
- Titre principal avec effet d'ombre
- Texte de présentation
- 2 boutons CTA (Découvrir les séjours, Notre Concept)
- Icône de scroll animée

### 2. Section "L'Art de Vivre Escalya"
- Texte explicatif sur deux colonnes
- 3 cartes de valeurs :
  - Héritage (icône château)
  - Gastronomie (icône restaurant)
  - Service (icône conciergerie)

### 3. Section "Séjours d'Exception"
- Titre et bouton "Voir tout le catalogue"
- Grille de 3 cartes de séjours :
  - Domaine de la Vigie (Côte d'Azur)
  - Chalet Cristal (Alpes Françaises)
  - Château de Chenonceau (Val de Loire)
- Chaque carte a :
  - Image avec effet hover
  - Badge de localisation
  - Titre et description
  - Bouton "Découvrir"

### 4. Section Témoignage
- Citation client
- Photo et informations du client

### 5. Section Partenaires
- Logos des partenaires (Louis Vuitton, Air France, etc.)

### 6. Section Newsletter
- Formulaire d'inscription
- Fond bleu primary

## Structure des composants

```
app/
└── page.tsx                          # Page d'accueil principale

components/
└── home/
    ├── HeroSection.tsx               # Section hero
    ├── ValueCard.tsx                 # Carte de valeur
    ├── LivingArtSection.tsx          # Section "L'Art de Vivre"
    ├── StayCard.tsx                  # Carte de séjour
    ├── FeaturedStays.tsx             # Section séjours d'exception
    ├── TestimonialSection.tsx        # Section témoignage
    ├── PartnersSection.tsx           # Section partenaires
    └── NewsletterSection.tsx         # Section newsletter
```

## Implémentation

### 1. HeroSection.tsx

```tsx
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(16, 22, 34, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYiuww3N99V82WFif_6Iy-6nBwOzO_nqvztoImDTXx9GbRDoV8QaSzqwVXxtBCH8gWa33AbhZNqP2f9kuNVquPF-z3cmdzqbvlQOYzKgVCwiAxtrKTRL475jiRfkdUhFzE1p-4vZaKKlqRfQnswOj4C7T6OpEhIiCQ-b-tMpMJSvT6l2EKaQsB0jh17YLyOqmJifcaxM7cekeTb8tvsmHWqaRNHJhx8y_qf7vyZuHULnMBkQj3HIe8-3KU_92HBW-4HrwxR5brapY")',
        }}
      />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <span className="text-gold-accent font-bold tracking-[0.4em] uppercase mb-6 block text-sm">
          L'Art de s'évader
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1] font-extrabold tracking-tight text-shadow-lg">
          L'Exceptionnel à Votre Portée
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
          Vivez des séjours tout-inclus dans les plus prestigieux domaines et
          châteaux de France. Une parenthèse hors du temps orchestrée par nos
          experts.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg">
            Découvrir les séjours
          </Button>
          <Button variant="secondary" size="lg">
            Notre Concept
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
```

### 2. ValueCard.tsx

```tsx
interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-white/5 shadow-sm">
      <span className="text-3xl">{icon}</span>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-slate-500 font-medium">{description}</p>
    </div>
  );
}
```

### 3. LivingArtSection.tsx

```tsx
import ValueCard from "./ValueCard";

export default function LivingArtSection() {
  const values = [
    {
      icon: "🏰",
      title: "Héritage",
      description: "Des lieux chargés d'histoire et de caractère.",
    },
    {
      icon: "🍽️",
      title: "Gastronomie",
      description: "Une table d'exception servie par nos chefs.",
    },
    {
      icon: "🎩",
      title: "Service",
      description: "Conciergerie dédiée 24h/24 pour vos envies.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              L'Art de Vivre Escalya
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
              Plus qu'un voyage, nous vous proposons une immersion totale. Chaque
              détail, de la gastronomie étoilée aux transferts privés, est pensé
              pour que votre seule préoccupation soit de profiter de l'instant
              présent.
            </p>
            <div className="flex items-center gap-4 text-primary font-extrabold">
              <span className="h-[2px] w-12 bg-primary"></span>
              <a
                className="uppercase tracking-widest text-sm hover:text-primary/80 transition-colors"
                href="/concept"
              >
                En savoir plus sur l'expérience
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 4. StayCard.tsx

```tsx
import Image from "next/image";
import Button from "@/components/ui/Button";

interface StayCardProps {
  title: string;
  description: string;
  location: string;
  image: string;
}

export default function StayCard({
  title,
  description,
  location,
  image,
}: StayCardProps) {
  return (
    <div className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="aspect-[4/5] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 z-20 bg-primary px-3 py-1 rounded-full text-xs font-black text-white uppercase tracking-tighter">
          {location}
        </div>
        <div className="absolute bottom-6 left-6 right-6 z-20">
          <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
            {title}
          </h3>
          <p className="text-slate-300 text-sm mb-4 font-medium">{description}</p>
          <button className="w-full py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-lg font-extrabold text-sm hover:bg-white hover:text-primary transition-all uppercase tracking-widest">
            Découvrir
          </button>
        </div>
      </div>
    </div>
  );
}
```

### 5. FeaturedStays.tsx

```tsx
import StayCard from "./StayCard";

export default function FeaturedStays() {
  const stays = [
    {
      title: "Domaine de la Vigie",
      description: "Un écrin de verdure surplombant la Méditerranée.",
      location: "Côte d'Azur",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDm7PVbQYpkP4WRqZfy-Ab7e0UYlP9X9pbyhM4M9ezD6WLhbu-J-DnK27pCtuD3K97SpsM_dxV-7oTGn3dh6EY1-YPUWE8427Ppe6lqaPGFW1UhPSz8UzEbuOJyrGgRVBlrn82BQAS01F70EABUfHB_gH5E5ib-_Er05w7UZpAaMMvWAFn8tPJBL2N3AlznR9QAqXTLLsGrWPbwKLbAAGtFR8T56c4tVNq1BG0vZujqmRC50wyZCqY9SBHn1i7lZZZ5hY3NzsyRESI",
    },
    {
      title: "Chalet Cristal",
      description: "Luxe contemporain au sommet des sommets.",
      location: "Alpes Françaises",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB9UCCQKLMDzj5cLIWFdKIigjCZWnCmKAGnHU3reiUQh4HPxw1S8islPxqTSt_KQyZzoXB5yEoz-dRb0Nv7bEyj_jbQ4zogQQcijIz-nR-JtZXwEdlswn5_0RXeu5saFDcHICBcFtJESdavYqTPBI82YXbCb9GAClcw8aF4dbk8mU8hr9rUXA5yJ7h5s-Nj7r3_bauEUGvBRPKsK7DwhKys65ryOwdk0VFOVlvk05J0TmzbHX3GbB8bee4d9urFUq6Qkqqqi0GEYc4",
    },
    {
      title: "Château de Chenonceau",
      description: "Privatisation exclusive de l'aile royale.",
      location: "Val de Loire",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBMahL9Z2A_hkEoBsl7dsw3tM2uQ3nbGjEjoBuYstdW_KCpz-wUzg1uf6VJ1c-F9UHoHFWfj4pEITqqyO8bOStkPBhWIhvt9Pyq5FowtagCWI8uecXATH6I0BrsxkiD9T0tcyFGonhMzQmRNAjtzpMK6cAPGWn_lWf6o_fri7bLAmIxNrIokqfbJdFCjEyCaih0x3yXIO4LWMA-jzZYt2WY6qpmOiCvW7FClGrXXSEttaNrNEcGXxoIRkU4wVoHOVq0oNHoodRifDI",
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-primary font-extrabold text-sm tracking-widest uppercase mb-2 block">
              Collections
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Séjours d'Exception
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-slate-600 dark:text-slate-400 font-bold hover:text-primary transition-colors">
            Voir tout le catalogue{" "}
            <span className="text-xl">→</span>
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stays.map((stay) => (
            <StayCard key={stay.title} {...stay} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 6. TestimonialSection.tsx

```tsx
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="py-24 px-6 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-5xl mb-8 inline-block">❝</span>
        <blockquote className="text-3xl md:text-4xl text-slate-900 dark:text-white leading-relaxed mb-8 font-bold tracking-tight">
          "Une expérience absolument irréprochable. Escalya a su redéfinir notre
          vision du luxe discret et de l'hospitalité française. Nous ne
          planifierons plus nos week-ends sans eux."
        </blockquote>
        <div className="flex flex-col items-center">
          <div className="size-16 rounded-full bg-slate-200 dark:bg-slate-700 mb-4 overflow-hidden relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJtVE__4GTl4CM3XPn5RwAP_zqgSd8jSfVapSWZrs-Sm0jw-arn9gdCkyTCmGmqPpJLakUTRgpIsVhSZTg_VvG8E1BmqYGi-Zm_F8HQz2mi5tl5Cand6ZBGnlUbxkcmTn8tnRDjupyqQ_VfiB5IoTswntIoSuMXK3-oaU3BeugNDIAIWAxsVHL7qLpjxP-QR-CizBTIhf4rxtmZkkLwGA9UGjAI0ibyCFz5_fXaomvs9WaA0fhL9sUYSzCp-5ttoa6gqKG4n4eDdA"
              alt="Jean-Baptiste M."
              fill
              className="object-cover"
            />
          </div>
          <p className="font-extrabold text-slate-900 dark:text-white">
            Jean-Baptiste M.
          </p>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            Fondateur, Groupe Orion
          </p>
        </div>
      </div>
    </section>
  );
}
```

### 7. PartnersSection.tsx

```tsx
export default function PartnersSection() {
  const partners = [
    "LOUIS VUITTON",
    "AIR FRANCE",
    "CHAMPAGNE KRUG",
    "RELAIS & CHÂTEAUX",
    "FOUR SEASONS",
  ];

  return (
    <section className="py-12 px-6 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
        {partners.map((partner) => (
          <span
            key={partner}
            className="text-xl font-extrabold tracking-tighter"
          >
            {partner}
          </span>
        ))}
      </div>
    </section>
  );
}
```

### 8. NewsletterSection.tsx

```tsx
"use client";

import { FormEvent, useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implémenter l'inscription newsletter
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
      <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
        <h2 className="text-4xl font-extrabold tracking-tight mb-6">
          Rejoignez le Cercle Escalya
        </h2>
        <p className="text-white/80 text-lg mb-10 font-medium">
          Recevez en avant-première nos nouvelles destinations et nos offres
          exclusives réservées à nos membres.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 font-medium"
            placeholder="Votre adresse email"
            type="email"
            required
          />
          <button
            type="submit"
            className="px-8 py-4 bg-white text-primary font-extrabold rounded-lg hover:bg-slate-100 transition-colors"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </section>
  );
}
```

### 9. Page principale app/page.tsx

```tsx
import HeroSection from "@/components/home/HeroSection";
import LivingArtSection from "@/components/home/LivingArtSection";
import FeaturedStays from "@/components/home/FeaturedStays";
import TestimonialSection from "@/components/home/TestimonialSection";
import PartnersSection from "@/components/home/PartnersSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LivingArtSection />
      <FeaturedStays />
      <TestimonialSection />
      <PartnersSection />
      <NewsletterSection />
    </>
  );
}
```

## Métadonnées SEO

Ajouter dans `app/page.tsx` :

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escalya | Séjours d'Exception Tout-Inclus",
  description:
    "Vivez des séjours tout-inclus dans les plus prestigieux domaines et châteaux de France. Une parenthèse hors du temps orchestrée par nos experts.",
  openGraph: {
    title: "Escalya | Séjours d'Exception Tout-Inclus",
    description:
      "Vivez des séjours tout-inclus dans les plus prestigieux domaines et châteaux de France.",
    type: "website",
  },
};
```

## Optimisations

### Images
- Utilisation de `next/image` pour l'optimisation automatique
- Lazy loading natif
- Attribut `fill` pour les images avec dimensions variables
- `priority` sur l'image hero

### Performance
- Server Components par défaut
- Client Components uniquement pour NewsletterSection (formulaire interactif)
- CSS Tailwind optimisé

### Accessibilité
- Attributs `alt` sur toutes les images
- Structure sémantique HTML5
- Contraste de couleurs respecté

## Résumé des fichiers créés

✅ **Composants:**
- `components/home/HeroSection.tsx`
- `components/home/ValueCard.tsx`
- `components/home/LivingArtSection.tsx`
- `components/home/StayCard.tsx`
- `components/home/FeaturedStays.tsx`
- `components/home/TestimonialSection.tsx`
- `components/home/PartnersSection.tsx`
- `components/home/NewsletterSection.tsx`

✅ **Pages:**
- `app/page.tsx` (mise à jour)

## Prochaines étapes

La page d'accueil est maintenant convertie. Passons à la page Concept.

Voir [04-PAGE_CONCEPT.md](./04-PAGE_CONCEPT.md) pour la conversion de la page concept.
