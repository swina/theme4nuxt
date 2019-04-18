<template>
  <div class="w-full">
    <slot name="title"/>
    <div v-for="(item,index) in items" :key="index" class="text-left p-2">
      <h4 class="font-light">{{item.name}}</h4>
      <div class="w-full rounded h-4 bg-grey-light">
        <div class="rounded h-4 bg-blue" :style="style(item.value)"></div>
      </div>
      <small>{{item.value}}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array , required: false , default:()=>[]},
    color: { type: String , required:false , default:'green-light'}
  },
  methods:{
    style(perc){
      return {
        "width" : perc,
        "transition" : "width 0s ease 0s"
      }
    }
  }
}
</script>
