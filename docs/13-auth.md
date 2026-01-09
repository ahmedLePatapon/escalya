# Step 13: Authentication Setup

## Goal
Mettre en place l'authentification des utilisateurs avec NextAuth.js pour gérer les espaces membres.

---

## Implementation Details

### Files to Create
- `pages/api/auth/[...nextauth].ts`
- `lib/auth.ts` (helper functions)
- `components/auth/LoginButton.tsx`
- `components/auth/LogoutButton.tsx`
- `components/auth/ProtectedRoute.tsx`
- `.env.example` (mise à jour avec secrets d'authentification)

### What to Implement
1. **NextAuth Configuration**: Configure NextAuth.js avec des providers comme Google et Email.
2. **Login/Logout Buttons**: Add components for user login and logout.
3. **Protected Routes**: Create a wrapper for protecting member-only pages.
4. **Environment Variables**: Add secrets for NextAuth.js in `.env.example`.

---

## Testing Checklist
- [ ] Login and logout flows work correctly.
- [ ] Protected routes redirect unauthenticated users.
- [ ] User session is persisted across refreshes.

---

## Next Steps
Proceed to Step 14: Admin Dashboard Setup.