<template>
    <div class="container flex">
        <div class="col-group header">
            <h2 class="f-gray mb-20">Get <span class="f-blue bold">started</span></h2>
            <p class="f-gray">I'm not wearing hockey pads. It was a dog. It was a big dog. It was a dog. It was a big dog. Accomplice? I'm gonna tell them the whole thing was your idea.</p>
        </div>

        <div class="col-group content">
            <div class="col bxs">
                <img src="../../assets/icons/step11.png" alt="">
                <p><span class="f-blue step bold">1. </span><span class="bold">Register</span> your account</p>
            </div>
            <div class="col bxs">
                <img src="../../assets/icons/step21.png" alt="">
                <p><span class="f-blue step bold">2. </span>Make a <span class="bold">deposit</span></p>
            </div>
            <div class="col bxs">
                <img src="../../assets/icons/step31.png" alt="">
                <p><span class="f-blue step bold">3. </span>Start <span class="bold">betting</span></p>
            </div>
        </div>
    </div>
</template>
<script>
// Idea: When scrolled into view: Start a slideshow look-a-like but with transform:scale, setTimeout 2s
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
    width: calc(100% - 20px);
    padding: 40px 10px;
    @media only screen and (min-width: 1200px) {
        padding: 80px 0;
        width: 100%;
        // background-image: url('../../assets/images/getstartedbg.png');
        background-image: url('../../assets/images/triangle1.png');
        background-size: 100% 100%;
    }
}
.header{
    width: 100%;
    text-align: center;
    h2,p{max-width: 800px;}
    @media only screen and (min-width: 1200px) {
        width: 50%;
    }
}
.content{
    margin-top: 40px;
    text-align: center;
    .col{
        // min-height: 300px;
        background: rgba(255, 255, 255, 1);
        border-radius: 5px;
        margin: 10px;
        padding: 20px;
        max-width: 600px;
        height: 250px;
    }
    .step{font-size: 32px;}
    p{color: #666666; width: 100%; margin-top: 20px;}
    img{
        width: 120px;
    }
    @media only screen and (min-width: 1200px) {
        width: 1100px;
    }
}
</style>
