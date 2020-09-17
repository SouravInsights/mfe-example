import * as path from "path";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
// @ts-ignore
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { ForkTsCheckerWebpackPlugin } from "fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPlugin";

const { ModuleFederationPlugin } = require("webpack").container;

require("dotenv").config();

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: "development",

  output: {
    publicPath: "http://localhost:3000/",
  },

  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    extensions: [".ts", ".tsx", ".js", ".graphql"],
  },

  devServer: {
    port: 3000,
  },

  target: "web",
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: "bundle-loader",
        options: {
          lazy: true,
        },
      },
      {
        test: /\.ts(x?)$/,
        use: [{ loader: "babel-loader" }],
        exclude: "/node_modules/",
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: process.env.PROJECT_NAME,
      library: { type: "var", name: process.env.PROJECT_NAME },
      filename: "remoteEntry.js",
      remotes: {
        navigation_sidebar: "navigation_sidebar",
        demo: "demo",
        commons: "commons",
      },
      exposes: {},
      shared: require("./package.json").dependencies,
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: process.env.PROJECT_NAME,
      template: "src/templates/index.html",
    }),
    new CleanWebpackPlugin({
      dry: true,
    }),
  ],
  devtool: "eval-cheap-module-source-map",
};

export default config;
