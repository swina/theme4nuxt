<template>
  <div class="flex flex-wrap items-start justify-center p-3">

    <template v-for="(row,i) in rows">
        <template :data="calc_mod(i)">
        <div v-if="items[i].id" :class="classe + calc_mod(i)" :id="items[i].id" data-type="post" :key="items[i].id">
          <small class="text-grey">{{items[i].date.substr(5,2)}}/{{items[i].date.substr(8,2)}}</small>
          <component :is="linkProperties(items[i].slug)" class="no-underline font-light" >
            <slot ><h2 class="font-light text-black py-2" v-html="items[i].title.rendered"></h2></slot>
          </component>
          
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
      console.log ( i % 2 )
      if ( i % 2 === 0  ) { return 'border-r ' } else { return ' ' } 
    },
    linkProps (url) {
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
    items: { type: Array, required: false , default:()=>[]}
  }
}
</script>
