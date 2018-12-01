<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex';

  export default {
    name: "Header",
    computed: {
      ...mapState(['city']),
      ...mapGetters(['doubleCity'])
    }
  }
</script>

<style scoped lang="stylus">
  @import "~stylus/variables.styl"
  .header
    display flex
    line-height $headerHeight
    background $bgColor
    color #fff

    .header-left
      float left
      width .64rem

      .back-icon
        text-align center
        font-size .4rem

    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      background #fff
      border-radius .1rem
      color #ccc

    .header-right
      float right
      text-align center
      min-width 1.04rem
      padding 0 .1rem
      color: #fff

      .arrow-icon
        font-size .24rem

</style>
