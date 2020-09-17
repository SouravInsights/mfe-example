import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import 'dotenv/config';

const { REMOTE_URL, PROJECT_NAME } = process.env;

const prodConfig: WebpackConfiguration = {
  mode: 'production',
  module: {
    rules: [
      // {
      //   test: /bootstrap\.tsx$/,
      //   use: [
      //     { loader: 'babel-loader' },
      //     {
      //       loader: 'bundle-loader',
      //       options: {
      //         lazy: true,
      //       },
      //     },
      //   ],
      // },
      {
        test: /bootstrap\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true,
        },
      },
    ],
  },
  entry: {
    index: './src',
    // index: {
    //   import: './src',
    //   dependOn: 'reactVendors',
    // },
    // reactVendors: ['react', 'react-dom'],
    // emotionVendors: ['@emotion/core', '@emotion/styled'],
    // formVendors: ['formik', 'yup'],
  },
  output: {
    filename: '[name].[fullhash].js',
    path: path.join(__dirname, '../../build'),
    publicPath: `http://${REMOTE_URL}/${PROJECT_NAME}/`,
  },
  // optimization: {
  //   chunkIds: 'named',
  //   splitChunks: {
  //     chunks: 'all',
  //     cacheGroups: {
  //       default: false,
  //     },
  //   },
  //   minimizer: [
  //     // @ts-ignore
  //     new TerserPlugin(),
  //   ],
  // },
  devtool: 'source-map',
};

export default prodConfig;
