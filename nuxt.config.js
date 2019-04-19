import pkg from './package'
/*import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import path from 'path'
*/
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}


export default {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet' , href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },

  loading: { color: '#000' },

    
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/theme.css'
  ],
  
  plugins: [
    { src: '~/plugins/theme4nuxt.js' , ssr: true },
    { src: '~/components/theme' , ssr: false }
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    //'nuxt-purgecss'
  ],
  build: {
    //extractCSS: true,
    //postcss: {
    //  plugins: {
    //    tailwindcss: path.resolve('./tailwind.js')
    //  },
    //  preset: { autoprefixer: { grid: true } }
    //},
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          //enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
     
    }
  },


}
