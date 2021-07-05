<template>
  <div v-if="Object.keys(good).length !== 0" class="detail-info-base">
    <div class="detail-info-content">
      <div class="detail-info-title">
        <p>{{this.good.title}}</p>
      </div>
      <div class="detail-info-price">
        <div id="new-price">￥{{this.good.realPrice}}</div>
        <div id="old-price">￥{{this.good.oldPrice}}</div>
        <div id="discount">{{this.good.discount}}</div>
      </div>
      <div class="detail-info-other">
        <div id="sales">{{this.good.colums[0]}}</div>
        <div id="collection">{{this.good.colums[1]}}</div>
        <div id="deliver">{{this.good.services[1].name}}</div>
      </div>
    </div>
    <div class="detail-info-services">
      <div id="return">
        <div><img :src="this.good.services[0].icon" alt=""></div>
        <div><p>{{this.good.services[0].name}}</p></div>
      </div>
      <div id="services">
        <div><img :src="this.good.services[2].icon" alt=""></div>
        <div><p>{{this.good.services[2].name}}</p></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    good: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

  .detail-info-content {
    margin: 10px;
    border-bottom: 1px solid #eeeeee;
  }

  .detail-info-title {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .detail-info-price {
    display: flex;
    margin-bottom: 20px;
  }

  .detail-info-price {
    vertical-align: bottom;
  }

  #new-price {
    color: #ff5777;
    font-size: 18px;
    margin-right: 5px;
  }

  #old-price {
    align-self: flex-end;
    font-size: 12px;
    margin-right: 5px;
    text-decoration: line-through;
  }

  #discount {
    border-radius: 5px;
    background-color: #ff5777;
    color: #ffffff;
    font-size: 12px;
    padding-left: 5px;
    padding-right: 5px;
    height: 15px;
    line-height: 15px;
  }

  .detail-info-other {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    font-size: 12px;
    color: #666666;
  }

  .detail-info-services {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    border-bottom: 10px solid #eee;
  }

  #return {
    display: flex;
    margin-top: 5px;
    margin-left: 10px;
    margin-bottom: 15px;
  }

  #services {
    display: flex;
    margin-top: 5px;
    margin-right: 10px;
    margin-bottom: 15px;
  }

  .detail-info-services img {
    width: 12px;
    margin-top: 1px;
    margin-right: 2px;
  }

</style>
