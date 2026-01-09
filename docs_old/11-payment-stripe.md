# Step 11: Payment Preparation (Stripe)

## Goal
Préparer l'infrastructure de paiement avec Stripe pour les réservations.

---

## Implementation Details

### Files to Create
- `lib/stripe.ts` (Stripe client)
- `lib/actions/checkout.ts` (Server Action)
- `app/api/webhooks/stripe/route.ts` (webhook placeholder)
- `app/checkout/page.tsx` (placeholder)
- `app/checkout/success/page.tsx` (placeholder)
- `components/booking/BookingSidebar.tsx` (mise à jour)
- `.env.example` (mise à jour avec Stripe keys)

### What to Implement
1. **Stripe Client**: Initialize Stripe client for API calls.
2. **Checkout Session**: Create a Server Action for generating a Stripe Checkout Session.
3. **Webhook Endpoint**: Add a placeholder for handling Stripe webhooks.
4. **Checkout Pages**: Add placeholder pages for checkout and success.
5. **Booking Sidebar**: Update the sidebar to redirect to Stripe Checkout.

---

## Testing Checklist
- [ ] Stripe keys are configurable via `.env`.
- [ ] Test flow works with Stripe CLI.
- [ ] Webhook receives events and logs them.

---

## Next Steps
Proceed to Step 12: SEO Optimization & Final Polish.