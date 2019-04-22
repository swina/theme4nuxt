<template>
  <div class="w-full flex flex-wrap">
    <slot name="title"/>
    <div v-for="(item,index) in items" :key="index" class="w-full text-left p-2">
      <h4 class="font-light">{{item.name}}</h4>
      <div class="w-full rounded h-4 bg-grey-light">
        <div :class="'rounded h-4 ' + color" :style="style(item.value)"></div>
      </div>
      <small>{{item.value}}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: false,
      default:()=>({
        
      })
    }
  },
  computed:{
    items(){
      return this.$store.state.initData[this.options.data]
    },
    color(){
      if ( this.options.color ){
        return this.options.color
      }
      return 'green-light'
    }
  },
  methods:{
    style(perc){
      return {
        "width" : perc,
        "transition" : "width 0s ease 0s",
        "transform:" : "scaleX(1)"
      }
    }
  }
}
</script>
