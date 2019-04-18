<template>
    <nav>
        <div :class="'fixed z-40 ' + custom">
            
            <button :class="'fixed pin-t pin-r flex flex-wrap z-50 items-center '  + icon" @click="hamburger=!hamburger">
                <transition name="rotate">
                    <svg v-if="!hamburger" class="relative pin-t pin-l fill-current h-5 w-5" id="SVGRoot" version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="m-30-0.15625 18.281 17.812" fill="none" stroke="#000" stroke-width="1px"/>
                        <path d="m-12.5-1.0938-18.281 17.813" fill="none" stroke="#000" stroke-width="1px"/>
                        <g transform="translate(.39024 .19512)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                           <path d="m9.5987 12.609-7.6475-6.17"/>
                            <path d="m17.246 6.439-7.6475 6.17"/>
                        </g>
                    </svg>
                </transition>
                <transition name="rotate">
                    <svg v-if="hamburger" class="relative pin-t pin-l fill-current text-white h-5 w-5" id="SVGRoot" version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="m-30-0.15625 18.281 17.812" fill="none" stroke="#000" stroke-width="1px"/>
                        <path d="m-12.5-1.0938-18.281 17.813" fill="none" stroke="#000" stroke-width="1px"/>
                        <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
                           <path d="m2.9565 16.721 13.941-13.502" stroke-width="2"/>
                            <path d="m16.858 16.742-13.917-13.533" stroke-width="1.9693"/>
                        </g>
                    </svg>
                </transition>
            </button>

            <transition :name="transition"> 
                <div v-if="hamburger" :class="menu">
                    <slot name="title"></slot>
                    <template v-for="(item,i) in items">
                        <div :class="'flex w-full ' + link" :key="'menu_' + i" >
                            <nuxt-link :to="item.path" 
                                @click.native="hamburger=false" 
                                :class="'items-center flex w-full no-underline h-10 pl-2 ' + link">{{item.name}}</nuxt-link>
                        </div>
                    </template>
                </div>
            </transition>
        </div>
     </nav>   
</template>

<script>
export default {
    data:()=>({
        hamburger: false
    }),
    computed:{
        custom(){
            let classes = ''
            let w = 'w-full md:w-1/2 lg:w-1/3 xl:w-1/4 '
            this.small ? w = 'w-full md:w-1/3 lg:w-1/4 xl:w-1/5 ' : this.large ? w = 'w-full md:w-1/2 lg:w-1/2 xl:w-1/2 ' : w = 'w-full md:w-1/2 lg:w-1/3 xl:w-1/4 '
            classes += w
            this.left ? classes += 'pin-l ' : classes += 'pin-r '
            this.bottom ? classes += 'pin-b ' : classes += 'pin-t '
            console.log ( this.bottom )
            return classes
        },
        icon(){
            let classes = this.button + ' '

            if ( !this.hamburger ) {
                //this.left ? classes += ' pin-l ' : classes += ' pin-r '
                return classes
            } else {
                //this.left ? classes += ' pin-l ' : classes += ' pin-r '
                return classes
            }    
            return classes
        },
        stroke(){
            if ( this.button ){
                console.log ( this.button.indexOf('text-') )
            }
            return '#000'
        },
        menu(){
            let classes = ''
            this.css ? classes += this.css : classes += ''
            //mt-8 hamburger-menu shadow items-start w-full pt-4 pl-12 pb-20 bg-black clipped-menu
            return classes
        }
    },
    props : {
        items   : { type: Array , required: false, default:()=>[] },
        link    : { type: String , required: false , default: '' },
        small   : { type: Boolean , required: false, default: false },
        large   : { type: Boolean , required: false , default: false },
        left    : { type: Boolean , required: false , default: false },
        bottom  : { type: Boolean , required: false , default: false },
        css     : { type: String , required: false , default: ''} ,
        button  : { type: String , required: false, default: '' } ,
        title   : { type: String , required: false, default: '<h2>Menu</h2>' },
        transition : { type: String, required:false , default: 'slide'} ,
        menubar    : { type: Boolean , required: false , default: true },
        orientation : { type: String , required: false , default: 'horizontal' }
        
    }
}
</script>
