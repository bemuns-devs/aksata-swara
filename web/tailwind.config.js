const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          1: '#982581',
          2: '#F7B718',
        },
      },
      fontFamily: {
        'brand-title': ['Montserrat', ...defaultTheme.fontFamily.sans],
        'brand-body': ['Bahnschrift', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
