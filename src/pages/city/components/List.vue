<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id"
               @click="handleCityClick(innerItem.name)">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {mapState, mapMutations} from 'vuex';

  export default {
    name: "CityList",
    props: {
      hot: Array,
      cities: Object,
      letter: String
    },
    computed: {
      ...mapState({
        currentCity: 'city'
      })
    },
    watch: {
      letter() {
        if (this.letter) {
          const element = this.$refs[this.letter][0];
          this.scroll.scrollToElement(element);
        }
      }
    },
    methods: {
      ...mapMutations(['changeCity']),
      handleCityClick(city) {
        this.changeCity(city);
        this.$router.push('/');
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
    }
  }
</script>

<style scoped lang="stylus">
  @import "~stylus/variables.styl"
  .border-topbottom
    &:before
      border-color #ccc

    &:after
      border-color #ccc

  .border-bottom
    &:before
      border-color #ccc

  .list
    position absolute
    overflow hidden
    top 1.58rem
    left 0
    right 0
    bottom 0

    .title
      line-height .54rem
      font-size .26rem
      background #eee
      padding-left .2rem
      color #666

    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden

      .button-wrapper
        float left
        width 33.33%

        .button
          margin .1rem
          padding .1rem 0
          border-radius .06rem
          border .02rem solid #ccc
          text-align center

    .item-list
      .item
        padding-left .2rem
        line-height .76rem

</style>
