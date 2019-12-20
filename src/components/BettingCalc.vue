<template>
  <div class="container flex bxs">
      <!-- <div class="tabs flex">
          <div v-for="tab in tabs" :key="tab" @click="current = tab" :class="{active: tab === current}" class="tab">
              {{tab}}
          </div>
      </div> -->
      <!-- <p class="f-gray mb10">Bet Options</p> -->
      <h3 class="f-gray w100">Betting Calculator</h3>
      <div class="col-group fs w50">
          <TextInput :label="'Stake'"/>
      </div>
      <div class="col-group fs w50">
          <TextInput :label="'Stake'"/>
      </div>
      <div class="col-group fs w50">
          <TextInput :label="'Stake'"/>
      </div>
      <div class="col-group fs w50">
          <TextInput :label="'Stake'"/>
      </div>
      <button type="button" class="btn">Calculate</button>
  </div>
</template>
<script>
export default {
    extends: {},
    props: {},
    components: {},
    data(){
        return{
            tabs: [
                "winnings",
                "bonus",
            ],
            current: "winnings",
            betOptions: {
                stake: undefined,
                eachWay: undefined,
                rule4: undefined,
                oddsFormat: undefined
            }
        }
    },
    methods: {},
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
@import url('https://f-grays.googleapis.com/css?family=Public+Sans&display=swap');

.active{
    background: #fff!important;
    color: #4a4a4a!important;
    border-bottom: 1px solid rgba(218, 218, 218, 0.5)!important;
}
.container{
    position: relative;
    background: #fff;

    width: calc(100% - 90px);
    border-radius: 5px;
    padding: 20px;
    margin-left: 50px;
}
button{
    background: #509bf5;
    margin-top: 20px;
    &:hover{
        background: #0d69d9;
    }
}
.col-group{
    min-height: 100px;
    border-radius: 10px;
}
</style>
