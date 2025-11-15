/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        creme: '#FAF9F6',
        burgundy: '#800020',
        gold: '#D4AF37',
        charcoal: '#1A1A1A',
        muted: '#666666'
      },
      fontFamily: {
        serif: ['\"Playfair Display\"', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
