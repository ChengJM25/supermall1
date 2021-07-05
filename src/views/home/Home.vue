<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center" @dblclick="backTop">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"
                 class="tab-control" v-show="this.isTabFixed"
                  ref="tabControl2"/>

    <scroll class="content" ref="scroll" :probeType="3"
            @scroll="contentScroll" :pull-up-load="true"
            @pullingUp="loadMore">
      <div class="home-swiper"><home-swiper :cbanners="banners" @swiperImgLoad="swiperImgLoad"/></div>
      <home-recommend :crecommends="recomends"/>
      <home-feature-view/>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl" />
      <GoodsList :goods="showGoods"/>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeatureView from "./childComps/HomeFeatureView";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import NavBar from "components/common/nacbar/NavBar";
import TabControl from "components/content/TabControl/TabControl";
import Scroll from "components/common/scroll/Scroll";

import {getHomeMultidata, getHomeGoods} from "network/home";
import {debounce} from "common/utils";
import {itemListerMixin} from "common/mixin";


export default {
  name: "Home",
  mixins: [itemListerMixin],
  data() {
    return {
      banners: [],
      recomends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    }
  },
  components: {
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,
    GoodsList,
    Scroll,
    BackTop,

    NavBar,
    TabControl,
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    /*网络请求*/
    getHomeMultidata() {
      getHomeMultidata()
        .then(res => {
          this.banners = res.data.banner.list;
          this.recomends = res.data.recommend.list;
        })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
    },
    /*事件监听*/
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;

    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 600
      this.isTabFixed = -position.y > this.tabOffsetTop + 44
    },
    loadMore() {
      this.getHomeGoods(this.currentType)

      /*      this.$refs.scroll.scroll.refresh()*/
    },
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0)
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()

    //取消全局事件监听
    this.$bus.$off('itemImgLoad', this.itemImgLister)
  },

}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;

  }

  .home-swiper {
    margin-top: 44px;
  }

  #home {
    height: 100vh;
    position: relative;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .tab-control {
    position: relative;
    z-index: 10;
  }

</style>
