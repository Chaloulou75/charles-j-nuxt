const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./lang/**/*.js",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class", // or 'media' or 'class' or false
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        orange: colors.orange,
        gold: "#FFDF00",
        bluefonce: "#05182d",
        amber: colors.amber,
        sky: colors.sky,
        rose: colors.rose,
        cyan: colors.cyan,
      },
      backgroundImage: (theme) => ({
        texture: "url('~assets/img/texture.jpg')",
      }),
      spacing: {
        108: "27rem",
      },
      borderWidth: {
        14: "14px",
      },
      animation: {
        slowmoove: "slowmoove 14s ease-in-out infinite",
        slowmooveTopDown: "slowmooveTopDown 14s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        slowmoove: {
          "0%, 100%": { transform: "translateY(50%) translateX(0%) rotate(0)" },
          "15%": {
            transform: "translateY(15%) translateX(-20%) rotate(90deg)",
          },
          "50%": {
            transform: "translateY(15%) translateX(-420%) rotate(180deg)",
          },
          "75%": {
            transform: "translateY(100%) translateX(-430%) rotate(45deg)",
          },
        },
        slowmooveTopDown: {
          "0%, 100%": { transform: "translateY(0%) translateX(0%) rotate(0)" },
          "25%": { transform: "translateY(200%) translateX(0%) rotate(90deg)" },
          "50%": {
            transform: "translateY(200%) translateX(200%) rotate(180deg)",
          },
          "75%": {
            transform: "translateY(0%) translateX(200%) rotate(-90deg)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      fontFamily: {
        ubuntu: ["Ubuntu Mono"],
        dmsana: ['"DM Sans"'],
        poppins: ["Poppins"],
      },
    },
  },
  // variants: {
  //   extend: {
  //     backdropFilter: ['hover'],
  //     backdropBlur: ['hover'],
  //     animation: ['hover', 'focus'],
  //     ringColor: ['hover', 'active'],
  //   },
  // },
  plugins: [
    // require('tailwind-filter-utilities'),
    require("@tailwindcss/aspect-ratio"),
  ],
};
