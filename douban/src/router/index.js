import Vue from 'vue'
import Router from 'vue-router'
import MoviesOnline from '../components/MoviesOnline.vue'
import MoviesUpcoming from '../components/MoviesUpcoming.vue'
import Top250 from '../components/top250.vue'
import SearchList from '../components/SearchList.vue'
import MoviesDetail from '../components/MoviesDetail.vue'

Vue.use(Router)
/*
**路由信息配置
*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'MoviesOnline',
      component: MoviesOnline
    },
    {
      path: '/upcoming',
      name: 'MoviesUpcoming',
      components: MoviesUpcoming
    },
    {
      path: '/top250',
      name: 'Top250',
      components: Top250
    },
    {
      path: '/search',
      name: 'SearchList',
      components: SearchList
    },
    {
      path: '/movieDetail',
      name: 'MoviesDetail',
      components: MoviesDetail
    }
  ]
})
