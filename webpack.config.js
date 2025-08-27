const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname);

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
  test: /\.js$|tsx?$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(__dirname, 'index.web.js'), // Entry to your application
    path.resolve(__dirname, 'src'), // Make sure all of src is transpiled
    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
    path.resolve(__dirname, 'node_modules/react-native-svg'),
    path.resolve(__dirname, 'node_modules/react-native-gesture-handler'),
    path.resolve(__dirname, 'node_modules/react-native-screens'),
    path.resolve(__dirname, 'node_modules/react-native-safe-area-context'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
      presets: ['@react-native/babel-preset'],
      // Re-write paths to import only the modules needed by the app
      plugins: ['react-native-web/babel'],
    },
  },
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

const fontLoaderConfiguration = {
  test: /\.ttf$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
      },
    },
  ],
  include: [
    path.resolve(__dirname, 'assets/fonts'),
    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
  ],
};

module.exports = {
  entry: [
    // load any web API polyfills
    // path.resolve(appDirectory, 'polyfills-web.js'),
    // your web-specific entry file
    path.resolve(appDirectory, 'index.web.js'),
  ],

  // configures where the build ends up
  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'dist'),
    publicPath: '/',
  },

  // ...and where files should be served from
  devServer: {
    static: {
      directory: path.resolve(appDirectory, 'dist'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
    open: true,
  },

  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      fontLoaderConfiguration,
    ],
  },

  resolve: {
    // This will only alias the exact import "react-native"
    alias: {
      'react-native$': 'react-native-web',
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@assets': path.resolve(__dirname, 'assets'),
    },
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: ['.web.js', '.js', '.web.ts', '.ts', '.web.tsx', '.tsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(appDirectory, 'public/index.html'),
      inject: 'body',
    }),
  ],
};