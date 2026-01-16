# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Google Analytics (Optional but Recommended)

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a GA4 property
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
4. Add to Vercel/Cloudflare environment variables:
   - Variable: `NEXT_PUBLIC_GA_ID`
   - Value: Your Measurement ID

### 3. Update Site Configuration

Edit `lib/seo.ts`:
- Update `siteConfig.url` with your actual domain
- Update social media handles if needed

### 4. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

### 5. Build for Production

```bash
npm run build
```

The `out/` directory contains your static site ready for deployment.

## 📊 SEO Setup (After Deployment)

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your website
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### Google Business Profile

1. Create/claim your business profile
2. Add both locations
3. Link to your website
4. Add photos and menu

## ✅ Checklist

- [ ] Install dependencies
- [ ] Set up Google Analytics
- [ ] Update site URL in `lib/seo.ts`
- [ ] Add OG image (`public/og-image.jpg`)
- [ ] Deploy to Vercel/Cloudflare
- [ ] Set up Google Search Console
- [ ] Create Google Business Profile
- [ ] Test all pages
- [ ] Verify structured data (use [Schema Validator](https://validator.schema.org/))

## 🎯 Next Steps

1. **Customize Content**: Update menu items, prices, descriptions
2. **Add Images**: Place menu images in `public/images/`
3. **Monitor SEO**: Check Google Search Console regularly
4. **Track Analytics**: Review Google Analytics data

## 📚 Documentation

- **Full Documentation**: See `PROJECT_DOCUMENTATION.md`
- **SEO Guide**: See `SEO_GUIDE.md`
- **README**: See `README.md`

## 🆘 Need Help?

- Check inline comments in code files
- Review documentation files
- Refer to Next.js documentation
