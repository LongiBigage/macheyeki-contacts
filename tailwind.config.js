/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    darkTheme: "dark",
    themes: [
      {
        mytheme: {
          "primary": "#1EB854",
          "secondary": "#1FD65F",
          "accent": "#D99330",
          "neutral": "#110E0E",
          "base-100": "#171212",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('daisyui')
  ],
}
