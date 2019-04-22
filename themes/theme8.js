const layout = {
    name     : 'Classic Blog',
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
        css     : "items-start font-serif w-full pt-16 px-4 pb-20 bg-white shadow-lg h-screen",
        button  : "m-1 bg-white p-2 border-black border-2 rounded-full",
        line    : "hover:text-black hover:bg-white text-grey" ,
        link       : 'font-serif text-black hover:text-grey-dark hover:text-bold py-10 px-4 no-underline',
        left    : false,
        transition: 'slideright',
        orientation: 'horizontal' , 
        items:  [ { name : 'Home' , path: '/' } , { name: 'Blog' , path: '/blog' } , { name: 'About' , path: '/about' } , { name: 'How to' , path: '/howto' } , { name: 'Store' , path: '/store' } , { name: 'GitHub', path: 'https://github.com/swina/theme4nuxt'} ] 
    }],
    template: {
        main : {
            css : "w-full flex flex-wrap font-serif",
            
        },
        areas: {
             order  : ['header','aside' , 'content', 'footer'],
             header : {
                root: 'w-full flex flex-wrap',
                blocks : [
                   
                    {
                        css: 'w-full h-24  justify-center flex items-center col bg-white font-serif' ,
                        elements : [
                            { type: 'html'      , content: '<div class="p-4 z-40  rounded-lg text-black"><h1><span class="font-light border-t-2">Theme<span class="text-black bg-grey px-2 py-1">4</span></span><span class="border-b-4">Nuxt</span></h1></div>' , homepage: false }
                        ],
                        homepage: false
                    },
                    {
                        css: 'w-full h-24  justify-center flex items-center col bg-white font-serif border-b mb-4' ,
                        elements : [
                            { type: 'menu'      , navigation: 0, homepage: false}
                        ]
                    },
                    
                    
                    {
                        css: 'w-full h-64 bg-header-9 mx-8',
                        elements: [
                           { type: 'html'  , content: ''}
                        ],
                        homepage: true
                    }
                ]
            },
            content : {
                root: 'w-full md:w-3/4 lg:w-3/4 shadow-lg flex flex-wrap',
                blocks : [
                    {
                        css: 'w-full flex items-start',
                        elements: [
                            { type: 'html' , content: '<div class="p-8"><h1>Hello this is my Classic Blog Theme</h1><h2>Helping you to create your theme</h2><p class="w-2/3 text-grey-dark">Learn how to create a theme for Nuxt with a single configuration file.</p></div>' },
                        ],
                        homepage: true
                    },
                    {
                        css: 'w-full flex items-start',
                        elements: [
                            { type: 'html' , content: '' , nuxt: true  },
                        ],
                        homepage: false
                    },
                    {
                        css: 'w-1/2 flex items-center justify-center',
                        elements: [
                            { type: 'component' , component: 'core/skills' , options: { data: 'skills' , color:'bg-red' } },
                        ],
                        homepage: true
                    },
                    
                  
                ]
            },
            aside : {
                root: 'w-full md:w-1/4 lg:w-1/4 flex-row items-start',
                blocks : [
                    {
                        css: 'w-full pt-8 px-8',
                        elements: [
                            { type: 'html' , content: '<h2>Helping you to create your theme</h2><p class="w-2/3 text-grey-dark">Learn how to create a theme for Nuxt with a single configuration file.</p>'   },
                        ],
                        homepage: false
                    },
                    
                    {
                        css: 'w-full flex pt-8 px-8 leading-loose',
                        elements: [
                            { type: 'html' , content: '<h3>Tipography</h3><h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5>'   },
                        ],
                        homepage: false
                    },
                    {
                        css: 'w-full flex pt-8 px-8',
                        elements: [
                            { type: 'html' , content: '<h3>Bullet list</h3><ul><li>Link 1</li><li>Link 2</li></ul>\
                            <h3>Ordered list</h3><ol><li>List 1</li><li>List 2</li><li>List 3</li></ol>'   },
                        ],
                        homepage: false
                    },
                ]
            },
            footer : {
                root    : 'w-full',
                blocks  : [
                    {
                        css: 'h-16 items-center  flex justify-center col-span-4  text-center text-grey-dark text-sm border-t' ,
                        elements : [
                            { type: 'html'      , content: '<small>Theme4Nuxt - a theme solution for Nuxtjs - Author: Antonio Nardone - License MIT</small>' , } 
                        ],
                        homepage: false
                    }
                ]
            }
        },
    }
    
}

export default layout