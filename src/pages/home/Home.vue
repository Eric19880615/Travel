<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
  import HomeHeader from './components/Header';
  import HomeSwiper from './components/Swiper';
  import homeIcons from './components/Icons';

  export default {
    name: "Home",
    components: {
      HomeHeader,
      HomeSwiper,
      homeIcons
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
