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
        space: {
          dark: "#0A0A0B", // Darker background
          light: "#1A1F2C", // Dark purple-blue
          accent: "#D6BCFA", // Bright purple accent
        },
        primary: {
          DEFAULT: "#D6BCFA",
          foreground: "#0A0A0B",
        },
        secondary: {
          DEFAULT: "#805AD5",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#FF1A1A",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#1A1F2C",
          foreground: "#A0AEC0",
        },
        accent: {
          DEFAULT: "#805AD5",
          foreground: "#ffffff",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "particle": "particle 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        particle: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(10px, 10px)" },
          "50%": { transform: "translate(0, 20px)" },
          "75%": { transform: "translate(-10px, 10px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;