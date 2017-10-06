/**
 * 定义store模块入口文件
 */
import {getters} from './getters'
import {actions} from './actions'
import {mutations} from './mutations'
const state = {
  title: 'douban', // App 标题
  moviesOnlineList: {  // 正在上映列表
    subjects: []
  },
  searchList: {  // 搜索列表
    subjects: []
  },
  searchText: '', // 搜索内容
  loadingMoviesOnline: true, // 正在上映是否显示loading
  loadingUpcoming: true, // 即将上映是否显示loading
  searchLoading: true, // 搜索列表是否显示loading
  pageload: false, // 是否正在加载分页
  upcomBody: {  // 即将上映的电影列表
    start: 0
  },
  loadingDetail: true,  // 电影详情页是否显示loading
  city: '深圳',
  ranking250: {},  // top250列表
  movieDetail: {
    rating: {},
    images: {}
  },
  id: '',    // 电影ID
  start: 0,   // top250分页起点
  movieComment: {}  // 电影短评
}

export default {
  state,
  getters,
  actions,
  mutations
}
