/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
    "./**/*.html"           
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/img/6-1.png')", // Bu yerda rasm yo'lini yozing
      }
    },
  },
  plugins: [],
}
