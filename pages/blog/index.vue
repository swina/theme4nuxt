<template>
  <div class="w-full py-12 min-h-full relative pin-t justify-start px-4">
    <h1 class="font-light border-b">Blog</h1>
    <no-ssr><v-componentWrapper name="core/tiles" :options="options"/></no-ssr>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'theme',
  
  data:()=>({
      posts: null
  }),
  asyncData ({ params }) {
    return axios.get(`https://www.techcrunch.com/wp-json/wp/v2/posts`)
    .then((res)=>{
        console.log ( res )
        return { posts: res.data }
    })
    
  },
  computed:{
    options(){
      return { items: this.posts }
    }
  }
}
</script>