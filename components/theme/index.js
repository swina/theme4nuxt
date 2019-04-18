import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  '@/components/theme', true, /\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  let componentName = 'v-'
  componentName += camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  //if ( componentName.indexOf('-mood') < 0 ){
  //  componentName = componentName.replace('Index','')
  //} else {
  //  componentName = componentName.replace('Index','')
  //}
  componentName = componentName.replace('Index','')
  console.log ( componentName )
  Vue.component(componentName, componentConfig.default || componentConfig)
})
