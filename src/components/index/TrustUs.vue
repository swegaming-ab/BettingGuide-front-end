<template>
    <div class="container bg-cream flex">
        <div class="col-group">
            <div class="col f-gray">
                <h2><span>"</span>Perhaps a cheesy quote convincing customers to use our services.<span>"</span></h2>
                <p>- BettingGuide Team</p>
                <p></p>
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
    h2{text-align: center;}
    p{text-align: center; margin-top: 10px;}
}
span{
    color: #9A3334;
    f-gray-weight: bold;
    margin: 5px;
}
</style>
