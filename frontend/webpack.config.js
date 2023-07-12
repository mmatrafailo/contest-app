const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "pub"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "esbuild-loader",
          options: {
            target: 'es2015'
          }
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      HOST: "localhost",
      PORT: "8080",
    })
  ]
};
