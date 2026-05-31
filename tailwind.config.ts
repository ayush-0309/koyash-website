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
        cream: "#E8DCC8",
        maroon: "#6B1A3A",
        "maroon-light": "#8B2252",
        gold: "#C9A96E",
        parchment: "#FAF7F2",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
