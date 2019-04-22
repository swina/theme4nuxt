<template>
  <div class="w-full flex flex-wrap py-8">
    <template v-for="(item,index) in items">
        <div class="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 px-4 text-center" :style="single" :key="index">
          <div :class="single">
            <i v-if="item.icon" class="material-icons p-4 rounded-full mb-2 border-8 text-5xl">{{item.icon}}</i>
            <h2 class="font-light border-b mb-6">{{item.title}}</h2>
            <div class="px-12 text-justify" v-html="item.abstract"></div>
          </div>  
        </div>
    </template>
  </div>
</template>

<script>
export default {
  computed:{
    items(){
      return this.$store.state.initData[this.options.data]
    },
    single(){
      return this.options.box ? this.options.box : ''
    }
  },
  props: {
    options: { type: Object , required: true , default:()=>{} }
  }
}
</script>
