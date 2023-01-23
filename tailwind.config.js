/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mechanic: "url('/images/HeadBg.svg')",
        garage: "url('/images/garage.png')",
      },
    },
    colors: {
      black: "#000000",
      darkGrey: "#9C9C9C",
      transGrey: "rgba(72, 72, 72, 0.10)",
      lightGrey: "#D9D9D9",
      white: "#FFFFFF",
      green: "#40BF2B",
      red: "#ff0000",
    },
  },
  plugins: [],
};
