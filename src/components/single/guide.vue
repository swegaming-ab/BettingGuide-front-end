<template>
    <div class="container flex">
        <div class="col-group">
            <div class="col fs">
                <img src="../../assets/icons/guide.png" class="hi" alt="">
                <h3 class="f-gray bold">GET STARTED</h3>
                <hr>
                <div class="wrap as f-gray fw flex">
                    <div class="col c as fs">
                        <h5 v-if="step === 1" class=" mt-20 mb-20 fw">STEP 1: Choose a bookmaker</h5>
                        <h5 v-if="step === 2" class=" mt-20 mb-20 fw">STEP 2: Complete a registration form</h5>
                        <h5 v-if="step === 3" class=" mt-20 mb-20 fw">STEP 3: Add Payment method and deposit funds</h5>
                        <h5 v-if="step === 4" class=" mt-20 mb-20 fw">STEP 4: Start betting!</h5>
                        <p v-if="step === 1" class="txt mb-20">Compare the best betting sites for India customers in our tables above, and choose a bookmaker that suits your gambling style. Click through our link and you will land on one of the exclusive sign up offers.</p>
                        <span v-if="step === 2" class="txt mb-20">
                            <p>On the landing page, you will see the option to open an account, and this will take you to the registration form. Typically, you need to enter the following:</p>
                            <ul>
                                <li><i class="fas fa-chevron-right"></i>Country of Residence</li>
                                <li><i class="fas fa-chevron-right"></i>Your name, email address, phone number, and physical address</li>
                                <li><i class="fas fa-chevron-right"></i>Date of birth (to verify you are over 18)</li>
                                <li><i class="fas fa-chevron-right"></i>Create a login (username and password)</li>
                            </ul>
                        </span>

                        <p v-if="step === 3" class="txt mb-20">Either during or after the registration form, you will need to enter a valid payment method to deposit funds into your betting account. Betting sites offer a wide variety of payment methods</p>
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
    ul{width: 100%;}
    li{
        font-weight: lighter;
        margin: 5px 0;
        width: 100%;
        font-family: nudista-web, sans-serif!important;
        i{
            position: relative;
            top: -2px;
            margin-right: 10px;
            font-size: 12px;
            color: #189e0c;
            font-weight: bold;
        }
    }
}
.col{
    .img{
        margin-top: 20px;
        height: 100%;
        position: absolute;
    }
    .txt{height: 180px;}
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
            border-bottom: 3px solid #189e0c;
            // box-shadow: none;            
        }
    }
}
</style>
