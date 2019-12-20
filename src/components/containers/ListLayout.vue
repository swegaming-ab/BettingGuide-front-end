<template>
  <div class="container as flex">
      <div class="header flex">
          <slot name="header"></slot>
      </div>
      <div class="menu flex">
          <slot name="menu"></slot>
      </div>
      <div class="container list content as flex">
          <slot name="content"></slot>
      </div>
      <div class="tables bt flex">
          <slot name="tables"></slot>
      </div>
      <div class="moreTextContainer flex">
          <slot name="moreText"></slot>
      </div>
      <div class="latestPosts flex">
          <slot name="latestPosts"></slot>
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
    .latestPosts, .tables{
        width: 100%;
    }
    .container, .moreTextContainer{
        width: 100%;
    }
    .list{
        padding-top: 50px;
    }
    .content{
        width: 100%;
    }
    .header{
        width: 100%;
        height: 55vh;
        padding-top: 60px;
        background: #F1F7FE;
        background-image: url('../../assets/images/texture1.png');
        background-size: cover;
        .wrapper{
            width: 1200px;
        }
        .left{
            // height: 200px;
            width: 25%;
        }
        .right{
            border-left: 5px solid #509bf5;
            width: 70%;
            padding: 40px 0;
        }
    }
    .menu{
        position: sticky;
        top: 60px;
        border-top: 1px solid rgb(218, 218, 218);
        border-bottom: 1px solid rgb(218, 218, 218);
        // padding: 20px 0;
        height: 50px;
        width: 100%;
        z-index: 1;
        background: #f7f7f7;
        overflow: hidden;
        ul{
            display: inline;
            padding: 0;
            margin: 0;
            li{
                display: inline;
                padding: 20px;
                font-family: niveau-grotesk, sans-serif;
                font-weight: bold;
                color: #666666;
                font-size: 14px;
                margin: 0 25px;
                width: calc(100% - 20px);
                cursor: pointer;
            }
        }
    }
    .active{
        background: #509bf5;
        color: white!important;
    }

    .cardContainer{
        &:hover{
            .bonus{button{opacity: 1;}}
            .card2{box-shadow: 0 1px 12px 0 rgba(0,0,0,0.4);}
            .footTxt{opacity: 1;}
            .right{
                // button{background: rgba(0, 204, 0, 1);}
            }
        }
    }



</style>
