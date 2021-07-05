<template>
  <div id="detail">
    <div id="detail-nav-bar"><detail-nav-bar  @navBarClick="navBarClick" ref="navBar"></detail-nav-bar></div>

    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-info :good="this.goods"></detail-info>
      <detail-shop-info :shop="shops"></detail-shop-info>
      <detail-image :detail-image="detailImage" @imgLoad="imgLoad"></detail-image>

      <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommend"></goods-list>

    </scroll>

    <detail-bottom-bar class="bottomBar" @addToCart="addCart"></detail-bottom-bar>
<!--    <toast :message="message" :isShow="isShow"></toast>-->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailInfo from "./childComps/DetailInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailImage from "./childComps/DetailImage";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "components/content/goods/GoodsList";
import DetailBottomBar from "./childComps/DetailBottomBar";

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "network/detail";
import {itemListerMixin} from "common/mixin";
import {debounce} from "common/utils";

/*import Toast from "components/common/toast/Toast";*/

export default {
  name: "Detail",
  mixins: [itemListerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shops: {},
      detailImage: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      navBarTopY: [],
      getNavBarTopY: null,
      currentIndex: 0,
/*      message: '',
      isShow: false*/

    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailInfo,
    DetailShopInfo,
    DetailImage,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
/*    Toast,*/

    Scroll,
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh()
      this.getNavBarTopY()
    },
    /*监听加入购物车*/
    addCart() {

      const product = {}
      product.img = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.nowPrice
      product.id = this.iid

/*            this.$store.commit('addToCart', product)*/
      this.$store.dispatch('addToCart', product).then(res => {
/*        this.isShow = true;
        this.message = res;
        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, 2000)*/
        this.$toast.show(res)
      })
    },
    navBarClick(index) {
      this.$refs.scroll.scrollTo(0, -this.navBarTopY[index], 200)
    },
    contentScroll(position) {
      const positionY = -position.y

      let length = this.navBarTopY.length
      for(let i = 0; i < this.navBarTopY.length; i++){
/*        if(positionY >= this.navBarTopY[parseInt(i)] && positionY < this.navBarTopY[parseInt(i+1)]) {
          console.log(i)
        }*/
        if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.navBarTopY[i] && positionY < this.navBarTopY[i+1]) || (i === length - 1 && positionY >= this.navBarTopY[i]))){
          this.currentIndex = i
          console.log(this.currentIndex);
          this.$refs.navBar.currentIndex = this.currentIndex
        }

      }
    }
  },
  created() {
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shops = new Shop(data.shopInfo)
      this.detailImage = data.detailInfo
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }

      this.getNavBarTopY = debounce(() => {
        this.navBarTopY = []

        this.navBarTopY.push(0)
        this.navBarTopY.push(this.$refs.param.$el.offsetTop)
        this.navBarTopY.push(this.$refs.comment.$el.offsetTop)
        this.navBarTopY.push(this.$refs.recommend.$el.offsetTop)

      }, 100)
/*      this.$nextTick(() => {

      })*/

    })

    //请求推荐数据
    getRecommend().then(res => {
      this.recommend = res.data.list
    })
  },
  mounted() {

  },
  updated() {

  },
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgLister)
  },
}
</script>

<style scoped>
  #detail-nav-bar {
    position: relative;
    z-index: 90;
    background-color: #ffffff;
  }

  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .content {
    height: calc(100% - 44px - 49px);
  }

</style>
