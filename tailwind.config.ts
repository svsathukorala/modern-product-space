import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        apple: {
          white: "#ffffff",
          gray: "#f5f5f7",
          dark: "#1d1d1f",
          blue: "#2997ff",
          silver: "#88888d",
        },
        primary: {
          DEFAULT: "#2997ff",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1d1d1f",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#FF1A1A",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f5f5f7",
          foreground: "#86868b",
        },
        accent: {
          DEFAULT: "#2997ff",
          foreground: "#ffffff",
        },
        dark: {
          background: "#0A0A0B",
          foreground: "#ffffff",
          muted: "#1A1F2C",
          accent: "#2997ff",
        },
      },
      fontFamily: {
        sans: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "glow": {
          "0%": { boxShadow: "0 0 20px rgba(41, 151, 255, 0.5)" },
          "100%": { boxShadow: "0 0 40px rgba(41, 151, 255, 0.8)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;