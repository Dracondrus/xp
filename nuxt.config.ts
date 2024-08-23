// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "XP",
      
      htmlAttrs:{
        lang:'eng'
      },
      link:[
        {rel:"preconnect",href:"https://fonts.googleapis.com" },
        {rel:"preconnect", href:"https://fonts.gstatic.com"},
        {rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"},
        {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Schoolbell&display=swap"},
        {rel: 'icon', type:'image/png', href: "./public/img/fav.png"}
       ]
    },
  },

  modules: [
    "@nuxt/image", 
   
  ],
  compatibilityDate: '2024-04-03',

  devtools: { enabled: false },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css:[ 
    '@/public/styles/main.scss',
    '@/public/styles/common.scss',
  
  ],
  experimental: {
    crossOriginPrefetch: true
  }

  
})

