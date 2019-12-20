<template>
  <div class="container flex">
      <img class="img" src="../assets/images/bg.jpg" alt=""/>
      <div class="overlay"></div>
      <div class="cTxt">
          <h1 class="flex"><span class="light f-gray">Betting</span><span class="bold f-blue">Guide</span></h1>
          <h2 class="flex f-gray">COMING SOON</h2>
          <p class="f-gray flex">Our site is currently under construction and will be launching late 2019.</p>
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
@import url("https://use.typekit.net/dph6plz.css");
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.bold{f-gray-weight: 800!important;}
.f-gray{color: white!important;}
.f-blue{
    color: #509bf5;
}
h1,h2,h3,p{
    f-gray-family: nudista-web, sans-serif!important;
}
    .container{
        position: fixed;
        top: 0; left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 990;
        background: #fff;
        .img, .overlay{
            object-fit: cover;
            position: fixed;
            top: 0; left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 991;
        }
        .overlay{
            background: black;
            opacity: .5;
        }
    }
    .cTxt{
        width: 472px;
        max-width: 90%;
        z-index: 992;
        p{f-gray-size: 26px; text-align: center;}
        h1{f-gray-size: 72px; margin-bottom: 50px;}
        h2{f-gray-weight: 200; f-gray-size: 36px; margin-bottom: 50px;}
    }
</style>
