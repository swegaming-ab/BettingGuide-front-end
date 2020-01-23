<template>
    <button @click="scrollMe()" class="bg-orange" name="button">
        <i class="material-icons">expand_less</i>
    </button>
</template>
<script>
export default {
    extends: {},
    props: {},
    components: {},
    data(){
        return{

        }
    },
    methods: {
        scrollMe(){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
                duration: 200
            });
        }
    },
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
button{
    width: 55px;
    height: 55px;
    border-radius: 100px;
    color: white;
    border: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1;
    box-shadow: 0 1px 3px 0 rgba(21,27,38,.8);
    &:hover{
        i{
            transform: rotate(360deg);
            transition: .20s ease-in-out;
        }
    }
    i{f-gray-size: 42px;}
}
</style>
