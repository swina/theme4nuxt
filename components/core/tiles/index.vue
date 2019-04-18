<template>
    <div class="w-full p-4">
    <div class="tiles">
        <template v-for="(item,index) in items">
            <div class="tile relative" :key="'post_' + index" @click.native="item.link">
            
                <img  v-if="item.jetpack_featured_media_url" :src="item.jetpack_featured_media_url"/>
                <a :href="item.link" target="_blank" class="clipped-trap-r-b bg-black w-full p-4 mb-1 absolute pin-b no-underline font-light">
                    <h4 class="font-light text-white bg-black" v-html="item.title.rendered"></h4>
                </a>

            </div>
        </template>
    </div>
    </div>
</template>

<script>
export default {
  props :{
    options: { type: Object , required: true , default:()=>{}},
    //items: { type: Array, required: false , default:()=>[]}
  },
  computed:{
      items(){
          return this.options.items
      }
  },
  methods: {
        linkProperties (url) {
        if (url.match(/^(http(s)?|ftp):\/\//)) {
          console.log ( url )
          return {
            is: 'a',
            href: url,
            target: '_blank',
            rel: 'noopener'
          }
        }
        return {
          is: 'nuxt-link',
          to: url
        }
      }
  }
}
</script>
<style>
.tiles {
    display:grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;
}

@media screen and (max-width:800px){
  .tiles {
    display:grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
}

.tile img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.tile {
    grid-column: span 2;
}

.tile:nth-child(1){
    grid-column: span 6;
}

.tile:nth-child(2){
    grid-column: span 4;
    grid-row: span 2;
}


.tile:nth-child(3),
.tile:nth-child(4){
    grid-column: span 2;
}

@media screen and (max-width:800px){
    .tile {
        grid-column: span 6; 
    }

    .tile:nth-child(1){
        grid-column: span 6;
    }

    .tile:nth-child(2){
        grid-column: span 6;
    }


    .tile:nth-child(3),
    .tile:nth-child(4){
        grid-column: span 6;
    }
}
.clipped-trap-r-b {

-webkit-clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
}

/*
.tile:last-child {
    grid-column: span 6;
}


.tile:nth-child(4),
.tile:nth-child(5),
.tile:nth-child(6),
.tile:nth-child(7),
.tile:nth-child(8),
.tile:nth-child(9),
.tile:nth-child(10){
    grid-column: span 2;
}
*/
</style>