# Step 7: Catalog Page (Liste des séjours)

## Goal
Créer une page catalogue pour afficher les séjours avec filtres, pagination, et état de chargement.

---

## Implementation Details

### Files to Create
- `app/sejours/page.tsx`
- `app/sejours/loading.tsx`
- `components/sections/FilterSidebar.tsx` (Client Component)
- `components/sections/StaysGrid.tsx`
- `components/ui/Breadcrumbs.tsx`
- `components/ui/Pagination.tsx`
- `components/ui/FilterChip.tsx`
- `lib/filters.ts` (logique filtres)
- `data/mock/stays.ts` (mise à jour avec plus de séjours)

### What to Implement
1. **Header**: Include search bar and breadcrumbs.
2. **Filter Sidebar**: Filters for destinations, duration, and type.
3. **Stay Grid**: Display StayCards with pagination.
4. **URL State**: Use `useSearchParams` for filters.
5. **Loading State**: Add suspense for loading.

---

## Testing Checklist
- [ ] Filters update the URL correctly.
- [ ] Pagination works as expected.
- [ ] Loading state displays properly.
- [ ] Sidebar is responsive (drawer on mobile).

---

## Next Steps
Proceed to Step 8: Stay Details Page Implementation.