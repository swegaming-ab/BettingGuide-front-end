<template>
    <div class="container flex">
        <div class="col-group content">
            <div class="head fw flex">
                <img src="../../assets/icons/tables/payment1.png" alt="">
                <h3 class="f-gray mt-20 bold"><span class="bold">P</span>ayment</h3>
            </div>
            <div class="col">
                <paymentTable :data="data"/>
                <!-- <div class="after"></div> -->
            </div>
        </div>

        <div class="col-group table-t as">
            <!-- <div class="wrap fw flex as"> -->
                <div class="col col-2 fs">
                    <h5 class="bold f-gray">PARAGRAPH TITLE</h5>
                    <p class="f-gray mb-20 mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p class="bold mt-20">Maybe a list of pointers worth knowing about payment</p>
                    <ul>
                        <li><i class="fas fa-angle-double-right"></i>Lorem ipsum</li>
                        <li><i class="fas fa-angle-double-right"></i>Lorem ipsum</li>
                        <li><i class="fas fa-angle-double-right"></i>Lorem ipsum</li>
                        <li><i class="fas fa-angle-double-right"></i>Lorem ipsum</li>
                        <li><i class="fas fa-angle-double-right"></i>Lorem ipsum</li>
                        <li><i class="fas fa-angle-double-right"></i>Lorem ipsum</li>
                    </ul>
                </div>
                <div class="col">
                    <img src="https://i.pinimg.com/originals/a1/33/66/a13366d4b54a59100b2084db86d2d909.jpg" alt="">
                </div>
            <!-- </div> -->
            <!-- <div class="wrap flex as fs fw">

            </div> -->
        </div>

        <!-- <div class="col-group fw py80"></div>

        <div class="col-group content">
            <div class="col-c">
                <supportTable :data="data"/>
                <div class="after"></div>
            </div>
            <div class="col">
                <div class="img flex bxs"><img src="../../assets/icons/tables/support1.png" alt=""></div>
                <h3 class="f-gray mt-20">Customer <span class="f-orange bold">Support</span></h3>
            </div>
        </div>

        <div class="col-group fw py80"></div>

        <div class="col-group content custom">
            <div class="fw flex">
                <div class="img flex bxs"><img src="../../assets/icons/tables/market.png" alt=""></div>
                <h3 class="f-gray mt-20 tl mb-20">Sports <span class="f-orange bold">&</span> Betting Markets</h3>
            </div>
            <div class="col">
                <marketsTable :data="data"/>
                <div class="after-full"></div>
            </div>
        </div> -->
    </div>
</template>
<script>
    /* eslint-disable */
    import paymentTable from './paymentTable.vue'
    import licenseTable from './licenseTable.vue'
    import supportTable from './supportTable.vue'
    import marketsTable from './marketsTable.vue'
    export default {
        extends: {},
        props: {
            data: Array
        },
        components: {
            paymentTable,
            licenseTable,
            supportTable,
            marketsTable
        },
        watch: {
            data(){

            }
        },
        data(){
            return{

            }
        },
        methods: {},
        beforeMount(){

        }
    }
</script>
<style lang="scss" scoped>
.container{
    background: #f7f7f7;
    position: relative;
    width: calc(100% - 20px);
    padding: 40px 10px;
    @media only screen and (min-width: 1200px) {
        width: 100%;
        padding: 80px 0;
    }
}
.content{
    @media only screen and (min-width: 1200px) {
        width: 1100px;
        img{width: 150px;}
        h3{width: 100%; text-align: center;}
    }
}
.table-t{
    width: 1100px;
    color: #666666;
    @media only screen and (min-width: 1200px) {
        padding-top: 80px;
        padding-bottom: 0;
        p{margin-right: 100px;}
        i{color: #189e0c; margin-right: 10px;}
        img{
            width: 100%;
            height: 100%;
        }
        ul{
            margin-top: 10px;
            width: 100%;
            color: #666666;
        }
        li{width: 100%; margin: 10px 0;}
    }
}
.head{
    justify-content: flex-start;
    width: 100%;
    border-bottom: 2px solid #ff9933;
    margin-bottom: 5px;
    padding-bottom: 10px;
    img{
        position: relative;
        top: 5px;
        width: 30px;
        margin-right: 10px;
    }
    h3{
        text-transform: uppercase;
        width: auto;
    }
    @media only screen and (min-width: 1200px) {
    }
}
.col{position: relative;}
.img{
    background: #fff;
    width: 180px;
    height: 180px;
    border-radius: 100px;
    img{width: 60%;}
}
.custom{
    h3{
        width: auto;
    }
    .img{
        background: #fff;
        width: 60px;
        height: 60px;
        border-radius: 100px;
        margin-right: 20px;
        img{width: 60%;}
    }
    table{margin-top: 20px!important;}
}
.col-4{margin: 50px;}
.col-c{width: 1000px; position: relative;}
.after{
    position: absolute;
    bottom: -50px;
    width: 1000px;
    max-width: 100%;
    height: 50px;
    background: #f7f7f7;
    &:after{
        position: absolute;
        content: "";
        right: -10px;
        top: -370px;
        height: 390px;
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
        top: -370px;
        height: 390px;
        width: 10px;
        background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(247,247,247,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(247,247,247,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(247,247,247,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#f7f7f7',GradientType=0 ); /* IE6-9 */
    }
}
.after-full{
    position: absolute;
    bottom: -50px;
    width: 100%;
    height: 50px;
    background: #f7f7f7;
    &:after{
        position: absolute;
        content: "";
        right: -15px;
        top: -370px;
        height: 390px;
        width: 15px;
        background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(247,247,247,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(247,247,247,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(247,247,247,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#f7f7f7',GradientType=0 ); /* IE6-9 */
    }
    &:before{
        position: absolute;
        content: "";
        left: -15px;
        top: -370px;
        height: 390px;
        width: 15px;
        background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(247,247,247,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(247,247,247,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(247,247,247,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#f7f7f7',GradientType=0 ); /* IE6-9 */
    }
}
li{
    font-family: nudista-web, sans-serif!important;

}
</style>
