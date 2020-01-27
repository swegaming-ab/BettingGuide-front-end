<template>
  <div class="container">
      <div class="head flex">
          <!-- <img src="../assets/icons/payment/skrill.png" alt=""> -->
          <h1 class="f-white"><span class="bold f-orange">Neteller</span> India Guide (2020)</h1>
          <div class="overlay"></div>
      </div>
      <div class="sticky flex bxs" id="sticky">
          <ul class="flex">
              <li>what is neteller</li><li>how to create an account</li><li>share</li><li>comment</li>
          </ul>
      </div>
      <div class="col-group">
          <div class="col">
              <h3>Neteller India Guide (2020)</h3>
              <span>
                  <img src="https://www.gamespectrum.bg/images/PR_BOSA_1320x660.png" alt="">
                  <p>Learning how to use Neteller or other E-wallets is essential for gambling if you are an Indian resident. </p>
                  <p>When it comes to gambling legally in India, one of the biggest challenges is finding a safe, legal and secure method of depositing and withdrawing money to gambling sites.</p>
                  <p>E-wallets are by far the best option for depositing and withdrawing money, but only some e-wallets are accepted by legal gambling sites. Neteller and Skrill are our recommended options.</p>
              </span>
          </div>
          <div class="col">
              <h3>What is Neteller?</h3>
              <span class="flex">
                  <p>Neteller is an eWallet that has been around since 1999 and has over 230 million account holders worldwide. It is free to create an account, and you can use the app which is available on GooglePlay and the App Store or use their desktop site.</p>
                  <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
              </span>
          </div>
          <div class="col">
              <h3>How to create a Neteller account from India</h3>
              <span class="flex fs as">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 <ul>
                     <li><i class="fas fa-chevron-right"></i>Navigate to Neteller and click "Join for Free"</li>
                     <li><i class="fas fa-chevron-right"></i>Complete the registration form</li>
                     <li><i class="fas fa-chevron-right"></i>Verify your account (Follow these Neteller guidelines)</li>
                     <li><i class="fas fa-chevron-right"></i>Link and confirm your bank account (IBAN number, bank name, and SWIFT code)</li>
                     <li><i class="fas fa-chevron-right"></i>Deposit funds to your Neteller account</li>
                 </ul>
                 <div @click="expand = true" class="img-container flex">
                     <img src="https://images.prismic.io/sgbg/d4743176-38a6-4d5c-b2a2-2eb7fec97157_Neteller+register.png?auto=compress,format" alt=""/>
                     <p>Click to expand</p>
                 </div>
              </span>
          </div>
          <div class="foot">
              <div class="share">
                  <h4>share post</h4>
                  <div class="content">
                      <button type="button" class="like" name="button"><i class="fas fa-thumbs-up"></i>like</button>
                      <button type="button" class="shareBtn" name="button">share</button>
                      <button type="button" class="tweet" name="button"><i class="fab fa-twitter"></i>tweet</button>
                  </div>
              </div>
              <div class="comments">
                  <h4>comments</h4>
                  <div class="content">
                      <textarea name="name" rows="8" placeholder="Write a comment" cols="80"></textarea>
                  </div>
              </div>
          </div>
      </div>
      <transition name="">
          <div v-if="expand" class="img-full flex">
              <i @click="expand = false" class="fas fa-times"></i>
              <img src="https://images.prismic.io/sgbg/d4743176-38a6-4d5c-b2a2-2eb7fec97157_Neteller+register.png?auto=compress,format" alt=""/>

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
            expand: false
        }
    },
    methods: {},
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
a{color: #509bf5; font-weight: bold;}
.head{
    position: relative;
    background-image: url('../assets/images/noise2.jpg');
    background-size: cover;
    // height: 20vh;
    width: 100%;
    padding: 120px 0;
    img{z-index: 2; width: 600px; margin: 0;
        // filter: drop-shadow(2px 2px 2px #fff);
    }
    span{background: transparent; margin: 0; padding: 0;}
    h1{
        width: 100%; text-align: center;
        margin-top: 0px;
        z-index: 2;
        font-weight: lighter;
        // text-shadow: 2px 2px 2px #FFFFFF;
    }
    .overlay{
        z-index: 1;
        position: absolute; top: 0; left: 0;
        background: #0e5f07; opacity: .8;
        width: 100%;
        height: 100%;
    }
}
.sticky{
    position: sticky; top: 60px;
    width: 100%; background: #f7f7f7;
    ul{height: 50px; padding: 0; margin: 0;}
    li{
        cursor: pointer;
        font-size: 14px; font-weight: bold;
        text-transform: uppercase;
        display: flex; align-items: center; justify-content: center;
        height: 50px;
        padding: 0px 30px;
        &:hover{
            background: #e6e6e6;
        }
    }
}
.img-full{
    position: fixed;
    height: 100vh; width: 100vw;
    top: 0; left: 0;
    z-index: 999;
    background: rgba(0,0,0, .85);
    i{
        cursor: pointer;
        position: absolute;
        color: #fff; font-size: 62px;
        right: 100px; top: 50px;
        transition: .15s ease-in-out;
        &:hover{

        }
    }
    img{height: 80%;}
}
iframe{
    border: none;
    width: 100%;
    height: 200px;
    @media only screen and (min-width: 600px) {
        width: 680px;
        height: 400px;
    }
}
.col{
    flex: none;
    width: 100%;
    margin: 20px 0;
    // background: #fff;
}
.container{
    // background-image: url('../assets/images/gray.png');
    background: #fff;
    background-size: cover;
    color: #666;
}
.col-group{
    max-width: 100%;
    width: calc(100% - 20px);
    padding: 10px;
    // margin: 40px 0;
}
h3{
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 2px solid #ff9933;
    padding-bottom: 5px;
    margin-bottom: 5px;
}
p{margin-bottom: 20px;}
h3,p{width: 100%; text-align: left;}
span{
    background: #f7f7f7;
    background: #fff;
    // padding: 20px;
    .img-container{
        cursor: pointer;
        width: 100%;
        margin-top: 20px;
        img{transition: .15s ease-in-out; width: 80%; margin: 0;}
        p{
            margin-top: 10px;
            text-align: center;
        }
        &:hover{
            img{
                box-shadow: 0 4px 8px 0 rgba(108,127,135,.5), 0 1px 4px 0 rgba(108,127,135,.6);
            }
        }
    }
    ul{
        margin: 0;
        width: calc(100%);
        li{
            padding: 10px 0;
            i{color: #ff9933; margin-right: 10px; font-size: 14px;}
        }
    }
}
img{
    margin-bottom: 40px;
    max-width: 100%;
}
.foot{
    margin-top: 40px;
    width: 100%;
    h4{
        padding-bottom: 5px;
        border-bottom: 2px solid #ff9933;
        margin-bottom: 5px;
    }
    .content{
        background: #f7f7f7;
        margin: 0;
        width: calc(100% - 40px);
        padding: 20px;
    }
    button{
        transition: .15s ease-in-out;
        i{margin-right: 10px; color: #fff;}
    }
    .share{
        position: relative;
        width: 100%;
        .like{margin-right: 10px;}
        .like, .shareBtn{
            width: calc(50% - 5px);
            padding: 15px 0px;
            background: #ff9933; color:#fff;
            text-transform: capitalize;
            &:hover{background: #e67300;}
        }
        .tweet{
            // position: absolute;
            text-transform: capitalize;
            margin-top: 10px;
            background: #00acee; color: #fff;
            right: 0px;
            padding: 15px 40px;
            width: 100%;
            &:hover{background: #0092cc;}
        }
        h4{font-weight: bold; width: 100%; text-transform: uppercase; margin-bottom: 5px;}
    }
    .comments{
        margin-top: 40px;
        width: 100%;
        h4{font-weight: bold; width: 100%; text-transform: uppercase; margin-bottom: 5px;}
        textarea{background: #fff; padding: 5px; max-width: 90%; outline-color: #ff9933;}
    }
}

@media only screen and (min-width: 600px) {
    .img-full{
        i{
            color: #fff; font-size: 72px;
            right: 100px; top: 50px;
        }
        img{height: 80%;}
    }
    .col{
        flex: none;
        width: 100%;
        margin: 40px 0;
    }
    .col-group{
        max-width: 100%;
        width: 900px;
        padding: 40px;
        // margin: 40px 0;
    }
    span{
        background: #f7f7f7;
        // background: #fff;
        padding: 20px;
        .img-container{
            cursor: pointer;
            width: 200px;
        }
        ul{
            margin: 0;
            width: calc(100% - 200px);
            li{
                padding: 10px 0;
                i{color: #ff9933; margin-right: 10px; font-size: 14px;}
            }
        }
    }
    img{
        margin-bottom: 40px;
        max-width: 100%;
    }
    .content{
        margin-top: 40px;
        width: 100%;
        span{width: 100%;}
        button{
            transition: .15s ease-in-out;
            i{margin-right: 10px; color: #fff;}
        }
        .share{
            position: relative;
            width: 100%;
            .like, .shareBtn{
                padding: 10px 20px; margin-right: 10px;
                background: #ff9933; color:#fff;
                &:hover{background: #e67300;}
            }
            .tweet{
                position: absolute;
                background: #00acee; color: #fff;
                right: 0px;
                padding: 15px 40px;
                &:hover{background: #0092cc;}
            }
            h4{font-weight: bold; width: 100%; text-transform: uppercase; margin-bottom: 0px;}
        }
        .comments{
            margin-top: 40px;
            width: 100%;
            h4{font-weight: bold; width: 100%; text-transform: uppercase; margin-bottom: 20px;}
            textarea{background: #f7f7f7; padding: 5px; max-width: 890px; outline-color: #ff9933;}
        }
    }
}
</style>
