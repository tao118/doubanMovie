<template>
  <div class="search-list" v-loading="loadingSearch">
    <SearchTag v-for="(item,index) in items" :item="item" :key="index"></SearchTag>
  </div>
</template>

<script>
import {Api} from '../common/api'
let API = new Api()
export default {
  // props: {
  //   items: Object
  // },
  data () {
    return {
      items: []
    }
  },
  beforeMount () {
    this.loadingSearch = true
  },
  mounted () {
    let searchText = this.$route.query.searchText
    API.get('api/movie/search', {q: searchText}).then((response) => {
      this.items = response.subjects
    })
    this.loadingSearch = false
  },
  components: {
    'SearchTag': (resolve) => {
      require(['./SearchTag.vue'], resolve)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.search-list{
  width: 900px;
  min-height: 500px;
  margin: 30px auto;
}
</style>