import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import 'dotenv/config';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const devConfig: Configuration = {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src'],
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' },
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../../build'),
    publicPath: `http://localhost:${process.env.PORT}/`,
  },
  devServer: {
    hot: false,
    port: parseInt(process.env.PORT, 10),
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'build'),
    liveReload: true,
    watchContentBase: true,
    watchOptions: {
      ignored: '**/node_modules/**',
      aggregateTimeout: 100,
      poll: 200,
    },
  },
  devtool: 'eval-cheap-module-source-map',
};

export default devConfig;
