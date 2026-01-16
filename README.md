# Emirates Cuisine - Restaurant Website

A modern, SEO-optimized static website for Emirates Cuisine restaurant in Sahiwal, Pakistan. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

**Fully optimized for search engines with comprehensive SEO, Google Analytics integration, and structured data.**

## Features

- 🍽️ Complete menu display with all categories (Arabic, Continental, Desi, Chinese, BBQ, Shinwari)
- 📍 Branch locations with Google Maps integration
- 🎨 Beautiful, modern UI with smooth animations
- 📱 Fully responsive design
- ⚡ Optimized for performance and SEO
- 🌐 Static export ready for Vercel/Cloudflare
- 🔍 **Best-in-class SEO**: OG tags, Twitter cards, structured data (JSON-LD), sitemap, robots.txt
- 📊 **Google Analytics**: Ready for GA4 integration
- 🤖 **AI-Friendly**: Comprehensive documentation and comments for AI assistants
- 🎯 **Keyword Optimized**: Targets food-related searches, location-based keywords, and dish names

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel / Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This will generate a static export in the `out/` directory, ready for deployment.

## Project Structure

```
emiratescuisine.pk/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── menu/              # Menu page
│   ├── branches/          # Branches page
│   ├── terms/             # Terms & Conditions
│   ├── privacy/           # Privacy Policy
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── MenuCard.tsx       # Menu item card
│   └── MenuSection.tsx    # Menu display section
├── data/                  # Data files
│   ├── menu.ts            # Menu data
│   └── branches.ts        # Branch locations
└── lib/                   # Utilities
    └── utils.ts           # Helper functions
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Cloudflare Pages

1. Build the project: `npm run build`
2. Upload the `out/` directory to Cloudflare Pages
3. Or connect your Git repository for automatic deployments

## SEO & Analytics Setup

### Google Analytics

1. Get your GA4 Measurement ID from [Google Analytics](https://analytics.google.com)
2. Add environment variable in Vercel/Cloudflare:
   - Variable: `NEXT_PUBLIC_GA_ID`
   - Value: `G-XXXXXXXXXX`

### Google Search Console

1. Verify ownership (add code to `app/layout.tsx`)
2. Submit sitemap: `https://emiratescuisine.pk/sitemap.xml`
3. Monitor performance

See `SEO_GUIDE.md` for complete SEO setup instructions.

## Customization

### Menu Items

Edit `data/menu.ts` to update menu items, prices, and categories.

### Branches

Edit `data/branches.ts` to add or modify branch locations.

### SEO Configuration

Edit `lib/seo.ts` to:
- Update site URL
- Add keywords
- Modify structured data
- Update social media handles

### Styling

- Colors: Edit `tailwind.config.ts` to change the color scheme
- Fonts: Update `app/globals.css` to change fonts
- Components: Modify components in the `components/` directory

## License

© 2024 Emirates Cuisine. All rights reserved.
