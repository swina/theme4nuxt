<template>
    <div class="flex flex-wrap w-full justify-center">
        <div class="w-full text-center p-4">
            <div v-html="options.title"/>
        </div>
        <template  v-for="(price,index) in prices">
            <div :class="classe" :key="'price_' + index">
                <div :class="options.css">
                    <div v-html="price.title"/>
                    <div v-html="price.price"/>
                    <div v-html="price.summary"/>
                        <template v-for="(row,i) in price.list">
                            <div :key="'line_' + i" class="text-sm text-grey py-1">{{row}}</div>
                        </template>
                    
                </div>
                <div :class="options.action">
                    <button :class="options.button">{{price.button}}</button>
                </div>  
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'PricesTable',
    computed:{
        classe(){
            return "w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-4 overflow-hidden " + this.options.style 
        },
        prices(){
            console.log ( 'prices=>' , this.$store.state.initData[this.options.data] )
            return this.$store.state.initData[this.options.data]
        }
    },
    props: {
        options: { type : Object , required: false , default:()=>{}}
    }
}
</script>