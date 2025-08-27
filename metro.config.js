const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    alias: {
      '@': './src',
      '@components': './src/components',
      '@utils': './src/utils',
      '@styles': './src/styles',
      '@types': './src/types',
      '@services': './src/services',
      '@hooks': './src/hooks',
      '@context': './src/context',
      '@assets': './assets',
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);