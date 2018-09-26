import webpack, { Configuration } from "webpack";
import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';

import babelOptions from './babel.config'

const config: Configuration = {
  entry: path.resolve(process.cwd(), 'src', 'index.tsx'),
  output: {
    path: path.resolve(process.cwd(), 'build', 'app'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        include: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'config/builder/wdsHtmlTemplate.html'
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  watch: true,
}

export default config
