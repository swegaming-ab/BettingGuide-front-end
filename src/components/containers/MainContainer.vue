<template>
  <div :class="[{yStart: yStart}, {xStart: xStart}]" class="container flex">
      <slot></slot>
  </div>
</template>
<script>
/* eslint-disable */
export default {
    props: {
        yStart: Boolean,
        xStart: Boolean
    }
}
</script>
<style lang="css" scoped>
    .container{
        width: 100%;
    }
    .yStart{align-items: flex-start;}
    .xStart{justify-content: flex-start;}
</style>
