const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");
const webpack = require("webpack");



// require("dotenv").config();
// console.log(process.env);
require("dotenv").config({
  path: "./.env.prod",
});

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build"),
    clean: true,
    // path: path.join(__dirname, "public"),
  },

  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      images: path.join(__dirname, "src/images"),
      src: path.join(__dirname, "src"),
    },
    //alias for to remove dot dot
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        // use: ["style-loader", "css-loader", "sass-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        //loader from right to left execute
      },
      {
        test: /\.(jpeg|jpg|png|svg)$/,
        loader: "file-loader",
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),

    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new HtmlWebpackPlugin({
      template: "./public/template.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),

    2,
    // new HtmlWebpackPlugin({
    //     title: 'Production',
    //   }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  mode: "production",
  devtool: "hidden-source-map",

  // devtool for to view our code fully in source
  //   devtool: "eval-source-map",
  // for production
  //   for prd dev server not required
  //   devServer: {
  //     port: 5000,
  //     historyApiFallback: true,
  //   },
};
