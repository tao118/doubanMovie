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
          <el-button slot="append" icon="search" @click="searchMovie"></el-button>
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
        title: ' Top--250 ',
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
    background: white;
    width: 100%;
    height: 76px;
    border: grey solid thin;
    .header-container{
      width: 50%;
      margin: auto;
      .douban-search{
        display: inline-block;
        line-height: 75px;
        vertical-align: top;
        width: 240px;
        margin-left: 0px;
        input{
          height: 34px;
        }
      }
      .title{
          color: @doubanColor;
          margin-top: 6px;
          font-size: 36px;
          font-weight: bold;
          line-height: 75px;
          float: left;
      }
      .bar{
        width: 384px;
        margin-left: 50px;
        height: 75px;
        float: left;
        ul{
          li{
            list-style: none;
            float: left;
            line-height: 70px;
            margin-left: 8px;
            cursor: pointer;
          }
          a{
            display: inline-block;
            padding: 2px;
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