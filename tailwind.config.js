/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    colors: {
      'primary':'#EDF25C',
      'secondary':'#D9AE5F',
      'tertiary':'#D9967E',
      'darker':'#0D0D0D',
      'highlight':'#400101'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  // plugins: [require("daisyui")],
}
