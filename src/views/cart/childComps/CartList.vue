<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <list-item v-for="(item, index) in cartList" :key="index" :product="item"></list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import ListItem from "./ListItem";

import {mapGetters} from 'vuex'

export default {
  name: "CartList",
  components: {
    Scroll,
    ListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 44px - 49px - 40px);
  }

  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
