const custom = require('../webpack.config.js');
const path = require('path');
module.exports = {
  stories: ['../examples/**/*.stories.tsx'],
  webpackFinal: async config => {
    process.env.NODE_ENV === 'production' && (config.devtool = '');
    return {
      ...config,
      
      module: {
        ...config.module,
        rules: custom.module.rules
      },
      resolve: {
        ...config.resolve,
        ...custom.resolve
      }}
  },

  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
};
