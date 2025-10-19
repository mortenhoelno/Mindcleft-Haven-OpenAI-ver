// next.config.js
const path = require("path");

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      three: path.resolve(__dirname, "node_modules/three"),
    };
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/three/,
      type: "javascript/auto",
    });
    return config;
  },
};
