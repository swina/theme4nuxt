import grid from '~/themes'

export const state = () => ({
  theme     : grid,
  theme_file: 'index.js',
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
    commit ('init_data', data )
  },
  
  SetTheme({commit},theme){
    commit('theme',theme)
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