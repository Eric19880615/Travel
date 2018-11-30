<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    data() {
      return {
        list: [
          {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/b6/662fc49d1d26a5a7775cf6b7f8b4ecec.water.jpg_200x200_7dec115f.jpg',
            title: '杭州野生动物世界',
            desc: '杭州野生动物世界杭州野生动物世界杭州野生动物世界'
          },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/95/95db58d0da425616.water.jpg_200x200_631da622.jpg',
            title: '杭州野生动物世界',
            desc: '杭州动物园杭州动物园杭州动物园杭州动物园'
          },
          {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/201212/18/f195032e85740a4b93835fbb.jpg_200x200_77761d11.jpg',
            title: '杭州海底世界',
            desc: '杭州必游杭州必游杭州必游杭州必游杭州必游'
          },
          {
            id: '0004',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_200x200_4a81bde9.jpg',
            title: '印象西湖',
            desc: '动植物园动植物园动植物园动植物园'
          },
          {
            id: '0005',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1810/cc/cc47164357acbeb5a3.water.jpg_200x200_151f0405.jpg',
            title: '杭州云漫温泉',
            desc: '去哪臻选去哪臻选去哪臻选去哪臻选去哪臻选'
          }
        ]
      }
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
