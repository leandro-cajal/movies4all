/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss-textshadow');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [plugin],
};
