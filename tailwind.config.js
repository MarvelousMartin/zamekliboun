const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      damask: {
        700: "#c36f4b",
        600: "#c97d5d",
      },
    },
    fontFamily: {
      sans: ["STIX Two Text", "system-ui"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
