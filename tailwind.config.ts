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
        // Playcrafting brand colors
        'pc-dark': '#000123',
        'pc-light': '#F3FCF8',
        'pc-pink': '#FF0F7B',
        'pc-orange': '#F96D49',
        'pc-teal': '#33B1AB',
        'pc-gray': '#292F39',
        'pc-gray-light': '#3E485A',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      fontSize: {
        'hero': '42px',
        'heading': '24px',
        'body': '18px',
        'small': '16px',
        'caption': '13px',
      },
    },
  },
  plugins: [],
};

export default config;
