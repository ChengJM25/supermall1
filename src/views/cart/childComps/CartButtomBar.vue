<template>
  <div class="bottom-bar">
    <div class="check-button">
      <check-button class="check-allButton" :is-check="isSelectAll" @click.native="checkClick"></check-button>
      <span class="all-center">全选</span>
      <span>合计:{{totalPrice}}</span>
    </div>

    <div class="aggregate">
      去计算({{checkedLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartButtomBar",
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkedLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false
      return !(this.$store.state.cartList.find(item => !item.checked))
/*      this.$store.commit('isSelectAll2')*/
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(item => item.checked = false)
      } else {
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
/*      this.$store.commit('checkClick2')*/
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    position: relative;
    line-height: 40px;
    box-shadow: 0 1px 5px rgba(100,100,100,0.3);
    display: flex;
  }

  .check-button {
    display: flex;
  }

  .check-allButton {
    margin-top: 10px;
    margin-left: 10px;
  }

  .all-center {
    margin-right: 10px;
    margin-left: 10px;
  }

  .aggregate {
    text-align: center;
    line-height: 40px;
    width: 100px;
    background-color: orange;
    position: absolute;
    right: 0;
  }


</style>
