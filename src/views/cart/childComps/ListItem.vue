<template>
  <div>
    <div class="list-item">
      <div class="list-item-left">
        <div class="list-item-check">
          <check-button :isCheck="product.checked" @click.native="checkClick"></check-button>
        </div>
      </div>
      <div class="list-item-center">
        <img :src="product.img" alt="">
      </div>
      <div class="list-item-right">
              <p class="right-up">{{product.title}}</p>
              <p class="right-center">{{product.desc}}</p>
              <div class="right-down">
                <div class="right-down-price">￥&nbsp{{product.price}}</div>
                <div class="right-down-count">x&nbsp{{product.count}}</div>
              </div>
      </div>
    </div>
    <div class="line"></div>
  </div>

</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "ListItem",
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style scoped>
  .line {
    background-color: #666666;
    height: 1px;
    margin: 0 5px 0 5px;
  }

  .list-item {
    display: flex;
    height: 100px;
    margin: 10px;
  }

  .list-item-left {
    width: 20px;

  }

  .list-item-check {
    width: 20px;
    height: 20px;
    margin: auto;
    margin-top: 40px;
  }

  .list-item-center {
    width: 25%;
    overflow: hidden;
    border-radius: 10px;
    margin: 0 5px 0 5px;
  }

  .list-item-center img {
    width: 100%;
  }

  .list-item-right {
    position: relative;
  }

  .right-up {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 180px
  }

  .right-center {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 180px;
    font-size: 12px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .right-down {
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .right-down-price {
    color: #ff8198;
  }

  .right-down-count {
    position: absolute;
    right: 0;
  }
</style>
