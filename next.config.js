/* eslint-disable */
const withCSS = require("@zeit/next-css")
const withImages = require("next-images")
const withFonts = require("next-fonts")
const path = require("path")

const config = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    onlyLocals: true,
    localIdentName: "[folder]__[local]_[hash:base64:5]",
  },
  // devIndicators: {
  // autoPrerender: false,
  // },
  webpack(config) {
    const { alias } = config.resolve
    config.resolve.alias = {
      ...alias,
      "~": path.join(__dirname, "./src"),
    }

    return config
  },
}

module.exports = withFonts(withImages(withCSS(config)))
