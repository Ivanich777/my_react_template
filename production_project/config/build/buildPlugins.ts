import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import { BuildOptions } from "../types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export const buildPlugins = ({ paths }: BuildOptions): webpack.WebpackPluginInstance[] => {

  return [
    new HTMLWebpackPlugin({
      template: paths.html ?? path.resolve(__dirname, "public", "index.html")
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css"
    })
  ];
};