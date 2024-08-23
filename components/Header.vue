<template>
    <header  class="container">
        <div class="main__container">
          <Menu/>
            <div class="header__content">
                <div class="content__info">
                    <button class="info__name">Hey, I’m Musa   </button>
                    <div class="info__title">Building Digital <br>
                        Products, Brands <br>
                            & Experience.</div>
                    <div class="info__desc">A Product Design and Visual Designer in SF I”m Specialize in <br>
                        UI/UX, Responsive web design, and visual Development. </div>
                    <div class="info__links">
                        <button class="active__btn">Hire Me</button>
                        <button class="default_btn">My Work</button>
                    </div>
                </div>
                <div class="commentary">
                        <div class="c__desc">
                            ‘’Musa has benn an outstanding
contributor to our team’s UI Designer
needs highly recommened’’
                        </div>
                        <div class="c__user_form">
                            <img src="/public/img/headerUser.png" alt="">
                            <div class="user__infoBlock">
                                <div class="user__Name">Jason Holder</div>
                                <div class="user__Job">UX Designer at Futura</div>
                            </div>
                        </div>
                    </div>
                <div class="content__img">
                 
                    <img src="/public/img/headerPerson.png" width="" height="" alt="person">
                </div>
              
            </div>
            <div class="static__content"></div>
        </div>
    </header>
</template>
<script setup lang="ts">


  
</script>
<style lang="scss" scoped>

@import '../public/styles/main.scss';
@import '../public/styles/common.scss';
header {
    padding-top: 40px;
        background: url("/img/Header_background.png") no-repeat center;
        height: 1400px;
       
    }

.default_btn {
    border: none;
    color: $baGrey;
    background: none;
    @include TextRegular18;
    
    
}
.info__name {
    @include defaultButtom;
    padding: 10px 30px;
    color: $white;
    @include TextSchool24;
    background: $lightGree;
  margin-bottom: 50px;
  
}
.info__title {
    color: $white;
    @include TextRegular64;
    margin-bottom: 48px;
}
.info__desc {
    @include TextRegular18;
    color: $bbGre;
    margin-bottom: 48px;
}
.header__content {
   
    margin-top: 140px;
    position: relative;
    display: flex;
    justify-content: space-between;
    
    }
.active__btn {
    background: $yellow;
    color: $white;
    @include defaultButtom;
    @include TextRegular18;
    margin-right: 50px;   
    padding:14px 22px;
    }
.commentary {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    backdrop-filter: blur(10px);
    right: -20%;
    top: 140px;
    position: absolute;
    width: 300px;
    height: 170px;
    border: 3px solid $white;
    border-radius: $borderRadius20;
    }
.c__user_form {
        display: flex;
        gap: 10px;
    }
.c__desc {
        @include TextRegular14;
        line-height: 22px;
        color: $white;
    }
.user__infoBlock {
        display: flex;
        gap: 6px;
        flex-direction: column;
    }
.user__Name {
        color: $white;
        @include TextRegular16;
    }
.user__Job {
       @include TextRegular12;
        color: $bcGrey;
    }

    @media screen and (max-width:1660px) {
        .commentary {
            top: 0;
          right: 340px;
        }
    }
    @media screen and (max-width:1200px) {
        .commentary {
            position: unset;
            margin: 20px 0;
        }
        .header__content {
            
    margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .c__user_form {
            display: flex;
            justify-content: center;
        }
        .info__title {
            margin-bottom: 10px;
            font-size: 30px;
        }
        .info__desc {
            font-size: 14px;
        }
        .content__img img{
            height: 300px;
        }
  
    }
    @media screen and (max-width: 800px) {
        .content__img img{
           display: none;
        }
    }
</style>