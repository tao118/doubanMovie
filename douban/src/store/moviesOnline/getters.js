export const getters = {
  title: state => {
    return state.title
  },
  moviesOnlineList: state => {
    for (let subject of state.moviesOnlineList.subjects) {
      subject.rating.average = subject.rating.average / 2
    }
    return state.moviesOnlineList
  },
  loadingMoviesOnline: state => {
    return state.loadingMoviesOnline
  },
  upcomBody: state => {
    return state.upcomBody
  },
  pageload: state => {
    return state.pageload
  },
  city: state => {
    return state.city
  },
  loadingUpcoming: state => {
    return state.loadingUpcoming
  },
  searchList: state => {
    for (let subject of state.searchList.subjects) {
      subject.rating.average = subject.rating.average / 2
    }
    return state.searchList
  },
  searchText: state => {
    return state.searchText
  },
  searchLoading: state => {
    return state.searchLoading
  },
  ranking250: state => {
    return state.ranking250
  },
  start: state => {
    return state.start
  },
  id: state => {
    return state.id
  },
  movieDetail: state => {
    state.movieDetail.rating.average = state.movieDetail.rating.average / 2
    return state.movieDetail
  },
  loadingDetail: state => {
    return state.loadingDetail
  },
  movieComment: state => {
    return state.movieComment
  }
}
