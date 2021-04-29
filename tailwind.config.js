const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
  prefix: "",
  purge: {
    enabled: guessProductionMode(),
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        18: "4.5rem",
        112: "28rem",
      },
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        gray: {
          900: "var(--gray900)",
          800: "var(--gray800)",
          700: "var(--gray700)",
          600: "var(--gray600)",
          500: "var(--gray500)",
          400: "var(--gray400)",
          300: "var(--gray300)",
          200: "var(--gray200)",
          100: "var(--gray100)",
          50: "var(--gray50)",
        },
        main: {
          900: "var(--main900)",
          800: "var(--main800)",
          700: "var(--gray700)",
          600: "var(--main600)",
          500: "var(--main500)",
          400: "var(--main400)",
          300: "var(--main300)",
          200: "var(--main200)",
          100: "var(--main100)",
          50: "var(--main50)",
          0: "var(--main50)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
