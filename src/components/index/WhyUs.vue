<template>
    <div class="container flex">
        <div class="col-group header">
            <h2 class="f-gray"><span class="f-orange bold">Why</span> BettingGuide</h2>
            <!-- <p class="f-gray mb-20">
                Our goal is to provide the most comprehensive online gambling resource, to help you enjoy safe online betting at legal, and trustworthy gambling sites.
                You will find step by step guides & impartial reviews to help you choose the best gambling sites that are legal for customers from India.
            </p> -->
        </div>

        <div class="col-group content">
            <div class="col bxs">
                <img src="../../assets/icons/reason11.png" alt="">
                <h3 class=" f-gray">Carefully selected</h3>
                <!-- <hr> -->
                <p>We recommend only licensed, trusted and safe gambling sites for <span class="bold">Indian customers.</span></p>
            </div>
            <div class="col bxs">
                <img src="../../assets/icons/reason21.png" alt="">
                <h3 class=" f-gray">User first</h3>
                <!-- <hr> -->
                <p>We provide <span class="bold">impartial and honest</span> reviews of sportsbooks and casinos to help our users make smart and informed decisions.</p>
            </div>
            <div class="col bxs">
                <img src="../../assets/icons/reason31.png" alt="">
                <h3 class=" f-gray">Experience</h3>
                <!-- <hr> -->
                <p>Our experts with years of experience in the online gambling industry, provide the most detailed guides and reviews for <span class="bold">gambling legally</span> in India.</p>
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
    background: #f7f7f7;
    position: relative;
    width: calc(100% - 20px);
    padding: 40px 10px;
    @media only screen and (min-width: 1200px) {
        padding: 80px 0;
        width: 100%;
    }
}

.header{
    max-width: 95%;
    text-align: center;
    @media only screen and (min-width: 1200px) {
        margin-bottom: 10px;
        width: 1100px;
        h2{width: 100%;  border-bottom: 2px solid #ff9933; padding-bottom: 20px;}
    }
}
.content{
    width: 100%;
    justify-content: space-between;
    .col{
        flex: none;
        width: calc(33% - 45px);
        min-height: 300px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 5px;
        padding: 20px;
        hr{
            height: 3px;
            width: 60px;
            border: none;
            background: #509bf5;
        }
    }
    h3,p{
        color: #666666;
        width: 100%;
        text-align: center;
    }
    img{
        width: 120px;
    }
    @media only screen and (min-width: 1200px) {
        width: 1100px;
        .col{
            text-align: center;
            // margin: 10px;
            background: rgba(255, 255, 255, .95);
        }
    }
}
</style>
