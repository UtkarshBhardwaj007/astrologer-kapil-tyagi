---
name: Astrology Website Redesign
overview: Comprehensive update of the astrologer website including new color scheme (red/orange/gold), custom SVG logo based on Shatkon yantra, new service pages, naming updates, consultation hours changes, and fixing deprecated lucide-react brand icons.
todos:
  - id: color-scheme
    content: Update CSS variables in globals.css with red/orange/yellow color scheme
    status: pending
  - id: logo-component
    content: Create SVG Logo component based on Shatkon yantra reference image
    status: pending
  - id: update-header-logo
    content: Replace KT text logo with new Logo component in Header and Footer
    status: pending
    dependencies:
      - logo-component
  - id: new-services-data
    content: Add Career/Business and Muhurat services to services.ts data file
    status: pending
  - id: career-page
    content: Create career/business advice service page
    status: pending
    dependencies:
      - new-services-data
  - id: mahurat-page
    content: Create muhurat advice service page
    status: pending
    dependencies:
      - new-services-data
  - id: services-dropdown
    content: Add Services dropdown to Header with ergonomic layout
    status: pending
    dependencies:
      - new-services-data
  - id: update-name
    content: Update SITE_CONFIG.name to 'Astrologer Kapil Tyagi' in constants.ts
    status: pending
  - id: update-hours
    content: Update consultation hours (10am-9pm) and add calling hours (10am-6pm) in contact page
    status: pending
  - id: countries-stat
    content: Add '30+ Countries' to stats on home page
    status: pending
  - id: vastu-image
    content: Add vastu.png image to the Vastu service page
    status: pending
  - id: fix-brand-icons
    content: Install react-icons and replace deprecated lucide brand icons in Footer
    status: pending
---

# Astrology Website Redesign Plan

## Project Structure Analysis

The project uses Next.js 16 with App Router, static export for GitHub Pages deployment, and follows good practices:

- **Constants:** Centralized in [`src/lib/constants.ts`](src/lib/constants.ts)
- **Data:** Separate files in [`src/data/`](src/data/)
- **CSS Variables:** Defined in [`src/app/globals.css`](src/app/globals.css)
- **Base Path:** Already configured for GitHub Pages in [`next.config.ts`](next.config.ts)

---

## 1. Update Color Scheme

**File:** [`src/app/globals.css`](src/app/globals.css)Transform from gold-on-dark to a premium red/orange/yellow scheme:

```css
:root {
  /* Backgrounds - Warm dark tones */
  --background: #1a0a0a;
  --background-secondary: #241212;
  --background-tertiary: #2e1818;
  
  /* Primary Accent - Deep Crimson Red */
  --primary: #c41e3a;
  --primary-light: #e63950;
  --primary-dark: #9a1830;
  --primary-muted: rgba(196, 30, 58, 0.2);
  
  /* Secondary Accent - Saffron Orange */
  --gold: #ff6b2c;
  --gold-light: #ff8c5a;
  --gold-dark: #e55a1f;
  --gold-muted: rgba(255, 107, 44, 0.2);
  
  /* Tertiary - Golden Yellow */
  --yellow: #ffc107;
  --yellow-light: #ffd54f;
  
  /* Foreground - Off-white */
  --foreground: #fff8f0;
  --foreground-muted: #c4b8aa;
}
```

Update gradient utilities (`.text-gradient-gold`, `.shimmer-gold`, etc.) to use new colors.---

## 2. Create Custom Logo Component

**New File:** `src/components/Logo.tsx`Create an SVG logo based on the Shatkon (six-pointed star/yantra) from the reference image:

- Two overlapping triangles forming a hexagram
- Rendered in the primary red color scheme
- Scalable SVG component with size prop
- Replace "KT" text logo in [`Header.tsx`](src/components/Header.tsx) and [`Footer.tsx`](src/components/Footer.tsx)

---

## 3. Add New Service Pages

**New Pages:**

- `src/app/career/page.tsx` - Career/Business Advice
- `src/app/mahurat/page.tsx` - Muhurat Advice

**Update Existing:**

- [`src/data/services.ts`](src/data/services.ts) - Add new services to the array
- [`src/lib/constants.ts`](src/lib/constants.ts) - Update `NAV_LINKS` to add Services dropdown, update `FOOTER_LINKS`
- [`src/components/Header.tsx`](src/components/Header.tsx) - Add Services dropdown with ergonomic layout (similar to Zodiac dropdown)

The Kundali Making service already exists at `/kundali/`.---

## 4. Update Name References

**File:** [`src/lib/constants.ts`](src/lib/constants.ts)

```typescript
export const SITE_CONFIG = {
  name: "Astrologer Kapil Tyagi",  // Changed from "Kapil Tyagi"
  title: "Astrologer Kapil Tyagi",
  ...
};
```

This single change propagates to all pages since they use `SITE_CONFIG.name`.---

## 5. Update Consultation Hours

**File:** [`src/app/contact/page.tsx`](src/app/contact/page.tsx) (lines 131-136)Update the timing section:

- Consultation Hours: 10:00 AM - 9:00 PM IST
- Add new row: Calling Hours: 10:00 AM - 6:00 PM IST

---

## 6. Add "30+ Countries" Highlight

**File:** [`src/app/page.tsx`](src/app/page.tsx) and [`src/data/services.ts`](src/data/services.ts)Add to the stats grid in the "About Preview" section:

```typescript
{ number: "30+", label: "Countries Served" }
```

Also consider adding a badge in the Hero section.---

## 7. Add Vastu Image

**File:** [`src/app/vastu/page.tsx`](src/app/vastu/page.tsx)Add the `vastu.png` image (Sri Yantra) as the hero section visual or alongside the "What is Vastu Shastra?" content using Next.js Image component with `getImagePath()`.---

## 8. Fix Deprecated Lucide Icons

**Issue:** Brand icons (Facebook, Instagram, Youtube) are deprecated in lucide-react.**Solution:** Install `react-icons` package and use Simple Icons:

```bash
npm install react-icons
```

**Files to Update:**

- [`src/components/Footer.tsx`](src/components/Footer.tsx) - Replace:
  ```typescript
      import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
  ```


This is the cleanest solution as `react-icons` bundles Simple Icons and is well-maintained.---

## Mobile Responsiveness

All changes will maintain existing responsive patterns:

- Mobile-first design with Tailwind breakpoints
- Existing `container` class handles padding
