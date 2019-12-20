<template>
    <div class="container flex">
        <div class="col-group">
            <div class="col fs">
                <img src="../../assets/icons/guide.png" class="hi" alt="">
                <h3 class="f-gray bold">GET STARTED</h3>
                <hr>
                <div class="wrap as f-gray fw flex">
                    <div class="col c as fs">
                        <h5 class=" mt-20 mb-20 fw">STEP {{step}}</h5>
                        <p v-if="step === 1" class="mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p v-if="step === 2" class="mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumsadfsadfsafasasdf.</p>
                        <p v-if="step === 3" class="mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumsadfsadfsafasasdf.</p>
                        <div class="btns fw flex">
                            <button @click="prev()" type="button" class="flex prev">Previous step</button>
                            <button @click="next()" type="button" class="flex next">Next step</button>
                        </div>
                    </div>
                    <div class="col c fe">
                        <transition name="guide"><img v-if="step === 1" src="../../assets/images/step1.png" class="img bxs" alt=""></transition>
                        <transition name="guide"><img v-if="step === 2" src="../../assets/images/step2.png" class="img bxs" alt=""></transition>
                        <transition name="guide"><img v-if="step === 3" src="../../assets/images/step3.png" class="img bxs" alt=""></transition>
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
            step: 1
        }
    },
    methods: {
        next(){
            this.step++
            if(this.step === 4){this.step = 1}
        },
        prev(){
            this.step--
            if(this.step === 0){this.step = 1}
        }
    },
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
.container{
    // background: #fff!important;
    background-image: url('../../assets/images/gray.png')!important;
    background-size: cover!important;
    width: 100%
}
.col-group{
    width: 1100px;
    padding: 80px 0;
}
.hi{
    top: -1px;
}
h5{
    font-weight: bold;
    color: #ff9933;
}
.wrap{
    position: relative;
}
.c{
    position: relative;
    height: 300px;

}
.col{
    .img{
        margin-top: 20px;
        height: 100%;
        position: absolute;
    }
    p{height: 180px;}
}
hr{
    height: 2px;
    width: 100%;
    background: #ff9933;
}
.btns{
    justify-content: flex-start;
    button{
        transition: .15s ease-in-out;
        text-transform: uppercase;
        background: #ff9933;
        background: #189e0c;
        border-bottom: 3px solid #127709;
        border-top: 3px solid transparent;
        color: #fff;
        width: 180px;
        padding: 15px 20px;
        border-radius: 5px;
        margin-right: 10px;
        box-shadow: 1px 2px 7px 1px rgba(0,0,0,0.5);
        box-shadow: 0 4px 8px 0 rgba(108,127,135,.5), 0 1px 4px 0 rgba(108,127,135,.9);
        &:hover{
            // border-top: 3px solid #189e0c;
            background: #127709;
        }
    }
}
</style>
