<template>
  <div class="container">
      <div class="col-group py80 head">
          <div class="col">
              <div class="overlay"></div>
              <!-- <img src="../assets/icons/academy.png" alt=""> -->
              <h1 class=" light">Academy</h1>
              <div class="content flex">
                  <button type="button" name="button">
                      <img src="../assets/icons/academy/basics1.png" class="ri" alt="">
                      <img src="../assets/icons/academy/basics2.png" class="ol" alt="">
                      <h3>Basics</h3>
                  </button>
                  <button type="button" name="button">
                      <img src="../assets/icons/academy/betting1.png" class="ri" alt="">
                      <img src="../assets/icons/academy/betting2.png" class="ol" alt="">
                      <h3>Betting</h3>
                  </button>
                  <button type="button" name="button">
                      <img src="../assets/icons/academy/casino1.png" class="ri" alt="">
                      <img src="../assets/icons/academy/casino2.png" class="ol" alt="">
                      <h3>Casino</h3>
                  </button>
                  <button type="button" name="button">
                      <img src="../assets/icons/academy/bingo1.png" class="ri" alt="">
                      <img src="../assets/icons/academy/bingo2.png" class="ol" alt="">
                      <h3>Bingo</h3>
                  </button>
                  <button type="button" name="button">
                      <img src="../assets/icons/academy/safety1.png" class="ri" alt="">
                      <img src="../assets/icons/academy/safety2.png" class="ol" alt="">
                      <h3>Safety</h3>
                  </button>
              </div>
          </div>
      </div>
      <div class="container section w100 bg-white">
          <div class="col-group py80 fs">
              <h3 class="f-gray bold">Basics</h3>
              <a href="/academySingle" v-for="i in basics" :key="i" class="flex bg-lgray">
                  <img src="https://images.theconversation.com/files/250674/original/file-20181214-185261-17r6cj9.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip" alt="">
                  <div class="content flex as">
                      <h4>Title of post</h4>
                      <p>Content text of post.</p>
                  </div>
              </a>
          </div>
      </div>
      <div class="container section w100 bg-lgray">
          <div class="col-group py80 fs">
              <h3 class="f-gray bold">betting</h3>
              <a href="/academySingle" v-for="i in basics" :key="i" class="flex">
                  <img src="https://www.independent.co.ug/wp-content/uploads/2019/02/sports-betting.jpg" alt="">
                  <div class="content flex as">
                      <h4>Title of post</h4>
                      <p>Content text of post.</p>
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
    width: 95%;
    @media only screen and (min-width: 600px) {
        width: 1100px;
    }
}
.section .col-group{
    width: 1100px;
    justify-content: space-between!important;
    h3{
        text-transform: uppercase;
        width: 100%; text-align: left;
        border-bottom: 2px solid #ff9933;
        padding-bottom: 5px;
        margin-bottom: 5px;
    }
}
.section{
    img{
        height: 100%;
        width: 170px;
    }
    a{
        height: 120px;
        width: calc(50% - 5px);
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
        p,h4{width: 100%; color: #666666;}
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
    height: 536px;
}
.head{
    position: relative;
    background-image: url('../assets/images/noise2.jpg');
    background-size: cover;
    width: 100%;
    padding-top: 120px;
    padding-bottom: 100px;
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
    display: flex;
    height: 100px;

    margin: 5px;
    border-bottom: 5px solid transparent;
    transition: .15s ease-in-out;
    // background: #e6e6e6;
    background: #ff9933;
    h3{margin-top: 10px; color: #fff; font-weight: bold;}
    img{width: 40px!important;}
    @media only screen and (min-width: 600px) {
        display: block;
        height: 200px;
        margin: 2.5px;
        // width: calc(20% - 5px);
        width: 200px;
        border-bottom: 5px solid transparent;
        transition: .15s ease-in-out;
        h3{margin-top: 20px;}
        img{width: 100px!important;}
        .ol{display: none;}
        &:hover{
            background: #fff;
            h3{color: #ff9933;}
            .ol{display: inline;}
            .ri{display: none;}
        }
    }
}
button:nth-child(even){
    transition: .15s ease-in-out;
    background: #e67300;
    &:hover{
        background: #fff;
        h3{color: #ff9933;}
        .ol{display: inline;}
        .ri{display: none;}
    }
}
</style>
