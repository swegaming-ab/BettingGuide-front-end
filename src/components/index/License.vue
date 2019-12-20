<template>
  <div class="container bt flex bg-lgray">
      <div class="col-group">
          <div class="col"><img src="../assets/icons/cert.png" alt=""></div>
          <div class="col"><img src="../assets/icons/cert.png" alt=""></div>
          <div class="col"><img src="../assets/icons/cert.png" alt=""></div>
          <div class="col"><img src="../assets/icons/cert.png" alt=""></div>
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
    width: 95%;
}
.container{
    height: 200px;
}
img{
    width: 200px;
}
</style>
