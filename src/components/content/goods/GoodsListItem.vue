<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="showImg" alt="" @load="imgLoad">
    <div class="goods-list-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <i class="fa fa-star-o"></i>
      <span>{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImgLoad')
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
}
</script>

<style scoped>
  .goods-list-item {
    width: 48%;
  }

  .goods-list-item img{
    width: 100%;
    border-radius: 5px;
    border:3px solid var(--color-tint);
  }

  .goods-list-info {
    font-size: 12px;
    overflow: hidden;
    text-align: center;
  }

  .goods-list-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-list-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-list-info i {
    margin-right: 3px;
  }
</style>
