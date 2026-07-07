/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kula: {
          navy: '#0E4F9E',
          navyDark: '#0A3A78',
          gold: '#FBBF24',
          amber: '#F97316',
        },
      },
    },
  },
  plugins: [],
};
