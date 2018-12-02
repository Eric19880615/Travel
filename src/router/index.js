import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
/*异步组件适合大型项目使用*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => ('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => ('@/pages/home/City')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => ('@/pages/detail/Detail')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
