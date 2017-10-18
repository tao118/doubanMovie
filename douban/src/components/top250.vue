<template>
  <div id="wrapper">
    <h2>Top250排行榜</h2>
    <div class="indent">
    <!-- 缩进 -->
      <div class="">
        <p class="ul first"></p>
        <SearchTag v-for="(item,index) in items" :item="item" :key="index" v-if="index < maxNum"></SearchTag>
      </div>
      <div class="load-more" @click ="maxNum = items.length" v-if="maxNum < items.length">加载更多</div>
    </div>
  </div>
</template>

<script>
import {Api} from '../common/api'
let API = new Api()
export default {
  props: {
    data: Object
  },
  data () {
    return {
      top250: [],
      timer: null,
      isLoad: false,
      page: 1,
      totalPage: 0,
      start: 1,
      items: [],
      maxNum: 10
    }
  },
  mounted () {
    API.get('api/movie/top250', {start: 0, count: 50}).then(res => {
      this.items = res.subjects
    })
  },
  components: {
    'SearchTag': (resolve) => {
      require(['./SearchTag.vue'], resolve)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
#wrapper {
  width: 900px;
  min-height: 500px;
  margin: 30px auto;
  h2{
    margin-left: 20px;
  }
  .load-more{
    cursor: pointer;
    width: 900px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    float: left;
    background: #eee;
    color: #27a;
  }
}
</style>