import theme from '~/themes'

export default ({ app }, inject) => {
  inject('theme4nuxt', () => theme)
}
