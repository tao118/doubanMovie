<template>
  <div class="MoviesOnline">
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
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scopedSlots>
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
        color: #808080;
      }
      .hd {
        border: none;
        margin-top:8px;
        .on {
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color:red;
          font-size:30px;
        }
      } 
    }
  }
</style>