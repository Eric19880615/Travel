<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
  export default {
    name: "CityAlphabet",
    props: {
      cities: Object
    }
  }
</script>

<style scoped lang="stylus">
  @import "~stylus/variables.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    align-items center
    position absolute
    width .4rem
    top 1.58rem
    bottom 0
    right 0
    .item
      color $bgColor
      line-height .4rem



</style>
