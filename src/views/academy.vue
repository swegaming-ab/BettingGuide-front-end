<template>
  <div class="container">
      <div class="col-group head">
          <div class="col">
              <div class="overlay"></div>
              <!-- <img src="../assets/icons/academy.png" alt=""> -->
              <h1 class=" light">Academy</h1>
              <div class="content flex">
                  <button type="button" name="button">
                      <img src="../assets/icons/academy/basics1.png" class="ri" alt="">
                      <h3>Basics</h3>
                  </button>
                  <button type="button" name="button">
                      <img src="../assets/icons/academy/betting1.png" class="ri" alt="">
                      <h3>Betting</h3>
                  </button>
                  <button type="button" name="button">
                      <img src="../assets/icons/academy/casino1.png" class="ri" alt="">
                      <h3>Casino</h3>
                  </button>
                  <!-- <button type="button" name="button">
                      <img src="../assets/icons/academy/bingo1.png" class="ri" alt="">
                      <h3>Bingo</h3>
                  </button> -->
                  <button type="button" name="button">
                      <img src="../assets/icons/academy/safety1.png" class="ri" alt="">
                      <h3>Safety</h3>
                  </button>
              </div>
          </div>
      </div>
      <div class="sticky flex bxs" id="sticky">
          <ul class="flex f-gray">
              <li>basics</li><li>betting</li><li>casino</li><li>safety</li>
          </ul>
      </div>
      <div class="container section w100 bg-white">
          <div class="col-group fs">
              <h3 class="f-gray bold">Basics</h3>
              <a href="/academySingle" v-for="i in basics" :key="i" class="flex bg-lgray">
                  <img src="http://0f1742af55bee860f36c-ebef04bbf8ee88a49eb41a699a568a25.r5.cf2.rackcdn.com/uploaded/b/0e7383801_1527608011_back-to-basics-sermon.png" alt="">
                  <div class="content flex as">
                      <span>
                          <h4>Title of post</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </span>
                  </div>
              </a>
          </div>
      </div>
      <div class="container section w100 bg-lgray">
          <div class="col-group fs">
              <h3 class="f-gray bold">betting</h3>
              <a href="/academySingle" v-for="i in basics" :key="i" class="flex">
                  <img src="https://www.independent.co.ug/wp-content/uploads/2019/02/sports-betting.jpg" alt="">
                  <div class="content flex as">
                      <h4>Title of post</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
              </a>
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
            basics: 3,
            betting: 3,
            casino: 3,
            bingo: 2,
            safety: 4
        }
    },
    methods: {},
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
.col-group{
    padding: 40px 0;
    width: 95%;
    @media only screen and (min-width: 600px) {
        width: 1100px;
        padding: 80px 0;

    }
}
.sticky{
    position: sticky; top: 60px;
    width: 100%; background: #f7f7f7;
    ul{height: 50px; padding: 0; margin: 0;}
    li{
        cursor: pointer;
        font-size: 14px; font-weight: bold;
        text-transform: uppercase;
        display: flex; align-items: center; justify-content: center;
        height: 50px;
        padding: 0px 30px;
        &:hover{
            background: #e6e6e6;
        }
    }
}
.section .col-group{
    width: calc(100% - 10px);
    justify-content: center!important;
    h3{
        text-transform: uppercase;
        width: 100%; text-align: left;
        border-bottom: 2px solid #ff9933;
        padding-bottom: 5px;
        margin-bottom: 5px;
    }
    @media only screen and (min-width: 600px) {
        width: 1100px;
        justify-content: space-between!important;
    }
}
.section{
    img{
        height: 100%;
        width: 70px;
    }
    a{
        // height: 80px;
        width: calc(100%);
        overflow: hidden;
        background: #fff;
        margin-bottom: 5px;
        transition: .15s ease-in-out;
        &:hover{
            box-shadow: 0 4px 8px 0 rgba(108,127,135,.5), 0 1px 4px 0 rgba(108,127,135,.6);
        }
    }
    .content{
        height: calc(100% - 20px);
        padding: 10px;
        flex: 3;
        span{width: 100%;}
        p,h4{width: 100%; color: #666666;}
    }
    @media only screen and (min-width: 600px) {
        img{
            width: 100%;
            height: auto;
        }
        a{
            // height: 120px;
            padding: 10px;
            width: calc(33.3% - 25px);
            background: #fff;
            margin-bottom: 10px;
            transition: .15s ease-in-out;
            &:hover{
                box-shadow: 0 4px 8px 0 rgba(108,127,135,.5), 0 1px 4px 0 rgba(108,127,135,.6);
            }
        }
        .content{
            height: calc(100% - 20px);
            padding: 10px;
            flex: 3;
            h4{
                font-weight: bold; color: #ff9933; margin: 10px 0; text-transform: uppercase;
            }
            p,h4{width: 100%;}
        }
    }
}
.content{
    width: 1100px;
    z-index: 2;
}
.overlay{
    position: absolute; top: 0; left: 0;
    background: #0b4705;
    background: #000;
    opacity: .7;
    width: 100%;
    height: calc(50vh + 220px);
}
.head{
    position: relative;
    background: #f7f7f7;
    background-image: url('../assets/images/noise2.jpg');
    background-size: cover;
    width: 100%;
    padding-top: 120px;
    height: 30vh;
    padding-bottom: 100px;
    .overlay{
        z-index: 1;
        position: absolute; top: 0; left: 0;
        background: #0e5f07; opacity: .8;
        width: 100%;
        height: 100%;
    }
    h1{
        z-index: 2;
        color: #fff;
        text-align: center;
        margin-bottom: 40px;
        width: 100%;
    }
    img{width: 100px; margin-bottom: 0px; z-index: 2;}
    @media only screen and (min-width: 600px) {
        h1{
            width: 100%;
            text-align: center;
            margin-bottom: 40px;
        }
        img{width: 150px;}
    }
}
button{
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    margin: 0 10px;
    border-radius: 100px;
    transition: .15s ease-in-out;
    background: #ff9933;
    h3{margin-top: 0px; color: #fff; font-weight: bold;}
    img{margin: 0 20px; width: 30px!important;}
    @media only screen and (min-width: 600px) {
        display: block;
        height: 150px;
        margin: 0 20px;
        width: 150px;
        transition: .15s ease-in-out;
        h3{
            position: absolute;
            bottom: -40px;
            font-weight: lighter;
            left: 50%; transform: translateX(-50%);
        }
        img{margin: 0; width: 80px!important;}
        &:hover{
            background: #e67300;
            h3{font-weight: bold;}
        }
    }
}
</style>
