<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of imgs" :key="item">
          <img class="gallary-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommonGallary",
    props: {
      imgs: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          //监测到数据变化时会刷新
          observeParents: true,
          observer: true
        }
      }
    },
    methods: {
      handleGallaryClick() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow inherit

  .container
    position fixed
    background #000
    display flex
    flex-direction column
    justify-content center
    z-index 99
    left 0
    right 0
    top 0
    bottom 0

    .wrapper
      width 100%
      height 0
      padding-bottom 100%
      background #fff

      .swiper-pagination
        bottom -1rem
        color #fff

      .gallary-img
        width 100%

</style>
