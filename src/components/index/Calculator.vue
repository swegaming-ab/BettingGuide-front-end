<template>
    <div class="container flex">
        <div class="content">
            <div class="col-group">
                <div class="col l">
                    <h2 class="f-gray mb-20 fw">Betting <span class="f-red bold">Calculator</span></h2>
                    <p class="mb-20 fw">Use our free betting calculators to work out your return on a wide range of sports bets. You can also use our odds converter to change odds between US, decimal or fractional. We recommend using our betting margins calculator to work out how much the bookie “charges” you when placing a bet.</p>
                    <button type="button" class="btn mt-20">Calculate</button>
                </div>
                <div class="col desktop">
                    <!-- <div class="img bxs flex"><img src="../../assets/icons/calculator.png" alt="" class="mob"></div> -->
                    <img src="../../assets/icons/device1.png" alt="" class="pc">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    extends: {},
    props: {},
    components: {},
    data(){
        return{

        }
    },
    methods: {},
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
.container{
    position: relative;
    width: calc(100% - 20px);
    margin-top: 50px;
    padding: 40px 10px;
    // background: #fff8e6;
    @media only screen and (min-width: 1200px) {
        // background-image: url('../../assets/images/calculator.png');
        background-size: 100% 100%;
        padding: 80px 0;
        margin: 40px 0;
        width: 100%;
    }
}
.after{
    position: absolute;
    top: 0px;
    left: 0;
    content: "";
    // background-image: url('../../assets/images/waves1.png');
    background-size: cover;
    z-index: 2;
    width: 100%;
    height: 100%;
}
.header{}
.content{
    width: 100%;
    text-align: center;
    // .desktop{display: none;}
    .col{
        margin: 10px;
    }
    @media only screen and (min-width: 1200px) {
        text-align: left;
        width: 60%;
        .r{display: flex;}

        .l{justify-content: flex-start;}
        img{width: 80%; margin-left: 0px;}
    }
}
.icon{
    width: 50px;
    margin-right: 20px;
}
button{
    background: #509bf5;
    background: #f7274a;
    justify-content: center;
    box-shadow: 0 10px 20px rgba(80, 155, 245, .35);
    box-shadow: 0 10px 20px rgba(247, 39, 74, .35);

}
.mob{
    // width: 45%;
}
.pc{
    // margin-left: -110px;
}
</style>
