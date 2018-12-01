<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner';
  import DetailHeader from './components/Header';
  import axios from 'axios';

  export default {
    name: "Detail",
    components: {
      DetailBanner,
      DetailHeader
    },
    data() {
      return {
        bannerList: []
      }
    },
    methods: {
      fetchDetail() {
        axios.get('/api/detail.json').then(this.processDetail)
      },
      processDetail(res) {
        res = res.data;
        const data = res.data;
        this.bannerList = data.gallaryImgs;
      }
    },
    mounted() {
      this.fetchDetail();
    }
  }
</script>

<style scoped lang="stylus">
  .content
    height 50rem
</style>
