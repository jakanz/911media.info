const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        test: "#00ff00",
        body: "#FFFFFF",
        main: "#FFFFFF",
      },
      backgroundImage: {
        'header': 'linear-gradient(to bottom, #313131, #818181)',
      },
      fontSize: {
        '2xs': '0.67rem',
      },
      screens: {
        'xs': '550px',
      },
    },
  },
};
