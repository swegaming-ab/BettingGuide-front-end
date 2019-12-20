<template>
  <div class="container flex" :class="{borders: border}">
      <div class="header flex">
          <slot name="header"></slot>
      </div>
      <div class="container">
          <div class="col center">
              <slot name="content"></slot>
          </div>
      </div>
      <div class="btnContainer">
          <slot name="button"></slot>
      </div>
  </div>
</template>
<script>
export default {
    extends: {},
    props: {
        img: String,
        width: Number,
        border: Boolean
    },
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
.borders{
    border-top: 1px solid rgb(218, 218, 218);
    border-bottom: 1px solid rgb(218, 218, 218);
}
.container{
    padding: 60px 0;
    width: calc(100%);
}
.btnContainer{
    padding: 40px 0;
}
.header{
    text-align: center;
    h1, h2, h3{width: 100%; margin: 20px 0;}
    p{width: 60%;}
}
    @media screen and (max-width: 1200px) {
        .col-group{width: 90%;}
        .container{
            padding: 40px 0;
        }
    }
</style>
