<template>
  <div class="container flex">
      <div class="col-group">
          <div class="col fs">
              <img src="../../assets/icons/score.png" class="hi" alt="">
              <h3 class="bold f-gray">SCORE</h3>
              <hr class="">
              <div v-for="i in ratings" :key="i.title" class="wrap fw flex">
                  <div class="col fs"><h6 class="bold f-gray">{{i.title}}</h6></div>
                  <div class="col-3">
                      <div class="wrap">
                          <div class="prog" :style="{width: i.value + 0 + '%'}"></div>
                      </div>
                  </div>
                  <div class="col-c f-gray flex fe">
                      <h6 class="">{{i.value}}/10</h6>
                  </div>
              </div>
              <!-- <div class="wrapper flex">
                  <div class="wrap">

                  </div>
              </div> -->
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
            ratings: [
                {
                    title: "Sign Up Bonus",
                    value: "9"
                },
                {
                    title: "Customer Support",
                    value: "8"
                },
                {
                    title: "Payment methods",
                    value: "9"
                },
                {
                    title: "Licensing & Safety",
                    value: "9"
                },
                // {
                //     title: "Live Betting",
                //     value: "7"
                // },
                // {
                //     title: "Sports & Betting Markets",
                //     value: "8"
                // },
                // {
                //     title: "Betting Odds",
                //     value: "9"
                // },
                {
                    title: "Design & Usability",
                    value: "7"
                },
                {
                    title: "Overall Rating",
                    value: "8"
                }
            ]
        }
    },
    methods: {},
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
.container{
    width: 100%;
    background: #fff!important;
}
.col-group{
    width: 1100px;
    padding: 80px 0;
}
hr{
    height: 2px;
    width: 100%;
    background: #ff9933;
}
.wrap{
    background: #f7f7f7;
    padding: 15px;
    h6{text-transform: uppercase;}
}
.wrap:nth-child(odd){
    background: #fff!important;
    border-bottom: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
}
.col-c{width: 80px; height: 100%;}
.col-3 .wrap{
    margin-bottom: 0;
    width: 100%;
    height: 20px;
    background: #e6e6e6!important;
    margin-left: 20px;
    margin-right: 20px;
    border: none;
    padding: 0!important;
}
.col-3 .wrap .prog{
    background: #509bf5;
    width: 30%;
    height: 100%;
}
</style>
