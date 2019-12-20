<template>
    <div class="container">
        <div class="col-group head">
            <div class="wrapper flex">
                <div class="col">
                    <h1 class=""><span class="light f-white">Betting</span><span class="bold f-orange">Guide</span></h1>
                    <h3 class="f-white italic">Betting made easy.</h3>
                </div>
                <div class="col flex btns">
                    <router-link :to="'/list'" class="cta g f-gray bxs flex">
                        <img src="../assets/icons/poker2.png" alt="">
                        <p class="bold">Betting</p>
                    </router-link>
                    <router-link :to="'/list'" class="cta o f-gray bxs flex">
                        <img src="../assets/icons/casino1.png" alt="">
                        <p class="bold">Casino</p>
                    </router-link>
                </div>
            </div>
        </div>

        <WhyUs/>
        <!-- <Calculator/> -->
        <!-- <TrustUs/> -->
        <Rating/>
        <GetStarted/>
        <!-- <Faq/> -->


    </div>
</template>
<script>
    /* eslint-disable */
    import TrustUs from '../components/index/TrustUs.vue'
    import Calculator from '../components/index/Calculator.vue'
    import WhyUs from '../components/index/WhyUs.vue'
    import GetStarted from '../components/index/GetStarted.vue'
    import Rating from '../components/index/Rating.vue'
    // import License from '../components/index/License.vue'
    // import Guide from '../components/index/Guide.vue'
    import Faq from '../components/index/Faq.vue'
    export default {
        components: {
            TrustUs,
            Faq,
            GetStarted,
            Rating,
            // Guide,
            // License,
            WhyUs,
            Calculator
        }
    }
</script>
<style lang="scss" scoped>
.col{
    margin: 50px 0;
    text-align: center;
    @media only screen and (min-width: 1200px) {
        text-align: left;
    }
}
.btns{
    transition: .2s ease-in-out;
    p{
        width: 60%;
        padding-bottom: 5px;
        text-transform: uppercase;
    }
    .o{
        p{border-bottom: 5px solid #ff9933; transition: .2s ease-in-out;}
        &:hover{
            p{width: 80%;}
        }
    }
    .g{
        p{border-bottom: 5px solid #189e0c; transition: .2s ease-in-out;}
        &:hover{
            p{width: 80%;}
        }
    }
    a{
        text-align: center;
        border-radius: 5px;
        margin: 0 10px;
        padding: 20px;
        max-width: 180px;
        flex: 1;
        background: #fff;
        box-shadow: 0 4px 8px 0 rgba(108,127,135,.1), 0 1px 4px 0 rgba(108,127,135,.36);
        border: 1px solid #fff;
        img{
            height: 60%;
            width: 60%;
            margin-bottom: 20px;
            i{color: #fff; font-size: 32px;}
        }
    }
}
.head{
    background: #F1F7FE;
    background-image: url('../assets/images/green.png');
    background-size: cover;
    padding-top: 60px;
    @media only screen and (min-width: 1200px) {
        text-align: left;
        height: 60vh;
        .wrapper{
            width: 1100px;
            max-width: 95%;
        }
    }
    h1, h3{
        width: 100%;
        z-index: 2;
    }
}
</style>
