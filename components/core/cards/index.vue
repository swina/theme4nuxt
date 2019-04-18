<template>
    <div class="flex flex-wrap w-full justify-center">
        <div class="w-full text-center p-4">
            <h1 v-if="options.contest==='info'">Themes</h1>
            <h1 v-if="options.contest==='products'">Wall Stickers</h1>
        </div>
        <template  v-for="(card,index) in lista">
            <div class="w-full md:w-1/3 lg:w-1/3 xl:w-1/4 px-6 rounded mb-4 overflow-hidden" :key="'card_' + index">
                <div :class="'rounded-t-lg w-full shadow-lg ' + height" :style="bg(index)"></div>
                <div class="px-6 py-4 border">
                    <div class="font-bold text-xl mb-2">
                        <span v-if="options.contest==='info'">{{titles[index]}}</span>
                        <span v-if="options.contest==='products'">{{title}} {{index+1}}</span>
                    </div>
                    <p class="text-grey-darker text-base" v-if="options.contest!='products'">
                
                    </p>
                </div>
                <div class="flex items-center justify-center py-4 border-b border-r border-l rounded-b-lg bg-grey-light">
                    <!--<nuxt-link :to="'/theme/' + (index+1)" v-if="contest=='info' && index > 0"><button class="bg-blue-light inline-block rounded-full px-3 py-1 text-sm text-white hover:bg-blue-dark mr-2">Preview</button></nuxt-link>
                    -->
                    <button v-if="options.contest==='products'" class="bg-blue-light inline-block rounded-full px-3 py-1 text-sm text-white hover:bg-blue-dark mr-2">More</button>
                    
                    <!--<button v-if="contest==='info' && index === 0" class="bg-blue-light inline-block rounded-full px-3 py-1 text-sm text-white hover:bg-blue-dark mr-2">Current</button>-->
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data:()=>({
        titles: [
            'Marine Theme',
            'Ecommerce Waves',
            'Soho Business',
            'Angle Ecommerce',
            'Zig-Zag Blog',
            'Tiles Langing Page',
            'Corporate Business',
            'Classic Blog'
        ],
        cards: [
        'https://storage.googleapis.com/ghostfood-539ae.appspot.com/theme4nuxt/theme4nuxt-theme-1.jpg',
        'https://storage.googleapis.com/ghostfood-539ae.appspot.com/theme4nuxt/theme4nuxt-theme-2.jpg',
        'https://storage.googleapis.com/ghostfood-539ae.appspot.com/theme4nuxt/theme4nuxt-theme-3.jpg',
        'https://storage.googleapis.com/ghostfood-539ae.appspot.com/theme4nuxt/theme4nuxt-theme-4.jpg',
        'https://storage.googleapis.com/ghostfood-539ae.appspot.com/theme4nuxt/theme4nuxt-theme-5.jpg',
        'https://storage.googleapis.com/ghostfood-539ae.appspot.com/theme4nuxt/theme4nuxt-theme-6.jpg',
        'https://storage.googleapis.com/ghostfood-539ae.appspot.com/theme4nuxt/theme4nuxt-theme-7.jpg',
        'https://storage.googleapis.com/ghostfood-539ae.appspot.com/theme4nuxt/theme4nuxt-theme-8.jpg'
        ],
        products: [
            'https://www.sticasa.com/wp-content/uploads/2017/11/020099-300x300.jpg',
            'https://www.sticasa.com/wp-content/uploads/2017/11/citazione_quote_wallsticker_sticasa_capitale2_030130-amb-300x300.jpg',
            'https://www.sticasa.com/wp-content/uploads/2017/11/100040_amb-300x300.jpg',
            'https://www.sticasa.com/wp-content/uploads/2017/11/190045_amb-300x300.jpg',
            'https://www.sticasa.com/wp-content/uploads/2017/11/190046_amb-300x300.jpg',
            'https://www.sticasa.com/wp-content/uploads/2017/11/030118_amb-300x300.jpg'
        ],
    }),
    props:{
        options: {
            type: Object ,
            required: false ,
            default: ()=> { contest: 'info'}
        }
    },
    computed:{
        lista(){
            if ( this.options.contest === 'products' ){
                return this.products
            }
            return this.cards
        },
        height(){
            if ( this.options.contest === 'products' ) {
                return 'h-64' 
            }
            return 'h-80'
        },
        title(){
            if ( this.options.contest === 'products' ) {
                return "Products"
            }
            return 'Theme'
        }

    },
    methods:{
        bg(i){
            
            return {
                "background-image"  : "url(" +this.lista[i] + ")",
                "background-size"   : this.options.contest === 'products' ? "cover" : "cover",
                "background-position" : "top center" ,
                "background-repeat" : "no-repeat"
            }
        }
    }
}
</script>