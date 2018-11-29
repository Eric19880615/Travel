<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperList: [
          {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/78/0a6355bcbbf89502.jpg_750x200_fc738633.jpg'
          },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1712/51/36632b2cb850e902.jpg_750x200_fa4120db.jpg'
          }
        ]
      }
    },
  }
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    width 100%
    overflow hidden
    height 0
    padding-bottom 26.67%
    background #ccc
    .swiper-img
      width 100%
</style>
