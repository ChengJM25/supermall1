<template>
  <div>
    <nav-bar>
      <div slot="left" class="back"><i class="fa fa-chevron-left" @click="backClick"></i></div>
      <div slot="center" class="titles">
        <div v-for="(item, index) in titles" class="title-item"
        :class="{active: index === currentIndex}" @click="navbarClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/nacbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    navbarClick(index) {
      this.currentIndex = index
      this.$emit('navBarClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .titles {
    display: flex;
    font-size: 13px;
  }

  .title-item {
    flex: 1;
  }

  .active {
    color: #ff5777;
  }

  .back {
    text-align: center;
  }
</style>
