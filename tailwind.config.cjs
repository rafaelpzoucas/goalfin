/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#0EA5E9',
          700: '#0369A1',
          800: '#075985',
        },
      },
    },
  },
  plugins: [],
}
