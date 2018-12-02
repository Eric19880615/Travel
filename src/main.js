// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'babel-polyfill';
import store from './store';
import 'stylus/reset.css'
import 'stylus/border.css'
import 'stylus/iconfont.css'
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;
//解决移动端点击延迟
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
