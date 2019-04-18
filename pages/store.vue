<template>
  <div class="w-full py-12 min-h-full relative pin-t justify-start px-4">
    <h1 class="font-light border-b">Store</h1>
    <no-ssr><v-componentWrapper name="core/cards" :options="options"/></no-ssr>
  </div>
</template>

<script>
export default {
  layout: 'theme',
  computed:{
    options(){
      return { contest: 'products' }
    }
  }
}
</script>