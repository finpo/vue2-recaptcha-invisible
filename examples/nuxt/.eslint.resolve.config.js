const { join } = require('path');

function resolve(dir) {
  return join(__dirname, dir);
}
/**
 * 設定 webpack import 前綴解析真實路徑
 * 參考來源: https://github.com/nuxt/nuxt.js/blob/master/lib/webpack/base.config.js
 * 需依照 NUXT.js 的專案結構調整
 * author: Ausir
 * 2017-3-12
 */
module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '~': resolve(''),
    },
  },
};
