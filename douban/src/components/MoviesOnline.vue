<template>
  <div class="MoviesOnline">
    <div class="tit">
      <h1>电影票 - {{city}}</h1>
      <div id="" class="locat">
        <el-dropdown trigger="click" @command="changeCity">
            <span class="el-dropdown-link">
              [切换城市]
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(city,index) in citys" :command="city.name" :key="index">{{city.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
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
export default {
  data () {
    return {
      city: '深圳',
      citys: [
        {
          name: '北京'
        },
        {
          name: '上海'
        },
        {
          name: '广州'
        },
        {
          name: '深圳'
        },
        {
          name: '杭州'
        }
      ]
    }
  },
  mounted () {
    /*
    **获取正在上映列表
    */
    this.$store.dispatch('getMoviesOnline')
  },
  methods: {
    /**
    * function 切换城市
    * @param command
    */
    changeCity (command) {
      this.$store.commit('MOVIESONLINE_LOADING', {loading: true})
      this.$store.commit('MOVIE_CITY', {city: command})
      this.$store.dispatch('getMoviesOnline')
    }
  },
  components: { MoviesTag },
  computed: {
    /**
    * 电影列表函数
    * @returns {computed.moviesOnlineList|state.moviesOnlineList|{subjects}|getters.moviesOnlineList|*}
    */
    moviesOnlineList () {
      return this.$store.getters.moviesOnlineList
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
      .locat {
        position: relative;
        display: inline-block;
        .el-dropdown-link {
          color: #808080;
        }
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