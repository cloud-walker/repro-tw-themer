/** @ts-check */
const makeThemes = require("tailwindcss-themer");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    makeThemes({
      themes: [
        {
          name: "theme-foo",
          extend: {
            spacing: {
              0.5: "0.25rem",
            },
            colors: {
              brand: "palevioletred",
            },
          },
        },
      ],
    }),
  ],
};
module.exports = config;
