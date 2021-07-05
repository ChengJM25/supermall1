<template>
  <div class="recommend">
    <div v-for="item in crecommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    crecommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 12px;
  }

  .recommend-item img {
    width: 80%;
    margin-bottom: 5px;
  }
</style>
