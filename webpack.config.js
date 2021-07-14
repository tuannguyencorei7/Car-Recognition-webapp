const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: "./frontend/src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "main.js",
    assetModuleFilename: 'images/',
    clean: true
  },
  performance: {
    hints: false,
    maxEntrypointSize: 400000,
    maxAssetSize: 250000,

  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        type: 'asset/resource',
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
            }
          },
        ],
        type: 'javascript/auto'
      },
      {
        test: /\.(webm|mp4)$/,
        loader: 'file-loader'
      }
    ],
  },
  optimization: {
    minimize: true,
    moduleIds: 'size',
    chunkIds: 'size',
    mangleWasmImports: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    flagIncludedChunks: true,
    providedExports: true,
    emitOnErrors: true,
  },
};
