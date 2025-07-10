/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'green': {
          600: '#4e8f30',
          700: '#3a6b24',
        }
      },
      maxWidth: {
        '7xl': '1140px',
      }
    },
  },
  plugins: [],
} 