const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        orange: colors.orange,
        gold: '#FFDF00',
      },
      spacing: {
        108: '27rem'
      },
      borderWidth: {
        14: '14px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
