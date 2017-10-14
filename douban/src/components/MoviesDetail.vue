<template>
  <div class="container-moviesOnline">
    <div class="content">
      <span>
        <img class="bg-pic" src="../assets/bg.png" alt="">
      </span>
      <div class="mainpic">
        <a href="https://movie.douban.com/subject/25900945/photos?type=R"><img class="movieImg" :src="movieDetail.images.large" alt="" title="点击查看更多海报"></a>
      </div>
      <h1>
        <span class="title">{{movieDetail.title}}</span>
        <span class="year">({{movieDetail.year}})</span>
      </h1>
      <div class="detail">
        <div class="left-side">
          <div class="actor-list">
            <div class="subject">
              <div class="info">
                <span class="p1">导演：</span><span v-for="item in movieDetail.directors" class="attrs">{{item.name}}</span><br>
                <span class="p1">主演：</span><span v-for="item in movieDetail.casts" class="attrs">{{item.name}}/</span><br>
                <span class="p1">类型：</span><span v-for="item in movieDetail.genres" class="attrs">{{item}}/</span><br>
                <span class="p1">制片国家/地区：</span><span v-for="(item,index) in movieDetail.countries" class="attrs">{{item}}</span><br>
              </div>
            </div>
            <div class="people-sroce">
              <div>
                <p>豆瓣评分</p>
                <span class="score" v-if="movieDetail.rating.average * 2">{{movieDetail.rating.average * 2}}</span>
                <el-rate v-model="movieDetail.rating.average" disabled></el-rate>
                <p class="no-publish" v-if="!movieDetail.rating.average * 2">尚未上映</p>
                <p class="comment-num" v-if="movieDetail.rating.average * 2">{{movieDetail.ratings_count}}人评价</p>
              </div>
            </div>
          </div>
        </div>
        <div class="insterest-people">
          <div class="top">
              <a href=""><button>想看</button></a>
              <a href=""><button>看过</button></a>
              <span class="score-to">评价：<el-rate show-text></el-rate></span>
            </div>
          </div>
          <div class="gtleft">
            <ul class="ul">
              <li><img src="https://img3.doubanio.com/f/shire/cc03d0fcf32b7ce3af7b160a0b85e5e66b47cc42/pics/short-comment.gif" alt=""><a href="">写短评</a></li>
              <li><img src="https://img3.doubanio.com/f/shire/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif" alt=""><a href="">写影评</a></li>
              <li><img src="https://img3.doubanio.com/f/shire/61cc48ba7c40e0272d46bb93fe0dc514f3b71ec5/pics/add-doulist.gif" alt=""><a href="">提问题</a></li>
              <li><img src="https://img3.doubanio.com/f/shire/61cc48ba7c40e0272d46bb93fe0dc514f3b71ec5/pics/add-doulist.gif" alt=""><a href="">添加到豆列</a></li>
              <li><img src="" alt=""><a href="">分享到</a></li>
            </ul>
          </div>
          <div class="summary">
            <p class="summary-title">{{movieDetail.title}}的剧情简介：</p>
            <p class="intro">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{movieDetail.summary}}</p>
          </div>
          <MovieComment :title="movieDetail.title" class="short-comment"></MovieComment>
        <div class="right-side">
          <div class="ticket">
            <a class="ticket-btn" href=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoviesDetail',
  data () {
    return {
      movieDetail: {}
    }
  },
  mounted: function () {
    let id = this.$route.query.id
    this.$http.get(`api//movie/subject/${id}`, {}, {
      emulateJSON: true
    }).then(function (response) {
      this.movieDetail = response.data
    }, function (response) {
      console.log(response)
    })
  },
  components: {
    'MovieComment': (resolve) => {
      require(['./MoviesComment.vue'], resolve)
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
  // @import "../../style/base";
  .container-moviesOnline{
    width: 1200px;
    margin: 0 auto;
    .content{
      width: 1200px;
      .bg-pic{
        height: 300px;
        width: 1162px;
        vertical-align: left;
        overflow: hidden;
      }
      .mainpic{
        position: relative;
        top: -260px;
        left: 170px;
        margin: 3px 12px 0 0;
        max-width: 202px;
        overflow: hidden;
        text-align: center;
        float: left;
        height: 280px;
        border: white solid 5px;
        a{
          img{
            margin-bottom: 10px;
            max-width: 202px;
          }
        }
        .more-pic{
          text-decoration: none;
          color: #BBBBBB;
          font-size: 12px;
          text-align: center;
        }
      }
      h1{
        position: relative;
        left: 190px;
        top: -255px;
        float: left;
        word-break: break-all;
        display: block;
        font-size: 25px;
        font-weight: bold;
        color: #494949;
        padding: 0 0 15px 0;
        .title{
          color: white;
        }
        .year{
          color: white;
        }
      }
      .detail{
        clear: both;
        height: 150px;
        .left-side{
          clear: both;
          position: relative;
          left: 416px;
          top: -480px;
          height: 160px;
          float: left;
          width:590px;
          padding-right: 40px;
          .actor-list{
            margin-bottom: 30px;
            .subject{
              width:320px;
              float: left;
              .info{
                float: left;
                max-width: 248px;
                word-wrap: break-word;
                .p1{
                  line-height: 150%;
                  color: white;
                }
                .attrs{
                  color: white;
                }
              }
            }
            .people-sroce{
              float: left;
              width:155px;
              height: 105px;
              margin: 2px 0 0 0;
              padding: 0 0 0 15px;
              border-left:1px solid #eaeaea;
              p{
                color: pink;
                margin-top: -2px;
              }
              .score{
                font-size: 25px;
                color: gold;
                margin-right: 10px;
              }
              .el-rate{
                vertical-align: top;
                display: inline-block;
                margin-top: 3px;
                i{
                  font-size: 14px;
                }
              }
              .comment-num{
                margin-top:5px;
                color: pink;
              }
            }
          }
        }
        .insterest-people{
          width: 600px;
          margin-left: 170px;
          margin-top: -300px;
          .top{
            clear: both;
            position: relative;
            left: 6px;
            top: -405px;
            button{
              display: inline-block;
              width:50px;
              height: 25px;
              background:#fae9da;
              border: 1px solid #ca6445;
              color: #333;
              margin-right: 10px;
              border-radius: 4px;
            }
          }
          .score-to{
            .el-rate{
              margin-left: 5px;
              display: inline-block;
              .el-rate__icon{
                font-size: 12px;
              }
            }
          }
        }
        .gtleft{
          clear: both;
          position: relative;
          left: 177px;
          top: -400px;
          padding: 4px 4px 0 0;
          float: left;
          .ul{
            padding-top: 6px;
            li{
              float: left;
              display: inline;
              line-height: 14px;
              margin-right: 15px;
              img{
                max-width: 100%;
                margin-right: 5px;
              }
              a{
                text-decoration: none;
                color: #37a;
              }
            }
          }
        }
        .summary{
          clear: both;
          position: relative;
          left: 177px;
          top: -412px;
          width: 714px;
          float: left;
          clear: both;
          margin-top: 20px;
          .summary-title{
            color: #007722;
            font-size: 16px;
          }
        }
        .short-comment{
          clear: both;
          position: relative;
          left: 177px;
          top: -426px;
        }
        .right-side{
          clear: both;
          position: relative;
          left: 1000px;
          top: -715px;
        }
      }
    }
  }
</style>
