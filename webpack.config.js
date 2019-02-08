const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/MalawiMap.js",
  output: {
    path: path.resolve("lib"),
    filename: "MalawiMap.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  }
};
