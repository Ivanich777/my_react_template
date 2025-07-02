import { ResolveOptions } from "webpack";
import { BuildOptions } from "../types/config";

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [
      options.paths.src, "node_modules"
    ],
    /* Если указать элиас,
     например @, то путь к папке будет начинаться с него */
    alias: {},
    /* Для каждого модуля index будет считаться главным файлом */
    mainFiles: ["index"]
  };
};