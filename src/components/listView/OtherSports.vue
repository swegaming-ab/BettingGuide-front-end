<template>
  <div class="col-group">
      <div class="wrap flex">
          <h5 class="f-white"><span class="">POPULAR <span class="bold">SPORTS</span>:</span></h5>
      <div class="col">

          <div class="img flex bxs">
              <div class="flex cc"><img src="../../assets/icons/sports/football.png" alt="" class=""></div>
              <h5 class="bold f-orange">Football</h5>
          </div>
          <div class="img flex bxs">
              <div class="flex cc"><img src="../../assets/icons/sports/cricket.png" alt="" class=""></div>
              <h5 class="bold f-orange">Cricket</h5>
          </div>
          <div class="img flex bxs">
              <div class="flex cc"><img src="../../assets/icons/sports/bingo.png" alt="" class=""></div>
              <h5 class="bold f-orange">Bingo</h5>
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
        position: relative;
        width: 100%;
        height: 200px;
        background-image: url('../../assets/images/textureblue.png');
        background-size: cover;
    }
    .col-group{
        padding: 80px 0;
        // height: 100%;
        width: 100%;
        background-image: url('../../assets/images/green.png');
    }
    .overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 1;
    }
    .img{
        // margin: 0 20px;

        h3{}
        h5{width: 100%; text-align: center;}
    }
    .cc{
        img{width: 60%;}
        border-radius: 100px;
        background: #fff;
        width: 100px; height: 100px;
    }

</style>
