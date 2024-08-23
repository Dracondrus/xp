<template>
    <div :class="$style.main__container">
        <div :class="$style.service">
                <div :class="$style.service__title">
                    <a href="#">Services</a>
                </div>
                <div :class="$style.service__desc">Building Digital Product <br>
                    With Better Experience</div>
                <div :class="$style.service__chunks">
                    <div :class="$style.chunks__info">
                        <div :class="$style.chunk__icon"><img src="/public/img/c_1.png" alt="icon" width="" height=""/> </div>
                        <div :class="$style.chunk__title">UI/UX Design</div>
                        <div :class="$style.chunk__desc">I’ve created a user interface
and user experience with
some proccess and method.</div>
                    </div>
                    <div :class="$style.chunks__info">
                        <div :class="$style.chunk__icon"><img src="/public/img/c_2.png" alt="icon" width="" height=""/></div>
                        <div :class="$style.chunk__title">Web Development</div>
                        <div :class="$style.chunk__desc">I’ve created a user interface
and user experience with
some proccess and method.</div>
                    </div>
                    <div :class="$style.chunks__info">
                        <div :class="$style.chunk__icon"><img src="/public/img/c_3.png" alt="icon" width="" height=""/></div>
                        <div :class="$style.chunk__title">Visual Branding</div>
                        <div :class="$style.chunk__desc">I’ve created a user interface
and user experience with
some proccess and method.</div>
                    </div>
                    <div :class="$style.chunks__info">
                        <div :class="$style.chunk__icon"><img src="/public/img/c_1.png" alt="icon" width="" height=""/></div>
                        <div :class="$style.chunk__title">App Development</div>
                        <div :class="$style.chunk__desc">I’ve created a user interface
and user experience with
some proccess and method.</div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script setup lang="ts">
   
</script>
<style lang="scss" scoped module>
@import '../public/styles/main.scss';
@import '../public/styles/common.scss';
.service {
    margin: 160px 0;
}
.service__title a {
    text-decoration: underline;
   text-decoration-color: $blGreen;
   color: $blGreen;
   @include TextSchool24;
  
   
}
.service__title,.service__desc {
    text-align: center;
    margin-bottom: 30px;
}
.service__desc{
    @include TextRegular48;
    color: $blGreen;
}
.service__chunks {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
}
.chunks__info {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 270px;
    width: 270px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.chunk__title {
    @include TextRegular24;
}
.chunk__desc {
    @include TextRegular16;
    color: $lightGrey;
}
@media screen and (max-width: 992px) {
    .service__chunks {
        justify-content: center;
        gap: 40px;
    }
    .service__desc {
        font-size: $fz26;
    }
    .service__title,.service__desc {
    text-align: center;
    margin-bottom: 10px;
}
}
</style>