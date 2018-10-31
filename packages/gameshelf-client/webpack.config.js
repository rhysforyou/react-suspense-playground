const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const devMode = argv.mode === "development";
  return {
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
        },
        {
          test: /\.css$/,
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[name]__[local]--[hash:base64:5]",
                camelCase: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "styles/[name].css",
        chunkFilename: "styles/[id].css"
      })
    ],
    devtool: devMode ? "cheap-module-source-map" : "source-map",
    devServer: {
      port: 3001,
      historyApiFallback: true
    }
  };
};
