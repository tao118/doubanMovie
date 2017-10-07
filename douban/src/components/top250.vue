<template>
  <div id="wrapper" v-loading="loadingMoviesOnline">
    <div class="hd">
      <ul class="tab-hd clearfix">
        <li class="on">Top250排行榜</li>
      </ul>
    </div>
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
import {API} from '../common/api'
let Api = new API()
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
        if (Api.getScrollTop() + Api.getClientHeight() + 400 > Api.getScrollHeight()) {
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
    }
  }
}
</script>

<style>
</style>