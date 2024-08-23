<template>
  <div class="menu main__container">
                <div class="menu__logo">
                  <NuxtLink :to="Links.Main"><NuxtImg src="/img/logotype.png" alt="logotype" width="77" height="36" /></NuxtLink>
                </div>
              
                 <div  class="menu__links">
                            <NuxtLink :to="Links.Main">Home</NuxtLink>
                            <NuxtLink :to="Links.About">About</NuxtLink>
                            <NuxtLink :to="Links.Portfolio">Portfolio</NuxtLink>
                            <NuxtLink :to="Links.Service">Service</NuxtLink>
                            <NuxtLink :to="Links.Blog">Blog</NuxtLink>
                 </div>
                <div class="menu__contact_link">
                    <button class="contact__btn "><NuxtLink :to="Contact">Contact</NuxtLink></button>
                </div>
               
            </div>
</template>
<script lang="ts" setup>
import { Contact, Links } from '~/utils/constants/menuLinks';



</script>
<style lang="scss" scoped >
@import "../public/styles/main.scss";
@import "../public/styles/common.scss";

.menu {
  @include TextRegular18;
  padding: 40px 0 60px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
}
.menu__links {
  display: flex;
  gap: 50px;
}
.contact__btn {
  @include defaultButtom;
  background: $lightBlue;
  padding: 14px 26px;

  }
.contact__btn a {
  color: $white;
 @include TextRegular18;
  
}
@media screen and (max-width: 768px) {
  .menu , .menu__links{
  text-align: center;
    flex-direction: column;
    gap: 30px;
  }
  .menu__links  {
    gap: 10px;
  }
}


</style>