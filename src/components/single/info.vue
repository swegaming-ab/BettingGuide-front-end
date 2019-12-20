<template>
    <div class="col-group info">
        <div class="col">
            <img src="../../assets/icons/tables/info.png" class="hi" alt="">
            <h3 class="bold f-gray">INFORMATION</h3>
            <hr>
            <div class="wrap">
                <ul>
                    <li>
                        <div class="left flex fs">
                            <i class="fas fa-sitemap"></i>
                            <h6 class="bold f-gray">PRODUCTS</h6>
                        </div>
                        <div class="right flex">
                            <h6 class="f-gray light">Sports, Casino, Live Casino, Poker, Bingo</h6>
                        </div>
                    </li>
                    <li>
                        <div class="left flex fs">
                            <i class="far fa-futbol"></i>
                            <h6 class="bold f-gray">SPORTS</h6>
                        </div>
                        <div class="right flex">
                            <h6 class="f-gray light">20+</h6>
                        </div>
                    </li>
                    <li>
                        <div class="left flex fs">
                            <i class="fas fa-globe-americas"></i>
                            <h6 class="bold f-gray">COUNTRIES</h6>
                        </div>
                        <div class="right flex">
                            <h6 class="f-gray light" v-for="(key,index) in stars" :key="index">Country {{index}}, </h6>
                        </div>
                    </li>
                    <li>
                        <div class="left flex fs">
                            <i class="fas fa-assistive-listening-systems"></i>
                            <h6 class="bold f-gray">LANGUAGES</h6>
                        </div>
                        <div class="right flex">
                            <h6 class="f-gray light" v-for="(key,index) in stars" :key="index">Language {{index}}, </h6>
                        </div>
                    </li>
                    <li>
                        <div class="left flex fs">
                            <i class="fas fa-warehouse"></i>
                            <h6 class="bold f-gray">ESTABLISHED</h6>
                        </div>
                        <div class="right flex">
                            <h6 class="f-gray light">2006</h6>
                        </div>
                    </li>
                    <li>
                        <div class="left flex fs">
                            <i class="fas fa-id-badge"></i>
                            <h6 class="bold f-gray">LICENSE</h6>
                        </div>
                        <div class="right flex">
                            <h6 class="f-gray light">MGA - MGA/B2C/130/2006</h6>
                        </div>
                    </li>

                    <li>
                        <div class="left flex fs">
                            <i class="fas fa-envelope-open-text"></i>
                            <h6 class="bold f-gray">EMAIL</h6>
                        </div>
                        <div class="right flex">
                            <h6 class="f-gray light">888sport@info.com</h6>
                        </div>
                    </li>
                </ul>
                <div class="wrap-text flex fs">
                    <h6 class="f-gray">Paragraph 1</h6>
                    <p class="f-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class="wrap-text flex fs">
                    <h6 class="f-gray">Paragraph 2</h6>
                    <p class="f-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
            stars: 8
        }
    },
    methods: {},
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
.info{
    width: 1100px;
    padding-top: 40px;
    padding-bottom: 80px;
    .wrap{width: 100%; background: #fff;}
    .col{
        justify-content: flex-start;

    }

    // h3,p{width: 100%;}
    h6{margin-right: 10px;}
    .right{
        justify-content: flex-start;
    }
    .left{
        i{
            margin-right: 15px;
            color: #ff9933;
        }
    }
    ul{margin: 0; padding: 0;}
    li{
        width: calc(100% - 50px);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #e6e6e6;
        padding: 25px;
        h6{float: left;}
        .left{flex: 1;}
        .right{flex: 3;}
    }
    hr{
        height: 2px;
        width: 100%;
        background: #ff9933;
    }
    .wrap-text{
        margin-top: 20px;
        padding: 20px;
        h6{
            padding-bottom: 5px;
            // border-bottom: 2px solid #ff9933;
            text-transform: uppercase;
            margin-bottom: 10px;
        }
    }
}
</style>
