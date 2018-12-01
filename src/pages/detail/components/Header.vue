<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div :style="opacityStyle" class="header-fixed" v-show="!showAbs">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailHeader",
    data() {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll() {
        const top = document.documentElement.scrollTop;
        if (top > 60) {
          let opacity = top / 140;
          opacity = opacity > 1 ? 1 : opacity;
          this.opacityStyle = {
            opacity
          };
          this.showAbs = false;
        } else {
          this.showAbs = true;
        }
      }
    },
    activated() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style scoped lang="stylus">
  @import "~stylus/variables.styl"
  .header-abs
    position absolute
    width .8rem
    height .8rem
    border-radius .4rem
    text-align center
    line-height .8rem
    background rgba(0, 0, 0, .4)
    left .2rem
    top .2rem

    .header-abs-back
      font-size .4rem
      color #fff

  .header-fixed
    position fixed
    top: 0
    left 0
    right 0
    text-align center
    color #fff
    font-size .32rem
    height $headerHeight
    line-height $headerHeight
    background $bgColor

    .header-fixed-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
