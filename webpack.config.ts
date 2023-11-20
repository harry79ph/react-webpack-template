const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PUBLIC_DIR = path.resolve(__dirname, "public");

module.exports = {
  mode: "development",
  entry: "./index.tsx",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.[tj]sx?$/,
        loader: "babel-loader"
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PUBLIC_DIR, "index.html"),
      inject: "body",
    }),
  ],
};
