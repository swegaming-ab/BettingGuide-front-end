<template>
    <router-link :to="target">{{text}}</router-link>
</template>
<script>
export default {
    props: {
        target: String,
        text: String
    }
}
</script>
<style lang="scss" scoped>
a{
    f-gray-family: arial;
    text-decoration: none;
    text-align: center; margin-top: 40px;
    border-radius: 25px;
    padding: 10px 30px;
    background: #9A3334;
    color: white;
    border: 2px solid #9A3334;
    f-gray-weight: bold;
    transition: .15s ease-in-out;
    &:hover{
        background: #732628;
        border: 2px solid #732628;
    }
}
</style>
