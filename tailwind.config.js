/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './styles/**/*.{js,jsx,css}'
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F6',
        burgundy: '#800020',
        gold: '#D4AF37',
        textPrimary: '#1A1A1A',
        textSecondary: '#666666'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
