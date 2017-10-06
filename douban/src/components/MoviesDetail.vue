<template>
  <div class="container-moviesOnline" v-loading="loadingDetail">
    <div class="content">
      <h1>
        <span class="title">{{movieDetail.title}}/{{movie.original_title}}</span>
        <span class="year">({{movieDetail.year}})</span>
      </h1>
      <div class="detail clearfix">
        <div class="left-side">
          <div class="actor-list">
            <div class="subject">
              <div class="mainpic">
                <a href="https://movie.douban.com/subject/25900945/photos?type=R"><img class="movieImg" :src="movieDetail.images.medium" alt="" title="点击查看更多海报"></a>
              </div>
              <div class="info">
                <span class="p1">导演</span><span v-for="item in movieDetail.directors" class="attrs">{{item.name}}</span><br>
                <span class="p1">主演</span><span v-for="item in movieDetail.casts" class="attrs">{{item.name}}/</span><br>
                <span class="p1">类型</span><span v-for="item in movieDetail.genres" class="attrs">{{item}}/</span><br>
                <span class="p1">制片国家/地区</span><span v-for="(item,index) in movieDetail.countries" class="attrs">{{item}}</span><br>
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
          <MovieComment :title="movieDetail.title"></MovieComment>
        </div>
        <div class="right-side">
          <div class="ticket">
            <a class="ticket-btn" href="https://movie.douban.com/subject/25900945/cinema/?from=subject-page">豆瓣购票大优惠23元起</a>
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

    }
  },
  mounted () {
    let id = this.$route.query.id
    this.$store.commit('MOVIESONLINE_ID', {id})
    this.$store.dispatch('getMovieDetail')
  },
  components: {
    'MovieComment': (resolve) => {
      require(['./MoviesComment.vue'], resolve)
    }
  },
  computed: {
    movieDetail () {
      return this.$store.getters.movieDetail
    },
    loadingDetail () {
      return this.$store.getters.loadingDetail
    }
  }
}
</script>

<style>

</style>
