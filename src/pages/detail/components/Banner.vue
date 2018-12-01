<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           :src="bannerImg"
           alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe6e9;</span>{{gallaryImgs.length}}</div>
      </div>
    </div>
    <common-gallary @close="handleGallaryClose" :imgs="gallaryImgs" v-show="showGallary"></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary';

  export default {
    name: "DetailBanner",
    components: {
      CommonGallary
    },
    props: {
      sightName: String,
      bannerImg: String,
      gallaryImgs: Array
    },
    data() {
      return {
        showGallary: false,
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
