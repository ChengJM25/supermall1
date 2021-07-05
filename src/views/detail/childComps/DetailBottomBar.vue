<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div id="bottom-service">
        <div class="bottom-i"><i class="fa fa-commenting"></i></div>
        <span>客服</span>
      </div>
      <div id="bottom-shop">
        <div class="bottom-i"><i class="fa fa-shopping-bag"></i></div>
        <span>店铺</span>
      </div>
      <div id="bottom-collection">
        <div class="bottom-i"><i class="fa fa-star-o"></i></div>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div id="bottom-cart"  @click="addCart">加入购物车</div>
      <div id="bottom-buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    background-color: #ffffff;
    position: relative;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    font-size: 14px;
  }

  .bottom-bar>div {
    flex: 1;
  }

  .bottom-i {
    margin-bottom: 5px;
  }

  .bar-left {
    display: flex;
    flex: 1;
  }

  .bar-left > div {
    margin-top: 5px;
  }

  .bar-right {
    display: flex;
    line-height: 49px;
    text-align: center;
  }

  #bottom-service {
    flex: 1;
    text-align: center;
  }

  #bottom-collection {
    flex: 1;
    text-align: center;
  }

  #bottom-shop {
    flex: 1;
    text-align: center;
  }

  #bottom-cart {
    background: yellow;
    flex: 1;
  }
  #bottom-buy {
    flex: 1;
    background-color: #ff8198;
  }

</style>
