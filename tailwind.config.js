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
        lochmara: {
          50: '#F3FAFF',
          100: '#D2EDFF',
          200: '#90D1FF',
          300: '#4EB6FF',
          400: '#0B9BFF',
          500: '#0076C8',
          600: '#005E9F',
          700: '#004676',
          800: '#002E4E',
          900: '#001625',
          950: '#000A10',
        },
        primary: '#0066cc',
        'primary-dark': '#66b3ff',
        'background-dark': '#1a1a1a',
        'text-dark': '#f0f0f0',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
