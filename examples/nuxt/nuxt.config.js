
module.exports = {
  router: {
    base: '/',
  },
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'zh-Hant',
    },
    title: 'nuxt',
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: 'nuxt' },
      { hid: 'description', name: 'description', content: 'My divine Nuxt.js project' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'nuxt' },
      { hid: 'og:image', property: 'og:image', content: '' },
      { hid: 'og:title', property: 'og:title', content: 'nuxt' },
      { hid: 'og:description', property: 'og:description', content: 'My divine Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/css/main.styl', lang: 'stylus' },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/,
      //     options: {
      //       /* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
      //       formatter: require('eslint-friendly-formatter'), // eslint-disable-line global-require
      //     },
      //   });
      // }
    },
  },
};
