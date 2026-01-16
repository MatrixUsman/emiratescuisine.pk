# Emirates Cuisine - Project Documentation

## Overview

This is a modern, SEO-optimized static website for Emirates Cuisine restaurant in Sahiwal, Pakistan. The project is built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Project Structure

```
emiratescuisine.pk/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Homepage
│   ├── layout.tsx           # Root layout with SEO
│   ├── menu/                # Menu page
│   ├── branches/            # Branches/locations page
│   ├── terms/               # Terms & Conditions
│   ├── privacy/             # Privacy Policy
│   ├── sitemap.ts           # Auto-generated sitemap
│   ├── robots.ts            # Robots.txt generator
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── MenuCard.tsx         # Menu item card
│   ├── MenuSection.tsx      # Menu display section
│   ├── GoogleAnalytics.tsx  # GA4 integration
│   └── StructuredData.tsx   # JSON-LD schema
├── data/                    # Data files
│   ├── menu.ts              # Menu data structure
│   └── branches.ts          # Branch locations
├── lib/                     # Utilities
│   ├── seo.ts               # SEO utilities & config
│   └── utils.ts             # Helper functions
└── public/                  # Static assets
    └── images/              # Images directory
```

## Key Features

### 1. SEO Optimization

- **Comprehensive Metadata**: Every page has optimized title, description, and keywords
- **Open Graph Tags**: Full OG tags for social media sharing (Facebook, LinkedIn, etc.)
- **Twitter Cards**: Optimized Twitter card metadata
- **Structured Data (JSON-LD)**: 
  - Restaurant schema
  - Menu items schema
  - Breadcrumb schema
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Properly configured for search engines
- **Canonical URLs**: Prevents duplicate content issues

### 2. Google Analytics

- **GA4 Integration**: Ready for Google Analytics 4
- **Environment Variable**: Set `NEXT_PUBLIC_GA_ID` in Vercel/Cloudflare
- **Page Tracking**: Automatic page view tracking

### 3. Performance

- **Static Export**: Fully static site for maximum speed
- **Image Optimization**: Next.js Image component ready
- **Code Splitting**: Automatic code splitting
- **Lazy Loading**: Components load as needed

### 4. AI-Friendly Documentation

- **Inline Comments**: All files have comprehensive comments
- **Type Definitions**: Full TypeScript types
- **Clear Structure**: Easy to understand and modify

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Google Analytics

1. Get your GA4 Measurement ID from [Google Analytics](https://analytics.google.com)
2. Add to Vercel/Cloudflare environment variables:
   - Variable name: `NEXT_PUBLIC_GA_ID`
   - Value: `G-XXXXXXXXXX`

### 3. Update Site Configuration

Edit `lib/seo.ts`:
- Update `siteConfig.url` with your actual domain
- Add Google Search Console verification codes
- Update social media handles

### 4. Add Images

1. Create an OG image (1200x630px) and save as `public/og-image.jpg`
2. Add menu images to `public/images/` if needed

### 5. Development

```bash
npm run dev
```

### 6. Build & Deploy

```bash
npm run build
```

The `out/` directory contains the static export ready for deployment.

## SEO Configuration

### Keywords Strategy

The site targets:
- **Location-based**: "restaurant Sahiwal", "Arabic food Sahiwal", "BBQ Okara"
- **Cuisine-based**: "Arabic food", "Pakistani food", "Desi food", "Chinese food"
- **Dish-based**: "Chicken Mandi", "Mutton Karahi", "BBQ", "Biryani"
- **Service-based**: "halal food", "fresh food", "authentic cuisine"

### Structured Data

The site includes:
- **Restaurant Schema**: Helps Google understand your business
- **Menu Items Schema**: Each menu item has structured data
- **Breadcrumb Schema**: Improves navigation understanding

### Local SEO

- Branch addresses in structured data
- Location-specific keywords
- Google Maps integration

## Customization Guide

### Adding Menu Items

Edit `data/menu.ts`:

```typescript
{
  id: "new-item",
  name: "New Dish Name",
  price: 999,
  description: "Delicious description",
  spicy: false,
}
```

### Adding Branches

Edit `data/branches.ts`:

```typescript
{
  id: "new-branch",
  name: "Branch Name",
  address: "Full Address",
  city: "City Name",
}
```

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#YOUR_COLOR",
  },
}
```

### Updating SEO

Edit `lib/seo.ts`:
- `siteConfig`: Main site configuration
- `generateKeywords()`: Add more keywords
- Schema generators: Customize structured data

## Deployment

### Vercel

1. Push to GitHub
2. Import in Vercel
3. Add environment variable: `NEXT_PUBLIC_GA_ID`
4. Deploy

### Cloudflare Pages

1. Build: `npm run build`
2. Upload `out/` directory
3. Or connect Git for auto-deploy

## Google Search Console Setup

1. Verify ownership (add verification code to `app/layout.tsx`)
2. Submit sitemap: `https://emiratescuisine.pk/sitemap.xml`
3. Monitor performance and indexing

## Maintenance

### Regular Updates

- Update menu prices in `data/menu.ts`
- Add new menu items
- Update branch information
- Refresh structured data if needed

### SEO Monitoring

- Check Google Search Console regularly
- Monitor keyword rankings
- Update content based on search trends
- Keep metadata fresh

## Support

For questions or modifications:
1. Check inline comments in code files
2. Review this documentation
3. Refer to Next.js documentation for framework-specific questions

## License

© 2024 Emirates Cuisine. All rights reserved.
