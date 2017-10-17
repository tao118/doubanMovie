<template>
  <div class="two-list">
    <div class="upcomingTag" v-for="(item,index) in items" :key="index" v-if="index < maxNum">
      <ul>
        <li class="film-pic">
          <a @click="showDetail(item.id)">
            <img class="movieImg" :src="item.images.large">
          </a>
        </li>
        <li class="intro">
          <h3 class="film-name">
            <a href="" class="">{{item.title}}</a>
          </h3>
          <h3>
            <!-- <p class="dt2">11月1日上映</p> -->
            <p class="dt3"><span class="">{{item.collect_count}}人收藏</span></p>
          </h3>
          <h3 class="sale">
            <!-- <a href="https://movie.douban.com/trailer/211279/#content" class="trailer_icon">预告片</a> -->
            <a href="" class="pre-sale">预售</a>
          </h3>
        </li>
      </ul>
    </div>
    <div class="load-more" @click ="maxNum = maxNum + 10" v-if="maxNum < items.length">加载更多</div> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      maxNum: 5,
      items: [],
      upcomBody: {
        start: 0
      }
    }
  },
  mounted: function () {
    this.$http.get('api/movie/coming_soon', {}, {
      emulateJSON: true
    }).then(function (response) {
      this.items = response.data.subjects
    }, function (response) {
      console.log(response)
    })
  },
  methods: {
    showDetail (id) {
      this.$router.push({path: '/movieDetail', query: {id: id}})
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
@import "../../style/base";
.two-list{
  width: 1200px;
  min-height: 500px;
  .upcomingTag{
    margin-top: 10px;
    width: 1200px;
    ul{
      list-style: none;
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
      .intro{
        width: 200px;
        .film-name{
          padding-top: 6px;
          font-size: 16px;
          text-align: center;
          width: 200px;
          white-space: nowrap;
          height: 30px;
          overflow: hidden;
          color: #686868;
          border-left: #D8D8D8 solid thin;
          border-right: #D8D8D8 solid thin;
          border-bottom: #D8D8D8 solid thin;
          a{
            color: #686868;
          }
        }
        h3{
          width:200px;
          border-left: #D8D8D8 solid thin;
          border-right: #D8D8D8 solid thin;
          border-bottom: #D8D8D8 solid thin;
          height: 30px;
          overflow: hidden;
          // .dt2{
          //   padding: 2px;
          //   width: 95px;
          //   height: 26px;
          //   font-size: 14px;
          //   color: #686868;
          //   float:left;
          //   text-align: center;
          //   border-right: #D8D8D8 solid thin;
          // }
          .dt3{
            padding: 2px;
            // width: 96px;
            width: 200px;
            height: 26px;
            font-size:14px;
            color: #686868;
            // float: left;
            text-align: center;
          }
        }
        h3{
          width:200px;
          border-left: #D8D8D8 solid thin;
          border-right: #D8D8D8 solid thin;
          border-bottom: #D8D8D8 solid thin;
          height: 30px;
          overflow: hidden;
          // .trailer_icon{
          //   padding: 2px;
          //   height:26px;
          //   width: 95px;
          //   font-size: 16px;
          //   color: red;
          //   float:left;
          //   text-align: center;
          //   border-right: #D8D8D8 solid thin;
          // }
          .pre-sale{
            position: relative;
            left: 80px;
            padding: 6px;
            height:30px;
            // width: 96px;
            width: 200px;
            font-size:16px;
            color: red;
            // float: left;
            text-align: center;
          }
          // .trailer_icon:hover{
          //   background-color: red;
          //   color:white;
          // }
          .pre-sale:hover{
            // background-color: red;
            color: white;
          }
          }
          .sale:hover{
            background-color: red;
            color: white;
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
