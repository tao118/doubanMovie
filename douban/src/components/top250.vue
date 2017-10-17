<template>
  <div id="wrapper">
    <h2>Top250排行榜</h2>
    <div class="indent">
    <!-- 缩进 -->
      <div class="">
        <p class="ul first"></p>
        <SearchTag v-for="(subject,index) in ranking250.subjects" :subject="subject" :key="index"></SearchTag>
      </div>
    </div>
  </div>
</template>

<script>
import {Api} from '../common/api'
let API = new Api()
export default {
  props: {
    data: Object
  },
  data () {
    return {
      top250: [],
      timer: null,
      isLoad: false,
      page: 1,
      totalPage: 0,
      start: 1,
      ranking250: {}
    }
  },
  mounted () {
    // this.$store.commit('PAGE_START', {start: 0})
    // this.$store.dispatch('loadingtop250')
    API.get('api/movie/top250', {start: 0, count: 10}).then(res => {
      let subject = this.ranking250.subjects
      if (subject !== undefined) {
        res.subjects = subject.concat(res.subjects)
      }
    })
    window.onscroll = () => {
      if (!this.isLoad) {
        if (this.getScrollTop() + this.getClientHeight() + 400 > this.getScrollHeight()) {
          let page = this.page + 1
          if (this.page <= this.totalPage) {
            this.isLoad = true
            this.page = page
            this.start = (this.page - 1) * 10
            API.get('api/movie/top250', {start: this.start, count: 10}).then(res => {
              let subject = this.ranking250.subjects
              if (subject !== undefined) {
                res.subjects = subject.concat(res.subjects)
              }
            })
          }
        }
      }
    }
  },
  components: {
    'SearchTag': (resolve) => {
      require(['./SearchTag.vue'], resolve)
    }
  },
  computed: {
    ranking250 () {
      this.isLoad = false
      let ranklist = this.ranking250
      this.totalPage = ranklist.total
      return ranklist
    },
    loadingMoviesOnline () {
      return true
    },
    // 获取滚动条当前位置
    getScrollTop () {
      let scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      return scrollTop
    },
    // 获取当前可视范围的高度
    getClientHeight () {
      let clientHeight = 0
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
      } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
      }
      return clientHeight
    },
    // 获取文档完整高度
    getScrollHeight () {
      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
#wrapper {
  width: 950px;
  min-height: 500px;
  margin: 30px auto;
}
</style>