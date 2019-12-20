<template>
  <div class="container flex">
      <div class="col-group">
          <ul ref="sites" class="flex as">
              <div v-for="(index, key) in i" :key="key" class="cardContainer flex">

              <li class="card flex">
                  <div class="left flex">
                      <img class="" src="../../assets/icons/888.png" alt="">
                  </div>
                  <div class="mid as flex">
                      <div class="head my10 fs flex">
                          <img class="" src="../../assets/icons/888mobile.png" alt="">
                          <span>
                              <h6 class="f-gray mb10">888sport</h6>
                              <router-link class="f-green" to="/single2">www.888sport.com</router-link>
                          </span>
                          <div class="flex fe col f-gray flags">
                              <div class="flex">
                                  <img src="../../assets/icons/india.png" alt="">
                                  <img src="../../assets/icons/rupie.png" alt="">
                              </div>
                          </div>
                      </div>
                      <hr>
                      <div class="w100 pros flex">
                          <div class="pro flex">
                              <i class="fas fa-desktop flex"></i><p>Live streams</p>
                          </div>
                          <div class="pro flex">
                              <i class="fas fa-tasks flex"></i><p>Good odds</p>
                          </div>
                          <div class="pro flex">
                              <i class="fas fa-mobile-alt flex"></i><p>Fantastic Betting App</p>
                          </div>
                      </div>
                      <button @click="toggle(index)" type="button" class="extend flex">
                          <i v-if="expand === index" class="fas fa-chevron-up flex"></i>
                          <i v-else class="fas fa-chevron-down flex"></i>
                      </button>
                  </div>
                  <div class="right as flex">
                      <div class="content flex">
                          <h6 class="f-gray bold my10 tc w100">Offer</h6>
                          <p class="bold f-green tc mb-20 m1">Bet £10, Get £40 in Free Bets</p>
                      </div>
                      <button type="button" class="cta mb10 bg-orange flex"><span>Claim</span><i class="fas fa-angle-double-right"></i></button>
                  </div>

                  <transition name="dropdown">
                  <div v-if="expand === index" class="extended">
                      <div class="wrapper flex">
                          <div class="wrapperLeft flex as">
                              <ImgSlideshow/>
                          </div>
                          <div class="wrapperRight">
                              <h6 class="f-gray mb10">Summary</h6>
                              <p class="f-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                              <hr>
                              <p class="mb-20 f-gray"><span class="bold">Our score:</span> 5/5</p>
                              <button type="button" name="button">Read Review</button>
                          </div>
                      </div>
                  </div>
                  </transition>
              </li>

              <p class="footTxt">New Customers only. Deposit and place a £5 qualifying bet at odds of 2.00 or greater within 7 days of opening a new account; excludes cashed out bets. Receive 2x £10 Free Sports Bets, valid on set events only at odds 2.00 or greater, expires in 7 days, plus a £10 Casino Bonus, expires in 7 days. Wager the Casino Bonus 35x to withdraw winnings. Credit/Debit card deposits only. Geographical Restrictions and T&Cs Apply, See Below. Please Gamble Responsibly</p>
              </div>
          </ul>
      </div>
  </div>
</template>
<script>
import ImgSlideshow from '../ImgSlideshow.vue'
export default {
    extends: {},
    props: {},
    components: {ImgSlideshow},
    data(){
        return{
            i: 3,
            expand: undefined,
        }
    },
    methods: {
        toggle(id){
            if(this.expand !== id){
                this.expand = id
            } else {
                this.expand = undefined
            }
        },
    },
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
ul{padding: 0;}
.container{

}
.col-group{
    width: 95%;
    // margin-top: 40px;
    @media only screen and (min-width: 1200px) {
        width: 1100px;
    }
}
.flags{
    img{
        width: 50px!important;
        height: 50px!important;
        display: inline!important;
        margin: 0 10px;
    }
}
.cardContainer{
    margin-bottom: 60px;
    &:hover{
        .card{box-shadow: 0 4px 8px 0 rgba(108,127,135,.3), 0 1px 4px 0 rgba(108,127,135,.6);}
        .footTxt{opacity: 1;}
    }
}
.footTxt{
    opacity: .5;
    font-size: 12px;
    margin-top: 20px;
    transition: .2s ease-in-out;
}
.card{
    // font-family: 'Quicksand', sans-serif;
    background: #f7f7f7;
    position: relative;
    width: 100%;
    border: 1px solid rgba(218, 218, 218, 0.2);
    border-radius: 5px;
    transition: .2s ease-in-out;
    p{font-size: 14px;}
    .cta{
        height: 40px;
        text-transform: uppercase;
        color: #fff;
        border-radius: 5px;
        border: none;
        padding: 10px 5px 10px 30px;
        transition: .15s ease-in-out;
        i{opacity: 0; margin-left: 10px;}
        span,i{position: relative; transition: .15s ease-in-out;}
        &:hover{
            padding: 10px 15px 10px 20px;
            i{
                opacity: 1;
            }
            box-shadow: none;
        }
    }
    .left, .right{
        width: 200px;
        background: #FBFBFB;
        @media screen and (max-width: 1000px){width: 100%;}
    }
    .left, .mid, .right{
        padding: 10px;
        height: 150px;
    }
    .left{
        img{width: 80%;}
        @media screen and (max-width: 1000px){
            display: none;
        }
    }
    .mid{
        flex:3;
        position: relative;
        i{font-size: 14px; margin-right: 10px;}
        p{font-size: 14px; color: #4a4a4a;}
        hr{height: 1px; width: 100%; border: none; background: rgb(218, 218, 218);}
        h6,p{width: 100%;}
        .head{width: calc(100% - 20px);}
        img{display: none; height: 60px; border-radius: 5px;}
        .pros{
            justify-content: space-around!important;
        }
        .pro{
            flex: 1;
            i{
                width: 30px; height: 30px;
                color: #ff9933;
                margin: 0; background: #FBFBFB;
                margin-right: 5px;
                border-radius: 100px;
                // padding: 7px;
                display: flex!important;
                margin: auto;
                border: 1px solid rgba(218, 218, 218, 0.5);

            }
            p{width: calc(100% - 45px); font-weight: bold; color: #666666;}
        }
        @media screen and (max-width: 1000px){
            border: none;
            width: calc(100% - 20px);
            flex: none;
            border-bottom: 1px solid rgb(218, 218, 218);
            ul{min-width: 300px;}
            h6{width: auto; flex: 4;}
            img{display: block; margin-right: 20px; margin-bottom: 10px;}
        }
        @media screen and (max-width: 600px){
            height: auto;
            .pros{display: block;}
            .pro{margin: 10px 0;}
        }
    }
    .wrapper{
        // border-top: 1px solid rgba(218, 218, 218, 0.2);
        padding: 20px;
        width: calc(100% - 40px);
    }
    .btn{
        width: 40px;
        height: 40px;
        background: #4a4a4a;
        border-radius: 100%;
        position: absolute;
        bottom: -20px;
        left: 50%;
        transition: .2s ease-in-out;
        transform: translateX(-50%);
        color: white;
        cursor: pointer;
    }
}
.extended{
    position: relative;
    transition: .2s ease-in-out;
    padding: 20px;
    width: calc(100%);
    background: #FBFBFB;
    border-top: 1px solid rgba(218, 218, 218, 0.3);
    bottom: 0;
    p{font-size: 14px;}
    .wrapper{
        height: 220px;
    }
    .wrapperLeft, .wrapperRight{
        height: 100%;
    }
    .wrapperLeft{
        width: 30%;
    }
    .wrapperRight{
        width: calc(70% - 40px);
        margin-left: 40px;
        hr{
            height: 1px;
            width: 100%;
            border: none;
            background: #189e0c;
        }
        button{
            color:#fff;
            background: #189e0c;
            padding: 10px 20px;
            border-radius: 5px;
        }
    }
    @media screen and (max-width: 600px){
        .wrapper{height: auto;}
        .wrapperLeft, .wrapperRight{
            height: 100%; width: 100%;
            margin: 0;
        }
    }
}
.extend{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border: 1px solid rgba(218, 218, 218, 1);
    // box-shadow: 0 21px 50px -25px rgba(0,0,0,.4);
    z-index: 1;
    bottom: -15px;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    i{color: #4a4a4a; font-size: 14px; margin: 0!important;}
    @media screen and (max-width: 600px){

    }
}
.extend-open{}
</style>
