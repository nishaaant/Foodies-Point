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
        ubuntu: ['Ubuntu','serif'],
      },
      colors: {
        shimmerBg: "#E9EFEC", // Matches the shimmer card background
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite", // Defines the shimmer animation
      },
    },
  },
  plugins: [],
};
