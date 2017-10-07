<template>
  <div class="header">
    <div class="header-container">
      <a class="title">豆瓣电影</a>
      <div class="bar">
        <ul>
          <li v-for="bar in barList" @click="choiceUrl(bar.title)" >
            <router-link :to="bar.url" :class="title===bar.title? 'active':''">{{bar.title}}</router-link>
          </li>
        </ul>
      </div>
      <div class="douban-search">
        <el-input placeholder="电影、影人、影院、电视剧" v-model="content">
          <el-button slot="apend" icon="search" @click="searchMovie"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: '',
      title: '正在热映',
      barList: [{
        title: '正在热映',
        url: '/'
      }, {
        title: '即将上映',
        url: '/upcoming'
      }, {
        title: 'Top250',
        url: '/top250'
      }]
    }
  },
  methods: {
    choiceUrl (title) {
      this.title = title
    },
    searchMovie () {
      this.$store.commit('SEARCH_TEXT', {searchText: this.content})
      this.$store.dispatch('getSearchList')
      this.$store.commit('SEARCH_LOADING', {loading: true})
      this.$router.push({path: '/search', query: {searchText: this.content}})
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
@import "../style/color";
  .header{
    background: @mainColor;
    width: 100%;
    height: 114px;
    .header-container{
      a{
        display: inline-block;
        padding: 8px;
        font-size: 12px;
        color: #aaa;
        text-decoration: none;
      }
      a.active{
        color: red;
      }
      .title{
          color: @doubanColor;
          font-size: 30px;
          font-weight: bold;
          line-height: 75px;
      }
      .bar{
        width: 950px;
        margin: 0 auto;
        height: 20px;
        ul{
          li{
            list-style: none;
            float: left;
            line-height: 20px;
            cursor: pointer;
        }
      }
      .douban-search{
        display: inline-block;
        line-height: 75px;
        vertical-align: top;
        width: 500px;
        margin-left: 50px;
        input{
          height: 34px;
        }
      }
    }
  }
}
</style>