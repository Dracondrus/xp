<template>
    <footer :class="$style.main__container">
        <div :class="$style.footer__content">
            <div class="footer__info">
                <div :class="$style.info__title"><img src="../public/img/logotype2.png" alt=""></div>
                <div class="info__desc"><ul>
                    <li>Lorem ipsum dolor sit amet, consectetur <br>
adipiscing elit. Lectus mattis nunc <br>
aliquam tincidunt est non.</li>
<br>
                </ul></div>
                <div :class="$style.info__socailMedia">
                    <img src="../public/img/sm_1.png" alt="">
                    <img src="../public/img/sm_2.png" alt="">
                    <img src="../public/img/sm_3.png" alt="">
                    <img src="../public/img/sm_4.png" alt="">
                </div>
            </div>
            <div class="footer__pages">
                <div :class="$style.title">Pages</div> 
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Blog</li>
                    <li>Portfolio</li>
                </ul>
            </div>
            <div class="footer__service">
                <div :class="$style.title">Services</div>
                <ul>
                    <li>Web Design</li>
                    <li>App Design</li>
                    <li>Dashboard</li>
                    <li>Illustration</li>
                    <li>Development</li>
                </ul>
            </div>
            <div class="footer__contact">
                <div :class="$style.title">Contact</div>
                <ul>
                    <li>+00 88 999 888 22</li>
                    <li>example@gmail.com</li>
                    <li>www.portfolio.com</li>
                    <li>44, Housing State, 3200</li>
                   
                </ul>
            </div>
        </div>
        
    </footer>
</template>
<script lang="ts" setup>
    
</script>
<style lang="scss" scoped module>
@import '../public/styles/common.scss';
@import '../public/styles/main.scss';

.footer__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap:20px;
    margin-bottom: 160px;
}
ul {
    @include TextRegular16;
    line-height: 30px;
    color: $blGrey;
}
.title {
    @include TextRegular24;
    color: $blGreen;
}
.info__socailMedia {
    display: flex;
    gap: 20px;
}
@media screen and (max-width: 576px) {
    .info__socailMedia img {
        margin: 0 auto;;
    }
    .footer__content {
        flex-wrap: unset;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}


</style>