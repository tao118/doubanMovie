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
          <li class="on">正在上映</li>
        </ul>
      </div>
      <MoviesTag :data="moviesOnlineList" class="moviesTag"></MoviesTag>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
     * @param command
     */
    changeCity (command) {
      this.$store.cimit('MOVIEONLINE_LOADING', {loading: true})
      this.$store.commit('MOVIEONLINE_CITY', {city: command})
      this.$store.dispatch('getMOVIESONLINE')
    }
  },
  components: {
    'MoviesTag': (resolve) => {
      require(['./MoviesTag.vue'], resolve)
    }
  },
  computed: {
    /**
    * 电影列表函数
    * @returns {computed.moviesOnlineList|state.moviesOnlineList|{subjects}|getters.moviesOnlineList|*}
    */
    moviesOnlineList () {
      return this.$store.getters.moviesOnlineList
    },
    city () {
      return this.$store.getters.city
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less">
  .MoviesOnline {
    margin-bottom: 20px;
    .hd {
      width: 950px;
      margin: 0 auto;
      margin-top: 20px;
      border: none;
    } 
  }
</style>