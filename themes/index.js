const layout = {
    name        : 'Corporate Business',
    author      : 'A. Nardone',
    version     : '0.2.0',
    license     : 'MIT' ,
    root        : 'w-full flex flex-wrap min-h-screen',
    homepage    : '/',
    initData : [
      { type: 'api'   , name: 'posts'     , api : 'https://www.techcrunch.com/wp-json/wp/v2/posts' } ,
      { type: 'array'   , name: 'services'  , value : [
        {"type":"services",
        "title":"CSS Only",
        "abstract":"Theme4Nuxt is developed using only CSS with the Tailwind framework",
        "path":"css-only",
        "_id":"0tSvdJebN4cKmKa6",
        "icon":"style"},
        {"type":"services",
        "title":"Custom Design",
        "abstract":"Create your custom theme without any opinionated framework",
        "icon":"chrome_reader_mode",
        "path":"theme-builder",
        "_id":"MSOXCaCn4AfNz57w"},
        {"type":"services",
        "title":"Integration",
        "abstract":"Feel free to use your own components, API and data",
        "path":"api-data",
        "_id":"ueN9BbEdxvKoZWNi"
        ,"icon":"compare_arrows"}
    ] },
      { type: 'array' , name: 'skills'    , value : [{name:'CREATIVITY' , value: "90%"} , { name: 'ORGANIZATION' , value: "85%"} , { name: 'TEAM WORK' , value: "75%"} , { name: 'COMMUNICATION' , value: "70%"}]
      }
    ],
    

    navigation :  [{  
        css         : "items-start w-full pt-16 px-4 pb-20 bg-black opacity-75 h-screen",
        button      : "m-1 bg-white p-2 border-black border-2 rounded-full",
        line        : "hover:text-black hover:bg-white text-grey-lightest" ,
        link        : 'text-white hover:text-black hover:bg-white hover:text-bold py-10 px-4 no-underline',
        left        : false,
        transition: 'slideright',
        orientation : 'horizontal' , 
        items       :  [ { name : 'Home' , path: '/' } , { name: 'Blog' , path: '/blog' } , { name: 'About' , path: '/about' } , { name: 'How to' , path: '/howto'  } , { name: 'Store' , path: '/store' } ] 
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
                        css: 'w-1/2 flex items-center h-12 bg-black text-grey text-xs pl-4 mobile',
                        elements: [
                            { type: 'html' , content: '<span>theme4nuxt@moodgiver.com</span>' }
                        ],
                        homepage: false
                    },
                    {
                        css: 'w-1/2 flex items-center justify-end h-12 bg-black text-grey text-xs pr-16 mobile',
                        elements: [
                            { type: 'html' , content: '<span class="justify-end">+1 123 456 7890</span>' }
                        ],
                        homepage: false
                    },
                    {
                        css: 'w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-24 opacity-75 justify-end flex items-center col bg-black' ,
                        elements : [
                            { type: 'html'      , content: '<div class="p-4 z-40 rounded-lg text-white"><h1><span class="font-light border-t-2">Theme<span class="text-white bg-blue-dark px-2 py-1">4</span></span><span class="border-b-4">Nuxt</span></h1></div>' , homepage: false }
                        ],
                        homepage: false
                    },
                    {
                        css: 'w-full md:w-1/2 lg:w-1/2 xl:w-1/2 border-l opacity-75 h-24 col z-30 justify-left items-center flex text-right pr-12 col-nav  bg-black mobile' , 
                        elements : [
                            { type: 'menu'      , navigation: 0, homepage: false}
                        ]
                    },
                    
                    
                    {
                        css: 'w-full bg-green-light flex h-128 items-center p-8 -mt-24 bg-header-8',
                        
                        elements: [
                           { type: 'html'  , content: '<h1 class="text-white">Theme4Nuxt</h1><h4 class="font-light">A solution to prototype or create themes for Nuxt using tailwind.css framework</h4><button class="bg-white text-black rounded mt-4 py-2 px-4 hover:bg-blue-dark hover:text-white">Get Started</button>' , action: '/howto'}
                        ],
                        homepage: true
                    }

                ]
            },
            content : {
                root: 'w-full flex flex-wrap',
                blocks : [
                    {
                        css: 'w-full bg-transparent text-grey mx-4 -mt-20 py-6',
                        elements: [
                            { type: 'component' , component: 'core/services' , options: { data: 'services' , title: 'Features' } },
                        ],
                        homepage: true
                    },
                    
                    {
                        css: 'w-1/2 flex items-center gradient-blue-green h-64 text-white py-12 px-8 justify-center',
                        elements: [
                            { type: 'html' , content: '<h2>Helping you to create your theme</h2><p class="w-2/3 text-grey-dark">Learn how to create a theme for Nuxt with a single configuration file.</p>' , homepage: true  },
                        ],
                        homepage: true
                    },
                    
                    {
                        css: 'w-1/2 flex items-center gradient-blue-green h-64 text-grey-dark py-12 justify-center',
                        elements: [
                            { type: 'html' , content: '<ul><li>only CSS classes based on tailwind.css</li><li>create awesome themes</li><li>easy integration</li><li>fast theme/layout prototype</li><li>create html semantic elements</li><li>add markdown pages</li></ul>' , homepage: true  },
                        ],
                        homepage: true
                    },
                    
                    { 
                        css: 'w-full flex flex-wrap mt-4', 
                        elements : [ 
                            { type: 'component' , name: 'v-coreCards'  , component: 'core/cards' , options: { contest: 'info' } , data: [] , homepage: true , nuxt: true }
                        ]
                    },
                            
                  
                ]
            },
            footer : {
                root    : 'w-full',
                blocks  : [
                    {
                        css: 'h-16 items-center  flex justify-center col-span-4 bg-black text-center text-white' ,
                        elements : [
                            { type: 'html'      , content: '<small>Theme4Nuxt - a theme solution for Nuxtjs - Author: Antonio Nardone - License MIT</small>' , homepage: false} 
                        ]
                    }
                ]
            }
        },
    },
    extra: {
        html : '<div class="fixed pin-b pin-r p-1 z-50 bg-black text-white text-xs rounded-tl">Corporate Business Theme 0.2.0</div>'
    }
    
}

export default layout