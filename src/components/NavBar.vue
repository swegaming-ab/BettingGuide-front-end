<template>
    <div :class="{active: hidden}" class="navBar flex">
        <div class="flex w100" :class="{bb: hover}">
            <div class="left flex">
                <router-link to="/">
                    <img src="../assets/icons/logo1.png" alt="">
                    <h3><span class="f-gray">Betting</span><span class="bold f-orange">Guide</span></h3>
                </router-link>
            </div>
            <div class="flex right">
                <router-link :to="'list'">
                    <li @mouseenter="hover = true" @mouseleave="hover = false">
                        Betting
                        <transition name="fade"><i v-if="hover" class="fas fa-chevron-up"></i></transition>
                        <transition name="fade"><i v-if="!hover" class="fas fa-chevron-down"></i></transition>
                    </li>
                </router-link>
                <router-link :to="'single2'">
                    <li @mouseenter="hover = true" @mouseleave="hover = false">
                        Casino
                        <transition name="fade"><i v-if="hover" class="fas fa-chevron-up"></i></transition>
                        <transition name="fade"><i v-if="!hover" class="fas fa-chevron-down"></i></transition>
                    </li>
                </router-link>
                <router-link :to="'academy'">
                    <li @mouseenter="hover = true" @mouseleave="hover = false">
                        Academy
                        <transition name="fade"><i v-if="hover" class="fas fa-chevron-up"></i></transition>
                        <transition name="fade"><i v-if="!hover" class="fas fa-chevron-down"></i></transition>
                    </li>
                </router-link>
                <router-link :to="'about'">
                    <li @mouseenter="hover = true" @mouseleave="hover = false">
                        About
                        <transition name="fade"><i v-if="hover" class="fas fa-chevron-up"></i></transition>
                        <transition name="fade"><i v-if="!hover" class="fas fa-chevron-down"></i></transition>
                    </li>
                </router-link>
                <router-link :to="'single2'">
                    <li @mouseenter="hover = true" @mouseleave="hover = false">
                        Contact
                        <transition name="fade"><i v-if="hover" class="fas fa-chevron-up"></i></transition>
                        <transition name="fade"><i v-if="!hover" class="fas fa-chevron-down"></i></transition>
                    </li>
                </router-link>
            </div>
        </div>

        <div @mouseenter="hover = true" @mouseleave="hover = false" v-if="hover" class="dropdown bb">
            <div class="col-group">
                <ul>
                    <li>Menu item</li>
                    <li>Menu item</li>
                    <li>Menu item</li>
                    <li>Menu item</li>
                    <li>Menu item</li>
                    <li>Menu item</li>
                </ul>
            </div>
        </div>
        <Bell/>

    </div>
</template>
<script>
    export default {
        extends: {},
        props: {},
        components: {},
        data(){
            return{
                hover: undefined,
                hidden: false
            }
        },
        methods: {
            handleSCroll(){
                if(window.scrollY > 50 ){
                    this.hidden = true
                }else{
                    this.hidden = false
                }
            },
        },
        created(){
            window.addEventListener('scroll', this.handleSCroll);
        },
        beforeMount(){}
    }
</script>
<style lang="scss" scoped>
li{list-style-type: none;}
    .navBar{
        display: none;
        position: fixed;
        top: 0; left: 0;
        z-index: 9;
        width: calc(100%);
        transition: .2s ease-in-out;
        border-bottom: 1px solid rgba(218, 218, 218, 0.5);
        background: #FFF;
        // &:hover{
        //     background: #fff;
        //     .right{li{color: #5f5f5f;}}
        //     .left{.f-grayWhite{color: #5f5f5f!important;}}
        // }
    }
    .active{
        // box-shadow: 0 1px 12px 0 rgba(0,0,0,0.1);
        .right{li{color: #5f5f5f;}}
        .left{.f-grayWhite{color: #5f5f5f!important;}}
    }
    .dropdown{
        padding: 10px;
        width: calc(100vw - 20px);
        left: 0;
        top: 60px;
        transition: .2s ease-in-out;

        // background: #fff;
        background: #f7f7f7;
        color: #fff;
        li{
            margin: 2.5px 0;
        }
    }
    .left{
        position: absolute;
        left: 20px;
        top: 13px;
        flex: 1;
        transition: .2s ease-in-out;
        h3{
            transition: .2s ease-in-out;
            float: right;
        }
        img{
            position: relative;
            top: 2px;
            width: 30px;
            margin-right: 10px;
        }
    }
    .right{
        flex: 5;
        width: 100%;
        text-transform: uppercase;
        font-size: 14px;
        font-family: nudista-web, sans-serif!important;
        li{
            position: relative;
            padding: 20px 40px;
            height: calc(100% - 40px);
            margin-right: -1px;
            list-style-type: none;
            // transition: .2s ease-in-out;
            border-left: 1px solid rgba(218, 218, 218, 0.5);
            border-right: 1px solid rgba(218, 218, 218, 0.5);
            cursor: default;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            border-bottom: 2px solid transparent;
            color: #5f5f5f;
            &:hover{
                border-bottom: 2px solid #ff9933;
            }
            i{
                position: absolute;
                top: 22px;
                right: 20px;
                color: #128807;
                font-size: 12px;
            }
        }
        img{
            width: 35px; height: 35px;
            transition: .15s ease-in-out;
        }
        p{
            font-size: 12px;
            margin-left: 10px;
            transition: .3s ease;
        }
    }
    @media screen and (max-width: 1200px) {
        .navBar{
            display: none;
        }
    }
</style>
