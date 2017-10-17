<template>
  <div class="header">
    <div class="header-container">
      <a class="title">魔速电影</a>
      <div class="bar">
        <ul>
          <li v-for="bar in barList" @click="chooseUrl(bar.title)">
            <router-link :to="bar.url" :class="title===bar.title? 'active':''">{{bar.title}}</router-link>
          </li>
        </ul>
      </div>
      <div class="douban-search">
        <el-input placeholder="电影、影人、影院、电视剧" v-model="content">
          <el-button slot="append" icon="search" @click="searchMovie()"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
// import {Api} from './common/api'
// let API = new Api()
export default {
  data () {
    return {
      items: [],
      content: '',
      title: '正在热映',
      barList: [{
        title: '正在热映',
        url: '/'
      }, {
        title: '即将上映',
        url: '/upcoming'
      }, {
        title: 'Top--250',
        url: '/top250'
      }]
    }
  },
  methods: {
    chooseUrl (title) {
      this.title = title
    },
    searchMovie () {
      // let searchText = this.content
      // this.$http.get('api/movie/search', {q: searchText}, {
      //   emulateJSON: true
      // }).then(function (response) {
      //   this.items = response.data.subjects
      // }, function (response) {
      //   return (response)
      // })
      this.$router.push({path: '/searchlist', query: {searchText: this.content}})
      // API.get('api/movie/search', {q: searchText}).then((response) => {
      //   this.items = response.subjects
      // })
      location.reload()
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .header{
    background: white;
    width: 100%;
    height: 73px;
    border-bottom: grey solid thin;
    .header-container{
      // background-color: orange;
      width: 1200px;
      margin: auto;
      .douban-search{
        width: 350px;
        // background-color: yellow;
        display: inline-block;
        line-height: 75px;
        vertical-align: right;
        margin-left: 201px;
        input{
          height: 50px;
        }
      }
      .title{
          // background-color: green;
          color: #27a;
          font-size: 30px;
          font-weight: bold;
          line-height: 75px;
          float: left;
      }
      .bar{
        // background-color: blue;
        width: 440px;
        margin-left: 50px;
        height: 75px;
        float: left;
        ul{
          li{
            list-style: none;
            float: left;
            line-height: 70px;
            cursor: pointer;
          }
          a{
            display: inline-block;
            padding-top: 2px;
            padding-bottom: 2px;
            padding-left: 30px;
            padding-right: 30px;
            font-size: 18px;
            color: #666;
            text-decoration: none;
          }
          a.active{
            background-color: red;
            color:white;
          }
        }
      }
    }
  }
</style>