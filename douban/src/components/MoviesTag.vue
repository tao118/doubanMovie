<template>
  <div class="movie-container" v-loading="loadingMoviesOnline">
    <div class="movieTag" v-for="(article,index) in articles" :key="index" v-if="index < maxNum" >
      <ul>
        <li class="film-pic">
          <a @click="showDetail(article.id)">
            <img class="movieImg" :src="article.images.large" alt="">
          </a>
        </li>
        <li class="film-name">
          <a href="">{{article.title}}</a>
        </li>
        <li class="film-rate">
          <el-rate v-model="article.rating.average" disabled></el-rate>
          <span class="rateNum">{{article.rating.average * 2}}</span>
        </li>
        <li class="film-button">
          <span>
            <a href="">购票</a>
          </span>
        </li>
      </ul>
    </div>
    <div class="load-more" @click ="maxNum = articles.length" v-if="maxNum < articles.length">加载更多</div> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      articles: [],
      maxNum: 5
    }
  },
  beforeMount () {
    this.loadingMoviesOnline = true
  },
  mounted () {
    this.$http.get('api/movie/in_theaters?city=深圳', {}, {
      emulateJSON: true
    }).then(function (response) {
      this.articles = response.data.subjects
    }, function (response) {
      console.log(response)
    })
    this.loadingMoviesOnline = false
  },
  methods: {
    showDetail: function (movieId) {
      this.$router.push({path: '/movieDetail', query: {id: movieId}})
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
@import "../../style/base";
.movie-container{
  width: 1200px;
  .movieTag{
    margin-top: 10px;
    width: 1200px;
    ul{
      width: 202px;
      height: 400px;
      margin-right: 38px;
      padding: 0;
      float: left;
      .film-pic{
        overflow: hidden;
        border: #D8D8D8 solid thin;
        a{
          img{
            width: 202px;
            height: 250px;
            vertical-align: middle;
          }
        }
      }
      .film-name{
        padding-top: 6px;
        width: 200px;
        font-size: 16px;
        white-space: nowrap;
        height: 22px;
        overflow: hidden;
        text-align: center;
        border-left: #D8D8D8 solid thin;
        border-right: #D8D8D8 solid thin;
        a{
          display: inline-block;
          word-spacing: normal;
          height: 24px;
          line-height: 24px;
          text-decoration: none;
          color: #686868;
        }
      }       
      .film-rate{
        display: inline-block;
        height: 18px;
        text-align: center;
        width: 200px;
        padding-bottom: 12px;
        border-left: #D8D8D8 solid thin;
        border-right: #D8D8D8 solid thin;
        .el-rate{
          text-align: center;
          display: inline-block;
          .el-rate__icon{
            font-size: 12px;
          }
        }
        .rateNum{
          display: inline-block;
          color: orange;
          font-size: 16px;
        }
      } 
      .film-button{
        width: 198px;
        span{
          display: block;
          margin:0 auto;
          padding-top: 6px;
          text-align: center;
          width: 200px;
          height: 30px;
          line-height: 24px;
          background-color: white;
          border: #D8D8D8 solid thin;
          a{
            color: red;
          }
        }
        span:hover{
          background-color: red;
          a{
            color: white;
          }
        }
      }
    }
  }
  .load-more{
    cursor: pointer;
    width: 1162px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    float: left;
    background: #eee;
    color: #27a;
  }
}
</style>