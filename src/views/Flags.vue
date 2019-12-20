<template>
  <div class="container flex as">
      <div class="w-txt flex">
          <div class="txt">
              <h2 class="tc mb-20 f-gray light">Welcome to</h2>
              <h1 class="f-gray tc"><span class="light">Betting</span><span class="bold f-blue">Guide</span></h1>
          </div>
      </div>
      <div class="wrapper fs fw flex">
          <h2 class="f-gray light">Please select your country:</h2>
          <router-link to="/" class="wrap">
              <img src="../assets/icons/flags/indiaoverlay.png" class="overlay" alt="">
              <img src="../assets/icons/flags/india.png" class="flag" alt="">
              <h3>India</h3>
          </router-link>
          <router-link to="/" class="wrap">
              <img src="../assets/icons/flags/englandoverlay.png" class="overlay" alt="">
              <img src="../assets/icons/flags/england.png" class="flag" alt="">
              <h3>England</h3>
          </router-link>
          <router-link to="/" class="wrap">
              <img src="../assets/icons/flags/nigeriaoverlay.png" class="overlay" alt="">
              <img src="../assets/icons/flags/nigeria.png" class="flag" alt="">
              <h3>Nigeria</h3>
          </router-link>
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
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background: #fff;
}
.w-txt{
    width: 100%;
    background-image: url('../assets/images/gray.png');
    background-size: contain;
    height: 50vh;
}
h1,h2{width: 100%;}
.wrapper{
    width: 1200px;
    height: 300px;
    margin-top: -100px;
    h2{
        border-bottom: 2px solid #509bf5;
        padding-bottom: 5px;
        margin-bottom: 20px;
        width: 100%;
    }
}
.wrap{
    position: relative;
    height: 200px;
    width: 200px;
    .flag,.overlay{transition: .3s ease-in-out;}
    .flag{opacity: 0.3;}
    h3{
        opacity: 0;
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        font-weight: bold;
        color: #666666;
        text-align: center;
        transition: .3s ease-in-out;
    }
    &:hover{
        .flag{opacity: 1;}
        .overlay{opacity: 0;}
        h3{opacity: 1;}
    }
}
img{
    position: absolute;
    width: 200px;
}
</style>
