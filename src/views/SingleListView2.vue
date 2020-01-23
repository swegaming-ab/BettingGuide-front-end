<template>
    <div class="container as flex">
        <div class="head flex">
            <div class="col-group">
                <div class="col ">
                    <img src="../assets/icons/888white.png" alt="" class="bimg">
                    <div class="wrapper flex">
                        <div class="wrap flex">
                            <img src="../assets/icons/india.png" alt="">
                            <h4 class="f-white light">Accepts Indian Players</h4>
                        </div>
                        <div class="wrap flex">
                            <img src="../assets/icons/rupie.png" alt="">
                            <h4 class="f-white light">Accepts Indian Rupies</h4>
                        </div>
                    </div>
                    <div class="fw flex mb-20">
                        <h6 class="light f-white prev">Player review: </h6>
                        <i class="fas fa-star f-yellow" v-for="i in stars" :key="i"></i>
                        <i class="fas fa-star f-gray"></i>
                        <i class="fas fa-star f-gray"></i>
                    </div>
                    <router-link :to="''">Visit 888sport</router-link>
                </div>
                <!-- <div class="col flex fs">

                </div> -->
                <!-- <div class="col l fs">
                    <img src="../assets/icons/888white.png" alt="" class="bimg">
                    <div class="fw flex fs mb-20">
                        <h6 class="light f-white prev">Player review: </h6>
                        <i class="fas fa-star f-yellow" v-for="i in stars" :key="i"></i>
                        <i class="fas fa-star f-gray"></i>
                        <i class="fas fa-star f-gray"></i>
                    </div>
                    <div class="wrapper fs flex">
                        <div class="wrap fs flex">
                            <img src="../assets/icons/india.png" alt="">
                            <h6 class="f-white light">Accepts Indian Players</h6>
                        </div>
                        <div class="wrap fs flex">
                            <img src="../assets/icons/rupie.png" alt="">
                            <h6 class="f-white light">Accepts Indian Rupies</h6>
                        </div>
                    </div>
                    <router-link :to="''">Visit 888sport</router-link>
                </div> -->
                <!-- <div class="col r fs">
                    <h1 class="tl f-white light mb-20">Bet <span class="f-orange bold">£10</span>,</h1>
                    <h1 class="tl f-white light mb-20">Get <span class="f-orange bold">£40</span> in Free Bets</h1>
                    <button type="button" class="cta-o mt-20">Claim bonus</button>
                </div> -->
            </div>
        </div>
        <div class="sticky flex">
            <ul class="d flex">
                <li @click="menu = 2, scrollMeTo('sites')">Sign up Bonus</li>
                <li @click="menu = 2, scrollMeTo('license')">Payment</li>
                <li @click="menu = 2, scrollMeTo('customer')">Information</li>
                <li @click="menu = 3, scrollMeTo('review')">Reviews</li>
                <li @click="menu = 4, scrollMeTo('tips')">BettingGuide Score</li>
                <li @click="menu = 5, scrollMeTo('posts')">Get started</li>
                <li @click="menu = 5, scrollMeTo('posts')">FAQ</li>
                <li @click="menu = 5, scrollMeTo('posts')">Gallery</li>
            </ul>
        </div>
        <offer/>
        <payment/>
        <info/>
        <review/>
        <rating/>
        <guide/>
        <faq/>
        <gallery/>
    </div>
</template>
<script>
import payment from '../components/single/payment.vue'
import rating from '../components/single/rating.vue'
import faq from '../components/single/faq.vue'
import guide from '../components/single/guide.vue'
import info from '../components/single/info.vue'
import gallery from '../components/single/gallery.vue'
import offer from '../components/single/offer.vue'
import review from '../components/single/review.vue'
    export default {
        extends: {},
        props: {},
        components: {
            payment,
            info,
            gallery,
            review,
            faq,
            guide,
            rating,
            offer
        },
        data(){
            return{
                i: 2,
                stars: 8,

            }
        },
        methods: {
            scrollMeTo(val) {
                var element = this.$refs[val];
                var top = element.offsetTop - 120;
                window.scrollTo({
                    top: top,
                    left: 100,
                    behavior: 'smooth',
                    duration: 200
                });
            },
        },
        beforeMount(){}
    }
</script>
<style lang="scss" scoped>
.container{
    background: #f7f7f7;
}
.head{
    width: 100%;
    background-image: url('../assets/icons/singlereview/head.png');
    background-image: url('../assets/images/green.png');
    background-size: cover;
    @media only screen and (min-width: 1200px) {
        height: 33vh;
        padding-top: 120px;
        padding-bottom: 60px;
        // margin-bottom: 40px;
        i{margin: 0 2.5px;}
        a{color: #fff; text-decoration: underline; margin-left: 5px;}
        .col-group{
            justify-content: space-between;
            width: 1100px;
            max-width: 95%;
        }
        .prev{margin-right: 20px;}
        .col-2{margin-left: 50px;}
        .l{width: 40%;}
        .r{width: 60%;}
        .col{
            // flex: none;
            text-align: center;
            .wrapper{width: 100%;}
            .wrap{
                margin: 0 10px;
                margin-top: 20px;
                margin-bottom: 40px;
                // width: 100%;
                // margin: 10px 0;
                // margin-right: 20px;
                img{width: 60px; margin-right: 10px;}
            }
        }
        .bimg{width: 300px; border-radius: 3px; margin-bottom: 20px;}
    }
    h1, h3, p{
        width: 100%;
        z-index: 2;
    }
}


.sticky{
    position: sticky;
    top: 59px;
    z-index: 2;
    width: 100%;
    // border-top: 1px solid rgb(218, 218, 218);
    border-bottom: 1px solid rgb(218, 218, 218);
    background: #f7f7f7;
    li{
        cursor: pointer;
        padding: 0 30px;
        margin: 0 10px;
        color: #666;
    }
}
</style>
