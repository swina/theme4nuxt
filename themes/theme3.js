const layout = {
    name     : 'SOHO Business',
    author    : 'A. Nardone',
    version   : '0.2.0',
    root     : 'w-full flex flex-wrap min-h-screen',
    homepage    : '/',
    initData : [
      { type: 'api'   , name: 'posts'     , api : 'https://www.techcrunch.com/wp-json/wp/v2/posts' },
      { type: 'api'   , name: 'services'  , api : '/sections?type=services' },
      { type: 'array' , name: 'skills'    , value : [{name:'CREATIVITY' , value: "90%"} , { name: 'ORGANIZATION' , value: "85%"} , { name: 'TEAM WORK' , value: "75%"} , { name: 'COMMUNICATION' , value: "70%"}]
      }
    ],

    navigation :  [{  
        css        : "items-start w-full z-50 pt-16 pl-8 pb-20 bg-red clipped-tag-down rounded-bl-lg",
        button     : "m-4 bg-red text-white p-4 border-red-light border-2 rounded-full",
        line       : "hover:text-black hover:bg-red-light text-white border-b border-red-light" ,
        link       : 'text-grey hover:text-black px-4 no-underline',
        left       : false,
        transition : 'slidedown',
        orientation: 'horizontal' , 
        items:  [ { name : 'Home' , path: '/' } , { name: 'Blog' , path: '/blog' } , { name: 'About' , path: '/about' } , { name: 'How to' , path: '/howto' } , { name: 'Store' , path: '/store' } , { name: 'GitHub', path: 'https://github.com/swina/theme4nuxt'}] 
    }],
    template: {
        main : {
            css : "w-full bg-black",
            
        },
        areas: {
             order  : ['header','content','footer'],
             header : {
                root: 'w-full flex flex-wrap',
                blocks : [
                   
                    {
                        css: 'w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-24 flex col z-30 bg-white border-b border-red items-center justify-center' ,
                        elements : [
                            { type: 'html'      , content: '<h1 class="text-white border border-white p-2 rounded-lg bg-red"><span class="font-light">Theme<span class="text-black">4</span></span>Nuxt</h1>' , homepage: false }
                        ]
                    },
                    {
                        css: 'w-full md:w-3/4 lg:w-3/4 xl:w-3/4 h-24 col z-30 bg-white justify-end items-center flex text-right pr-24 col-nav border-b border-red mobile' , 
                        elements : [
                            { type: 'menu'      , navigation: 0, homepage: false}
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
                            { type: 'css'       , content: 'bg-header-4 h-screen z-back -mt-24' , homepage: true }
                        ],
                        homepage: true
                    },
                    {
                        css: 'w-full bg-black text-grey-dark pb-24',
                        elements: [
                            { type: 'component' , component: 'core/services'  , options: { data: 'services' } ,  homepage: true  },
                        ],
                        homepage: true
                    },
                    {
                        css : 'w-full -mt-12 lg:-mt-24',
                        elements : [
                            { type: 'html' , content : '<svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero"><path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path><path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path><path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.400000003"></path></g><g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero"><path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path></g></g></svg>'
                            }
                        ],
                        homepage: true
                    },
                    { 
                        css: 'w-full pt-12 -mt-1 bg-white', 
                        elements : [
                            { type: 'html'      , content: '<h1 class="text-center"><div class="-mb-4 m-auto border-8 items-center flex justify-center h-32 w-32 bg-red text-white">Blog</div></h1>' , homepage: true  },

                            { type: 'component' , component: 'posts' , options: { data: 'info' } , homepage: true },
                            
                            { type: 'html'      , content: '<h1 class="text-center"><div class="-mb-4 m-auto border-8 border-red items-center flex justify-center h-32 w-32 bg-grey-darkest text-white">News</div></h1>' , homepage: true  },
                            { type: 'component' , component: 'posts' , options: { data: 'info' } , homepage: true , nuxt: true}
                        ],
                    },
                   
                ]
            },
            footer : {
                root    : 'w-full',
                blocks  : [
                    {
                        css: 'h-16 items-center  flex justify-center col-span-4 bg-red text-center text-white' ,
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
            'h-16 bg-red col' , 
            'h-16 col col-span-3 justify-end text-right pr-4 bg-red' , 
            'z-back h-screen bg-header-1 -mt-16 col-span-4' , 
            'col-span-4 sm:px-8 px-8 bg-black' , 
            'row-span-2 p-4 bg-black w-full' ,
            'row-span-2 bg-black col-span-2' , 
            'row-span-2 px-4 bg-black text-white' , 
            'h-16 items-center border-t-4 border-red flex justify-center col-span-4 bg-grey-darkest text-center text-grey' 
        ],
        blocks : [
            [{ type: 'html'      , content: '<h1 class="absolute mt-4 pl-4 text-white"><span class="font-light">Theme<span class="text-black">4</span></span>Nuxt</h1></h1>' }],
            [{ type: 'nav'       , navigation: 0 }],
            [{ type: 'html'      , content: ''}],
            [{ type: 'component' , name: 'v-coreServices'  , title: '' , css: 'bg-red-light shadow icon-rounded rounded text-white px-8 sm:px-16  -mt-16' ,  data : 'services'  , api: 'services' } ],
            [{ type: 'html'      , content: '' } ],
            [{ type: 'component' , name: 'v-coreTiles'  , data: 'posts' , nuxt: true  }],
            [{ type: 'component' , name: 'v-coreSkills' , data: 'skills' }],
            [{ type: 'html'      , content: '<small>Theme4Nuxt - a theme solution for Nuxtjs - Author: Antonio Nardone - License MIT</small>' }]
        ]
    },
    extra :{

    }
    */
}

export default layout