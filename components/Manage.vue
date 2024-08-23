<template>
    <section :class="$style.container">
       
        <div :class="$style.main__container">
          <div :class="$style.manage__block">
            <div :class="$style.manage__img">
            <img src="../public/img/m_1.png" alt="" width="" height="">
           </div>
           <div :class="$style.manage__content">
            <div :class="$style.m__title"><img src="../public/img/m_2.png" alt="" width="" height=""></div>
            <div :class="$style.m__desc">Managed Services team acts like an extension of yours to expertly
respond to any and all feedback, and scan and evaluate reviews for
any legal concerns, profanity or slander, or any policy violations of 
<br>
<br>

community and content. Services, analytics and reports can be
customized by location, project or initiative.</div>
            <div :class="$style.m__links">
                <img src="../public/img/arrows.png" alt="">
            </div>
           </div>
          </div>
        </div> 
    </section>
</template>
<script setup lang="ts">
 
</script>
<style lang="scss" scoped module>
@import "../public/styles/main.scss";
@import "../public/styles/common.scss";

section {
    background: url("/img/Header_background.png") no-repeat center;
    height: 730px;
   display: flex;
   flex-direction: column;
   justify-content: center;
}

.manage__block {
    display: flex;
    justify-content: space-between;
}
.manage__content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly
}
.m__desc {
    @include TextRegular16;
    color: $white;
}

@media screen and (max-width: 1200px) {
    .manage__img img {
        height: 400px;
    }

}
@media screen and (max-width: 768px) {
    .m__title img {
        height: 20px;
    }
    .manage__img img {
        height: 200px;
    }
   .manage__block {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    text-align: center;
   }
   .manage__content {
    gap: 30px;
   }
    
}
</style>