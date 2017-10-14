<template>
  <div class="MoviesOnline">
    <poster class="poster"></poster>
    <div class="tit">
      <h1>电影票 - {{city}}</h1>
      <div class="hd">
        <p class="on">正在上映(售票中)</p>
      </div>
    </div>
    <MoviesTag class="moviesTag"></MoviesTag>
  </div>
</template>

<script>
// import MoviesTag from '@/components/MoviesTag.vue'
export default {
  data () {
    return {
      city: '深圳'
    }
  },
  // components: { MoviesTag }
  components: {
    'MoviesTag': (resolve) => {
      require(['@/components/MoviesTag.vue'], resolve)  // 异步调用
    },
    'poster': (resolve) => {
      require(['@/components/poster.vue'], resolve)
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .MoviesOnline {
    width: 1200px;
    margin: 0 auto;
    .tit {
      width: 1200px;
      margin-top: 20px;
      h1 {
        display: inline-block;
        width: 126px;
        font-size: 20px;
        color: #989898;
      }
      .hd {
        width: 1162px;
        border-bottom: 1px dashed #ccc;
        .on {
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color:red;
          font-size:28px;
        }
      } 
    }
  }
</style>