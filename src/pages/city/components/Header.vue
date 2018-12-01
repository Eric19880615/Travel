<template>
    <div class="header">
      城市选择
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
    </div>
</template>

<script>
  export default {
    name: "CityHeader"
  }
</script>

<style scoped lang="stylus">
  @import "~stylus/variables.styl"
  .header
    position relative
    overflow hidden
    text-align center
    color #fff
    font-size .32rem
    height $headerHeight
    line-height $headerHeight
    background $bgColor
    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
