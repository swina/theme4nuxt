import pkg from './package'
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import path from 'path'

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
    { src: '~/components/theme' , ssr: false },
    { src: '~/plugins/vue-lazyload', ssr: false }
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    'nuxt-purgecss'
  ],
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve('./tailwind.js')
      },
      preset: { autoprefixer: {} }
    },
    
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
      
      if (!ctx.isDev){
        new PurgecssPlugin({
          
          // Specify the locations of any files you want to scan for class names.
          paths: glob.sync([
            path.join(__dirname, "./pages/**/*.vue"),
            path.join(__dirname, "./components/**/*.vue"),
            path.join(__dirname, "./themes/**/*.js"),
            path.join(__dirname, "./layouts/**/*.vue"),
          ]),
      
          extractors: [
            {
              extractor: TailwindExtractor,
  
              // Specify the file extensions to include when scanning for
              // class names.
              extensions: ["html", "js", "vue"]
            }
          ],
          whitelist: ['html', 'body']
        })
      }
      
    }
  },

}
