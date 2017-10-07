import {API} from '../../../src/common/api'

let Api = new API()
export const actions = {
  /**
  * 获取电影列表
  * @param commit
  */
  getMoviesOnline ({commit, state}) {
    Api.get('/movie/in_theaters', {city: state.city}).then(res => {
      commit('MOVIESONLINE_LIST', {list: res})
      commit('MOVIESONLINE_LOADING', {loading: false})
    })
  },
  /**
  * 获取电影详情
  * @param commit
  */
  getMovieDetail ({commit, state}) {
    Api.get(`/movie/subject/${state.id}`, {}).then(res => {
      commit('DETAIL_LOADING', {loading: false})
      commit('MOVIE_DETAIL', {movieDetail: res})
    })
  },
  /**
  * 获取即将上映电影列表
  * @param commit
  * @param state
  */
  getUpcoming ({commit, state}) {
    Api.get('/movie/coming_soon', {city: state.city, start: state.upcomBody.start + 1}).then(res => {
      if (state.upcomBody.subjects && state.upcomBody.subjects.length) {
        res.subjects = state.upcomBody.subjects.concat(res.subjects)
        commit('PAGE_LOAD', {pageload: false})
      }
      commit('UP_COMBODY', {upcomBody: res})
      commit('UP_COMING', {loading: false})
    })
  },
  /**
  * 获取top250
  * @param cmmit
  * @param state
  */
  loadingtop250 ({commit, state}) {
    Api.get('/movie/top250', {start: state.start, count: 10}).then(res => {
      let subject = state.ranking250.subjects
      if (subject !== undefined) {
        res.subject = subject.concat(res.subjects)
      }
      commit('LOAD_TOP250', {ranking250: res})
      commit('MOVIESONLINE_LOADING', {loading: false})
    })
  },
  /**
  * 获取搜索列表
  * @param commit
  * @param state
  */
  getSearchList ({commit, state}) {
    console.log(state.searchText)
    Api.get('/movie/search', {q: state.searchText}).then(res => {
      commit('SEARCH_LIST', {searchList: res})
      commit('SEARCH_LOADING', {loading: false})
    })
  },
  /**
  * 获取豆瓣影评
  * @param commit
  * @param state
  */
  getMovieList ({commit, state}) {
    Api.get(`/movie/subject/${state.id}/comments`, {}).then(res => {
      commit('MOVIE_COMMENT', {comment: res})
    })
  }
}

