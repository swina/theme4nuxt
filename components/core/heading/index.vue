<template>
    <div>
        <div :class="options.css" v-lazy:background="background">
            <!--<img v-lazy="background" class="h-64 absolute pin-t pin-l w-full"/>-->
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        background(){
            return this.options.bg
        }
    },
    props: {
        options: { type: Object , required: false , default:()=> {css:'object-cover'} }
    }
}
</script>