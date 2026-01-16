/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        // Enable Next.js Image optimization for automatic format conversion
        unoptimized: true,
        // Support modern formats: AVIF (best compression), WebP (good compression)
        formats: ["image/avif", "image/webp"],
        // Device breakpoints for responsive images
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        // Image container sizes for responsive srcset generation
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // Cache optimized images for 60 days in production
        minimumCacheTTL: 60 * 60 * 24 * 60,
        // Allow external images from Unsplash
        remotePatterns: [{
            protocol: "https",
            hostname: "images.unsplash.com",
            port: "",
            pathname: "/**",
        }, ],
    },
    trailingSlash: true,
};

module.exports = nextConfig;