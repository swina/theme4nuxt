const layout = {
    name     : 'Tiles Landing Page',
    author    : 'A. Nardone',
    version   : '0.2.0',
    root     : 'w-full flex flex-wrap min-h-screen',
    homepage    : '/',
    initData : [
      { type: 'api'   , name: 'posts'     , api : 'https://www.techcrunch.com/wp-json/wp/v2/posts' } , //'/posts?$sort[createdAt]=-1&$limit=4' },
      { type: 'api'   , name: 'info'     , api :  'https://www.gianlucagiacalone.it/wp-json/wp/v2/posts' } , // '/posts?$sort[createdAt]=-1&$limit=4' },
      { type: 'api'   , name: 'services'  , api : 'http://localhost:3030/sections?type=services' },
      { type: 'array' , name: 'skills'    , value : [{name:'CREATIVITY' , value: "90%"} , { name: 'ORGANIZATION' , value: "85%"} , { name: 'TEAM WORK' , value: "75%"} , { name: 'COMMUNICATION' , value: "70%"}]
      }
    ],

    navigation :  [{  
        css     : "items-start w-full pt-16 pl-8 pb-20 bg-grey-dark clipped-angle-right",
        button  : "m-4 bg-white p-4 border-black border-2 rounded-full",
        line    : "hover:text-grey hover:bg-black text-grey-lightest" ,
        link       : 'text-white hover:text-white hover:bg-black rounded hover:text-bold py-2 px-4 no-underline',
        left    : false,
        transition: 'slidedown',
        orientation: 'horizontal' , 
        items:  [ { name : 'Home' , path: '/' } , { name: 'Blog' , path: '/blog' } , { name: 'About' , path: '/about' } , { name: 'How to' , path: '/howto' } , { name: 'Store' , path: '/store' } , { name: 'GitHub', path: 'https://github.com/swina/theme4nuxt'} ]  
    }],
    template: {
        main : {
            css : "w-full bg-black",
            
        },
        areas: {
             order  : ['header','content' ],
             header : {
                root: 'w-full flex flex-wrap',
                blocks : [
                   
                    
                   
                    {
                        css: 'w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-full-calc-1-4 flex items-center col bg-black z-10' ,
                        elements : [
                            { type: 'html'      , content: '<div class="p-4 z-40 text-white"><h1><span class="font-light border-t-2">Theme<span class="text-white bg-red px-2 py-1">4</span></span><span class="border-b-4">Nuxt</span></h1></div>' , homepage: false }
                        ],
                        homepage: false
                    },
                    {
                        css: 'w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-full-calc-1-4 flip col z-30 justify-left items-center flex bg-grey-darkest z-10 mobile' , 
                        elements: [
                            { type: 'html'  , content: '<div class="bg-teal flex items-center h-full m-auto w-full text-2xl text-white"><h3 class="m-auto font-light">Home</h3></div>' , action: '/'}
                         ],
                         homepage: false
                    },
                    {
                        css: 'w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-full-calc-1-4 flip flex items-center col bg-black z-10 mobile' ,
                        elements: [
                            { type: 'html'  , content: '<div class="bg-red flex items-center h-full m-auto w-full text-2xl text-white"><h3 class="m-auto font-light">Blog</h3></div>' , action: '/blog'}
                        ],
                        homepage: false
                    },
                    {
                        css: 'w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-full-calc-1-4 col z-30 justify-left items-center flex text-right pr-12 col-nav  bg-header-3 z-10' , 
                        elements: [
                            { type: 'html'  , content: ''}
                         ],
                         homepage: false 
                    },
                    
                ]
            },
            content : {
                root: 'w-full flex flex-wrap',
                blocks : [
                    {
                        css: 'w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-full-calc-1-2 flex items-center bg-header-1 mobile' , 
                        elements: [
                            { type: 'css'      , content: 'bg-header-1'}
                         ],
                         homepage: true
                    },
                    {
                        css: 'w-full md:w-3/4 lg:w-3/4 xl:w-3/4 h-full-calc-1-2 py-8 px-4 bg-header-2 z-10 mobile' , 
                        elements: [
                            { type: 'html'  , content: '<div class="px-4 z-30 opacity-75 rounded-lg text-white"><h4 class="font-light">Do you need a theme solution for Nuxt?</h4><h1><span class="font-light">Theme<span class="text-red">4</span></span>Nuxt</h1><button class="my-4 py-2 px-4 bg-grey-light rounded shadow-lg hover:bg-red hover:text-white">Get Started</button></div>' , action: '/howto' }
                         ],
                         homepage: true
                    },
                    {
                        css: 'w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-full-calc-1-4 flip flex items-center col bg-grey-darkest mobile' ,
                        elements: [
                            { type: 'html'  , content: '<div class="bg-blue flex items-center h-full-calc-1-4 m-auto w-full text-2xl text-white"><h3 class="m-auto font-light">About</h3></div>' , action: '/about'}
                        ],
                        homepage: false
                    },
                    {
                        css: 'w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-full-calc-1-4 col z-30 justify-left items-center flex bg-header-5' , 
                        elements: [
                            { type: 'html'  , content: ''}
                         ],
                         homepage: false 
                    },
                    {
                        css: 'w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-full-calc-1-4 slidedown text-center flex items-center col bg-grey-darkest mobile' ,
                        elements: [
                            { type: 'html'  , content: '<div class="bg-orange flex items-center h-full-calc-1-4 m-auto w-full text-2xl text-black"><h3 class="m-auto font-light">How to</h3></div>' , action: '/howto'}
                        ],
                        homepage: false
                    },
                    {
                        css: 'w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-full-calc-1-4 slidedown text-center flex items-center col bg-black mobile' ,
                        elements: [
                            { type: 'html'  , content: '<div class="bg-green-light flex items-center h-full-calc-1-4 m-auto w-full text-2xl text-black"><h3 class="m-auto font-light">Store</h3></div>' , action: '/store'}
                        ],
                        homepage: false
                    },
                    {
                        css: 'w-full flex flex-wrap bg-white' , 
                        elements: [
                            { type: 'html'  , content: '' , nuxt: true}
                         ],
                         homepage: false 
                    },
                ]
            },
            
        },
    }
    /*
    template: {
        main : {
            css : "w-full grid columns-4 rows-5",
            
        },
        grid : [
            'h-16 bg-red' , 
            'h-16 bg-red col col-span-2 flex items-center justify-center' ,
            'h-16 bg-red col', 
            'col-span-4' , 
            'row-span-2 col-span-4 p-12' , 
            'row-span-2 p-12 col-span-2' , 
            'row-span-2 p-12 col-span-2' , 
            'h-16 items-center flex justify-center col-span-4 bg-grey-light' 
        ],
        blocks : [
            [{ type: 'html'      , content: '<h1 class="absolute z-50 pin-t pin-l mt-4 pl-4 text-black"><span class="font-light">Theme<span class="text-white">4</span></span>Nuxt</h1></h1>' ,homepage: false }],
            [{ type: 'menu'  , navigation: 0, homepage: false}],
            [{ type: 'nav'  , navigation: 0, homepage: false}],
            [{ type: 'html' , content: '<div class="flex h-screen justify-center mt-16 w-3/4">\
              <div class="shadow opacity-75 block  h-auto ml-4 bg-white font-light text-black p-4 rounded">\
                <h1><span class="font-light tracking-tight text-orange my-4">Need a theme for Nuxt?</span>\
                    <h2 class="font-light text-grey-darkest my-3">Discover how to create themes for Nuxt</h2>\
                    <p>A creative way to design your theme for Nuxt.</p>\
                    <p class="pb-10">It\' easy, fast and replicable.</p>\
                    <button class="bg-red text-white py-4 px-8 border rounded">More</button>\
                </h1>\
                </div></div>' , action: '/howto' , homepage: true }], 
            [
                { type: 'component' , name: 'v-coreServices'  , title: '' , css: 'bg-red-light shadow icon-rounded rounded text-white px-8 -mt-16' ,  data : 'services'  , api: 'services' , homepage: true  }
            ] ,    
            [ 
                { type: 'component' , name: 'v-posts' , data: 'info' , homepage: true , nuxt: true } , 
                { type: 'component' , name: 'v-coreSkills' , data: 'skills' ,homepage: true} 
            ],
            [
                { type: 'component' , name: 'v-coreTiles'  , data: 'posts' , homepage: true }
            ],
            [
                { type: 'html'      , content: '<small>Theme4Nuxt - a theme solution for Nuxtjs - Author: Antonio Nardone - License MIT</small>' }
            ]
        ],
        nuxt: 'mt-4'
    },
    
    extra: {
        html: '<div class="w-full absolute min-w-full pin-t pin-l h-screen z-back flex flex-wrap">\
                <div class="absolute pin-t pin-r w-1/2 min-h-full z-0 bg-orange clipped-half-down" style="z-index:-1"></div>\
                <div class="absolute pin-t w-full min-h-full z-0 bg-red" style="z-index:-2"></div>\
                </div>',
        action: '/howto'
    }   
    */ 
}

export default layout