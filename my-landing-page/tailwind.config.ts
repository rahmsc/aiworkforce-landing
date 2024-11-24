import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cyber-blue": "#00F0FF",
        "dark-navy": "#0A0F1C",
        "card-dark": "#0D1425",
        "teal-dark": "#1A3038",
      },
      fontFamily: {
        heading: ["var(--font-poppins)"],
        body: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
