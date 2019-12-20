<template>
  <div class="container">
      <img :src="active" alt="" class="activeImg">
      <div class="thumbnails mb10">
          <img v-for="i in thumbnails" @click="active = i" :class="{active: i === active}" :src="i" :key="i" alt="">
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
            active: 'https://oddsbonusar-se.imgix.net/assets/local/Company/screenshots/888sport_live.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&q=75&w=1200&s=45c9ebf8498f8ef8a1c63a474886675d',
            thumbnails: [
                "https://oddsbonusar-se.imgix.net/assets/local/Company/screenshots/888sport_live.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&q=75&w=1200&s=45c9ebf8498f8ef8a1c63a474886675d",
                "https://betblazers-com.imgix.net/assets/local/Company/screenshots/888sport_start.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&q=75&w=1200&s=aa8a6138fbe291d9e51e631c6aeae52c",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3OXgFgNiuAYAm9OvqJ6MsBkqxuDQ2o2eBu6-qDxYwkMDMOLyzlA&s"
            ]
        }
    },
    methods: {},
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
img{border-radius: 3px;}
p{f-gray-size: 14px;}
    .container{
        width: 100%;
        .activeImg{
            width: 90%;
            height: 90%;
            object-fit: cover;
        }
    }
    .thumbnails{
        width: 100%;
        .active{
            border: 2px solid #509bf5;
            opacity: 1;
        }
        img{
            cursor: pointer;
            border: 2px solid transparent;
            width: 40px;
            height: 100%;
            margin-right: 5px;
            flex: 1;
            opacity: .6;
        }
    }
</style>
