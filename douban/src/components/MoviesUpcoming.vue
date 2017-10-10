<template>
  <div class="grid-950 clearfix">
    <article class="container">
      <div class="tit">
        <h1>{{city}}-影讯</h1>
        <div class="hd">
          <ul class="tab-hd clearfix">
            <li class="on">即将上映</li>
          </ul>
        </div>
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
      city: '深圳'
    }
  },
  mounted () {
    /**
    * 获得即将上映列表
    */
    this.$store.dispatch('getMoviesUpcoming')
  },
  methods: {
    /**
    * function 切换城市
    * @param command
    */
    changeCity (command) {
      this.$store.commit('UP_COMING', {loading: true})
      this.$store.commit('MOVIE_CITY', {city: command})
      this.$store.dispatch('getUpcoming')
    },
    moredata () {
      this.$store.commit('PAGE_LOAD', {pageload: true})
      this.$store.dispatch('getUpcoming')
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
@import '../../style/base.less';

  .container {
    float: left;
    width: 590px;
  }

  .right-side {
    float: right;
    width: 310px;
  }

  .two-list {
    min-height: 500px;
  }

  .tit {
    margin-top: 20px;
    h1 {
      display: inline-block;
      width: 90px;
      font-size: 20px;
      color: #000;
    }
    .locat {
      position: relative;
      display: inline-block;

    }
  }

  .locat {
    .cities-list {
      position: absolute;
      left: 0;
      top: 18px;
      padding: 10px;
      background: #fff;
      z-index: 999;
      border: 1px solid #ccc;
      span {
        display: block;
      }
    }
  }

  .tab-hd {
    vertical-align: bottom;
    li {
      margin: 0 5px;
      float: left;
    }
    .on {
      background-color: #69c;
      color: #fff;
      padding: 0 10px;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;
    }
  }

  .hd {
    padding: 10px 0;
    border-bottom: 1px dashed #ccc;
    h2, .tab-hd {
      display: inline-block;
    }
  }
  .load-more{
    text-align: center;
  }
</style>