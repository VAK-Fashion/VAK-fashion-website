const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let isDevelopment;
module.exports = {
  mode: "development",

  entry: __dirname + "/src/index.tsx",
  output: {
    path: __dirname + "/public/",
    filename: "main.js",
  },
  devServer: {
    contentBase: __dirname + "/public",
    port: 3000,
    open: true,
  },
  resolve: {
    extensions: [".scss", ".css", ".sass", ".tsx", ".js", ".jsx", ".ts"],
  },
  plugins: [].concat(this.mode ? [] : [new MiniCssExtractPlugin()]),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[hash:base64:10]",
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(png)$/,
        loader: 'url-loader'
      }
    ],
  },
};
