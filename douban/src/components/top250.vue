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
      start: 1
    }
  },
  mounted () {
    this.$store.commit('PAGE_START', {start: 0})
    this.$store.dispatch('loadingtop250')
    window.onscroll = () => {
      if (!this.isLoad) {
        if (this.getScrollTop() + this.getClientHeight() + 400 > this.getScrollHeight()) {
          let page = this.page + 1
          if (this.page <= this.totalPage) {
            this.isLoad = true
            this.page = page
            this.start = (this.page - 1) * 10
            this.$store.commit('PAGE_START', {start: this.start})
            this.$store.dispatch('loadingtop250')
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
      let ranklist = this.$store.getters.ranking250
      this.totalPage = ranklist.total
      return ranklist
    },
    loadingMoviesOnline () {
      return this.$store.getters.loadingMoviesOnline
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