<template>
    <div class="container flex">
        <div class="header flex">
            <slot name="header"></slot>
        </div>
        <div class="sticky flex" :class="{bg: sticky}">
            <transition name="dropdown">
            <slot v-if="sticky" name="sticky"></slot>
            </transition>
        </div>
        <div class="flex bg-lcream content">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    extends: {},
    props: {},
    components: {},
    data(){
        return{
            sticky: false
        }
    },
    methods: {
        scroll(){
            window.onscroll = () => {
                let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
                if (bottomOfWindow) {
                    this.atBottom = true
                } else {
                    this.atBottom = false
                }
            }
        },
        handleSCroll(){
            if(window.scrollY > 50){
                this.sticky = true
            }
            else{
                this.sticky = false
            }
        }
    },
    created(){
        // window.addEventListener('scroll', this.handleSCroll);
    },
    mounted(){
        this.scroll()
        console.log('test');
    },
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 65vh;
        // padding-top: 50px;
        background: #F1F7FE;
        background-image: url('../../assets/images/texture1.png');
        background-size: cover;
        .bookLogo{
            width: 300px;
            margin: 0 300px;
            opacity: .6;
        }
        .col-group{width: 70%;}
        .bg{
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }
    .bonus{
        width: 100%;
        height: 150px;
        background: #f7f7f7;
        border-top: 1px solid rgb(218, 218, 218);
        border-bottom: 1px solid rgb(218, 218, 218);
    }
    .bg{
        background: #F1F7FE!important;
        border-bottom: 1px solid rgb(218, 218, 218)!important;
    }
    .sticky{
        position: sticky;
        transition: .2s ease-in-out;
        top: 61px;
        margin-top: -83px;
        min-height: 40px;
        z-index: 2;
        width: 100%;
        padding: 20px 0;
        background: transparent;
        border-bottom: 1px solid transparent;
        button{
            position: relative;
            padding: 10px 70px;
            border-radius: 20px;
            border: none;
            color: white;
            font-size: 20px;
            transition: .2s ease-in-out;
            background-color: rgb(247, 39, 74);
            box-shadow: rgba(247, 39, 74, 0.5) 0px 10px 40px -10px;
            &:hover{
                background-color: #dd082c;
            }
        }
    }
    .content{
        color: #fff;
        width: 100%;
        min-height: 200px;
        // padding: 80px 0;
        .col-group{
            // width: 900px;
            // max-width: 95%;
        }
        .wrapper-left, .wrapper-right{
            padding: 80px 20px;
            flex: 1;
            height: calc(100% - 160px);
        }
        .wrapper-left{
            background: #fff8e6;
            p{width: 80%;}
        }
        .wrapper-right{
            background: #509bf5;
        }
    }
</style>
