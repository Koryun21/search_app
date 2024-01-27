const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const aliases = require('./aliases');
const { version } = require('./package.json');

const PORT = process.env.PORT || 3000;

module.exports = (env, options) => {
  const isDevMode = options.mode !== 'production';

  return {
    mode: isDevMode ? 'development' : 'production',
    entry: './src/index.tsx',
    devtool: isDevMode ? 'inline-source-map' : false,
    stats: 'errors-only',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      plugins: [new TsconfigPathsPlugin()],
      alias: aliases,
    },
    output: {
      path: path.join(__dirname, '/build'),
      filename: 'build.js',
      clean: true,
      publicPath: '/',
    },
    devServer: {
      port: PORT,
      historyApiFallback: true,
      hot: false,
      liveReload: true,
      watchFiles: ['src/**/*'],
      client: {
        overlay: false,
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
          },
        },
        {
          test: /\.(png|svg)$/,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        title: 'freuders',
        meta: {
          version: version,
        },
        minify: false,
      }),
      new ESLintPlugin({
        extensions: ['ts', 'tsx', 'js'],
      }),
      new ForkTsCheckerWebpackPlugin(),
    ].filter(Boolean),
  };
};
