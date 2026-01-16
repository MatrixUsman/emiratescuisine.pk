import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4AF37",
          dark: "#B8941F",
          light: "#E5C866",
          gold: "#FFD700",
          amber: "#FFC107",
          50: "#FFF9E6",
          100: "#FFF3CC",
          200: "#FFE699",
          300: "#FFD966",
          400: "#FFCC33",
          500: "#D4AF37",
          600: "#B8941F",
          700: "#8B7018",
          800: "#5E4C10",
          900: "#312808",
        },
        dark: {
          DEFAULT: "#000000",
          bg: "#0A0A0A",
          surface: "#1A1A1A",
          card: "#1F1F1F",
          border: "#2A2A2A",
          text: "#FFFFFF",
          muted: "#A0A0A0",
        },
        secondary: {
          DEFAULT: "#000000",
          light: "#1A1A1A",
          dark: "#000000",
        },
        accent: {
          DEFAULT: "#E63946",
          light: "#F77F8A",
          dark: "#C1121F",
        },
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)" },
        },
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
  plugins: [],
};
export default config;
