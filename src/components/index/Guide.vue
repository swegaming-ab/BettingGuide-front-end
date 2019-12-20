<template>
    <div class="container bg-cream flex">
        <div class="col-group">
            <div class="col f-gray">
                <h2>New to <span>gambling</span>?</h2>
                <p>Our guide will help you get started.</p>
                <CtaBtn :color="'red'" :target="'test'" :text="'Guide'"/>
            </div>
            <div class="col">
                <img src="../assets/icons/confused.png" alt="">
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
    padding: 100px 20px;
    width: calc(100% - 40px);
}
.col-group{
    width: 40%;
    height: 200px;
    h2{text-align: center;}
    p{text-align: center; margin-top: 20px; width: 100%;}
}
span{
    border-bottom: 4px solid #9A3334;
    // border-bottom: 4px solid #509bf5;
}
img{
    height: 200px;
}
</style>
