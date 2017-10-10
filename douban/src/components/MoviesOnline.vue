<template>
  <div class="MoviesOnline">
    <div class="tit">
      <h1>电影票 - {{city}}</h1>
      <div class="hd">
        <ul class="tab-hd clearfix">
          <li class="on">正在上映(售票中)</li>
        </ul>
      </div>
      <MoviesTag :data="moviesOnlineList" class="moviesTag"></MoviesTag>
    </div>
  </div>
</template>

<script>
import MoviesTag from '@/components/MoviesTag.vue'
import {API} from '../common/api'
var moviesOnlineList = {
  subjects: []
}
export default {
  data () {
    return {
      city: '深圳'
    }
  },
  mounted () {
    /*
    **获取正在上映列表
    */
    this.getMoviesOnline()
  },
  components: { MoviesTag },
  computed: {
    moviesOnlineList () {
      for (let subject of moviesOnlineList.subjects) {
        subject.rating.average = subject.rating.average / 2
      }
      return moviesOnlineList
    },
    getMoviesOnline () {
      API.get('/movie/in_theaters', {city: '深圳'}).then((res) => {
        console.log(res)
        if (!res || res.error_tip) return
      })
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less">
  .MoviesOnline {
    margin-bottom: 20px;
    .tit {
      width: 1200px;
      margin: 0 auto;
      margin-top: 20px;
      h1 {
        display: inline-block;
        width: 126px;
        font-size: 20px;
        color: #808080;
      }
      .hd {
        border: none;
        margin-top:8px;
        .on {
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color:red;
          font-size:30px;
        }
      } 
    }
  }
</style>