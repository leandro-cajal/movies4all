/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss-textshadow');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite', // Cambia la velocidad de 1s (por defecto) a 5s
      }
    }
  },
  plugins: [plugin],
};
