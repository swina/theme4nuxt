<template>
  <div v-if="post" class="w-full px-8 py-12 article article-pre-dark">
    <h3 v-html="post.title.rendered"></h3>
    <div v-html="post.content.rendered"></div>
  </div>
</template>

<script>
export default {
  data:()=>({
    post:null
  }),
  asyncData ({ params , store }) {
    let mypost = store.state.initData.posts.filter(post=>{
      return post.slug === params.path
    })
    return { post: mypost[0] }
  },
  mounted(){
    let mypost = this.$store.state.initData.posts.filter(post=>{
      return post.slug === this.$route.params.path
    })
    this.post = mypost[0]
  }
}
</script>
