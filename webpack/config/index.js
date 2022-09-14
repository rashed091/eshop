import path from 'path';

const JSOutput = '[name].[contenthash].js';
const CSSOutput = '[name].[contenthash].css';

export const outputs = {
  JS_FILE_OUTPUT: JSOutput,
  CSS_FILE_OUTPUT: CSSOutput,
};

export const paths = {
  src: path.resolve(__dirname, '../../', 'src'), // Source directory.
  build: path.resolve(__dirname, '../../', 'build'), // Destination build directory.
  public: path.resolve(__dirname, '../../', 'public'), // Public directory
};

export const isDevelopment = process.env.NODE_ENV !== 'production';
