<script setup lang="ts">
import type { NuxtError } from '#app';



defineProps({
  error: Object as () => NuxtError
})



</script>
<template>
  <div class="error">
    <h3>{{ error?.statusCode }}</h3>
    <H1>Oooooopps  </H1>
    <h3> Page not found</h3>
         
    <GoHome/>
   
  </div>
</template>
<style lang="scss" scoped>

  .error {
    padding-top: 60px;
    width: 100%;
    height: 100vh;
    background: #043E51;
    color: #fff;
    
   text-align: center;
  }
</style>