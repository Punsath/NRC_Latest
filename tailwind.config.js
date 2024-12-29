const { BuildingLibraryIcon } = require("@heroicons/react/16/solid");
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        cinzel: ["Cinzel", "sans-serif"],
        baby: ["Oooh Baby", "sans-serif"],
        nova: ["Nova Square", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "custom-border": "#1E1E1E",
        "form-grey": "#F2F2F2",
        "color-blue": "#004AAD",
        "contact-table-border": "#BDD0EA",
      },
      borderWidth: {
        2: "2px",
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
