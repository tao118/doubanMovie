<template>
  <div class="search-tag">
    <a class="search-img">
      <img class="search-tag-img movieImg" :src="subject.images.medium">
    </a>
    <div class="search-brief">
      <p class="title">{{subject.title}}</p>
      <p class="disc">
        {{subject.year}}年
        <span v-for="director in subject.directors">/{{director.name}}</span>
        <span v-for="cast in subject.casts">/{{cast.name}}</span>
      </p>
      <p class="rate">
        <el-rate v-model="subject.rating.average" disabled text-color="#ff9900"></el-rate>
        <span class="rate-value">{{subject.rating.average *2}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subject: {
      type: Object
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
