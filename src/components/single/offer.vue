<template>
    <div class="container flex">
        <div class="col-group as">
            <div class="col m-r fs">
                <h4 class="f-gray bold">Betting Bonus</h4>
                <div class="content">

                </div>
            </div>
            <div class="col m-l fs">
                <h4 class="f-gray bold">Casino Bonus</h4>
                <div class="content">

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

        }
    },
    methods: {},
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
.container{
    width: 100%;
    background: #fff!important;
}
.col-group{
    @media only screen and (min-width: 1200px) {
        width: 1100px;
        padding: 80px 0;
        justify-content: space-between;
    }
}
.content{
    @media only screen and (min-width: 1200px) {
        padding: 20px;
        width: 100%;
        background: #f7f7f7;
        min-height: 250px;
    }
}
.m-l{margin-left: 10px; h4{border-bottom: 2px solid #189e0c;}}
.m-r{margin-right: 10px; h4{border-bottom: 2px solid #ff9933;}}
h4{
    width: 100%;
    margin-bottom: 8px;
    text-transform: uppercase;
}
</style>
