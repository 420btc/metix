// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add resolver for web platform
config.resolver = {
  ...config.resolver,
  sourceExts: [...config.resolver.sourceExts, 'mjs', 'cjs'],
  // Ensure we resolve modules correctly in Expo Snack
  resolverMainFields: ['browser', 'main'],
  // Make sure we can resolve modules without extensions
  enableRequireContext: true,
  extraNodeModules: {
    'crypto': require.resolve('crypto-browserify'),
    'stream': require.resolve('stream-browserify'),
    'buffer': require.resolve('buffer'),
    'path': require.resolve('path-browserify'),
    'util': require.resolve('util/'),
    'process': require.resolve('process/browser'),
  }
};

module.exports = config;
