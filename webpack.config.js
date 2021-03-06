const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", 'postcss-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use:[{ 
          loader: 'file-loader',         
          options: {
            name: '[name].[ext]',
            outputPath: 'assets',
            context: 'dist',
          },
        },
        ],
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      // injects bundle.js to our new index.html
      inject: true,
      // copys the content of the existing index.html to the new /build index.html
      template:  path.resolve('./public/index.html'),
      publicPath: "/dist/",
    }),
  //   new CopyPlugin({
  //     patterns: [
  //         {
  //             from: path.resolve(__dirname, 'public/assets'),
  //             to: path.resolve(__dirname, 'dist/assets')
  //         }
  //     ]
  // }),
  ]
};