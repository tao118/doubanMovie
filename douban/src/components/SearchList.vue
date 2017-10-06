<template>
  <div class="search-list" v-loading="searchLoading">
    <SearchTag v-for="(subject,index) in searchList.subjects" :subject="subject" :key="index"></SearchTag>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    if (this.searchText === '') {
      let searchText = this.$route.query.searchText
      this.$store.commit('SEARCH_TEXT', {searchText})
      this.$store.dispatch('getSearchList')
    }
  },
  components: {
    'SearchTag': (resolve) => {
      require(['./SearchTag.vue'], resolve)
    }
  },
  computed: {
    searchText () {
      return this.$store.getters.searchText
    },
    searchList () {
      return this.$store.getters.searchList
    },
    searchLoading () {
      return this.$store.getters.searchLoading
    }
  }
}
</script>

<style>

</style>