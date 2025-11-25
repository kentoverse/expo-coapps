// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Allow JSON + Lottie files
config.resolver.assetExts.push("lottie");

// Add custom source extensions only if needed
config.resolver.sourceExts = [
    ...config.resolver.sourceExts,
    "cjs"
];

// Path alias support
config.resolver.extraNodeModules = {
    "@": path.resolve(__dirname, "src"),
};

// Watch folder for alias
config.watchFolders = [path.resolve(__dirname, "src")];

module.exports = config;