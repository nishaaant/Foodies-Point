/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['CustomFont', 'sans-serif'], // Add your custom font
        roboto: ['Roboto', 'sans-serif'],    // Example for Google Fonts
        ubuntu: ['Ubuntu','serif']
      },
    },
  },
  plugins: [],
}

