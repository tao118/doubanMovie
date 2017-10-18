// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import MoviesOnline from './components/MoviesOnline.vue'
import MoviesUpcoming from './components/MoviesUpcoming.vue'
import Top250 from './components/top250.vue'
import SearchList from './components/SearchList.vue'
import MoviesDetail from './components/MoviesDetail.vue'
import { Button, Select, Input, Loading, Rate } from 'element-ui'

Vue.use(Button)
Vue.use(Select)
Vue.use(Input)
Vue.use(Loading)
Vue.use(Rate)
Vue.use(VueRouter)
Vue.use(VueResource)
require.ensure([], function () {
  require('element-ui/lib/theme-default/index.css')
})
Vue.config.productionTip = false

// 创建路由实例
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'MoviesOnline',
      component: MoviesOnline
    }, {
      path: '/upcoming',
      name: 'MoviesUpcoming',
      component: MoviesUpcoming
    }, {
      path: '/top250',
      name: 'Top250',
      component: Top250
    }, {
      path: '/searchlist',
      name: 'SearchList',
      component: SearchList
    }, {
      path: '/movieDetail',
      name: 'MoviesDetail',
      component: MoviesDetail
    }]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
