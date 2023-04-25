const path = require("path");
const webpack = require("webpack");

// require("dotenv").config();
// console.log(process.env);

require("dotenv").config({
  path:'./.env.dev'
});


module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    // path: path.join(__dirname, "build"),
    path: path.join(__dirname, "public"),
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
        use: ["style-loader", "css-loader", "sass-loader"],
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
  ],
  mode: "development",
  // devtool for to view our code fully in source
  devtool: "eval-source-map",

  devServer: {
    port: 5000,
    historyApiFallback: true,
  },
};
