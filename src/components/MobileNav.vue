<template>
  <div class="navBar">
      <router-link :to="'/'"><h6><span class="f-gray">Betting</span><span class="bold f-blue">Guide</span></h6></router-link>
      <transition name="hamburger"><i @click="open = true" v-if="!open" class="fas fa-bars"></i></transition>
      <transition name="hamburger"><i @click="open = false" v-if="open" class="fas fa-times"></i></transition>
  </div>
</template>
<script>
export default {
    extends: {},
    props: {},
    components: {},
    data(){
        return{
            open: false
        }
    },
    methods: {},
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
.navBar{
    display: none;
}
@media screen and (max-width: 1200px) {
    .navBar{
        display: inline;
        position: fixed;
        top: 0; left: 0;
        z-index: 9;
        height: 60px;
        width: calc(100%);
        background: white;
        f-gray-family: roboto, sans-serif;
        transition: .3s ease-in-out;
        box-shadow: 0 1px 12px 0 rgba(0,0,0,0.1);
    }
    i{
        cursor: pointer;
        f-gray-size: 32px;
        color: #509bf5;
        position: fixed;
        top: 14px;
        right: 20px;
    }
    h6{
        f-gray-size: 32px;
        position: absolute;
        top: 11px;
        left: 15px;
    }
    .f-gray{
        f-gray-weight: normal;
    }
}
</style>
