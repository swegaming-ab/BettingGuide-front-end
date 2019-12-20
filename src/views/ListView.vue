<template>
    <div class="container flex">
        <div class="col-group head">
            <div class="col f-gray">
                <div class="fw flex mb-20">
                    <h1 class="f-white light">Best <span class="f-orange bold">Indian</span> Betting <span class="">Sites</span></h1>
                </div>
                <div class="wrap f-white flex">
                    <img src="../assets/icons/india.png" alt="">
                    <h4>Accepts Indian Players</h4>
                </div>
                <div class="wrap f-white flex">
                    <img src="../assets/icons/rupie.png" alt="">
                    <h4>Accepts Indian Rupies</h4>
                </div>
            </div>
        </div>
        <div class="sticky flex">
            <ul v-if="desktop" class="d flex">
                <li @click="menu = 2, scrollMeTo('sites')"> Betting Sites</li>
                <li @click="menu = 2, scrollMeTo('license')"> Licensing & Safety</li>
                <li @click="menu = 2, scrollMeTo('customer')"> Customer Service</li>
                <li @click="menu = 3, scrollMeTo('review')"> Reviews</li>
                <li @click="menu = 4, scrollMeTo('tips')">Recent Betting Tips</li>
                <li @click="menu = 5, scrollMeTo('posts')"> Latest Blog Posts</li>
            </ul>
            <i @click="submenu = true" v-if="mobile && !submenu" class="fas bold f-blue fa-chevron-down flex"></i>
            <i @click="submenu = false" v-if="mobile && submenu" class="fas bold f-blue fa-chevron-up flex"></i>
            <transition name="dropdown">
            <ul v-if="mobile && submenu">
                <li @click="menu = 2, scrollMeTo('sites')"> Betting Sites</li>
                <li @click="menu = 2, scrollMeTo('license')"> Licensing & Safety</li>
                <li @click="menu = 2, scrollMeTo('customer')"> Customer Service</li>
                <li @click="menu = 3, scrollMeTo('review')"> Reviews</li>
                <li @click="menu = 4, scrollMeTo('tips')">Recent Betting Tips</li>
                <li @click="menu = 5, scrollMeTo('posts')"> Latest Blog Posts</li>
            </ul>
            </transition>
        </div>

        <!-- <div class="col-group info">
            <div class="col f-gray">
                <div class="fw flex mb-20">
                    <h2 class="f-gray bold">Best <span class="f-green bold">Indian</span> Betting <span class="bold">Sites</span></h2>
                </div>
                <div class="wrap flex">
                    <img src="../assets/icons/india.png" alt="">
                    <h5>Accepts Indian Players</h5>
                </div>
                <div class="wrap flex">
                    <img src="../assets/icons/rupie.png" alt="">
                    <h5>Accepts Indian Rupies</h5>
                </div>
            </div>
        </div> -->

        <list/>

        <tableSection :data="bookies"/>

        <bestBettingSites/>

        <OtherSports/>
        <faq/>
    </div>

    <!-- </ListLayout> -->
    <!-- <OtherSports/> -->

</template>
<script>
    /* eslint-disable */
    import OtherSports from '../components/listView/OtherSports.vue'
    import bestBettingSites from '../components/listView/bestBettingSites.vue'
    import ImgSlideshow from '../components/ImgSlideshow.vue'
    import list from '../components/listView/list.vue'
    import faq from '../components/listView/faq.vue'
    import tableSection from '../components/listView/tableSection.vue'
    import data from './bookies.json'
    export default {
        extends: {},
        props: {},
        components: {
            ImgSlideshow,
            OtherSports,
            list,
            tableSection,
            bestBettingSites,
            faq
        },
        data(){
            return{
                i: 3,
                cons: 3,
                expand: undefined,
                menu: undefined,
                reviews: [
                    "888sport",
                    "WilliamHill",
                    "LeoVegas",
                    "MrGreen",
                    "Novibet"
                ],
                bookies: [],
                window: {
                    width: 0,
                    height: 0
                },
                mobile: false,
                desktop: false,
                submenu: false
            }
        },
        methods: {
            go(val){
                return val
            },

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
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
                if(this.window.width > 1200){this.desktop = true, this.mobile = false}
                if(this.window.width < 1200){this.mobile = true, this.desktop = false}
            }
        },
        created() {
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },
        beforeMount(){
            this.bookies = data
            if(this.window.width > 1200){this.desktop = true}
            if(this.window.width < 1200){this.mobile = true}
        }
    }
</script>
<style lang="scss" scoped>
.container{
    width: 100%;

    @media only screen and (min-width: 1200px) {

    }
}
.head{
    background: #F1F7FE;
    background-image: url('../assets/images/green.png');
    background-size: cover;
    padding-top: 60px;
    height: 400px;
    width: 100%;
    @media only screen and (min-width: 1200px) {
        .wrap{margin: 0 20px;}
        img{
            width: 60px; margin-right: 10px;
        }
    }
}
.sticky{
    position: sticky;
    top: 59px;
    border-top: 1px solid rgb(218, 218, 218);
    border-bottom: 1px solid rgb(218, 218, 218);
    margin-bottom: 40px;
    width: 100%;
    z-index: 2;
    background: #f7f7f7;
    overflow: hidden;
    i{width: 100%; text-align: center; height: 100%; height: 50px;}
    .d{
        display: none;
        padding: 20px 0;
        margin: 0;
        li{
            display: inline;
            padding: 20px;
            font-family: niveau-grotesk, sans-serif;
            font-weight: bold;
            color: #666666;
            font-size: 14px;
            margin: 0 25px;
            width: calc(100% - 20px);
            cursor: pointer;
        }
    }
    @media only screen and (min-width: 1200px) {
        .d{display: inline;}
        .m{display: none;}
    }
}
.info{
    width: 95%;
    img{
        width: 50px;
    }
    @media only screen and (min-width: 1200px) {
        width: 1100px;
        margin-top: 40px;
        padding: 40px 0;
        .wrap{margin: 0px 20px;}
        h2{
            padding-bottom: 20px;
            margin-bottom: 30px;
            width: 100%;
            text-align: center;
            border-bottom: 2px solid #ff9933;
        }
        img{
            width: 50px;
            margin-right: 10px;
        }
    }
}

    p{font-size: 16px;}
    ul{
        padding: 0;
        margin: 0 10px;
        max-width: calc(100% - 20px);
    }


    .newsPost{
        position: relative;
        width: 300px;
        overflow: hidden;
        height: 230px;
        padding-bottom: 10px;
        margin: 40px 10px;
        border-radius: 10px;
        border: 1px solid rgba(218, 218, 218, 0.3);
        transition: .2s ease-in-out;
        &:hover{
            .overlay{opacity: 0;}
        }
        h6{margin-top: 10px;}
        p, h6{
            padding: 10px 20px;
        }
        .overlay{
            transition: .2s ease-in-out;
            position: absolute;
            top: 0;
            width: 100%;
            height: 70%;
            background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
        }
        button{
            background: #509bf5;
            padding: 10px 30px;
            margin-bottom: 10px;
            color: #fff;
            border-radius: 50px;
            margin: 10px;
            transition: .2s ease-in-out;
        }
    }
    .tables{
        justify-content: space-around;
        padding: 80px 0;
        background-size: contain;
        h3{width: 100%; margin: 20px 0;}
        img{
            width: 200px;
        }
    }


</style>
