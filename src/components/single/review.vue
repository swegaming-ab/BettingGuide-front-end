<template>
  <div class="col-group">
      <div class="col">
          <h2 class="light tc mb-20"><span class="bold italic f-orange">" </span>Obnoxious positive player review comment!<span class="bold italic f-orange">" </span></h2>
          <h3 class="italic light tc">- JohnDoe93</h3>
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
.col-group{
    width: 100%;
    // margin: 40px 0;
    padding: 80px 0;
    background: #189e0c;
    background-image: url('../../assets/images/green.png');
    color: #fff;
    h2,h3, h4{width: 100%;}
}
</style>
