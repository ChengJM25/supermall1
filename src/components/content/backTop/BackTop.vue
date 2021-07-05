<template>
  <div class="back-top">
    <i class="fa fa-arrow-up" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>
  .back-top {
    border-radius: 50%;
    background-color: #fff;
    height: 30px;
    width: 30px;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    color: #ff5777;

    position: fixed;
    bottom: 60px;
    right: 10px;
  }
</style>
