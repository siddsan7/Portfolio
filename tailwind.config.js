/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#080A0F',
          900: '#10131A',
          850: '#141821',
          800: '#171B24',
          700: '#232A36',
        },
        ink: {
          50: '#F4F7FB',
          200: '#D7DEE9',
          300: '#A7B0C0',
          500: '#687386',
        },
        signal: {
          cyan: '#38BDF8',
          blue: '#60A5FA',
          green: '#34D399',
        },
      },
      boxShadow: {
        glow: '0 0 48px rgba(56, 189, 248, 0.16)',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
