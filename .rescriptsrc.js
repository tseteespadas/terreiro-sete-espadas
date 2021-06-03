const path = require('path');

module.exports = {
  webpack: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '~': path.resolve(__dirname, 'src'),
        },
      },
    };
  },
  jest: (config) => {
    return {
      ...config,
      ...require('./jest.config'),
    };
  },
};
