/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kula: {
          navy: '#0E4F9E',
          navyDark: '#0A3A78',
          navyDeep: '#071F3F',
          gold: '#FBBF24',
          amber: '#F97316',
          cream: '#FFF8EC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(14, 79, 158, 0.08), 0 12px 32px -12px rgba(14, 79, 158, 0.12)',
        glow: '0 0 0 1px rgba(251, 191, 36, 0.15), 0 20px 60px -15px rgba(249, 115, 22, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
