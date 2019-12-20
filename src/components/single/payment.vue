<template>
    <div class="col-group content as">
        <div class="col">
            <img src="../../assets/icons/tables/payment1.png" class="hi" alt="">
            <h3 @click="table = 'with'" :class="{inactive: table !== 'with'}" class="f-gray bold">WITHDRAWAL</h3>
            <h3 @click="table = 'dep'" :class="{inactive: table === 'with'}" class="f-gray bold">DEPOSIT</h3>
            <hr>
            <div class="wrap bg-lgray">
                <div class="table" v-if="table === 'with'">
                    <div class="title flex f-gray fw">
                        <div class="th col-2"><h6>Method</h6></div>
                        <div class="th col"><h6>Fee</h6></div>
                        <div class="th col-2"><h6>Process time</h6></div>
                        <div class="th col"><h6>Min</h6></div>
                        <div class="th col"><h6>Max</h6></div>
                        <div class="th col-2"><h6>Details</h6></div>
                    </div>
                    <div class="trs flex fw" v-for="info in deposit" :key="info.name">
                        <div class="tr col-2"><img :src="info.logo" alt=""></div>
                        <div class="tr col"><p>{{info.fee}}</p></div>
                        <div class="tr col-2"><p>{{info.time}}</p></div>
                        <div class="tr col"><p>{{info.min}}</p></div>
                        <div class="tr col"><p>{{info.max}}</p></div>
                        <div class="tr col-2 det" @click="toggle(info.details.title)"><p>{{info.details.title}}</p><i v-if="details === info.details.title" class="fas fa-chevron-up"></i><i v-else class="fas fa-chevron-down"></i></div>
                        <transition name="dropdown">
                        <div class="wrap fw dets" v-if="details === info.details.title">
                            <p class="mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                        </transition>
                    </div>
                </div>
                <div class="table" v-else>
                    <div class="title flex f-gray fw">
                        <div class="th col-2"><h6>Method</h6></div>
                        <div class="th col"><h6>Fee</h6></div>
                        <div class="th col-2"><h6>Process time</h6></div>
                        <div class="th col"><h6>Min</h6></div>
                        <div class="th col"><h6>Max</h6></div>
                        <div class="th col-2"><h6>Details</h6></div>
                    </div>
                    <div class="trs flex fw" v-for="info in deposit" :key="info.name">
                        <div class="tr col-2"><img :src="info.logo" alt=""></div>
                        <div class="tr col"><p>{{info.fee}}</p></div>
                        <div class="tr col-2"><p>{{info.time}}</p></div>
                        <div class="tr col"><p>{{info.min}}</p></div>
                        <div class="tr col"><p>{{info.max}}</p></div>
                        <div class="tr col-2 det" @click="toggle(info.details.title)"><p>{{info.details.title}}</p><i v-if="details === info.details.title" class="fas fa-chevron-up"></i><i v-else class="fas fa-chevron-down"></i></div>
                        <transition name="dropdown">
                        <div class="wrap fw dets" v-if="details === info.details.title">
                            <p class="mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                        </transition>
                    </div>
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
            table: 'with',
            details: undefined,
            deposit: [
                {
                    name: "Neteller",
                    logo: require('../../assets/icons/payment/neteller.png'),
                    min: "£10",
                    max: "None",
                    fee: "£2",
                    time: "2 days",
                    details: {
                        title: "Something",
                        content: "lreom ispusmoa isdfjl asdfö asjdfilkjsdf lkijlfihasukdf hsaädjf asdhf lkasfn lk hmlkgjsdhfv duablav masdökl nasjbdsarasear köo dkhgijaödfg"
                    }
                },
                {
                    name: "Skrill",
                    logo: require('../../assets/icons/payment/skrill.png'),
                    min: "£10",
                    max: "None",
                    fee: "£2",
                    time: "2 days",
                    details: {
                        title: "Something1",
                        content: "lreom ispusmoa isdfjl asdfö asjdfilkjsdf lkijlfihasukdf hsaädjf asdhf lkasfn lk hmlkgjsdhfv duablav masdökl nasjbdsarasear köo dkhgijaödfg"
                    }
                },
                {
                    name: "MuchBetter Wallet",
                    logo: require('../../assets/icons/payment/much.png'),
                    min: "£10",
                    max: "None",
                    fee: "£2",
                    time: "2 days",
                    details: {
                        title: "Something2",
                        content: "lreom ispusmoa isdfjl asdfö asjdfilkjsdf lkijlfihasukdf hsaädjf asdhf lkasfn lk hmlkgjsdhfv duablav masdökl nasjbdsarasear köo dkhgijaödfg"
                    }
                },
                {
                    name: "Debit cards",
                    logo: require('../../assets/icons/payment/debit.png'),
                    min: "£10",
                    max: "None",
                    fee: "£2",
                    time: "2 days",
                    details: {
                        title: "Something3",
                        content: "lreom ispusmoa isdfjl asdfö asjdfilkjsdf lkijlfihasukdf hsaädjf asdhf lkasfn lk hmlkgjsdhfv duablav masdökl nasjbdsarasear köo dkhgijaödfg"
                    }
                },
                {
                    name: "AstroPay Cards",
                    logo: require('../../assets/icons/payment/astro.png'),
                    min: "£10",
                    max: "None",
                    fee: "£2",
                    time: "2 days",
                    details: {
                        title: "Something4",
                        content: "lreom ispusmoa isdfjl asdfö asjdfilkjsdf lkijlfihasukdf hsaädjf asdhf lkasfn lk hmlkgjsdhfv duablav masdökl nasjbdsarasear köo dkhgijaödfg"
                    }
                },
                {
                    name: "ecoPayz",
                    logo: require('../../assets/icons/payment/ecopayz.png'),
                    min: "£10",
                    max: "None",
                    fee: "£2",
                    time: "2 days",
                    details: {
                        title: "Something5",
                        content: "lreom ispusmoa isdfjl asdfö asjdfilkjsdf lkijlfihasukdf hsaädjf asdhf lkasfn lk hmlkgjsdhfv duablav masdökl nasjbdsarasear köo dkhgijaödfg"
                    }
                },
                {
                    name: "Neosurf",
                    logo: require('../../assets/icons/payment/neosurf.png'),
                    min: "£10",
                    max: "None",
                    fee: "£2",
                    time: "2 days",
                    details: {
                        title: "Something6",
                        content: "lreom ispusmoa isdfjl asdfö asjdfilkjsdf lkijlfihasukdf hsaädjf asdhf lkasfn lk hmlkgjsdhfv duablav masdökl nasjbdsarasear köo dkhgijaödfg"
                    }
                }
            ]
        }
    },
    methods: {
        toggle(val){
            if(val === this.details){this.details = undefined}
            else{this.details = val}
        }
    },
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
.content{
    width: 1100px;
    max-width: 95%;
    padding: 40px 0;
    justify-content: space-between;
    .col{
        justify-content: flex-start;
        // h3,h6{width: 100%;}
        hr{
            height: 2px;
            width: 100%;
            background: #ff9933;
        }
        h3{margin-right: 15px; opacity: 1; cursor: pointer; transition: .15s ease-in-out;}
        .inactive{opacity: .4;}
    }
    .wrap{width: 100%;}
    .m{font-size: 22px; justify-content: flex-start;}
    .title{
        border-bottom: 1px solid #f2f2f2;
        h6{
            text-transform: uppercase;
        }
        .th{
            padding: 15px 20px;
        }
    }
    .trs{
        border-bottom: 1px solid #f2f2f2;
    }
    .dets{
        padding: 30px 20px;
        color: #666666;
    }
    .tr{
        padding: 15px 20px;
        color: #666666;
    }
    .table{
        background: #fff;
        width: 100%;
        border-radius: 0;
        .det{cursor: pointer;}
        p{margin-right: 15px; float: left;}
        i{font-size: 12px; position: relative; top: 0px;}
        img{
            // width: 80px;
            height: 25px;
            margin: 0;
        }
    }
}
</style>
