const layout = {
    name     : 'e-commerce Waves',
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
        css     : "items-start w-full pt-16 px-2 pb-20 bg-purple-dark clipped-angle-right",
        button  : "m-4 bg-white p-4 border-black border-2 rounded-full",
        line    : "hover:text-black hover:bg-purple-light text-grey-lightest" ,
        link       : 'text-white hover:text-white hover:bg-indigo rounded hover:text-bold py-2 px-4 no-underline',
        left    : false,
        transition: 'slidedown',
        orientation: 'horizontal' , 
        items:  [ { name : 'Home' , path: '/' } , { name: 'Blog' , path: '/blog' } , { name: 'About' , path: '/about' } , { name: 'How to' , path: '/howto' } , { name: 'GitHub', path: 'https://github.com/swina/theme4nuxt'} ] 
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
                        css: 'w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-24 flex items-center col bg-purple-dark' ,
                        elements : [
                            { type: 'html'      , content: '<div class="p-4 z-40  rounded-lg text-white"><h1><span class="font-light border-t-2">Theme<span class="text-white bg-red px-2 py-1">4</span></span><span class="border-b-4">Nuxt</span></h1></div>' , homepage: false }
                        ],
                        homepage: false
                    },
                    {
                        css: 'w-full md:w-3/4 lg:w-3/4 xl:w-3/4 h-24 col z-30 justify-left items-center flex text-right pr-12 col-nav  bg-purple-dark' , 
                        elements : [
                            { type: 'menu'      , navigation: 0, homepage: false}
                        ]
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
                             style="display:inline"\
                             transform="translate(0,-230.85418)"\
                             id="layer1">\
                            <path\
                               id="path3718-8"\
                               d="m 311.2135,111.54192 c 10.02187,0.90553 18.93072,14.96274 27.35834,28.3983 12.4674,19.9564 26.03529,37.36756 40.68873,39.74068 14.48945,1.79183 28.48317,-11.67898 42.15651,-23.74824 17.54943,-16.29516 37.05843,-14.58314 54.04554,4.50786 11.42662,11.17421 22.17667,26.75935 32.85779,42.37177 -2.85513,11.37471 -7.91172,15.25547 -11.84567,22.87073 -19.58749,29.65937 -43.08072,38.70361 -65.29705,32.72223 C 293.99997,170.74184 111.3631,370.23254 1.3831537,235.70303 -2.3179157,221.94919 1.0483068,199.34435 7.0740331,195.69919 16.501793,184.76504 26.185404,175.65766 35.905929,167.05562 c 19.888243,-16.64639 40.66713,-27.63826 61.414352,-24.31126 11.506849,3.65769 21.602129,20.31482 31.521779,35.40098 8.35517,12.01525 17.73021,21.96279 27.37711,18.41424 9.97749,-3.36524 18.86921,-18.37023 26.72103,-35.16399 8.10375,-15.1734 17.93565,-25.61308 27.75655,-21.98575 14.51369,3.32724 28.61029,17.79554 43.34482,14.29152 16.02845,-2.16991 31.19561,-19.02196 45.93631,-35.73332 3.60704,-3.65264 7.38439,-6.53355 11.23562,-6.42612 z"\
                               style="opacity:1;fill:#794acf;stroke-width:0.72383827" />\
                          </g>\
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
                        
                        css: 'w-full flex flex-wrap justify-center', 
                        elements : [
                            { type: 'html' , content: '' , nuxt: true , homepage: false }
                        ]
                    },
                   
                    { 
                        css: 'w-full flex flex-wrap justify-center', 
                        elements : [ 
                            { type: 'component' , component: 'core/cards'  , options: { contest: 'products' } , homepage: true }
                        ],
                    },
                   
                    {
                        css: 'w-full bg-white -mb-8',
                        
                        elements: [
                           { type: 'html'  , content: '<svg\
                           xmlns:dc="http://purl.org/dc/elements/1.1/"\
                           xmlns:cc="http://creativecommons.org/ns#"\
                           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\
                           xmlns:svg="http://www.w3.org/2000/svg"\
                           xmlns="http://www.w3.org/2000/svg"\
                           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\
                           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\
                           width="100%"\
                           height="100%"\
                           viewBox="0 0 375.70834 66.145832"\
                           version="1.1"\
                           id="svg8"\
                           inkscape:version="0.92.4 (5da689c313, 2019-01-14)"\
                           sodipodi:docname="curves-down-5.svg">\
                          <defs\
                             id="defs2" />\
                          <sodipodi:namedview\
                             id="base"\
                             pagecolor="#ffffff"\
                             bordercolor="#666666"\
                             borderopacity="1.0"\
                             inkscape:pageopacity="0"\
                             inkscape:pageshadow="2"\
                             inkscape:zoom="0.49497475"\
                             inkscape:cx="678.95093"\
                             inkscape:cy="388.41641"\
                             inkscape:document-units="mm"\
                             inkscape:current-layer="layer1"\
                             showgrid="false"\
                             inkscape:window-width="1920"\
                             inkscape:window-height="1013"\
                             inkscape:window-x="-9"\
                             inkscape:window-y="-9"\
                             inkscape:window-maximized="1"\
                             units="px" />\
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
                             inkscape:label="Layer 1"\
                             inkscape:groupmode="layer"\
                             id="layer1"\
                             transform="translate(0,-230.85418)"\
                             style="display:inline">\
                            <path\
                               style="opacity:1;fill:#794acf;stroke-width:0.72383827"\
                               d="m 120.50652,403.04899 c -10.02187,-0.90553 -18.93072,-14.96274 -27.358335,-28.3983 -12.4674,-19.9564 -26.03529,-37.36756 -40.68873,-39.74068 -14.48945,-1.79183 -28.48317,11.67898 -42.156507,23.74824 -17.5494299,16.29516 -37.05843,14.58314 -54.04554,-4.50786 -11.42662,-11.17421 -22.17667,-26.75935 -32.85779,-42.37177 2.85513,-11.37471 7.91172,-15.25547 11.84567,-22.87073 19.58749,-29.65937 43.08072,-38.70361 65.29705012,-32.72223 C 137.72005,343.84907 320.35692,144.35837 430.33687,278.88788 c 3.70107,13.75384 0.33485,36.35868 -5.69088,40.00384 -9.42776,10.93415 -19.11137,20.04153 -28.8319,28.64357 -19.88824,16.64639 -40.66713,27.63826 -61.41435,24.31126 -11.50685,-3.65769 -21.60213,-20.31482 -31.52178,-35.40098 -8.35517,-12.01525 -17.73021,-21.96279 -27.37711,-18.41424 -9.97749,3.36524 -18.86921,18.37023 -26.72103,35.16399 -8.10375,15.1734 -17.93565,25.61308 -27.75655,21.98575 -14.51369,-3.32724 -28.61029,-17.79554 -43.34482,-14.29152 -16.02845,2.16991 -31.19561,19.02196 -45.93631,35.73332 -3.60704,3.65264 -7.38439,6.53355 -11.23562,6.42612 z"\
                               id="path3718-8"\
                               inkscape:connector-curvature="0"\
                               sodipodi:nodetypes="ccccccccccccccccccc" />\
                          </g>\
                        </svg>\
                         '}
                        ]
                    },
                    {
                        css: 'w-full flex items-center justify-center h-48 pt-8 -mt-2 bg-purple-dark',
                        elements: [
                            { type: 'html'       , content: '<div class="px-4 z-30 opacity-75 rounded-lg text-white"><h4>Do you need a theme solution for Nuxt?</h4><h1><span class="font-light">Theme<span class="text-black">4</span></span>Nuxt</h1><button class="my-4 py-2 px-4 bg-grey-light rounded shadow-lg hover:bg-indigo hover:text-white">Get Started</button></div>' , homepage: true }
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
                        css: 'h-16 items-center  flex justify-center w-full bg-purple-dark text-center text-white' ,
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