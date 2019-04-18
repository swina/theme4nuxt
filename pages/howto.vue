<template>
  
    <div class="w-4/5 px-4">
      <div class="leading-loose w-full" v-html="howto"></div>
    </div>
  
</template>

<script>
  import howto from './README.md'

  export default {
    layout: 'theme',
    computed: {
      howto() {
        return howto
      }
    }
  }
</script>
