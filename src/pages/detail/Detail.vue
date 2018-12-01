<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner';
  import DetailHeader from './components/Header';
  import DetailList from './components/List';
  import axios from 'axios';

  export default {
    name: "Detail",
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data() {
      return {
        list: []
      }
    },
    methods: {
      fetchDetail() {
        axios.get('/api/detail.json').then(this.processDetail)
      },
      processDetail(res) {
        res = res.data;
        const data = res.data;
        this.list = data.categoryList;
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
