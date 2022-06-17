const path = require("path");
// 引入html的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
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
    }
    ],
  },
  devServer: {
    port: 30000,
    open: true,
  },

};
