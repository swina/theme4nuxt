<template>
    <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/2 p-6 mt-4">
            <h1 class="font-light border-b">
            <svg class="h-12 w-12" id="SVGRoot" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
 <g>
  <g transform="matrix(-1.3402 0 0 1.9437 471.98 -556.75)" fill="#cd8a1d">
   <path d="m120.51 403.05c-10.022-0.90553-18.931-14.963-27.358-28.398-12.467-19.956-26.035-37.368-40.689-39.741-14.489-1.7918-28.483 11.679-42.157 23.748 0 0-23.653 23.442-40.641 4.3512l-0.83595-54.066s-0.45458-2.3257-0.8192-5.6367c-0.61164-5.554-0.22399-11.308 2.2409-16.079l86.883-0.28047c147.85-0.47728 296.51 0.14857 296.51 0.14857l-0.13633 30.069-0.31042 16.658-1.7493 11.966 0.49951 12.129s2.3204 11.93-17.544 13.93c-19.715-1.0853-21.602-20.315-31.522-35.401-8.3552-12.015-17.73-21.963-27.377-18.414-9.9775 3.3652-18.869 18.37-26.721 35.164-8.1038 15.173-17.936 25.613-27.757 21.986-14.514-3.3272-28.61-17.796-43.345-14.292-16.028 2.1699-31.196 19.022-45.936 35.733-3.607 3.6526-7.3844 6.5336-11.236 6.4261z" fill="#cd8a1d" stroke-width=".72384"/>
  </g>
  <g transform="matrix(1.3402 0 0 -1.9437 41.638 1073.4)" fill="#1dbccd">
   <path d="m120.51 403.05c-10.022-0.90553-18.931-14.963-27.358-28.398-12.467-19.956-26.035-37.368-40.689-39.741-14.489-1.7918-28.483 11.679-42.157 23.748 0 0-23.653 23.442-40.641 4.3512l-0.83595-54.066s-0.45458-2.3257-0.8192-5.6367c-0.61164-5.554-0.22399-11.308 2.2409-16.079l86.883-0.28047c147.85-0.47728 296.51 0.14857 296.51 0.14857l-0.13633 30.069-0.31042 16.658-1.7493 11.966 0.49951 12.129s2.3204 11.93-17.544 13.93c-19.715-1.0853-21.602-20.315-31.522-35.401-8.3552-12.015-17.73-21.963-27.377-18.414-9.9775 3.3652-18.869 18.37-26.721 35.164-8.1038 15.173-17.936 25.613-27.757 21.986-14.514-3.3272-28.61-17.796-43.345-14.292-16.028 2.1699-31.196 19.022-45.936 35.733-3.607 3.6526-7.3844 6.5336-11.236 6.4261z" fill="#1dbccd" stroke-width=".72384"/>
  </g>
 </g>
</svg> About Theme4Nuxt</h1>
            <p class="pt-4">
               I created Theme4Nuxt in order to have a fast way to prototype and create themes for nuxtjs.
I usually create apps from scratch, and after trying different UI tools for Vue or Nuxt like Vuetify, Bootstrap, etc.
Also all the components that you get are really difficult to customize for your needs. I think that they are really good frameworks, but trying to use them to adapt to real customer needs comes a hard job.
Many times I had to rewrite my own components, so I decide to go with another strategy.
            </p> 
            <p class="p-8 italic">    
             I found that all of them are opinionated frameworks, that don't give you the real  possibility to create you own custom design. Using them all your products will look the same.
            </p>
            <p class="pt-4">
            Looking around for some tools and solution I found "tailwind" a css framework that is not a framework. 
            </p>
            <p class="pt-4">I think it's what a developer needs to create custom design feeling free to add your own components and fit them with the general UI/UX design.
            I mean, if you are a real developer usually you need to create custom components for different projects. 
            I know this very well because when you think you found a good component, then a customer needs something like that but ... but with some changes or improvements. 
            </p>
            <p class="pt-4">
            So I started creating basic components, but I always had the same problem: the design. 
            </p>
            <p class="pt-4">
            Adapting the component to different custom design is a difficult job (it was) mostly on CSS. Tailwind solved my problem. With the easy way to implement real custom design using semantic classes it solves many of developer problems.
            </p>
             <p class="pt-4">
            Then working on nuxt project I started creating my layout templates in order to prototype different themes/design.
            Since I always think that a good theme/design has to follow the semantic rules (header,section,aside,footer), I started to think to a solution that starting from a configuration file (a js/json file) create a layout template dinamically. 
            My goals where:
            </p>
            <ul>
                <li>use configuration file to create a theme</li>
                <li>fast switching theme with no code rewriting on vue files</li>
                <li>follow semantic rules for generated pages (ssr rendering)</li>
                <li>easy changes to theme settings like colors etc.</li>
                <li>adding components dinamically (using webchunk method)</li>
                <li>preload data using server side functions and save to the store</li>
                <li>full responsive solution</li>
                <li>integration with existing API, components, other data</li>
                <li>integration with markdown files </li>
                <li>homepage design / internal page design</li>
            </ul>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/2 p-24 mt-4">
            <img src="https://storage.googleapis.com/ghostfood-539ae.appspot.com/theme4nuxt/bg-2.jpg" class="clipped-b-r"/>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'theme'
}
</script>