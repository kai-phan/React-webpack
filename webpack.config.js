const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const WebpackBar = require('webpackbar');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src');
const publicPath = path.resolve(__dirname, 'public');
const buildPath = path.resolve(__dirname, 'build');

const handleDir = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(publicPath, (err, files) => {
      if (err) {
        reject('Unable to scan directory: ' + err);
      }

      resolve(files);
    });
  });
};

module.exports = async (env, argv) => {
  const isDev = argv.mode === 'development';
  const dirs = await handleDir();
  const copyPluginPatterns = dirs
    .filter((dir) => dir !== 'index.html')
    .map((dir) => {
      return {
        from: dir,
        to: '',
        context: publicPath,
      };
    });

  const basePlugins = [
    new Dotenv(),
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : 'static/css/[name].[contenthash:6].css',
    }),
    new webpack.ProgressPlugin(),
    new ErrorOverlayPlugin(),
    new EslintWebpackPlugin({
      extensions: ['.ts', '.tsx'],
      fix: true,
      failOnWarning: true,
      failOnError: true,
    }),
    new WebpackBar({ name: 'App' }),
  ];

  const prodPlugins = [
    ...basePlugins,
    new CleanWebpackPlugin(),
    new CopyPlugin({ patterns: copyPluginPatterns }),
  ];

  return {
    entry: srcPath,
    output: {
      path: buildPath,
      filename: 'bundle.[hash:6].js',
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'ts-loader'],
        },
        {
          test: /\.(s[ac]ss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: isDev },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: isDev },
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: isDev },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: isDev
                  ? '[path][name].[ext]'
                  : 'static/media/[name].[contenthash:6].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: isDev
                  ? '[path][name].[ext]'
                  : 'static/fonts/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: { src: srcPath },
    },
    plugins: isDev ? basePlugins : prodPlugins,
    devtool: isDev ? 'source-map' : false,
    devServer: {
      static: {
        directory: publicPath,
      },
      port: 3000,
      hot: true,
      historyApiFallback: true,
      open: true,
    },
  };
};
