/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    'grid-cols-12',
    'grid-cols-52',
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 