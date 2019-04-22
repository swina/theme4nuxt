const layout = {
    name     : 'Angle e-commerce',
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
        css     : "items-start w-full pt-16 px-2 pb-20 bg-green-light clipped-angle-left",
        button  : "m-4 bg-white p-4 border-black border-2 rounded-full",
        line    : "hover:text-black hover:bg-green-lighter text-grey-lightest" ,
        link       : 'text-white hover:text-white hover:bg-black rounded hover:text-bold py-2 px-4 no-underline',
        left    : false,
        transition: 'slidedown',
        orientation: 'horizontal' , 
        items:  [ { name : 'Home' , path: '/' } , { name: 'Blog' , path: '/blog' } , { name: 'About' , path: '/about' } , { name: 'How to' , path: '/howto' } , { name: 'Store' , path: '/store' } ] 
    }],
    template: {
        main : {
            css : "w-full",
            
        },
        areas: {
             order  : ['header','content','footer'],
             header : {
                root: 'w-full flex flex-wrap',
                blocks : [
                   
                    
                   
                    {
                        css: 'w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-24 flex items-center col bg-green-light' ,
                        elements : [
                            { type: 'html'      , content: '<div class="p-4 z-40  rounded-lg text-white"><h1><span class="font-light border-t-2">Theme<span class="text-white bg-red px-2 py-1">4</span></span><span class="border-b-4">Nuxt</span></h1></div>' , homepage: false }
                        ],
                        homepage: false
                    },
                    {
                        css: 'w-full md:w-3/4 lg:w-3/4 xl:w-3/4 h-24 col z-30 justify-left items-center flex text-right pr-12 col-nav  bg-green-light' , 
                        elements : [
                            { type: 'menu'      , navigation: 0, homepage: false}
                        ]
                    },
                    
                    
                    {
                        css: 'w-full bg-green-light h-32 clipped-angle-left-lg',
                        
                        elements: [
                           { type: 'html'  , content: ''}
                        ]
                    }
                ]
            },
            content : {
                root: 'w-full flex flex-wrap',
                blocks : [
                   
                    { 
                        css: 'w-full flex flex-wrap justify-center', 
                        elements : [ 
                            { type: 'component' , component: 'core/cards'  , options: { contest: 'products' }, homepage: true , nuxt: true }
                        ]
                    },

                    
                    {
                        css: 'w-full bg-green-light h-32 clipped-angle-up-right',
                        
                        elements: [
                           { type: 'html'  , content: ''}
                        ]
                    },
                   
                    
                    {
                        css: 'w-full flex items-center justify-center h-48 pt-8 -mt-2 bg-green-light',
                        elements: [
                            { type: 'html'       , content: '<div class="px-4 z-30 opacity-75 rounded-lg text-white"><h4>Do you need a theme solution for Nuxt?</h4><h1><span class="font-light">Theme<span class="text-black">4</span></span>Nuxt</h1><button class="my-4 py-2 px-4 bg-grey-light rounded shadow-lg hover:bg-indigo hover:text-white">Get Started</button></div>' , homepage: true }
                        ],
                        homepage: true
                    },
                    {
                        css: 'w-full bg-green-light text-grey-light shadow',
                        elements: [
                            { type: 'component' , component: 'core/services'  , options : { data: 'services' , single: 'h-full py-8 shadow-lg px-4 bg-blue-dark rounded'} , title: 'Features' , homepage: true  },
                        ],
                        homepage: true
                    },
                    /*{ 
                        css: 'w-full md:w-full lg:w-1/2 xl:w-1/2', 
                        elements : [
                            { type: 'html'      , content: '<h1 class="text-center"><div class="-mb-4 m-auto border-8 items-center flex justify-center h-32 w-32 bg-indigo-dark text-white">Blog</div></h1>' , homepage: true  },
                            //{ type: 'component' , name: 'v-posts'  , data: 'info'  ,  homepage: true },
                        ]
                    },
                    { 
                        css: 'w-full md:w-full lg:w-1/2 xl:w-1/2', 
                        elements : [    
                            
                            
                            { type: 'html'      , content: '<h1 class="text-center"><div class="-mb-4 m-auto border-8 border-indigo-dark items-center flex justify-center h-32 w-32 bg-grey text-indigo-dark">News</div></h1>' , homepage: true  },
                            //{ type: 'component' , name: 'v-posts'  , data: 'info' , homepage: true  }
                        ],
                    },
                    */
                  
                ]
            },
            footer : {
                root    : 'w-full',
                blocks  : [
                    {
                        css: 'h-16 items-center  flex justify-center col-span-4 bg-green-light text-center text-white' ,
                        elements : [
                            { type: 'html'      , content: '<small>Theme4Nuxt - a theme solution for Nuxtjs - Author: Antonio Nardone - License MIT</small>' , homepage: false} 
                        ]
                    }
                ]
            }
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