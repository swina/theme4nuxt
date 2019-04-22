const layout = {
    name     : 'Marine Theme',
    author    : 'A. Nardone',
    version   : '0.2.0',
    root     : 'w-full flex flex-wrap min-h-screen',
    homepage    : '/',
    initData : [
        { 
            type    : 'array' ,
            
            name: 'prices',
            value: [
                {
                    title   : '<h3 class="font-light text-blue-light">Developer</h3>',
                    price   : '<h1 class="border-b">Free</h1>',
                    summary : '<div class="pt-4">Includes</div>',
                    list    : ['5 Projects','1 Member account', '1 Database' , '1 GB Hosting' ],
                    button  : 'Start'
                },
                {
                    title   : '<h3 class="font-light text-orange-dark">Pro</h3>',
                    price   : '<h1>$ 9/<small>mo.</small></h1>',
                    summary : '<div class="pt-4">Includes</div>',
                    list    : ['50 Projects','3 Member accounts', '10 Database' , '10 GB Hosting' ],
                    button  : 'Start'
                },
                {
                    title   : '<h3 class="font-light text-green">Business</h3>',
                    price   : '<h1>$ 15/<small>mo.</small></h1>',
                    summary : '<div class="pt-4">Includes</div>',
                    list    : ['5 Projects','1 Member account', '1 Database' , '1 GB Hosting' ],
                    button  : 'Start'
                },
                {
                    title   : '<h3 class="font-light text-red">Agency</h3>',
                    price   : '<h1>$ 29/<small>mo.</small></h1>',
                    summary : '<div class="pt-4">Includes</div>',
                    list    : ['50 Projects','3 Member accounts', '10 Database' , '10 GB Hosting' ],
                    button  : 'Start'
                },
            ]
        } ,
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
        css         : "items-start w-full pt-16 px-4 pb-20 bg-indigo rounded-bl-lg",
        button      : "m-4 bg-white p-4 border-black border-2 rounded-full",
        line        : "hover:text-black hover:bg-orange text-grey-lightest" ,
        link        : 'text-white hover:text-white hover:bg-indigo rounded hover:text-bold py-2 px-4 no-underline',
        left        : false,
        bottom      : false,
        transition  : 'slidedown',
        orientation : 'horizontal' , 
        items       :  [ { name : 'Home' , path: '/' } , { name: 'Blog' , path: '/blog' } , { name: 'About' , path: '/about' } , { name: 'How to' , path: '/howto' } , { name: 'Store' , path: '/store' } , { name: 'GitHub', path: 'https://github.com/swina/theme4nuxt'}  ] 
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
                        css: 'w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-24 flex items-center col bg-blue' ,
                        elements : [
                            { type: 'html'      , content: '<div class="p-4 z-30  rounded-lg text-white"><h1><span class="font-light border-t-2">Theme<span class="text-white bg-red px-2 py-1">4</span></span><span class="border-b-4">Nuxt</span></h1></div>' , homepage: false }
                        ],
                        homepage: false
                    },
                    {
                        css: 'w-full md:w-3/4 lg:w-3/4 xl:w-3/4 h-24 z-30 justify-left items-center flex pr-12 bg-blue' , 
                        elements : [
                            { type: 'menu'      , navigation: 0, homepage: false}
                        ]
                    },
                    {
                        css: 'w-full flex items-center justify-center h-64 bg-blue',
                        elements: [
                            { type: 'html'       , content: '<div class="p-4 z-30 opacity-75 rounded-lg text-white"><h4>Do you need a theme solution for Nuxt?</h4><h1><span class="font-light">Theme<span class="text-black">4</span></span>Nuxt</h1><button class="my-4 py-2 px-4 bg-grey-light rounded shadow-lg hover:bg-indigo hover:text-white">Get Started</button></div>' , action: '/howto' }
                        ],
                        homepage: true
                    },
                   
                    {
                        css: 'w-full bg-white',
                        
                        elements: [
                           { type: 'html'  , content: '<svg\
                            xmlns:dc="http://purl.org/dc/elements/1.1/"\
                            xmlns:cc="http://creativecommons.org/ns#"\
                            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\
                            xmlns:svg="http://www.w3.org/2000/svg"\
                            xmlns="http://www.w3.org/2000/svg"\
                            id="svg8"\
                            version="1.1"\
                            viewBox="0 0 375.70834 66.145832"\
                            height="100%"\
                            width="100%">\
                           <defs\
                              id="defs2" />\
                           <metadata\
                              id="metadata5">\
                             <rdf:RDF>\
                               <cc:Work\
                                  rdf:about="">\
                                 <dc:format>image/svg+xml</dc:format>\
                                 <dc:type\
                                    rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\
                                 <dc:title></dc:title>\
                               </cc:Work>\
                             </rdf:RDF>\
                           </metadata>\
                           <g\
                              transform="translate(0,-230.85418)"\
                              id="layer1">\
                             <path\
                                id="path3718-8"\
                                d="m 239.94849,294.09559 c 8.72601,-0.50407 16.48291,-8.32901 23.82081,-15.80792 10.85533,-11.10874 22.66885,-20.80067 35.42756,-22.12166 12.61592,-0.99743 24.8002,6.5011 36.70553,13.21946 15.28024,9.0707 32.26666,8.11771 47.05729,-2.5093 9.94912,-6.22013 19.30914,-14.89561 28.60917,-23.58625 -2.48595,-6.33174 -6.88871,-8.49197 -10.31399,-12.731 -17.05476,-16.5099 -37.51025,-21.54438 -56.85393,-18.21484 -119.4402,48.79785 -278.461563,-62.24869 -374.220743,12.63719 -3.22251,7.65608 -0.29155,20.23907 4.95503,22.26815 8.20872,6.08649 16.6402095,11.15613 25.10383954,15.94445 17.31663046,9.26622 35.40874046,15.38484 53.47328046,13.53287 10.01898,-2.03606 18.8089,-11.30825 27.44592,-19.70596 7.27482,-6.68829 15.43764,-12.2256 23.837163,-10.2503 8.68737,1.87326 16.42935,10.2258 23.26591,19.57405 7.05591,8.44628 15.61652,14.25752 24.16754,12.23837 12.63703,-1.8521 24.91089,-9.90589 37.7402,-7.95537 13.95592,1.20788 27.16191,10.58858 39.9966,19.89096 3.14063,2.03324 6.42955,3.6369 9.78282,3.5771 z"\
                                style="opacity:1;fill:#3490DC;stroke-width:0.50392538" />\
                           </g>\
                           <g\
                              id="layer2" />\
                         </svg>\
                         '}
                        ]
                    }
                ]
            },
            content : {
                root: 'w-full flex flex-wrap',
                blocks : [
                    
                    { 
                        css: 'w-full flex flex-wrap mt-4', 
                        elements : [ 
                            { type: 'component' , name: 'v-coreCards'  , component: 'core/cards' , options: { contest: 'info' } , data: [] , homepage: true , nuxt: true }
                        ]
                    },

                    {
                        css: 'w-full bg-blue-light text-blue-lighter shadow my-8',
                        elements: [
                            { type: 'component' , component: 'core/services' , options: { data: 'services' , title: 'Features' } },
                        ],
                        homepage: true
                    },
                    {
                        css: 'w-full shadow my-8',
                        elements: [
                            { type: 'component' , component: 'core/prices' , 
                                options: { 
                                    data    : 'prices' ,
                                    style   : "px-8 scale-1",
                                    title   : '<h1 class="font-light text-2xl">Pricing</h1>' ,
                                    css     : 'rounded-t border h-64 bg-white hover:shadow-lg text-center text-grey-darkest p-4 pb-8',
                                    action  : 'bg-white border-l border-r border-b rounded-b flex items-center justify-center',
                                    button  : 'btn bg-green-light hover:bg-green text-white rounded m-2',
                                } 
                            },
                        ],
                        homepage: true
                    },
                    /*
                    {
                        css: "w-full h-64",
                        elements: [
                            { type: 'component' , component: 'core/heading' , options: { css: 'object-cover h-64' , bg: 'https://storage.googleapis.com/ghostfood-539ae.appspot.com/theme4nuxt/bg-3.jpg'}}
                        ]
                    },
                    { 
                        css: 'w-full md:w-full lg:w-1/2 xl:w-1/2', 
                        elements : [
                            { type: 'html'      , content: '<h1 class="text-center"><div class="-mb-4 m-auto border-8 items-center flex justify-center h-32 w-32 bg-indigo-dark text-white">Blog</div></h1>' , homepage: true  },
                            { type: 'component' , component: 'posts' , options: { data: 'info' } }
                        ],
                        homepage: true
                    },
                    
                    { 
                        css: 'w-full md:w-full lg:w-1/2 xl:w-1/2', 
                        elements : [    
                            
                            
                            { type: 'html'      , content: '<h1 class="text-center"><div class="-mb-4 m-auto border-8 border-indigo-dark items-center flex justify-center h-32 w-32 bg-grey text-indigo-dark">News</div></h1>' , homepage: true  },
                            { type: 'component' , component: 'posts' , options: { data: 'info' } }
                        ],
                        homepage: true
                    },
                    */
                  
                ]
            },
            footer : {
                root    : 'w-full',
                blocks  : [
                    {
                        css: 'h-16 items-center  flex justify-center col-span-4 bg-blue-light text-center text-white' ,
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