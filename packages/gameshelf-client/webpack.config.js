const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => ({
  entry: "./src/index.js",
  output: {
    publicPath: "/",
    filename: "scripts/bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devtool:
    argv.mode === "development" ? "cheap-module-source-map" : "source-map",
  devServer: {
    port: 3001,
    historyApiFallback: true
  }
});
