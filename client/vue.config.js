const path = require('path');

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('js')
      .use('babel-loader')
      .loader('babel-loader')
      .tap(options => {
        return {
          ...options,
          configFile: path.resolve(__dirname, './babel.config.js')
        };
      });
  }
};