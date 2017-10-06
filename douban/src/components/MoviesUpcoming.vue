<template>
  <div class="grid-950 clearfix">
    <article class="container">
      <div class="MoviesOnline">
        <div class="hd">
          <ul class="tab-hd clearfix">
            <li class="on">正在热映</li>
          </ul>
        </div>
        <MoviesTag :data="movingList" class="moviesTag"></MoviesTag>
      </div>
      <div class="two-list" v-loading="loadingUpcoming">
        <ul class="clearfix">
          <UpcomingTag v-for="(item,index) in upcomBody.subjects" :item="item" :key="index"></UpcomingTag>
        </ul>
        <div class="load-more">
          <el-button type="text" v-on:click="moredata()" v-show="!pageload && !nodata">加载更多</el-button>
          <el-button type="text" v-show="pageload">加载中...</el-button>
          <el-button type="text" v-show="nodata">没有更多了</el-button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nodata: false
    }
  },
  mounted () {
    /**
    * 获得即将上映列表
    */
    this.$store.dispatch('getMoviesUpcoming')
  },
  methods: {
    moredata () {
      this.$store.commit('PAGE_LOAD', {pageload: true})
      this.$store.dispatch('getMoviesUpcoming')
      var up = this.$store.getters.upcomBody
      if (up.start * up.count > up.total) {
        this.nodata = true
      }
    }
  },
  computed: {
    /**
    * 获取即将上映列表
    * @returns {computed.upcomBody|getters.upcomBody|state.upcomBody|{}|*}
    */
    upcomBody () {
      return this.$store.getters.upcomBody
    },
    /**
    * loading动画
    * @returns {computed.loadingUpcoming|boolean|getters.loadingUpcoming|*}
    */
    loadingUpcoming () {
      return this.$store.getters.loadingUpcoming
    },
    pageload () {
      return this.$store.getters.pageload
    }
  },
  components: {
    'UpcomingTag': (resolve) => {
      require(['./UpcomingTag.vue'], resolve)
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less">

</style>