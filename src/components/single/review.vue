<template>
  <div class="col-group">
      <transition name="slide">
          <div v-if="slide === 0" class="col">
              <h2 class="light tc mb-20"><span class="bold italic f-orange">" </span>Obnoxious positive player review comment!<span class="bold italic f-orange">" </span></h2>
              <h3 class="italic light tc">- JohnDoe93</h3>
          </div>
      </transition>
      <transition name="slide">
          <div v-if="slide === 1" class="col">
              <h2 class="light tc mb-20"><span class="bold italic f-orange">" </span>Another positive review!<span class="bold italic f-orange">" </span></h2>
              <h3 class="italic light tc">- SomeoneElse</h3>
          </div>
      </transition>
      <transition name="slide">
          <div v-if="slide === 2" class="col">
              <h2 class="light tc mb-20"><span class="bold italic f-orange">" </span>One more here!<span class="bold italic f-orange">" </span></h2>
              <h3 class="italic light tc">- Tester91</h3>
          </div>
      </transition>
  </div>
</template>
<script>
export default {
    extends: {},
    props: {},
    components: {},
    data(){
        return{
            slide: 0
        }
    },
    methods: {
        slideshow: function () {
            let _this = this
            setInterval(() => {
                if(_this.slide === 2){_this.slide = 0}
                _this.slide++
            }, 3000);

        }
    },
    beforeMount(){
        this.slideshow()
    }
}
</script>
<style lang="scss" scoped>
.col-group{
    width: 100%;
    padding: 80px 0;
    position: relative;
    overflow: hidden;
    min-height: 140px;
    background: #189e0c;
    background-image: url('../../assets/images/green.png');
    color: #fff;
    h2,h3, h4{width: 100%;}
    .col{
        position: absolute;
    }
}
.slide-leave-active,
.slide-enter-active {
  transition: .8s ease-in-out;
}
.slide-enter {
  transform: translate(70%, 0);
}
.slide-leave-to {
  transform: translate(-70%, 0);
}
</style>
