export default defineNuxtPlugin((nuxtApp) => {
  
    // Also possible
    nuxtApp.hook('vue:error', (error, instance, info) => {
        console.log(error);
        console.log(instance);
        console.log(info);
    })
  })