/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#982581',
          50: '#f7cdea',
          100: '#f5aae0',
          200: '#f38ed9',
          300: '#f169d1',
          400: '#f058ce',
          500: '#d939b9',
          600: '#b72f9c',
          700: '#982581',
          800: '#761b64',
          900: '#571349',
        },
        secondary: {
          DEFAULT: '#f7b718',
          50: '#fcd288',
          100: '#f7b718',
          200: '#e0a50a',
          300: '#c79209',
          400: '#af8006',
          500: '#976e05',
          600: '#805d03',
          700: '#715103',
          800: '#543c02',
          900: '#3f2d03',
        },
      },
      fontFamily: {
        brand: ['Montserrat', ...defaultTheme.fontFamily.sans],
        sans: ['Bahnschrift', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
};
