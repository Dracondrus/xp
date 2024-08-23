<template>
  <div :class="$style.main__container">
    <div :class="$style.blog">
        <div :class="$style.blog__content">
            <div :class="$style.content__img"><img src="../public/img/b_1.png" alt="" width="" height=""></div>
            <div :class="$style.content__title">How This Agency Helped My <br>
                Business And Career Journey?</div>
            <div :class="$style.content__desc">A successful marketing plan relies heavily on the pulling-power of advertising <br>
copy. writing result-oriented ad copy is dificult, as it must appeal to, entice, <br>
and onviced consumers tp action.</div> 
            <div :class="$style.content__links"></div>
        </div>
        <div :class="$style.blog__info">
          <div :class="$style.blog__chunk">
            <div :class="$style.info__title">My Blog <br>
                And News</div>
            <div :class="$style.info__desc">If It’s abillboard ad, you’ll need a super <br>
catchy headline due to the speed at <br>
which people will pass.</div>
            <button :class="$style.info__link">
                Go To The Blog
            </button>
          </div>
            <div :class="$style.swagger">
               <img src="../public/img/b_2.png" alt="">
            </div>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
    
</script>
<style lang="scss" scoped module>
@import "../public/styles/common.scss";
@import "../public/styles/main.scss";
.content__title,.info__title {
    @include TextRegular48;
    color: $blGreen;
}
.content__desc ,.info__desc{
    @include TextRegular16;
    color: $blGrey;
}
.blog__content {
    display: flex;
    flex-direction: column;
    gap: 30px
}
.blog {
    margin: 180px 0;
    display: flex;
    justify-content: space-around;
}
.blog__info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  
}
.info__link {
    @include TextRegular16;
    @include defaultButtom;
    width: 160px;
    padding:16px 0;
    background: $yellow;
    color: $white;

}
.blog__chunk {
   
   
    display: flex;
    flex-direction: column;
    gap: 30px;
}

@media screen and (max-width: 1200px) {
    .info__link {
        margin: 20px auto;
    }
    .blog {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
    .content__img img{
        width: auto;
        height: 400px;
    }
}
@media screen and (max-width: 768px) {
    .content__title,.info__title {
        font-size: $fz26;
    }
    .content__img img{
        width: auto;
        height: 280px;
    }
}
</style>