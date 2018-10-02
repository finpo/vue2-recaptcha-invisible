module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',
    'plugin:vue/strongly-recommended',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'prettier'
  ],
  // 強制檢查 import 可以被正確解析 
  settings: {
    'import/resolver': {
      'webpack': {
        'config': '.eslint.resolve.config.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
