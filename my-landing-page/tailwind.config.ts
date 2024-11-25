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
      animation: {
        "border-travel": "border-travel 4s linear infinite",
      },
      keyframes: {
        "border-travel": {
          "0%, 100%": { backgroundPosition: "10% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
