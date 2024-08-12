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
    },
  },
  plugins: [],
};
