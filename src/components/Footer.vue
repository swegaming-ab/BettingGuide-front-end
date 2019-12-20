<template>
  <div class="container flex">
      <div class="col-group">
          <div class="col bl">
              <li class="">
                  <h6><span class="f-white">Betting</span><span class="bold f-orange">Guide</span></h6>
              </li>
              <li class="">
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-instagram"></i>
                  <i class="fab fa-facebook"></i>
              </li>
          </div>
          <div class="col">
              <li><p>col</p></li>
          </div>
          <div class="col">
              <li><p>col</p></li>
          </div>
          <div class="col">
              <li><p>col</p></li>
          </div>
      </div>
      <div class="copy f-white flex">
          <img src="../assets/images/foot.png" alt="">
          <p>© 2019 BettingGuide, Inc. All Rights Reserved
              © 2019 BettingGuide.com drivs av Swegaming AB. Adress: Stora Badhusgatan 18-20 411 21, Göteborg. Org.nummer 556955-1004. <a href="">Cookies & Privacy.</a>
          </p>
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
        width: calc(100%);
        // border-top: 1px solid rgb(218, 218, 218);
        background: #4a4a4a;
        color: #fff;
        .col-group{
            padding: 40px 20px;
            width: calc(80% - 40px);
        }
        li{
            width: 100%;
            margin: 10px 0;
            h6{font-weight: normal; font-size: 22px;}
            p{font-size: 14px;}
            i{
                color: #ff9933; font-size: 32px; margin-right: 20px; cursor: pointer;
                transition: .15s ease-in-out;
                &:hover{
                    transform: rotate(15deg);
                }
            }
        }
        .copy{
            width: 100%;
            padding: 15px 0;
            p{font-size: 12px; width: 40%; margin: 0 30%; text-align: center;}
            a{font-size: 12px; font-weight: normal; color: #ff9933;}
            margin-top: 10px;
        }
    }
    h6{
        font-family: nudista-web, sans-serif!important;
    }
    @media screen and (max-width: 1000px){
        .copy{
            p{width: 95%!important; margin: 0!important;}
        }
        .bl{
            width: 100%; flex: none;
            text-align: center;
            margin-bottom: 20px;
            i{margin: 0 20px;}
        }
    }
</style>
