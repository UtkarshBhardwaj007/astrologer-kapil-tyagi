# Astrologer Kapil Tyagi - Website

A modern, elegant static website for Astrologer Kapil Tyagi, built with Next.js 14+ and deployed on GitHub Pages.

## 🌟 Features

- **Modern Design**: Elite black and gold theme with elegant typography
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Static Export**: Fast loading, SEO-friendly static pages
- **Rich Content**: 20+ pages covering all astrological services
- **Animations**: Smooth Framer Motion animations throughout
- **Accessibility**: WCAG compliant with proper focus states

## 📁 Project Structure

```
astrologer-kapil-tyagi/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── services/          # Services overview
│   │   ├── contact/           # Contact/Book Appointment
│   │   ├── reviews/           # Client testimonials
│   │   ├── zodiac/[sign]/     # 12 zodiac sign pages
│   │   ├── vastu/             # Vastu Shastra info
│   │   ├── gemstones/         # Gemstone consultation
│   │   ├── numerology/        # Numerology info
│   │   ├── kundali/           # Birth chart analysis
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles & theme
│   ├── components/            # Reusable React components
│   ├── data/                  # Static data (zodiac, services, testimonials)
│   └── lib/                   # Constants and utilities
├── public/
│   └── images/                # Image assets (placeholders)
├── .github/workflows/         # GitHub Actions for deployment
└── next.config.ts             # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/UtkarshBhardwaj007/astrologer-kapil-tyagi.git
   cd astrologer-kapil-tyagi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

## 📷 Image Placeholders

Replace the following placeholder images with actual photos:

| File | Location | Recommended Size | Description |
|------|----------|------------------|-------------|
| `astrologer-hero.png` | `/public/images/` | 600×800px | Main hero image of the astrologer (transparent BG recommended) |
| `astrologer-about.png` | `/public/images/` | 400×500px | About page portrait |
| `review-qr.png` | `/public/images/` | 300×300px | QR code for Google Reviews |
| `logo.png` | `/public/images/` | 200×60px | Website logo (optional, currently uses text) |

### Image Tips

- Use high-quality images (at least 2x the display size for retina)
- For transparent backgrounds, use PNG format
- Optimize images for web (TinyPNG, ImageOptim)
- Keep file sizes under 500KB for best performance

## 🔗 Updating Contact Information

Edit `src/lib/constants.ts` to update:

```typescript
export const CONTACT_INFO = {
  phone: "+91 9811349874",
  email: "tykapil@gmail.com",
  address: {
    line1: "B8-106, Pocket 8",
    line2: "Sector 3B, Rohini",
    city: "Delhi",
    pincode: "110085",
    country: "India",
  },
  // ...
};

export const SOCIAL_LINKS = {
  facebook: "#",      // Replace with actual URL
  instagram: "#",     // Replace with actual URL
  youtube: "#",       // Replace with actual URL
  whatsapp: "https://wa.me/919811349874",
};
```

## 🌐 Deployment to GitHub Pages

### Automatic Deployment

The repository includes a GitHub Actions workflow that automatically deploys on every push to `main`.

### Setup Steps

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save

3. **Wait for deployment**:
   - Go to Actions tab to monitor the build
   - Once complete, your site will be live at:
   ```
   https://[username].github.io/astrologer-kapil-tyagi/
   ```

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in `/public/` with your domain:
   ```
   www.yourdomain.com
   ```

2. Update `next.config.ts`:
   ```typescript
   const nextConfig: NextConfig = {
     output: "export",
     // Remove basePath for custom domain
     // basePath: "/astrologer-kapil-tyagi",
     images: { unoptimized: true },
     trailingSlash: true,
   };
   ```

3. Configure DNS at your domain registrar to point to GitHub Pages.

## 📱 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services preview, testimonials |
| About | `/about/` | Biography and credentials |
| Services | `/services/` | All consultation services |
| Contact | `/contact/` | Booking and contact info |
| Reviews | `/reviews/` | Client testimonials |
| Zodiac Signs | `/zodiac/[sign]/` | 12 individual zodiac pages |
| Vastu | `/vastu/` | Vastu Shastra information |
| Gemstones | `/gemstones/` | Gemstone recommendations |
| Numerology | `/numerology/` | Number analysis |
| Kundali | `/kundali/` | Birth chart reading |

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Cinzel (headings), Cormorant Garamond (body)
- **Deployment**: GitHub Pages

## 📝 Customization

### Theme Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #0a0a0a;
  --gold: #d4af37;
  --gold-light: #f5d062;
  /* ... */
}
```

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. The route will automatically be available

### Modifying Content

- **Zodiac Signs**: Edit `src/data/zodiac-signs.ts`
- **Services**: Edit `src/data/services.ts`
- **Testimonials**: Edit `src/data/testimonials.ts`

## ✅ Checklist Before Going Live

- [ ] Replace all placeholder images
- [ ] Update social media links in `constants.ts`
- [ ] Verify contact information is correct
- [ ] Test all pages on mobile devices
- [ ] Check Google Maps embed is working
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)

## 📄 License

This project is private and created for Astrologer Kapil Tyagi.

---

Built with ❤️ using Next.js
