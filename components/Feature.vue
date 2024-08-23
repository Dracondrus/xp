<template>
    <div :class="$style.main__container">
        <div :class="$style.feautre__content">
            <div :class="$style.feature__title">Featured My Portfolio</div>
            <div :class="$style.feature__desc">Explore some of my latest website projects. Non suscipit ex blandit <br>
                vitae. Pellentesque vel urna id massa sagittis luctus Fusce iaculis.</div>
            <div :class="$style.feature__chunks">
                <div :class="$style.chunk__block">
                    <div :class="$style.chunk__img"><img src="../public/img/f__1.png" alt="" height="" width=""></div>
                    <div :class="$style.chunk__title">Website Design</div>
                    <div :class="$style.chunk__desc">Our App designers have penetrated the mysteries of
emotional response to color, image,  and eye-tracking.
Every element is geared to create maximum appeal.</div>
                    <div :class="$style.chunk__link">Read Case Study  <img src="../public/img/arrow.png" alt="" ></div>
                </div>
                <div :class="$style.chunk__block">
                    <div :class="$style.chunk__img"><img src="../public/img/f__2.png" alt="" height="" width=""></div>
                    <div :class="$style.chunk__title">Product Design</div>
                    <div :class="$style.chunk__desc">Our App designers have penetrated the mysteries of
emotional response to color, image,  and eye-tracking.
Every element is geared to create maximum appeal.</div>
                    <div :class="$style.chunk__link">Read Case Study <img src="../public/img/arrow.png" alt="" ></div>
                </div>
                <div :class="$style.chunk__block">
                    <div :class="$style.chunk__img"><img src="../public/img/f__3.png" alt="" height="" width=""></div>
                    <div :class="$style.chunk__title">App Design</div>
                    <div :class="$style.chunk__desc">Our App designers have penetrated the mysteries of
emotional response to color, image,  and eye-tracking.
Every element is geared to create maximum appeal.</div>
                    <div :class="$style.chunk__link">Read Case Study <img src="../public/img/arrow.png" alt="" ></div>
                </div>
                <div :class="$style.chunk__block">
                    <div :class="$style.chunk__img"><img src="../public/img/f__4.png" alt="" height="" width=""></div>
                    <div :class="$style.chunk__title">DashBoard Design</div>
                    <div :class="$style.chunk__desc">Our App designers have penetrated the mysteries of
emotional response to color, image,  and eye-tracking.
Every element is geared to create maximum appeal.</div>
                    <div :class="$style.chunk__link">Read Case Study <img src="../public/img/arrow.png" alt="" ></div>
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
.feautre__content {
    margin-bottom: 180px;
}
.feature__title {
    @include TextRegular48;
    color: $blGreen;
}
.chunk__desc {
    @include TextRegular16;
    color: $blGrey;
}
.feature__desc {
    @include TextRegular18;
    color: $blGrey;
    margin: 30px 0;
}
.feature__chunks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 40px;
}
.chunk__title {
    @include TextRegular48;
    color: $blGreen;
}

.chunk__block {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 500px;
    height: 580px;
}
.chunk__link {
    @include TextRegular18;
    color: $blGreen;
    display: flex;
    align-items: center;
    gap: 20px;
}
@media screen and (max-width: 1200px) {
    .chunk__img img {
        width: auto;
        height: 330px;
    }
    .chunk__block {

    width: 450px;
    height: 580px;
}
.feature__title,.chunk__title {
    font-size: 30px;
   
}

.feature__desc ,.feature__title {

    text-align: center;
}

}


@media screen and (max-width: 576px) {
    .chunk__block {
        justify-content: center;
    }
    .chunk__img img {
        width: auto;
        height: 160px;
    }
    .chunk__block {
    gap: 20px;
    width: 300px;
    height: 380px;
}
}
</style>