<template>
    <router-link :class="color" :to="target">{{text}}</router-link>
</template>
<script>
export default {
    props: {
        target: String,
        text: String,
        color: String
    }
}
</script>
<style lang="scss" scoped>
a{
    margin-top: 100px;
    f-gray-family: arial;
    text-decoration: none;
    text-align: center; margin-top: 40px;
    border-radius: 100px;
    padding: 15px 80px;
    color: white;
    f-gray-weight: bold;
    transition: .15s ease-in-out;
}
.blue{
    background: #509bf5;
    // color: #4a4a4a;
    border: 2px solid #509bf5;
    &:hover{
        background: #0e74f1;
        border: 2px solid #0e74f1;
    }
}
.red{
    // background: #9A3334;
    border: 2px solid #9A3334;
    &:hover{
        background: #732628;
        border: 2px solid #732628;
    }
}
</style>
