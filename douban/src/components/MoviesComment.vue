<template>
  <div class="movie-comment">
    <p class="movie-comment-title">{{title}}的短评：</p>
    <p>没有豆瓣数据权限</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      movieComment: {},
      id: ''
    }
  },
  mounted () {
    this.$http.get(`api/movie/subject/${this.id}/comments`, {}).then(res => {
      this.movieComment = res.data
    })
  }
}
</script>

<style lang="less" rel="stylesheet/less">
.movie-comment{
    float: left;
    clear: both;
    margin-top: 20px;
    .movie-comment-title{
      color: #007722;
      font-size: 16px;
    }
  }
</style>
