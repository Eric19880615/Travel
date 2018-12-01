<template>
  <div>
    <detail-banner :list="bannerList"></detail-banner>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner';
  import axios from 'axios';

  export default {
    name: "Detail",
    components: {
      DetailBanner
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

</style>
