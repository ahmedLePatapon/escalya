# Step 10: Data Layer & API Routes

## Goal
Créer une couche d'accès aux données avec Prisma et des routes API pour les séjours, réservations, et newsletter.

---

## Implementation Details

### Files to Create
- `lib/actions/stays.ts` (Server Actions)
- `lib/actions/booking.ts` (Server Actions)
- `lib/actions/inquiry.ts` (Server Actions)
- `app/api/stays/route.ts`
- `app/api/stays/[id]/route.ts`
- `app/api/newsletter/route.ts`
- `prisma/seed.ts` (données initiales)

### What to Implement
1. **Server Actions**: Create actions for stays, bookings, and inquiries.
2. **API Routes**: Add routes for fetching stays, submitting inquiries, and subscribing to the newsletter.
3. **Seed Data**: Populate the database with initial data from the designs.
4. **Replace Mock Data**: Use real Prisma queries instead of mock data.

---

## Testing Checklist
- [ ] `npx prisma db seed` populates the database correctly.
- [ ] API `/api/stays` returns stays data.
- [ ] Pages use real data from the database.

---

## Next Steps
Proceed to Step 11: Payment Preparation (Stripe).