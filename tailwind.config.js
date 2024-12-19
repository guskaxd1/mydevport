/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  
  // tailwind.config.js
extend: {
  animation: {
    'fade-in': 'fadeIn 1s ease-out forwards',
    'slide-up': 'slideUp 1s ease-out forwards',
    'spin-slow': 'spin-slow 20s linear infinite',
    'spin-slower': 'spin-slower 40s linear infinite',
    'spin-slowest': 'spin-slowest 60s linear infinite',
  },
  colors: {
    'card-bg': '#1E293B', // Cor personalizada para o fundo dos cards
    'hover-card-bg': '#334155', // Fundo ao passar o mouse
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    slideUp: {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  },
},
}


