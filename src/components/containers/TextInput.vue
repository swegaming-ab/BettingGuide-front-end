<template>
  <div class="input fs flex">
      <label>{{label}}</label>
      <input @click="focus = true" @blur="focus = false" type="text" name="" value="">
  </div>
</template>
<script>
export default {
    extends: {},
    props: {
        label: String
    },
    components: {},
    data(){
        return{
            focus: false
        }
    },
    methods: {},
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
    .input{
        position: relative;
        f-gray-family: 'Quicksand', sans-serif;
        width: 90%;
        margin: 10px;
        label{
            transition: .2s ease-in-out;
        }
        input{
            width: 100%;
            background: transparent;
            border: none;
            border-bottom: 2px solid rgba(218, 218, 218, 1);

            padding: 10px;
            transition: .2s ease-in-out;
            outline: none;
            &:focus{
                border-bottom: 2px solid #509bf5;
            }
        }
        .activeLabel{
            f-gray-size: 14px;
            f-gray-weight: bold;
            top: -25px!important;
        }
    }
</style>
