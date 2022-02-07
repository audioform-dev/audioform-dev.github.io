const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        gray: colors.slate
      },
      boxShadow: {
        'glow': '0px 2px 24px 0px rgba(34, 211, 238, 0.3)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
