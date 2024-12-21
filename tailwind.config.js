/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mona: ["Mona-sans", "sans-serif"],
        Niramala: ["Niramala", "sans-serif"],
      },
      boxShadow: {
        custom1: "0px 1px 19.2px 0px rgba(0, 0, 0, 0.13)",
        custom2: "0px 8px 41.2px rgba(0, 0, 0, 0.14)",
      },
      colors: {
        backgroundGrey: "rgba(65, 105, 225, 0.04)",
        highlightWhite: "rgba(255, 255, 255, 1)",
      },
    },
  },
  plugins: [],
};
