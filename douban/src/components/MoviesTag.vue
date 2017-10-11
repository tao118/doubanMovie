<template>
  <div class="moivesList" >
    <div class="movie-container">
      <div class="movieTag" v-for="(article,index) in articles" :key="index.id" v-if="index < maxNum" >
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
  </div>
</template>

<script>
import $ from 'jquery'
var state = {
  id: ''
}
export default {
  data () {
    return {
      value: 0,
      articles: [],
      maxNum: 3
    }
  },
  mounted: function () {
    this.$http.get('api/movie/in_theaters?city=%E6%B7%B1%E5%9C%B3', {}, {
      emulateJSON: true
    }).then(function (response) {
      this.articles = response.data.subjects
    }, function (response) {
      console.log(response)
    })
  },
  methods: {
    showDetail: function () {
      $.ajax({
        type: 'GET',
        url: `/movie/subject/${state.id}`,
        success: function (data) {
        }
      })
      this.$router.push({path: '/movieDetail', query: {id: state.id}})
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less">
@import "../../style/base";
.moviesList{
  width: 1200px;
  margin: 0 auto;
  min-height: 500px;
  .movie-container{
    width: 1200px;
    border-top: 1px dashed #ccc;
    margin-top: -10px;
    .movieTag{
      padding-top: 20px;
      width: 118px;
      height: 270px;
      overflow: hidden;
      font-size: 12px;
      text-align: center;
      display: inline-block;
      margin: 0 20px 20px 0;
      ul{
        width: 500px;
        margin: 0 auto;
        padding: 0;
        li{
          list-style: none;
        }
      }
      a{
        cursor: pointer;
        text-decoration: none;
      }
      .film-pic{
        height: 180px;
        margin-bottom: 12px;
        overflow: hidden;
        a{
          img{
            width: 128px;
            vertical-align: middle;
          }
        }
      }
      .film-name{
        font-size: 14px;
        white-space: nowrap;
        height: 22px;
        overflow: hidden;
        a{
          display: inline-block;
          word-spacing: normal;
          height: 24px;
          line-height: 24px;
          text-decoration: none;
          color: black;
        }
      }
      .film-rate{
        display: inline-block;
        margin: 4px auto 2px;
        height: 19px;
        .el-rate{
          display: inline-block;
          .el-rate__icon{
            font-size: 12px;
          }
        }
        .rateNum{
          display: inline-block;
          font-size: 12px;
        }
      }
      .film-button{
        span{
          display: block;
          margin:0 auto;
          text-align: center;
          width: 90px;
          height: 24px;
          line-height: 24px;
          background-color:#268dcd;
          border-radius: 2px;
          a{
            color: red;
          }
        }
      }
    }
    .load-more{
      cursor: pointer;
      width: 530px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background: #eee;
      color: #27a;
    }
  }
}
</style>