<template>
  <div class="col-group">
      <div class="col fs">
          <img src="../../assets/icons/faq.png" class="" alt="">
          <h3 class="f-gray bold">common questions</h3>
          <hr>
          <div class="wrapper as flex">
              <div class="wrap flex">
                  <div class="col" v-for="i in questions1" :key="i">
                      <div @click="toggle(i.id)" class="q flex" :class="{active: i.id === open}">
                          <p>{{i.q}}</p><i v-if="open === i.id" class="fas fa-caret-up"></i><i v-else class="fas fa-caret-down"></i>
                          <!-- <transition name="dropdown"> -->
                              <div class="a" v-if="i.id === open">
                                  <p>{{i.a}}</p>
                              </div>
                          <!-- </transition> -->
                      </div>
                  </div>
              </div>
              <div class="wrap flex">
                  <div class="col" v-for="i in questions2" :key="i">
                      <div @click="toggle(i.id)" class="q flex" :class="{active: i.id === open}">
                          <p>{{i.q}}</p><i v-if="open === i.id" class="fas fa-caret-up"></i><i v-else class="fas fa-caret-down"></i>                          
                          <!-- <transition name="dropdown"> -->
                              <div class="a" v-if="i.id === open">
                                  <p>{{i.a}}</p>
                              </div>
                          <!-- </transition> -->
                      </div>
                  </div>
              </div>
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
            open: undefined,
            questions1: [
                {
                    id: 1,
                    q: 'Why is this not a question?',
                    a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                    id: 2,
                    q: 'Why is this not a question?',
                    a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                    id: 3,
                    q: 'Why is this not a question?',
                    a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                    id: 4,
                    q: 'Why is this not a question?',
                    a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                }
            ],
            questions2: [
                {
                    id: 5,
                    q: 'Why is this not a question?',
                    a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                    id: 6,
                    q: 'Why is this not a question?',
                    a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                    id: 7,
                    q: 'Why is this not a question?',
                    a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                    id: 8,
                    q: 'Why is this not a question?',
                    a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                }
            ]
        }
    },
    methods: {
        toggle(id){
            if(this.open !== id){
                this.open = id
            } else {
                this.open = false
            }
        }
    },
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
    .col-group{
        padding: 80px 0;
        width: 1100px;
    }
    h3{
        text-transform: uppercase;
    }
    img{width: 30px; margin-right: 10px;}
    hr{
        height: 2px;
        width: 100%;
        background: #ff9933;
    }
    .wrapper{
        width: 100%;
        justify-content: space-between;
    }
    .wrap{
        width: calc(50% - 2.5px);
        .col{flex: none; width: 100%;}
    }
    .q{
        cursor: pointer;
        padding: 15px;
        margin-bottom: 5px;
        justify-content: space-between;
        background: #ff9933;
        width: 100%;
        height: auto;
        transition: .2s ease-in-out;
        i{color: #fff; font-size: 22px;}
        p{width: calc(100% - 25px); text-transform: uppercase; font-weight: bold; color: #fff;}
    }
    .a{
        margin-top: 10px;
        padding-top: 10px;
        // border-top: 3px solid #fff;
        p{text-transform: none; font-weight: normal;}
    }
    .active{
        background: #189e0c!important;
    }
</style>
