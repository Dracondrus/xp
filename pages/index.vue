<template>
  <div>
   <Header/>
    <Static/>
    <Service/>
    <Feature/>
    <Manage/>
    <Blog/>
    <Footer/>
    <div class="copyRight">&copy copy righted by ELFASA</div>

  </div>   
</template>
<script setup lang="ts">



  
</script>
<style lang="scss" scoped>
@import "../public/styles/common.scss";
@import "../public/styles/main.scss";

.copyRight {
  padding: 10px;
  color: $white;
  background: $black;
  text-align: center;
  @include TextRegular18;
}
</style>