<template>
  <div class="container flex">
      <div class="col-group header">
          <h2 class="f-gray">How we <span class="bold f-orange">compare</span></h2>
      </div>

      <div class="col-group content">
          <div v-for="a in rating" :key="a.title" class="col">
              <div class="head flex mb-20">
                  <div class="img flex">
                      <!-- <img src="../../assets/icons/rating/1.png" alt=""> -->
                      <img :src="a.img" alt="">
                  </div>
                  <h6 class="f-gray">{{a.title}}</h6>
              </div>
              <p class="f-gray">{{a.content}}</p>
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
            i: 3,
            rating: [
                {
                    title: "Gambling Commission Approved",
                    content: "We only list and review gambling sites with active licenses by national authorities like the UK Gambling Commission (UKGC), Gibraltar Betting and Gaming Association (GBGA), and Malta Gaming Authority (MGA).",
                    img: require('../../assets/icons/rating/1.png')
                },
                {
                    title: "Sign Up Bonus",
                    content: "On BettingGuide, we offer exclusive sign up offers through our partnership with bookmakers and casinos. We display the important terms and conditions and provide step by step guides for how to claim each signup bonus.",
                    img: require('../../assets/icons/rating/2.png')
                },
                {
                    title: "Deposits and Withdrawals",
                    content: "All of the gambling sites in our list offer secure banking for deposits and withdrawals, and a good range of payment methods. These range from debit & credit cards to popular e-wallets such as Neteller, Skrill, and PayPal.",
                    img: require('../../assets/icons/rating/31.png')
                },
                {
                    title: "Customer Support",
                    content: "",
                    img: require('../../assets/icons/rating/4.png')
                },
                // {
                //     title: "Sports Available",
                //     content: "",
                //     img: require('../../assets/icons/rating/5.png')
                // },
                // {
                //     title: "Betting Markets",
                //     content: "",
                //     img: require('../../assets/icons/rating/1.png')
                // },
                // {
                //     title: "Betting Odds & Margins",
                //     content: "",
                //     img: require('../../assets/icons/rating/7.png')
                // },
                {
                    title: "Design & Usability",
                    content: "",
                    img: require('../../assets/icons/rating/8.png')
                },
                {
                    title: "Mobile Betting",
                    content: "",
                    img: require('../../assets/icons/rating/9.png')
                }
            ],
        }
    }
}
</script>
<style lang="scss" scoped>
.container{
    width: calc(100% - 20px);
    padding: 40px 10px;
    @media only screen and (min-width: 1200px) {
        padding: 80px 0;
        width: 100%;
        background: #f7f7f7;
        background-image: url('../../assets/images/ratingbg1.png');
        background-size: 100% 100%;
    }
}
.header{
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
    @media only screen and (min-width: 1200px) {

    }
}
.content{
    width: 100%;
    .col{margin-bottom: 60px;}
    h6{width: 100%;}
    @media only screen and (min-width: 1200px) {
        width: 1400px;
        .col{
            text-align: center;
            margin: 40px;
            flex: none;
            width: 25%;
        }
        .img{
            padding: 20px;
            border-radius: 100px;
            width: 100px;
            height: 100px;
            box-shadow: 0 4px 8px 0 rgba(108,127,135,.1), 0 1px 4px 0 rgba(108,127,135,.36);
            margin-bottom: 40px;
            background: #fff;
            img{
                width: 80%;
            }
        }
    }
}
</style>
