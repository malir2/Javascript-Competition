import path from "path";

export default {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "dist"),
  },
  mode: "development",
};

console.log(path.resolve(process.cwd(), "dist"));
