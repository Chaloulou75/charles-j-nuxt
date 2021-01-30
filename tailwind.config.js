const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class' or false
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        orange: colors.orange,
        gold: '#FFDF00',
        bluefonce: '#05182d',
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
    extend: {}
  },
  plugins: [],
}
