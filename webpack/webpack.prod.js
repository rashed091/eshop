import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';

import * as config from './config/index.js';
import * as common from './webpack.common.js';

const production = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Production'),
    }),
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new MiniCssExtractPlugin({ filename: config.outputs.CSS_FILE_OUTPUT }),
      new TerserPlugin(),
    ],
  },
};

export const WebpackProdConfig = merge(common.configs, production);
