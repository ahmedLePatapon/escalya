# Step 12: SEO Optimization & Final Polish

## Goal
Optimiser le SEO de l'application avec sitemap, robots.txt, manifest.json, et structured data.

---

## Implementation Details

### Files to Create
- `app/sitemap.ts`
- `app/robots.ts`
- `app/manifest.ts`
- `components/seo/JsonLd.tsx` (structured data)
- `public/` (favicon, icons)

### What to Implement
1. **Sitemap**: Generate a dynamic sitemap listing all pages and stays.
2. **Robots.txt**: Add a robots.txt file for search engine crawlers.
3. **Manifest.json**: Create a manifest for PWA support.
4. **Structured Data**: Add JSON-LD for Organization, Product, Offer, and Review.
5. **Metadata**: Update metadata for all pages.

---

## Testing Checklist
- [ ] `/sitemap.xml` lists all routes.
- [ ] Google Rich Results Test validates JSON-LD.
- [ ] Lighthouse SEO score is 100.
- [ ] Core Web Vitals are green.

---

## Next Steps
Proceed to Step 13: Authentication Setup.