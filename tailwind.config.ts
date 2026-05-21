import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lamdot/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lamdot/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        primary: "rgb(var(--primary-rgb))",
        dark: "oklch(var(--color-dark))",
      },
    },
  },
  plugins: [],
} satisfies Config;
