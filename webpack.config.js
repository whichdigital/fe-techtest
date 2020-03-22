const path = require("path");

module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        include: path.resolve(__dirname, "./src"),
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  }
};
