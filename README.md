# theme4nuxt


Theme4Nuxt is a basic theming solution for Nuxtjs. I decided to develop it in order to have an easy way to prototype layouts/themes for Nuxt using a configuration file.

Based only on `tailwind.css` framework is developed to give the possibility to create your custom design without any opinionated framework.

# Features

- custom design based on CSS only
- fast theme/layout prototype
- create html semantic elements (header,section,aside,footer)
- easy full responsive design implementation
- easy integration with existing
    - components
    - api
    - markdown pages
- easy theme switching
- homepage design
- extra basic components included (used in this demo)
    - responsive navigation
    - progress bars 
    - cards
    - features/services info box
    - call for action 


# How it works

**Requirements** : tailwind.css


Theme4Nuxt is based on the following:
- a **theme** js file (./themes/index.js)
- a **single vue** file to deploy the theme to be used as layout template (./layout/theme.vue)
- a Vue **component wrapper** in order to integrate any component dynamically (./components/theme/ComponentWrapper.vue) 
- a Vue **navigation component** in order to create a navigation system (./components/theme/nav/index.vue)
- a **theme4nuxt** plugin in order to preload data server side (./plugins/theme4nuxt.js)

    

## Theme file

Create a `themes` folder in your project root. 
    
Create an `index.js` in the themes folder

#### Structure of the theme

Each theme configuration file has the following structure:


- theme general info (name, author, version, license)
- a **root** property with css classes. This is the main container of your theme
- a **homepage** property with the path for the homepage
- a **initData** array of objects representing the initial data to load at startup. Data can be **API** or **Array** 
- a **navigation** array of objects. You can define different navigations and then use in your templates.
- a **template** the main object of your theme.


```
const theme = {
    name        : 'Corporate Business',
    author      : 'A. Nardone',
    version     : '0.2.0',
    license     : 'MIT'
    root        : 'w-full flex flex-wrap min-h-screen',
    homepage    : '/',
    ...
}

export default theme
```
### initData Section ###
The **initData** is where you can define which data has to be preloaded. 

They can be **API** or **arrays** of data, depends on your rendering functions/components.

*The current theme is using some WordPress API to simulate the preloading feature*

```
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
```

In case of API **axios** library will be used to fetch data (asyncronously) server side.

**Data preloading is implemented using `nuxtServerInit` directly from the store.**

file: ./store/index.js

```
...
async nuxtServerInit({commit}, context ){
    //read theme configuration using $theme4nuxt() injected by ./plugins/index.js
    let init = context.app.$theme4nuxt().initData
    let data = {}
    //iterate thru all initial data to be loaded
    for ( var n=0 ; n < init.length ; n++ ){
        if ( init[n].type === 'api' ) {
            let qry = await context.app.$axios.get(init[n].api);
            data[init[n].name] = qry.data
        }
        if ( init[n].type === 'array' ){
            data[init[n].name] = init[n].value
        }
    }
    //save data to store
    commit ('init_data', data )
    if ( !context.app.store.state.theme ){
    commit ('theme',context.app.$theme4nuxt() )
    }  
},
...
```

**Preload theme and injext function to read initData configuration**

file: ./plugins/index.js

```
import theme from '~/themes'

export default ({ app }, inject) => {
    inject('theme4nuxt', () => theme)
}
```
# The Theme #

We analyze the current theme that has been used for this website.

### navigation Section ###

The navigation section is required if you want to use the built-in navigation system as showed in the demo. This component create a responsive main navigation icon that open a menu with the options defined. 

The navigation section is also used in the template in order to render a normal navigation menu.
In this version child menus are not supported. If you need this option you can use your component or navigation system.

```
...
 navigation :  [{  
        css     : "items-start w-full pt-16 px-4 pb-20 bg-black opacity-75 h-screen",
        button  : "m-1 bg-white p-2 border-black border-2 rounded-full",
        line    : "hover:text-black hover:bg-white text-grey-lightest" ,
        link       : 'text-white hover:text-black hover:bg-white hover:text-bold py-10 px-4 no-underline',
        left    : false,
        transition: 'slideright',
        orientation: 'horizontal' , 
        items:  [ { name : 'Home' , path: '/' } , { name: 'Blog' , path: '/blog' } , { name: 'About' , path: '/about' } , { name: 'How to' , path: '/howto' }  ] 
    }],
...
```

### template Section ###

The **template** section is the core of the theming system and has 2 main objects
- **main** 
- **areas**




The ***main*** object

The main object is where is defined the class of the main container and will generate a semantic **&lt;main&gt;** html element.
```
...
template: {
        main : {
            css : "w-full",
            
        },
...
```



The **areas** object

With the areas object you define all the elements of your template.

First you can define the order of the area to be rendered as semantic html blocks. Available areas are:
- header
- aside
- content (will be rendered as section)
- footer

**order is important in order to render elements correctly**


```
...
template: {
    ...
    areas: {
        order  : ['header','content','footer'],
    ...
```

Our example will create a **header**, a **section** area and a **footer**.


### Creating the header ###

```
...
template: {
    ...
    areas: {
        areas: {
            order  : ['header','content','footer'],
            header : {
            root: 'w-full flex flex-wrap',
            blocks : [
                {
                    css: 'w-1/2 flex items-center h-12 bg-black text-grey text-xs pl-4 mobile',
                    elements: [
                        { type: 'html' , content: '\
                        <span>theme4nuxt@moodgiver.com</span>\
                        '}
                    ]
                },
                {
                    css: 'w-1/2 flex items-center justify-end h-12 bg-black text-grey text-xs pr-16 mobile',
                    elements: [
                        { type: 'html' , content: '\
                        <span class="justify-end">+1 123 456 7890</span>\
                        '}
                    ]
                },
                {
                    css: 'w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-24 opacity-75 justify-end flex items-center col bg-black' ,
                    elements : [
                        { type: 'html'      , content: '<div class="p-4 z-40  rounded-lg text-white"><h1><span class="font-light border-t-2">Theme<span class="text-white bg-blue-dark px-2 py-1">4</span></span><span class="border-b-4">Nuxt</span></h1></div>' , homepage: false }
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
                    css: 'w-full bg-green-light h-128 -mt-24 bg-header-8',
                    elements: [
                        { type: 'html'  , content: ''}
                    ],
                    homepage: true
                }

                ]
            },
...
```
In order to create a semantic html **&lt;header&gt;** element we create a header object. Following structure will be used for each defined area.

For each section (header, aside, content, footer) we have :

- **root** element container (css)
- **blocks** array of objects

In our theme we wanted to create:
- a top bar with email and phone ref, 
- a header with a logo/title centered, 
- a centered menu right to the title 
- an image as heading 



The top bar block.
```
...

header : {
    root: 'w-full flex flex-wrap',
    blocks : [
        {
            css: 'w-1/2 flex items-center h-12 bg-black text-grey text-xs pl-4 mobile',
            elements: [
                { type: 'html' , content: '\
                <span>theme4nuxt@moodgiver.com</span>\
                '}
            ],
            homepage: false
        },
        {
            css: 'w-1/2 flex items-center justify-end h-12 bg-black text-grey text-xs pr-16 mobile',
            elements: [
                { type: 'html' , content: '\
                <span class="justify-end">+1 123 456 7890</span>\
                '}
            ],
            homepage: false
        },
        ...
    }
}
```

For each block we have to define 

- **css** : tailwind css classes for the block 
- **elements** : array of elements we want to render
- **homepage** : set to true in order to display only in the homepage

**elements** is an array of object that will be rendered following the order in which they are created.

### elements types ##
Each element has the following properties to be set

- **type**
    
    the system manage the following types of elements:
    - **html**
    - **component**
    - **menu**
    - **css**


### The *html* element ###

So far for our title we create a css full-width element with other css properties (height, color, items alignment, etc. etc.) as a container.

Then we created a **html** element type.

For the **html** element type we must provide the content thru the **content** value. In this case we will assign directly HTML code to inject and render. In this way you can assign css to your html content and it will be rendered correctly.

### The *menu* element ###

In order to render our menu we create a new row (block object) with his proper css.

In order to render the right menu we have to assign which item in the navigation array we will use. Assign the navigation value representing the posisition in the navigation array (in our case we have only one navigation menu so we assign a value of 0).

```
...

header : {
    root: 'w-full flex flex-wrap',
    blocks : [
    ...
     {
        css: 'w-full md:w-1/2 lg:w-1/2 xl:w-1/2 border-l opacity-75 h-24 col z-30 justify-left items-center flex text-right pr-12 col-nav  bg-black mobile' , 
        elements : [
            { type: 'menu'      , navigation: 0, homepage: false}
        ],
        homepage: false
    },
    ...
}
...
```
### Creating the content ###

In order to create the content, that will be rendered as a semantic HTML **&lt;section&gt;** we follow the same structure. 

We will analyze only how to integrate a component in the theme.

**Component theme integration**

```
...

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
        ...
    ]
}
...
```

To load a custom component we have to define as element the following data:
- **type**      : "component",
- **component** : the path of our component (if you are using a vue component with a different name from index.vue you need to define ex. /mycomponent/mycomponent.vue will load the mycomponent.vue in the folder mycomponent of the components folder)
- **options**   : an object of options that you need to pass to your components (props)


Theme4Nuxt loads components dynamically using a component wrapper. 

Theme4Nuxt component wrapper (components/theme/ComponentWrapper.vue)
```
<template>
    <div>
        <component :is="loadcomponent" :options="options"/>
    </div>
</template>

<script>
export default {
    props: { 
        name: { type: String , required: true },
        options: { type: Object , required: false , default:()=>{}}
    },    
    computed:{
         loadcomponent(){   
            return () =>  import(/* webpackChunkName: "${this.name}" */ '~/components/' + this.name)
        },
    }
}
</script>
```




## Nuxt configuration

In order to work properly you need to update your nuxt.config.js with the following

file: ./nuxt.config.js

```
/*
** Load tailwind.css
*/
css: [
    '~/assets/css/tailwind.css' //if you set a nuxt project with tailwind framework you should have this
],

/*
** Plugins to load before mounting the App
*/
plugins: [
    '~/plugins/index.js',
    '~/components/theme' //load all theme required components
],

/*
** Nuxt.js modules
*/
modules: [
    //axios, pwa and markdown support
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit'  //used to integrate markdown files
],
...

```


## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
