<template>
    <div :class="$style.main__container">
            <div :class="$style.static__content">
                <div :class="$style.static__title">STATISTIC</div>
                <div :class="$style.static__info">
                    <div class="s_quantity">
                            <div :class="$style.q__title">300+</div>
                            <div :class="$style.q__number">Project Delivery</div>
                    </div>
                    <div class="s_quantity">
                            <div :class="$style.q__title">8</div>
                            <div class="$style.q__number">Years Experience</div>
                    </div>
                    <div class="s_quantity">
                            <div :class="$style.q__title">16</div>
                            <div :class="$style.q__number">Awards</div>
                    </div>
                    <div class="s_quantity">
                            <div :class="$style.q__title">70+</div>
                            <div :class="$style.q__number">Happy Clients</div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script setup>
    
</script>
<style lang="scss" scoped module>
@import '../public/styles/common.scss';
@import '../public/styles/main.scss';
.static__content {
   
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;; 
   margin-top: -420px;
    
    max-width: 1200px;
    border-radius: 30px;
    min-height: 320px;
   padding: 6% 16%;
    background: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.static__info {
    
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px;
    text-align: center;
}
.static__title {
   @include TextRegular24;
   color: $blGreen;
}
.q__title {
 @include   TextRegular48;
 color: $blGreen;
}
.q__number {
   @include TextRegular18;
   color: $blGreen;
}
@media screen and (max-width: 800px) {
    .static__content {
        text-align: center;
        justify-content: center;
        
    }
    .static__info {
        margin-top: 40px;
        justify-content: center;
    }
    .static__title {
  font-size: $fz22;

}
.q__title {
 font-size: $fz26;

}
.q__number {
   font-size: $fz16;
  
} }
</style>