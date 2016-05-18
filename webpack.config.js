var path = require("path");

module.exports = {
  entry: {
    app: ["./app/index.js"]
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  },
  noInfo: true,
  output: {
    quiet: true,
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  }
};
