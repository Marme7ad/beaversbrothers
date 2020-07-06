/* eslint-disable */
module.exports = {
  plugins: {
    "postcss-easy-import": {},
    "postcss-nested": {},
    // "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      preserve: true,
      stage: 0,
      importFrom: ["./src/assets/styles/_variables.css"],
    },
  },
}
