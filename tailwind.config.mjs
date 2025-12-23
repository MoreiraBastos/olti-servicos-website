/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Por precaução
  ],
  theme: {
    extend: {
      colors: {
        'apple-blue': '#0066cc',
        'olti-gold': '#F0DFAD',
        'olti-blue-light': '#66C3FF',
        'apple-gray': '#f5f5f7',
        'apple-dark': '#1d1d1f',
      },
      letterSpacing: {
        'apple': '-0.022em',
      },
      lineHeight: {
        'apple': '1.47059',
      }
    },
  },
  plugins: [],
};