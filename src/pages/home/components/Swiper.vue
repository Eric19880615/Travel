<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    },
    computed: {
      showSwiper() {
        return this.list.length;
      }
    }
  }
</script>

<style scoped lang="stylus">
  /*样式穿透 .wrapper下面的子组件只要出现这个class，就都修改成现在的样式*/
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff

  .wrapper
    width 100%
    overflow hidden
    height 0
    /*高度相对于宽度自动撑开30% 优化用户体验*/
    padding-bottom 30%
    background #ccc

    .swiper-img
      width 100%
</style>
