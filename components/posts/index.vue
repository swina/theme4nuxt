<template>
  <div class="flex flex-wrap items-start justify-center p-3" v-if="items">

    <template v-for="(row,i) in rows">
        <template :data="calc_mod(i)">
        <div v-if="items.length && items[i].id" :class="classe + calc_mod(i)" :id="items[i].id" data-type="post" :key="items[i].id">
          <small class="text-grey">{{items[i].date.substr(5,2)}}/{{items[i].date.substr(8,2)}}</small>
          <a :href="items[i].link" class="no-underline text-bold py-2 text-black" target="_blank">
              <h4 class="py-4 font-light text-blue-dark" v-html="items[i].title.rendered"></h4>
          </a>
          
          <!--<a :href="items[i].slug" class="no-underline font-light" target="_blank">
          <h2 class="font-light text-black py-2" v-html="items[i].title.rendered"></h2></a>-->
          <figure v-if="items[i].jetpack_featured_media_url">
            <img :src="items[i].jetpack_featured_media_url"/>
          </figure>
          <div class="article">
            <div class="mb-8 text-grey-dark" v-html="items[i].excerpt.rendered"></div>
          </div>
        </div>
        </template>
    </template>
  </div>
</template>
<script>
export default {
  data:()=>({
    border:''
  }),
  computed:{
    items(){
      if ( this.$store.state.initData[this.options.data]){
        return this.$store.state.initData[this.options.data]
      }
      return []
    },
    rows(){
      if ( this.$route.path === '/' ){
        return 2
      } else {
        return 2
        //return this.items.length
      }
    },
    classe(){
      if ( this.$route.path === '/' ){
        return 'w-full'
      }
      return 'w-full md:w-1/2 lg:w-1/2 py-8 px-16 ' + this.border
    }
  },
  methods: {
    calc_mod(i){
      
      if ( i % 2 === 0  ) { return 'border-r ' } else { return ' ' } 
    },
    linkProperties (url) {
        if (url.match(/^(http(s)?|ftp):\/\//)) {
          console.log ( url )
          return {
            is: 'a',
            href: url,
            target: '_blank',
            rel: 'noopener'
          }
        }
        return {
          is: 'nuxt-link',
          to: url
        }
      }
  },
  props :{
    options: {
            type: Object ,
            required: false ,
            default: ()=> { data: 'info'}
        }
  }
}
</script>
