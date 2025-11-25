const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add .lottie to asset extensions
config.resolver.assetExts = [...config.resolver.assetExts, 'lottie'];

// Add .cjs to source extensions
config.resolver.sourceExts = [...config.resolver.sourceExts, 'cjs'];

// Path alias support
config.resolver.extraNodeModules = {
  '@': path.resolve(__dirname, 'app'),
};

// Watch the app folder for changes
config.watchFolders = [path.resolve(__dirname, 'app')];

module.exports = config;