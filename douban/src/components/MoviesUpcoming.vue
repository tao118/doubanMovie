<template>
  <div class="grid-950 clearfix">
    <poster class="poster"></poster>
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
import {Api} from '../common/api'
let API = new Api()
export default {
  data () {
    return {
      city: '深圳',
      upcomBody: {
        start: 0
      }
    }
  },
  mounted: function () {
    API.get('api/movie/coming_soon?city=%E6%B7%B1%E5%9C%B3', {start: this.upcomBody.start + 1}, {
      emulateJSON: true
    }).then(function (response) {
      if (this.upcomBody.subjects && this.upcomBody.subjects.length) {
        response.subjects = this.upcomBody.subjects.concat(response.subjects)
        this.pageload = false
      }
      this.upcomBody = response.data
    }, function (response) {
      console.log(response)
    })
  },
  methods: {
    moredata () {
      this.pageload = true
      this.getUpcoming()
      var up = this.upcomBody
      if (up.start * up.count > up.total) {
        this.nodata = true
      }
    }
  },
  components: {
    'UpcomingTag': (resolve) => {
      require(['./UpcomingTag.vue'], resolve)
    },
    'poster': (resolve) => {
      require(['@/components/poster.vue'], resolve)
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less">
@import '../../style/base.less';

  .container {
    float: left;
    width: 1200px;
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