<template>
  <div class="search-tag">
    <a class="search-img">
      <img class="search-tag-img movieImg" :src="item.images.medium">
    </a>
    <div class="search-brief">
      <p class="title">{{item.title}}</p>
      <p class="disc">
        {{item.year}}年
        <span v-for="director in item.directors">/{{director.name}}</span>
        <span v-for="cast in item.casts">/{{cast.name}}</span>
      </p>
      <p class="rate">
        <el-rate v-model="item.rating.average" disabled text-color="#ff9900"></el-rate>
        <span class="rate-value">{{item.rating.average *2}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../style/color.less';
@import "../../style/base";
  .search-tag{
    padding: 20px;
    border-top: 1px dashed @line;
    .search-img{
      width: 100px;
      height: 140px;
      overflow: hidden;
      display: inline-block;
      .search-tag-img{
        width: 100px;
      }
    }

    .search-brief{
      display: inline-block;
      vertical-align: top;
      margin-left: 40px;
      p{
        margin-bottom: 20px;
      }
      .title{
        color: #666699;
        font-size: 14px;
        span{
          font-size: 12px;
        }
      }
      .disc{
        width: 500px;
      }
      .rate{
        .el-rate{
          display: inline-block;
          .el-rate__icon{
            font-size: 14px;
          }
        }
        .rate-value{
          color: #ff9900
        }
      }
    }
  }
</style>
