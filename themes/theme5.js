const layout = {
    name        : 'Zig-Zag Blog',
    author      : 'A. Nardone',
    version     : '0.2.0',
    root        : 'w-full flex flex-wrap min-h-screen font-serif',
    homepage    : '/',
    initData : [
      { type: 'api'   , name: 'posts'     , api : '/posts?$sort[createdAt]=-1&$limit=4' },
      { type: 'api'   , name: 'services'  , api : '/sections?type=services' },
      { type: 'array' , name: 'skills'    , value : [{name:'CREATIVITY' , value: "90%"} , { name: 'ORGANIZATION' , value: "85%"} , { name: 'TEAM WORK' , value: "75%"} , { name: 'COMMUNICATION' , value: "70%"}]
      }
    ],

    navigation :  [{  
        css        : "items-start w-full z-50 pt-16 px-4 pb-4 bg-black rounded-br rounded-bl rounded-bl-lg",
        button     : "mt-5 mr-5 bg-blue-dark shadow text-white p-2 border-grey-light border-2",
        line       : "hover:text-black hover:bg-white text-right justify-start text-grey-dark" ,
        link       : 'text-grey-dark hover:text-red px-4 no-underline',
        left       : false,
        transition : 'slideright',
        orientation: 'horizontal' , 
        items:  [ { name : 'Home' , path: '/' } , { name: 'Blog' , path: '/blog' } , { name: 'About' , path: '/about' } , { name: 'How to' , path: '/howto' } , { name: 'Store' , path: '/store' } , { name: 'GitHub', path: 'https://github.com/swina/theme4nuxt'}] 
    }],
    template: {
        main : {
            css : "w-full",
            
        },
        areas: {
             order  : ['header','content','footer'],
             header : {
                root: 'w-full flex flex-wrap mb-12',
                blocks : [
                    {
                        css: 'w-full h-12 flex items-center pl-4 text-grey col-nav' ,
                        elements : [
                            { type: 'menu'      , navigation: 0, homepage: false}
                        ] 
                    },
                    {
                        css: 'w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-24 col  z-10' ,
                        elements : [
                            { type: 'html'      , content: '<h1 class="tracking-tight absolute mt-4 pl-2 p-0 text-4xl text-marine-light"><span class="font-light border-t-8">Theme<span class="text-white bg-orange-dark ml-2 p-2">4</span></span><span class="text-blue-dark border-b-8 border-grey-darkest">Nuxt</span></h1>' , homepage: false}
                        ]
                    },
                    {
                        css: 'w-full md:w-3/4 lg:w-3/4 xl:w-3/4 h-24 col justify-end text-right pr-4 col-nav' , 
                        elements : [
                            { type: 'nav'       , navigation: 0 , homepage: false}
                        ]
                    },
                    
                ]
            },
            content : {
                root: 'w-full flex flex-wrap',
                blocks : [
                    {
                        css: 'w-full',
                        elements: [
                            { type: 'css'       , content: 'bg-header-5 h-screen clipped-zig-zag -mt-24 z-back' , homepage: true }
                        ]
                    },
                    {
                        css: 'w-full bg-blue-lighter m-4 rounded-lg',
                        elements: [
                            { type: 'component' , component: 'core/services'  , options: {data: 'services'}  , title: 'Features' , homepage: true  },
                        ]
                    },
                    { 
                        css: 'w-full', 
                        elements : [
                            
                            { type: 'html'      , content: '<h1 class="text-center"><div class="clipped-tag-down -mb-4 m-auto border-8 items-center flex justify-center h-32 w-32 rounded-full bg-blue text-white">Blog</div></h1>' , homepage:true  },
                            { type: 'component' , component: 'posts'  , options: { data: 'info' }  ,  homepage: true , nuxt: true },
                            
                            { type: 'html'      , content: '<h1 class="text-center"><div class="clipped-tag-down -mb-4 m-auto border-8 items-center flex justify-center h-32 w-32 rounded-full bg-blue text-white">News</div></h1>' , homepage: true  },
                            { type: 'component' , component: 'posts'  , options: { data: 'info' } , homepage: true  }
                        ],
                    }
                ]
            },
            footer : {
                root    : 'w-full',
                blocks  : [
                    {
                        css: 'h-16 items-center  flex justify-center col-span-4 bg-teal-lighter text-center text-white' ,
                        elements : [
                            { type: 'html'      , content: '<small>Theme4Nuxt - a theme solution for Nuxtjs - Author: Antonio Nardone - License MIT</small>' , homepage: false} 
                        ]
                    }
                ]
            }
        },
    }
     
}

export default layout