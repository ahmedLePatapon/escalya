# Step 9: Database Schema & Prisma Setup

## Goal
Configurer Prisma avec un schéma pour les entités nécessaires et préparer la base de données PostgreSQL.

---

## Implementation Details

### Files to Create
- `prisma/schema.prisma`
- `lib/db.ts` (Prisma client singleton)
- `types/database.ts` (types générés)
- `.env.example`
- `package.json` (mise à jour dépendances)

### What to Implement
1. **Prisma Schema**: Define entities like `Stay`, `Location`, `ItineraryDay`, `Accommodation`, `Service`, `Booking`, `User`, `InquiryRequest`, and `NewsletterSubscriber`.
2. **Relations**: Add appropriate relationships between entities.
3. **Prisma Client**: Create a singleton client to avoid multiple connections.
4. **Environment Variables**: Add database connection string to `.env.example`.

---

## Testing Checklist
- [ ] `npx prisma generate` runs without errors.
- [ ] `npx prisma db push` creates tables successfully.
- [ ] TypeScript types are generated correctly.

---

## Next Steps
Proceed to Step 10: Data Layer & API Routes.