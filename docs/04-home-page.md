# Step 4: Home Page (Page d'accueil)

## Goal
Créer la page d'accueil complète avec les sections Hero, Featured Stays, Feature Cards, Testimonial, et Newsletter.

---

## Implementation Details

### Files to Create
- `app/page.tsx`
- `app/opengraph-image.tsx` (OG image dynamique)
- `components/sections/HomeHero.tsx`
- `components/sections/FeaturedStays.tsx`
- `components/sections/FeatureCards.tsx`
- `components/sections/NewsletterSection.tsx`
- `data/mock/stays.ts` (mock data)

### What to Implement
1. **Hero Section**: Full-screen hero with background image, gradient overlay, and double CTA.
2. **Featured Stays**: Grid of 3 luxury stay cards.
3. **Feature Cards**: Section highlighting "L'Art de Vivre" with 3 feature cards.
4. **Testimonial Section**: Client testimonial with quote and author.
5. **Newsletter Section**: Email subscription form.
6. **SEO Metadata**: Add metadata for SEO and Open Graph.

---

## Testing Checklist
- [ ] Page renders without errors.
- [ ] Lighthouse SEO score > 90.
- [ ] Images are optimized with `next/image`.
- [ ] CTA links navigate to `/sejours` and `/concept`.

---

## Next Steps
Proceed to Step 5: Concept Page Implementation.