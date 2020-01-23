<template>
  <div class="container flex">
      <div class="col-group content">
          <div class="col head fs">
              <img src="../../assets/icons/tables/top101.png" class="" alt="">
              <h3 class="f-gray bold">Best betting sites</h3>
              <hr>
              <table class="">
                  <tr class="thead">
                      <td class="col-2">bookmaker</td>
                      <td class="col-3">bonus</td>
                      <td class="col-2">turnover</td>
                      <td>min odds</td>
                      <td class="col-2"></td>
                  </tr>
                  <tr v-for="r in i" :key="r">
                      <td class="col-2"><img src="../../assets/icons/8882.png" alt=""></td>
                      <td class="col-3">Bet £10, Get £40 in free bets</td>
                      <td class="col-2">No requirements</td>
                      <td>1.75</td>
                      <td class="col-2"><button type="button" class="bg-orange flex">CLAIM BONUS<i class="fas fa-angle-double-right"></i></button></td>
                  </tr>
              </table>
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
            i: 10
        }
    },
    methods: {},
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
.container{
    padding: 80px 0;
}
.head{
    img{
        width: 30px;
        margin-right: 10px;
    }
}
.content{
    width: 1100px;
    h3, h5{text-transform: uppercase;}
    hr{
        height: 2px;
        width: 100%;
        background: #ff9933;
    }
    table{
        width: 100%;
        // .head{text-transform: uppercase; border: none; }
        .col-2{flex: 2!important;}
        .col-3{flex: 3!important;}
        .thead{border: none!important;}
        tr{
            display: flex;
            border-top: 1px solid #e6e6e6;
            align-items: center;
            img{width: 100px;}
        }
        td{flex: 1;}
        button{
            color: #fff;
            padding: 15px 0px 15px 20px;
            border-radius: 3px;
            float: right;
            background: #ff9933;
            transition: .15s ease-in-out;
            i{transition: .15s ease-in-out; opacity: 0; font-size: 16px; margin-left: 10px;}
            &:hover{
                padding: 15px 10px 15px 10px;
                i{opacity: 1;}
            }
        }
        tr:nth-child(odd){
            background: #f7f7f7;
            td{
                button{
                    background: #189e0c!important;
                }
            }
        }
    }
}
</style>
