<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <router-link tag="li" :to="'/detail/'+item.id" class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      list: Array
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="stylus">
  @import "~stylus/mixins.styl"
  .title
    line-height .8rem
    margin-top .2rem
    background #eee
    text-indent .2rem

  .item
    display flex
    height 1.9rem
    overflow hidden

    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem

    .item-info
      flex 1
      padding .1rem
      min-width 0

      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()

      .item-desc
        line-height .4rem
        color #ccc
        margin-top .3rem
        ellipsis()
</style>
