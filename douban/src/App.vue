<template>
  <div id="app">
    <header></header>   
    <!-- header -->
    <transition name="fade">        
    <!-- 渐变 -->
      <keep-alive exclude="MoviesDetail">
      <!-- keep some components alive. -->
        <router-view></router-view>
      </keep-alive>   
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
    'header': (resolve) => {
      require(['./header'], resolve)  // 异步调用
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  * {
    margin: 0;
    padding: 0;
    font-family: '微软雅黑';
  }
</style>
