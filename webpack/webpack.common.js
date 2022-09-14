import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { isDevelopment, outputs, paths } from './config';
import { css, fonts, images, tj } from './modules';

export const configs = {
  entry: `${paths.src}/index.tsx`,
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', 'json'],
    alias: {
      '@': paths.src,
    },
  },
  module: {
    rules: [tj, css, images, fonts],
  },
  output: {
    path: paths.build,
    filename: outputs.JS_FILE_OUTPUT,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${paths.public}/index.html`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: paths.build,
          noErrorOnMissing: true,
          globOptions: {
            dot: true,
            ignore: ['**/.DS_Store', '**/.gitkeep', '**/index.html'],
          },
        },
      ],
    }),
    new CleanWebpackPlugin({
      root: paths.build,
    }),
  ],
  stats: 'errors-only',
  context: __dirname,
  target: isDevelopment ? 'web' : 'browserslist',
  mode: isDevelopment ? 'development' : 'production',
};
