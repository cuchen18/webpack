const path = require("path");
const {VueLoaderPlugin}=require('vue-loader')
// 引入html的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "lib"),
    filename: "webpack-index.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      { test: /\.(png|gif|jpeg|jpg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator:{
            filename:'images/[hash:6][ext]'
          }
      },
      { test: /\.(eot|svg|ttf|woff|woff2)/i,
      type: "asset",
      parser: {
        dataUrlCondition: {
          maxSize: 2 * 1024,
        },
      },
      generator:{
          filename:'fonts/[hash:6][ext]'
        }
    },
    {
        test:/\.js$/i,
        use:["babel-loader"]
    },{
        test:/\.vue$/,
        loader:'vue-loader'
    },
    ],
  },
  devServer: {
    port: 30000,
    open: true,
  },

};
