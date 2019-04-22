import theme from '~/themes/theme1.js'

export default ({ app }, inject) => {
  inject('theme4nuxt', () => theme)
}
