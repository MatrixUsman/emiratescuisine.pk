/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compress: true,
    poweredByHeader: false,
    modularizeImports: {
        "lucide-react": {
            transform: "lucide-react/dist/esm/icons/{{member}}",
        },
    },
    images: {
        // Enable Next.js Image optimization for automatic format conversion
        unoptimized: false,
        // Support modern formats: AVIF (best compression), WebP (good compression)
        formats: ["image/avif", "image/webp"],
        // Device breakpoints for responsive images
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        // Image container sizes for responsive srcset generation
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // Allowed quality presets for Next.js 16 requirement (Header uses 95, cards use 85)
        qualities: [75, 85, 95],
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
    async headers() {
        return [{
                source: "/_next/static/:path*",
                headers: [{
                    key: "Cache-Control",
                    value: "public, max-age=31536000, immutable",
                }, ],
            },
            {
                source: "/images/:path*",
                headers: [{
                    key: "Cache-Control",
                    value: "public, max-age=31536000, immutable",
                }, ],
            },
            {
                source: "/logo/:path*",
                headers: [{
                    key: "Cache-Control",
                    value: "public, max-age=31536000, immutable",
                }, ],
            },
        ];
    },
    trailingSlash: true,
};

module.exports = nextConfig;