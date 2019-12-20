<template>
  <div class="container">
      <!-- <div class="notis flex">2</div>
      <i @click="extended =! extended" :class="{active: active}" class="fas fa-bell"></i>
      <transition name="slide-in-left">
          <div v-if="extended" class="extended bg-lgray">
              content
          </div>
      </transition> -->
  </div>
</template>
<script>
export default {
    extends: {},
    props: {},
    components: {},
    data(){
        return{
            extended: false,
            active: false
        }
    },
    methods: {
        handleSCroll(){
            if(window.scrollY > 50 ){
                this.active = true
            }else{
                this.active = false
            }
        },
    },
    created(){
        window.addEventListener('scroll', this.handleSCroll);
    }
}
</script>
<style lang="scss" scoped>
.active{color: #509bf5!important;}
.extended{
    position: absolute;
    top: 49px;
    padding: 20px;
    right: -30px;
    width: 350px;
    height: calc(100vh - 63px);
    z-index: 999;
    box-shadow: 0 1px 12px 0 rgba(0,0,0,0.1);
}
    .container{
        position: fixed;
        top: 17px;
        right: 25px;
        z-index: 999;
        i{
            position: relative;
            font-size: 28px;
            color: #509bf5;
            // color: #fff;
            cursor: pointer;
            &:hover{
                animation: bellshake .5s cubic-bezier(.36,.07,.19,.97) both;
                backface-visibility: hidden;
                transform-origin: top right;
            }
        }
        .notis{
            position: absolute;
            top: -5px;
            right: -2px;
            background: red;
            color: #FFF;
            font-size: 10px;
            font-family: roboto, sans-serif;
            border-radius: 100px;
            width: 16px;
            height: 16px;
            z-index: 2;
            font-weight: bold;
        }
    }

    @keyframes bellshake {
  0% { transform: rotate(0); }
  15% { transform: rotate(5deg); }
  30% { transform: rotate(-5deg); }
  45% { transform: rotate(4deg); }
  60% { transform: rotate(-4deg); }
  75% { transform: rotate(2deg); }
  85% { transform: rotate(-2deg); }
  92% { transform: rotate(1deg); }
  100% { transform: rotate(0); }
}
@media screen and (max-width: 1200px){
    .container{
        right: 80px;
        top: 15px;
        i{font-size: 30px;}
        .notis{
            top: -7px;
            right: -4px;
        }
    }
}
</style>
