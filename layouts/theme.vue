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
                      <span :key="'menu_' + m" v-if="item.path!='/'">
                        <nuxt-link :to="item.path"
                          @click.native="hamburger=false"
                          :class="grid.navigation[0].link">{{item.name}}</nuxt-link>
                      </span>
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
      
        <template v-if="grid.extra && grid.homepage === $route.path">
          <span v-html="grid.extra.html"></span>
        </template>
            
  </div>
</template>

<script>
import grid from '~/themes'
import axios from 'axios'

export default {
  name: 'theme4nuxt_renderer',
  data: () => ({
    theme: null,
    menu: null,
    initData:null,
    comp:''
  }),
  computed: {
   
    grid: {
      get: function() {
        return grid
      },
      set: function() {
        return grid
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
  async beforeMount() {
    this.initData = this.$store.state.initData
  },
  mounted() {
    //this.grid = this.$store.state.theme
    let m = [{ path:'/' , name: 'Home' }]
    this.$router.options.routes.map(menu => {
      if (menu.path.split('/').length < 3 && menu.path != '/') {
        let obj = {
          path: menu.path,
          name: menu.name.charAt(0).toUpperCase() + menu.name.slice(1)
        }
        m.push(obj)
      }
    })
    //m.sort((a, b) => {
    //  a.path < b.path ? 1 : -1
    //})
    //  m.splice(0, 1)
    this.menu = m
  }
}
</script>
