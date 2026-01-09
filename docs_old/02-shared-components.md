# Step 2: Shared Components - Navigation & Footer
**Files:**
- `components/layout/Navigation.tsx` (nouveau)
- `components/layout/Footer.tsx` (nouveau)
- `components/ui/Button.tsx` (nouveau)
- `components/ui/Icon.tsx` (nouveau)
- `components/ui/Logo.tsx` (nouveau)
- `app/layout.tsx` (mise à jour)

**What:**
Créer les composants de layout partagés extraits des designs HTML. Navigation avec effet glass (`backdrop-blur`), logo SVG Escalya, liens de navigation, et boutons "Espace Membre" + "Réserver". Footer avec 4 colonnes de liens et formulaire newsletter. Intégrer Material Symbols pour les icônes.

**Testing:**
- Navigation sticky visible sur scroll
- Hover effects fonctionnent
- Footer s'affiche correctement
- Mobile responsive (menu burger)