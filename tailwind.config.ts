import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
  "./src/app/**/*.{ts,tsx,mdx}",
  "./src/components/**/*.{ts,tsx,mdx}",
  "./src/lib/**/*.{ts,tsx,mdx}",
  "./src/**/*.mdx",     // <-- au lieu de "./src/**/*.{mdx}"
],
  theme: {
    sextend: {
      colors: {
        brand: { 50: "#EFF6FF", 600: "#2563EB", 700: "#1D4ED8" },
        ink: { 900: "#0B1220" },
        border: "#E5E7EB",
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
     },
    },
  plugins: [animate],
};
export default config