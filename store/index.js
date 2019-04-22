import grid from '~/themes'

export const state = () => ({
  theme     : grid,
  theme_file: 'index.js',
  themes    : null,
  currentTheme : 0, //{ name: 'Corporate Business' , file: 'index.js' },
  initData  : {}
})

export const mutations = {
  init_data ( state , data ){
    state.initData = data
  },
  theme ( state , data ){
    state.theme = data
  },
  theme_file ( state , data ){
    state.theme_file = data
  },
  themes (state,data) {
    state.themes = data
  },
  currentTheme(state,index){
    state.currentTheme = index
  }
}

export const actions = {
  async nuxtServerInit({commit}, context ){
    let init = context.app.$theme4nuxt().initData
    
    let api
    let data = {}
    for ( var n=0 ; n < init.length ; n++ ){
      if ( init[n].type === 'api' ) {
        let qry = await context.app.$axios.get(init[n].api);
        !qry.data.data ? data[init[n].name] = qry.data : data[init[n].name] = qry.data.data
      }
      if ( init[n].type === 'array' ){
        data[init[n].name] = init[n].value
      }
    }
    let themes = []
    for ( var t=1 ; t < 9 ; t++ ){
      let mytheme = await import('~/themes/theme' + t + '.js')
      themes.push(mytheme.default)
    }
    commit ('init_data', data )
    commit('themes',themes)
  },
  
  SetTheme({commit},theme){
    commit('theme',theme)
  },
  SetCurrentTheme({commit},theme){
    commit('currentTheme',theme)
  },
  SetThemeFile({commit},file){
    commit('theme_file',file)
  },
}

export const getters = {
  'init'    : state => state.initData,  
  'theme'   : state => state.theme,
}

export const strict = false