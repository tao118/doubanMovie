<template>
  <li class="item upComing">
    <a class="thumb" @click="showDetail(item.id)">
      <img class="movieTag" :src="item.image.large">
    </a>
    <div class="intro">
      <h3>
        <a :href="item.alt" class="">{{item.title}}</a>
        <span class="icon"></span>
      </h3>
      <ul>
        <li class="dt">10月1日</li>
        <li class="dt"><em v-for="it in item.genres">{{it}}</em></li>
        <li class="dt">中国大陆</li>
        <li class="dt last"><span class="">{{item.collect_count}}人收藏</span></li>
        <a href="https://movie.douban.com/trailer/211279/#content" class="trailer_icon">预告片</a>
        <li>
          <a href="https://movie.douban.com/subject/25900945/cinema/shenzhen/" class="ticket_btn">256家影院有影讯 »</a>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  methods: {
    showDetail (id) {
      this.$store.commit('DETAIL_LOADING', {loading: true})
      this.$router.push({path: '/MoviesDetail', query: {id: id}})
    }
  }
}
</script>

<style>

</style>
