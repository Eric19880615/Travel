<template>
  <div>
    <div class="search">
      <input v-model="keyWord" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyWord">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li v-show="hasNoData" class="search-item border-bottom">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {mapMutations} from 'vuex';

  export default {
    name: "CitySearch",
    props: {
      cities: Object
    },
    data() {
      return {
        keyWord: '',
        list: [],
        timer: null
      }
    },
    methods: {
      ...mapMutations(['changeCity']),
      handleCityClick(city) {
        this.changeCity(city);
        this.$router.push('/');
      }
    },
    computed: {
      hasNoData() {
        return !this.list.length;
      }
    },
    watch: {
      keyWord() {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyWord) {
          this.list = [];
          return;
        }
        this.timer = setTimeout(() => {
          const result = [];
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result;
        }, 100)
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.search);
    }
  }
</script>

<style scoped lang="stylus">
  @import "~stylus/variables.styl"
  .search
    padding 0 .1rem
    height .72rem
    background $bgColor

    .search-input
      box-sizing border-box
      height .62rem
      line-height .62rem
      width 100%
      text-align center
      border-radius .06rem
      color #666
      padding 0 .2rem

  .search-content
    overflow hidden
    background #eee
    z-index 1
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0

    .search-item
      line-height .62rem
      padding-left .2rem
      background #fff
      color #666
</style>
