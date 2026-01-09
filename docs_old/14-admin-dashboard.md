# Step 14: Admin Dashboard Setup

## Goal
Créer un tableau de bord administrateur pour gérer les séjours, utilisateurs, et réservations.

---

## Implementation Details

### Files to Create
- `app/admin/layout.tsx`
- `app/admin/page.tsx`
- `components/admin/Sidebar.tsx`
- `components/admin/StayTable.tsx`
- `components/admin/UserTable.tsx`
- `components/admin/BookingTable.tsx`
- `lib/actions/admin.ts` (Server Actions)

### What to Implement
1. **Admin Layout**: Create a layout with a sidebar for navigation.
2. **Stay Management**: Add a table for managing stays.
3. **User Management**: Add a table for managing users.
4. **Booking Management**: Add a table for managing bookings.
5. **Server Actions**: Implement actions for CRUD operations.

---

## Testing Checklist
- [ ] Admin layout renders correctly.
- [ ] Tables display data from the database.
- [ ] CRUD operations work as expected.

---

## Next Steps
Proceed to Step 15: Internationalization (i18n).