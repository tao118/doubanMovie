<template>
  <div class="grid-950 clearfix">
    <article class="container">
      <poster class="poster"></poster>
      <div class="tit">
        <h1>{{city}}-影讯</h1>
        <div class="hd">
          <p class="on">即将上映</p>
        </div>
      </div>
      <UpcomingTag></UpcomingTag>
    </article>
  </div>
</template> 

<script>
export default {
  data () {
    return {
      city: '深圳'
    }
  },
  components: {
    'UpcomingTag': (resolve) => {
      require(['./UpcomingTag.vue'], resolve)
    },
    'poster': (resolve) => {
      require(['@/components/poster.vue'], resolve)
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .container {
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