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
        22: "5.5rem",
        112: "28rem",
      },
      fontSize: {
        h900: ["4.5rem", "6.75rem"],
        h800: ["3.5rem", "5.25rem"],
        h700: ["2.5rem", "3.75rem"],
        h600: ["2rem", "3rem"],
        h500: ["1.5rem", "2.25rem"],
        h400: ["1.25rem", "2rem"],
        h300: ["1rem", "1.5rem"],
        h200: ["0.875rem", "1.25rem"],
        h100: ["0.75rem", "1rem"],
        subtitle: ["1.25rem", "2rem"],
        "body:lg": ["1rem", "1.5rem"],
        "body:md": ["0.875rem", "1.25rem"],
        "body:sm": ["0.75rem", "1rem"],
      },
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        primary: {
          900: "var(--primary900)",
          800: "var(--primary800)",
          700: "var(--primary700)",
          600: "var(--primary600)",
          500: "var(--primary500)",
          400: "var(--primary400)",
          300: "var(--primary300)",
          200: "var(--primary200)",
          100: "var(--primary100)",
          50: "var(--primary50)",
        },
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
          0: "var(--main0)",
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
