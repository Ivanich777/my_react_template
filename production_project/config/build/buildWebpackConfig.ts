import webpack from "webpack";
import { BuildOptions } from "../types/config";
import path from "path";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";


export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: {
      EntryPointName: paths.entry ?? path.resolve(__dirname, "src", "index.ts")
    },
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build ?? path.resolve(__dirname, "build"),
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  };
};