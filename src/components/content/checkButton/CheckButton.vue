<template>
  <div class="check-button" :class="{check: isCheck}">
    <i class="fa fa-check"></i>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isCheck: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .check-button {
    color: white;
    border-radius: 50%;
    border: 1px solid #aaa;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
  }

  .check {
    border: 1px solid #ff8198;
    background-color: #ff8198;
  }
</style>
