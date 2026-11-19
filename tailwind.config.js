/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0a0b0d',
          900: '#111317',
          850: '#15181d',
          800: '#1c2026',
          700: '#272c35',
          600: '#383f4b',
          500: '#4d5666',
        },
        gold: {
          100: '#faf3e3',
          200: '#f4e5c0',
          300: '#edd197',
          400: '#e3b96c',
          500: '#c5a059',
          600: '#ad8742',
          700: '#8c6b30',
          800: '#6d5124',
        },
        warm: {
          50: '#fbfbf9',
          100: '#f5f5f0',
          200: '#ebeae3',
          300: '#dedcd2',
          400: '#b8b6ab',
          500: '#8a887d',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(197, 160, 89, 0.3)',
        'gold-glow-lg': '0 0 40px -5px rgba(197, 160, 89, 0.45)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
