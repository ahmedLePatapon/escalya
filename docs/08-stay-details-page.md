# Step 8: Stay Details Page (Détails séjour)

## Goal
Créer une page détaillée pour chaque séjour avec galerie d'images, itinéraire, services, et réservation.

---

## Implementation Details

### Files to Create
- `app/sejours/[slug]/page.tsx`
- `app/sejours/[slug]/loading.tsx`
- `app/sejours/[slug]/not-found.tsx`
- `components/sections/ImageGallery.tsx`
- `components/sections/ItineraryTimeline.tsx`
- `components/sections/ServicesGrid.tsx`
- `components/sections/AccommodationCard.tsx`
- `components/booking/BookingSidebar.tsx` (Client Component)
- `components/ui/TabsNavigation.tsx`
- `lib/pricing.ts` (calcul prix)

### What to Implement
1. **Image Gallery**: Grid of images with zoom on click.
2. **Header**: Title, location, and rating.
3. **Sticky Tabs**: Tabs for "Programme", "Hébergement", and "Services".
4. **Itinerary Timeline**: Day-by-day itinerary.
5. **Booking Sidebar**: Dynamic price calculation and CTA.

---

## Testing Checklist
- [ ] Dynamic route `/sejours/[slug]` works.
- [ ] `generateMetadata` generates dynamic titles.
- [ ] 404 page displays for invalid slugs.
- [ ] Price recalculates dynamically based on inputs.

---

## Next Steps
Proceed to Step 9: Database Schema & Prisma Setup.