 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.html",
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0066cc',
        'primary-dark': '#66b3ff',
        'background-dark': '#1a1a1a',
        'text-dark': '#f0f0f0',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Change this line from 'media' to 'class'
}
