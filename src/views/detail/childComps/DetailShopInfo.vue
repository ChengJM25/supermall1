<template>
  <div class="detail-shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="shop-info-up">
      <div class="shop-info-logo"><img :src="shop.logo" alt=""></div>
      <div class="shop-info-name">{{shop.name}}</div>
    </div>
    <div class="shop-info-down">
      <div class="shop-info-good">
        <div>
          <p v-if="shop.sells < 10000" class="shop-sells">{{shop.sells}}</p>
          <p v-else class="shop-sells">{{getSells}}万</p>
          <p class="shop-sells-text">总销量</p>
        </div>
        <div>
          <p v-if="shop.goodsCount < 10000"  class="shop-count">{{shop.goodsCount}}</p>
          <p v-else class="shop-count">{{getCount}}</p>
          <p class="shop-count-text">全部宝贝</p>
        </div>
      </div>
      <div class="shop-info-score">
        <div id="shop-allscore">
          <div class="shop-allscore-top">
            <div>{{shop.score[0].name}}</div>
            <div class="price-score" :class="{isHeight: shop.score[0].score < 4.8 }">
              {{shop.score[0].score}}
            </div>
            <div v-if="shop.score[0].isBetter" class="height">高</div>
            <div v-else class="low">低</div>
          </div>
          <div class="shop-allscore-center">
            <div>{{shop.score[1].name}}</div>
            <div class="price-score" :class="{isHeight: shop.score[1].score < 4.8 }">
              {{shop.score[1].score}}
            </div>
            <div v-if="shop.score[1].isBetter" class="height">高</div>
            <div v-else class="low">低</div>
          </div>
          <div class="shop-allscore-down">
            <div>{{shop.score[2].name}}</div>
            <div class="price-score" :class="{isHeight: shop.score[2].score < 4.8 }">
              {{shop.score[2].score}}
            </div>
            <div v-if="shop.score[2].isBetter" class="height">高</div>
            <div v-else class="low">低</div>
          </div>
        </div>
      </div>
    </div>
    <div class="shop-info-bottom">
        <a href="">
          <div id="go-shop">进店看看</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    getSells() {
      return (this.shop.sells/10000).toFixed(1)
    },
    getCount() {
      return (this.shop.goodsCount/10000).toFixed(1)
    }
  }
}
</script>

<style scoped>
  .detail-shop-info {
    margin: 30px 10px 0 10px;
    border-bottom: 3px solid #eeeeee;
  }

  .shop-info-up {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }

  .shop-info-logo {
    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid #eeeeee;
    overflow: hidden;
    width: 50px;
    height: 50px;
  }

  .shop-info-logo img {
    width: 100%;
  }

  .shop-info-good {
    display: flex;
    border-right: 1px solid #eeeeee;
    text-align: center;
    width: 50%;
    justify-content: space-evenly;
  }

  .shop-sells, .shop-count {
    font-size: 18px;
    font-weight: bolder;
  }

  .shop-sells-text, .shop-count-text {
    margin-top: 10px;
    font-size: 12px;
  }

  .shop-info-down {
    display: flex;
    font-size: 12px;
    align-items: center;
  }

  #shop-allscore {
    margin-left: 25px;
  }

  .shop-allscore-center,
  .shop-allscore-top,
  .shop-allscore-down {
    display: flex;
  }

  .price-score {
    width: 30px;
    margin-left: 20px;
    margin-right: 10px;
    color: #ff5777;
  }

  .shop-allscore-center {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .height {
    color: #ffffff;
    background-color: #ff5777;
  }

  .low {
    color: #ffffff;
    background-color: green;
  }

  .isHeight {
    color: green;
  }

  #go-shop {
    background-color: #eeeeee;
    height: 25px;
    width: 100px;
    line-height: 25px;
    text-align: center;
    font-size: 12px;
    margin: 20px auto 0 auto;
  }

  .shop-info-bottom {
    padding-bottom: 20px;
  }
</style>
