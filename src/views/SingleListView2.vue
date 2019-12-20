<template>
    <div class="container as flex">
        <div class="head flex">
            <div class="col-group">
                <div class="col l fs">
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
                </div>
                <div class="col r fs">
                    <h1 class="tl f-white light mb-20">Bet <span class="f-orange bold">£10</span>,</h1>
                    <h1 class="tl f-white light mb-20">Get <span class="f-orange bold">£40</span> in Free Bets</h1>
                    <button type="button" class="cta-o mt-20">Claim bonus</button>
                </div>
            </div>
        </div>
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
            rating
        },
        data(){
            return{
                i: 2,
                stars: 8,

            }
        },
        methods: {},
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
        height: 30vh;
        padding-top: 120px;
        padding-bottom: 60px;
        margin-bottom: 40px;
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
            flex: none;
            text-align: center;
            .wrapper{width: 100%; margin-bottom: 20px;}
            .wrap{
                margin-right: 20px;
                img{width: 40px; margin-right: 10px;}
            }
        }
        .bimg{width: 300px; border-radius: 3px; margin-bottom: 20px;}
    }
    h1, h3, p{
        width: 100%;
        z-index: 2;
    }
}



</style>
