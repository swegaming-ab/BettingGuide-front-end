<template>
    <div class="container flex">

        <div class="col-group head">
            <div class="col">
                <img src="../assets/icons/888white.png" alt="">
                <h1 class="f-white light mb-20">Bet <span class="f-green bold">£10</span>, Get <span class="f-green bold">£40</span> in Free Bets</h1>
                <!-- <h1 class="f-white light mb-20">Get <span class="f-green bold">£40</span> in Free Bets</h1> -->
                <!-- <h3 class="f-white tc w100 mb-20">Our score: <span class="f-green bold">4/5</span></h3> -->
                <button type="button" class="cta-r mt-20"><i class="fas fa-cookie-bite"></i>Claim bonus</button>
            </div>
            <!-- <div class="col">
                <img src="../assets/icons/888mobile.png" class="bxs">
            </div> -->
        </div>

        <div class="banner fw flex">
            <div class="flex">
                <img src="../assets/icons/coin.png" alt="">
                <h6>High odds</h6>
            </div>
            <div class="flex">
                <img src="../assets/icons/promote.png" alt="">
                <h6>Regular promotions</h6>
            </div>
            <div class="flex">
                <img src="../assets/icons/offer.png" alt="">
                <h6>Exclusive Offer</h6>
            </div>
        </div>

        <div class="wrap flex bxs">
        <div class="col-group content">
            <div class="col">
                <h5 class="f-gray mb-20 header"><span class="f-gray">Payment</span></h5>
                <table>
                    <tr>
                        <td>Service</td>
                        <td>Min deposit</td>
                        <td>Max deposit</td>
                        <td>Max transaction</td>
                        <td>Max month</td>
                    </tr>
                    <tr v-for="info in deposit" :key="info.name">
                        <td class="m flex"><img :src="info.logo" alt=""></td>
                        <td>{{info.minDep}}</td>
                        <td>{{info.maxDep}}</td>
                        <td>{{info.maxTrans}}</td>
                        <td>{{info.maxMonth}}</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="col-group content-2">
            <div class="col">
                <h5 class="f-gray mb-20 header"><span class="f-gray">Customer Service</span></h5>
                <ul>
                    <li v-for="x in customer" class="flex" :key="x.logo"><i :class="x.logo" class="f-blue"></i><p class="f-gray">{{x.info}}</p></li>
                </ul>
            </div>
            <div class="col">
                <h5 class="f-gray mb-20 header"><span class="f-gray">Player Ratings</span></h5>
                <div class="col-group ratings fs">
                    <div class="ratings-container flex">
                        <p>5/5</p>
                        <div class="rating flex"><span :style="{background: stars[4], width: 80 + '%'}"></span></div>
                        <p>80 %</p>
                    </div>
                    <div class="ratings-container flex">
                        <p>4/5</p>
                        <div class="rating flex"><span :style="{background: stars[4], width: 10 + '%'}"></span></div>
                        <p>10 %</p>
                    </div>
                    <div class="ratings-container flex">
                        <p>3/5</p>
                        <div class="rating flex"><span :style="{background: stars[4], width: 5 + '%'}"></span></div>
                        <p>5 %</p>
                    </div>
                    <div class="ratings-container flex">
                        <p>2/5</p>
                        <div class="rating flex"><span :style="{background: stars[4], width: 3 + '%'}"></span></div>
                        <p>3 %</p>
                    </div>
                    <div class="ratings-container flex">
                        <p>1/5</p>
                        <div class="rating flex"><span :style="{background: stars[4], width: 2 + '%'}"></span></div>
                        <p>2 %</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-group content">
            <div class="col">
                <h5 class="f-gray mb-20 header"><span class="f-gray">Review</span></h5>
                <p class="f-gray mb-20"><span class="bold">Lorem ipsum dolor sit</span> amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p class="f-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>

        <div class="col-group content">
            <div class="col">
                <h3></h3>
                <button type="button" class="cta-r"><i class="fas fa-cookie-bite"></i>Claim Bonus</button>
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
                i: 2,
                stars: [
                    "#509bf5",
                    "#7383D1",
                    "#A362A1",
                    "#D14171",
                    "#f7274a"
                ],
                customer: [
                    {
                        logo: "fas fa-phone-alt",
                        info: "+442038870422",
                        available: "Yes",
                        open: "24/7",
                    },
                    {
                        logo: "fas fa-envelope",
                        info: "contact@888.com",
                        available: "Yes",
                        open: "24/7",
                    },
                    {
                        logo: "fas fa-clock",
                        info: "8:00 - 16:00",
                        available: "",
                        open: ""
                    },
                    {
                        logo: "fas fa-home",
                        info: "Somewhere, a Place",
                        available: "",
                        open: ""
                    }
                ],
                deposit: [
                    {
                        name: "VISA",
                        logo: require('../assets/icons/payment/visa.png'),
                        minDep: "£20",
                        maxDep: "None",
                        maxTrans: "£5000",
                        maxMonth: "£50 000"
                    },
                    {
                        name: "Bank Transfer",
                        logo: require('../assets/icons/payment/banktransfer.png'),
                        minDep: "£1000",
                        maxDep: "None",
                        maxTrans: "£5000",
                        maxMonth: "£50 000"
                    },
                    {
                        name: "Neteller",
                        logo: require('../assets/icons/payment/neteller.png'),
                        minDep: "£10",
                        maxDep: "None",
                        maxTrans: "£37 500",
                        maxMonth: "£50 000"
                    }
                ]
            }
        },
        methods: {

        },
        beforeMount(){

        }
    }
</script>
<style lang="scss" scoped>
.container{
    width: 100%;
    background: #f7f7f7;
}
.wrap{
    position: relative;
    // margin-top: 3px;
    // border-top-left-radius: 10px;
    // border-top-right-radius: 10px;
    background: rgb(255,255,255); /* Old browsers */
    background: -moz-linear-gradient(top,  rgba(255,255,255,1) 0%, rgba(247,247,247,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(247,247,247,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(247,247,247,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f7f7f7',GradientType=0 ); /* IE6-9 */
    width: 1100px;
    &:after{
        position: absolute;
        content: "";
        right: -10px;
        top: -10px;
        height: calc(100% + 10px);
        width: 10px;
        background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(247,247,247,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(247,247,247,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(247,247,247,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#f7f7f7',GradientType=0 ); /* IE6-9 */
    }
    &:before{
        position: absolute;
        content: "";
        left: -10px;
        top: -10px;
        height: calc(100% + 10px);
        width: 10px;
        background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(247,247,247,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(247,247,247,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(247,247,247,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#f7f7f7',GradientType=0 ); /* IE6-9 */
    }
}
.head{
    width: 100%;
    background-image: url('../assets/images/orange.png');
    background-size: cover;
    padding-top: 60px;
    @media only screen and (min-width: 1200px) {
        height: 50vh;
        padding: 80px 300px;
        .col{
            text-align: center;
        }
        img{width: 300px; border-radius: 3px; margin-bottom: 20px;}
    }
    h1, h3, p{
        width: 100%;
        z-index: 2;
    }
}
.banner{
    background: #f7f7f7;
    @media only screen and (min-width: 1200px) {
        padding: 20px 300px;
        text-align: center;
        div{flex: 1;}
        h6{color: #666666;}
        img{width: 40px; margin-right: 20px;}
    }
}
.col-group .header{
    width: calc(100%); text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid #509bf5;
}
.content-2{justify-content: space-between; align-items: flex-start;}
.content, .content-2{
    border-radius: 5px;
    margin: 60px 0;
    // background: #fff;
    @media only screen and (min-width: 1200px) {
        width: 1000px;
        min-width: 51%;
        max-width: 95%;
        .img{
            width: 400px;
        }
        .col-group{width: 100%;}
        h2,p {width: 100%;}
        ul, li{
            width: 100%;
            justify-content: flex-start;
        }
        ul{margin: 0;}
        li{
            margin: 10px 0;
            p{width: 50%; margin-left: 15px;}
        }
        table{
            width: 100%;
            border-radius: 0;
            td{border: none; text-align: left;}
            tr:nth-child(even) {
                background: rgb(255,255,255);
                background: -webkit-linear-gradient(left,  rgba(255,255,255,1) 0%,rgba(230,235,242,1) 100%);
                background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(230,235,242,1) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e6ebf2',GradientType=1 );
            }
            img{
                width: 100px;
                margin: 0;
            }
        }
        .m{font-size: 22px; justify-content: flex-start;}
        .ratings{
            p{
                font-weight: bold;
                color: #666666;
                width: 50px;
                font-family: niveau-grotesk, sans-serif!important;
            }
            .ratings-container{width: 100%; margin-bottom: 10px; justify-content: flex-start;}
            .rating{
                // border: 1px solid rgb(218, 218, 218);
                // padding: 2.5px;
                justify-content: flex-start;
                background: #f2f2f2;
                height: 20px;
                border-radius: 2px;
                overflow: hidden;
                width: calc(100% - 120px);
                margin-right: 20px;
                span{height: 100%;}
            }
        }
    }
}
.header{
    @media only screen and (min-width: 1200px) {
        width: 100%;
        img{width: 40px; margin-right: 20px; margin-top: 10px;}
        h3{width: calc(100% - 80px); margin-top: 20px; text-align: left;}
        h3,h6{width: 100%; text-align: left;}
        h3{
            padding-bottom: 10px;
            border-bottom: 2px solid #509bf5;
        }
    }
}
</style>
