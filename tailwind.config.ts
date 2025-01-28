import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(breadcrumbs|card|divider|select|spinner|tabs|ripple|form|listbox|popover|button|scroll-shadow).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        geist: ["var(--font-geist)"],
        plusJakartaSans: ["var(--font-plus-jakarta-sans)"],
        galada: ["var(--font-galada)"],
        merriweather: ["var(--font-merriweather)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
