<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           src="//img1.qunarzz.com/sight/p0/1411/b6/662fc49d1d26a5a7775cf6b7f8b4ecec.water.jpg_600x330_c34588e7.jpg"
           alt="">
      <div class="banner-info">
        <div class="banner-title">杭州野生动物世界(AAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe6e9;</span>39</div>
      </div>
    </div>
    <common-gallary @close="handleGallaryClose" :imgs="imgs" v-show="showGallary"></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary';

  export default {
    name: "DetailBanner",
    components: {
      CommonGallary
    },
    data() {
      return {
        showGallary: false,
        imgs: [
          'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
          'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'
        ]
      }
    },
    methods: {
      handleBannerClick() {
        this.showGallary = true;
      },
      handleGallaryClose() {
        this.showGallary = false;
      }
    }
  }
</script>

<style scoped lang="stylus">
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%

    .banner-img
      width 100%

    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6))
      line-height .6rem

      .banner-title
        font-size .32rem
        padding 0 .2rem
        flex 1

      .banner-number
        padding 0 .4rem
        margin-top .14rem
        height .32rem
        border-radius .32rem
        font-size .24rem
        background rgba(0, 0, 0, .6)
        line-height .4rem

        .banner-icon
          font-size .24rem

</style>
