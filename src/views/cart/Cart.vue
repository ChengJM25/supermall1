<template>
    <div class="cart">

      <div class="cart-nav-bar">
        <nav-bar>
          <div slot="center">购物车({{length}})</div>
        </nav-bar>
      </div>

      <cart-list></cart-list>

      <cart-buttom-bar></cart-buttom-bar>
    </div>
</template>

<script>
  import NavBar from "components/common/nacbar/NavBar";
  import CartList from "./childComps/CartList";
  import CartButtomBar from "./childComps/CartButtomBar";
  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CartButtomBar
    },
    computed: {
      /*...mapGetters(['cartLength'])*/
      ...mapGetters({
        length: "cartLength"
      })
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .cart-nav-bar {
    background-color: #ff8198;
    color: #ffffff;
    font-weight: 700;
  }
</style>
