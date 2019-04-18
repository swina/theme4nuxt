<template>
    <div>
        <component :is="loadcomponent" :options="options"/>
    </div>
</template>

<script>
export default {
    props: { 
        name: { type: String , required: true },
        options: { type: Object , required: false , default:()=>{}}
    },    
    computed:{
         loadcomponent(){
            let chunk = this.name
            return () =>  import(/* webpackChunkName: 'theme4nuxt' */ '~/components/' + this.name)
        },
    }
}
</script>