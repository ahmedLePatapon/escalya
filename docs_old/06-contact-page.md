# Step 6: Contact Page (Formulaire de devis)

## Goal
Créer un formulaire de demande de devis avec validation et API route placeholder.

---

## Implementation Details

### Files to Create
- `app/contact/page.tsx`
- `components/forms/InquiryForm.tsx` (Client Component)
- `components/sections/ConciergeCard.tsx`
- `components/sections/ContactSidebar.tsx`
- `lib/validations/inquiry.ts` (Zod schema)
- `app/api/inquiry/route.ts` (API route placeholder)

### What to Implement
1. **Inquiry Form**: Fields for destination, dates, adults/children counters, and custom wishes.
2. **Sidebar**: Contact info, map, and working hours.
3. **Validation**: Client-side validation using Zod.
4. **API Route**: Placeholder for future integration.

---

## Testing Checklist
- [ ] Form provides valid/invalid feedback.
- [ ] Counters for adults/children work correctly.
- [ ] Submit button shows loading state.
- [ ] API route responds with status 200.

---

## Next Steps
Proceed to Step 7: Catalog Page Implementation.