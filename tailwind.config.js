/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './styles/**/*.{css,scss}'
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F6',
        burgundy: '#800020',
        gold: '#D4AF37',
        dark: '#1A1A1A',
        muted: '#666666'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 20px 45px rgba(128, 0, 32, 0.25)'
      }
    }
  },
  plugins: []
};
