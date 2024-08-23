<template>
    <div class="default container">
       <div class="main__container">
        <slot></slot>
       </div>
        <br>
        <br>
        <h1>{{ Route.name  }} page</h1>
   
        
    </div> 
</template>
<script setup lang="ts">

const Route = useRoute()
console.log(Route.name);

</script>
<style lang="css" scoped>

    .default {
        background: #043E51;
        height: 100vh;
        color: #fff;
       
    }
    h1 {
        text-align: center;
    }
</style>