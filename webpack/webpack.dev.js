import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack from 'webpack';
import { merge } from 'webpack-merge';

import * as common from './webpack.common.js';

const development = {
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 3690,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Development'),
    }),
  ],
};

export const WebpackDevConfig = merge(common.configs, development);
