<template>
    
    <div>
      
      <no-ssr><v-nav v-if="grid && grid.navigation" :items="menu" :small="grid.navigation[0].small" :large="grid.navigation[0].large" :left="grid.navigation[0].left" :bottom="grid.navigation[0].bottom" :css="grid.navigation[0].css" :button="grid.navigation[0].button"
        :link="grid.navigation[0].line" :transition="grid.navigation[0].transition" />
      </no-ssr>
      
      <main :class="grid.template.main.css" v-if="grid.version === '0.2.0'">
        <template v-for="(area,a) in grid.template.areas.order">

          <header :class="grid.template.areas[area].root" v-if="area==='header'" :key="'header_' + a">
            <template v-for="(block,c) in grid.template.areas[area].blocks">
              <div :class="block.css" :key="area + '_' + c" v-if="!block.homepage || grid.homepage === $route.path">
                <template v-for="(element,n) in block.elements">

                  <nuxt v-if="element.nuxt && $route.path !== grid.template.homepage"  :key="'nuxt_' + n" :class="nuxt_class"/>

                  <div :key="'header_element_' + n" v-if="element.type==='css'" :class="element.content"/>

                  <div v-if="element.type==='menu'" class="flex items-center" :key="'m_' + n">

                    <span>
                      <nuxt-link
                        :to="grid.homepage"
                        @click.native="hamburger=false"
                        :class="grid.navigation[0].link">Home</nuxt-link>
                    </span>

                    <template v-for="(item,m) in grid.navigation[element.navigation].items">
                      <div class="relative submenu" :key="'menu_' + m" v-if="item.path!='/'">
                        <nuxt-link :to="item.path"
                          @click.native="hamburger=false"
                          :class="grid.navigation[0].link" v-if="nuxtLink(item.path)">{{item.name}}</nuxt-link>
                        <a :href="item.path" v-if="!nuxtLink(item.path)" :class="grid.navigation[0].link" target="_blank">
                          {{item.name}}
                        </a>  
                      </div>
                      
                    </template>
                    
                  </div>

                  <div :key="'element_' + n" v-if="element.type=='html'  && !element.action" v-html="element.content" />

                  <div :key="'element_' + n" v-if="element.type=='html' && element.action" v-html="element.content" class="cursor-pointer" @click="$router.push(element.action)"/>
                 
                  <div v-if="element.type==='component'" :key="'header_element_' + n">
                    <no-ssr>
                      <v-componentWrapper v-if="element.type=='component'" :name="element.component" :options="element.options"/>
                    </no-ssr>
                  </div>

                </template>
              </div>
            </template>
          </header>
         
          <section :class="grid.template.areas[area].root" v-if="area==='content'" :key="'section' + a">
            <template v-for="(block_content,cs) in grid.template.areas[area].blocks">
              <div :class="block_content.css" :key="area + '_' + cs" v-if="!block_content.homepage || grid.homepage === $route.path">
                <template v-for="(element,el) in block_content.elements">

                  <nuxt v-if="element.nuxt && $route.path !== grid.template.homepage"  :key="'nuxt_' + cs + '_' + el" :class="nuxt_class"/>
                  
                  <div v-if="grid.homepage === $route.path || !element.homepage" :key="'container_' + el">
                    
                    <div :key="'section_element_' + el" v-if="element.type==='css'" :class="element.content"/>
                   
                    <div v-if="element.type==='menu'" class="flex items-center" :key="'m_' + el">
                      <span>
                        <nuxt-link
                          :to="$route.path"
                          @click.native="hamburger=false"
                          :class="grid.navigation[0].link">
                          Home
                        </nuxt-link>
                      </span>
                      <template v-for="(item,m) in grid.navigation[element.navigation].items">
                        <span :key="'menu_' + m" v-if="item.path!='/'">
                          <nuxt-link :to="item.path"
                            @click.native="hamburger=false"
                            :class="grid.navigation[0].link">
                            {{item.name}}
                          </nuxt-link>
                        </span>
                      </template>
                    </div>
                     
                    <div :key="'section_element_' + el" v-if="element.type=='html'  && !element.action" v-html="element.content"/>
                    
                    <div :key="'section_element_' + el" v-if="element.type=='html' && element.action" v-html="element.content" class="cursor-pointer" @click="$router.push(element.action)"/>
                    
                    <div v-if="element.type==='component'" :key="'section_element_' + el">
                      <no-ssr>
                        <v-componentWrapper v-if="element.type=='component'" :name="element.component" :options="element.options"/>
                      </no-ssr>
                    </div>                 
                  
                  </div>
                   
                </template>
              </div>
            </template>
          </section>
          
          <aside :class="grid.template.areas[area].root" v-if="area==='aside'" :key="'aside' + a">
            <template v-for="(block_content,cs) in grid.template.areas[area].blocks">

              <div :class="block_content.css" :key="area + '_' + cs" v-if="!block_content.homepage || grid.homepage === $route.path">
                <template v-for="(element,el) in block_content.elements">
                  <nuxt v-if="element.nuxt && $route.path !== grid.template.homepage"  :key="'nuxt_' + cs + '_' + el" :class="nuxt_class"/>

                  <div v-if="grid.homepage === $route.path || !element.homepage" :key="'container_' + el">

                    <div :key="'aside_element' + el" v-if="element.type==='css'" :class="element.content"/>

                    <div v-if="element.type==='menu'" class="flex items-center" :key="'m_' + el">
                      <span>
                        <nuxt-link
                          :to="$route.path"
                          @click.native="hamburger=false"
                          :class="grid.navigation[0].link">
                          Home
                        </nuxt-link>
                      </span>
                      <template v-for="(item,m) in grid.navigation[element.navigation].items">
                        <span :key="'menu_' + m" v-if="item.path!='/'">
                          <nuxt-link :to="item.path"
                            @click.native="hamburger=false"
                            :class="grid.navigation[0].link">
                            {{item.name}}
                          </nuxt-link>
                        </span>
                      </template>
                    </div>

                    <div :key="'aside_element' + el" v-if="element.type=='html'  && !element.action" v-html="element.content"/>

                    <div :key="'aside_element' + el" v-if="element.type=='html' && element.action" v-html="element.content" class="cursor-pointer" @click="$router.push(element.action)"/>
                    <div v-if="element.type==='component'" :key="'aside_element_' + el">
                      <no-ssr>
                        <v-componentWrapper v-if="element.type=='component'" :name="element.component" :options="element.options"/>
                      </no-ssr>
                    </div>  
                   
                  </div>
                </template>
              </div>
            </template>
          </aside>

          <footer :class="grid.template.areas[area].root" v-if="area==='footer'" :key="'footer' + a">
            <template v-for="(block_content,cs) in grid.template.areas[area].blocks">
              <div :class="block_content.css" :key="area + '_' + cs" v-if="!block_content.homepage || grid.homepage === $route.path">
                <div :class="block_content.css" :key="area + '_' + cs">
                  <template v-for="(element,el) in block_content.elements">

                    <nuxt v-if="element.nuxt && $route.path !== grid.template.homepage"  :key="'nuxt_' + cs + '_' + el" :class="nuxt_class"/>

                    <div :key="'footer_element_' + el" v-if="element.type==='css'" :class="element.content"/>

                    <div v-if="element.type==='menu'" class="flex items-center" :key="'m_' + el">
                      <template v-for="(item,m) in grid.navigation[element.navigation].items">
                        <span :key="'menu_' + m">
                          <nuxt-link :to="item.path"
                            @click.native="hamburger=false"
                            :class="grid.navigation[0].link">
                            {{item.name}}
                          </nuxt-link>
                        </span>
                      </template>

                    </div>

                    <div :key="'footer_element_' + el" v-if="element.type=='html'  && !element.action" v-html="element.content"/>

                    <div :key="'footer_element_' + el" v-if="element.type=='html' && element.action" v-html="element.content" class="cursor-pointer" @click="$router.push(element.action)"/>

                    <div v-if="element.type==='component'" :key="'footer_element_' + el">
                      <no-ssr>
                        <v-componentWrapper v-if="element.type=='component'" :name="element.component" :options="element.options"/>
                      </no-ssr>
                    </div>  

                  </template>
                </div>
              </div>
              </template>
            </footer>
          </template>
          
        </main>
      
        <!--<template v-if="grid.extra && grid.homepage === $route.path">
          <span v-html="grid.extra.html"></span>
        </template>-->
        <div class="fixed pin-b pin-r">
          <select v-model="theme" class="p-2 bg-blue rounded text-white text-sm">
            <template v-for="(t,index) in themes">
              <option :value="index" :key="'theme_' + index">{{t.name}}</option>
            </template>
          </select>
        </div>    
  </div>
  
</template>
<script>
//import grid from '~/themes/theme1.js'

export default {
  name: 'theme4nuxt_renderer',
  data: () => ({
    theme: 0, 
    themes:null,
    menu: null,
    initData:null,
    comp:'',
    submenu: ['Link 1' , 'Link 2' , 'Link 3' ]
  }),
  computed: {
    grid: {
      get: function() {
        return this.$store.state.themes[this.$store.state.currentTheme]
      },
      set: function() {
        return this.$store.state.themes[this.$store.state.currentTheme]
      }
    },
    home() {
      if (this.grid.homepage != this.mypath) {
        return true
      }
      return false
    },
    nuxt_class() {
      if (this.$route.path != this.grid.homepage) {
        return this.grid.template.nuxt
      }
      return ''
    }
  },
  watch:{
    theme(val){
      this.$store.dispatch('SetCurrentTheme',val)
    }
  },
  async beforeMount() {
    this.initData = this.$store.state.initData
  },
  methods:{
    nuxtLink (url) {
        if (url.match(/^(http(s)?|ftp):\/\//)) {
          return false
        }
        return true
      }
  },
  mounted() {
    //this.grid = this.$store.state.theme
    let m = [{ path:'/' , name: 'Home' }]
    //this.theme = this.$store.state.currentTheme
    this.$router.options.routes.map(menu => {
      if (menu.path.split('/').length < 3 && menu.path != '/') {
        let obj = {
          path: menu.path,
          name: menu.name.charAt(0).toUpperCase() + menu.name.slice(1)
        }
        m.push(obj)
      }
    })
    
    let themes = []
    for ( var t=0 ; t < this.$store.state.themes.length ; t++ ){
      themes.push({name:this.$store.state.themes[t].name , path: this.$store.state.themes[t].homepage } )
    }
    this.menu = m
    this.menu = this.$store.state.theme.navigation[0].items
    console.log ( this.menu )
    this.themes = themes
  }
}
</script>
