<template>
    <div class="container flex">
        <div class="col-group gallery">
            <div class="col">
                <img src="../../assets/icons/tables/gallery.png" class="hi" alt="">
                <h3 class="bold f-gray">GALLERY</h3>
                <hr>
                <div class="img-container flex">
                    <img src="../../assets/images/888single.png" alt="">
                    <img src="../../assets/images/888single.png" alt="">
                    <img src="../../assets/images/888single.png" alt="">
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
    // background: #fff!important;
}
.gallery{
    width: 1100px;
    max-width: 95%;
    padding: 80px 0;
    .col{
        justify-content: flex-start;
    }
    hr{
        height: 2px;
        width: 100%;
        background: #ff9933;
    }
    .img-container{
        justify-content: space-between;
        img{
            width: calc(33.3% - 5px);
        }
    }
}
</style>
