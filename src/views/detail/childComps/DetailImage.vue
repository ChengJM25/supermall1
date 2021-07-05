<template>
  <div v-if="Object.keys(detailImage).length !== 0">
    <div id="detail-image-text">{{detailImage.desc}}</div>
    <div id="detail-image-effect">{{detailImage.detailImage[0].key}}</div>
    <div id="detail-image-image" v-for="item in detailImage.detailImage[0].list">
      <img :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImage",
  props: {
    detailImage: {
      type: Object
    }
  },
  data() {
    return {
      count: 0,
      imgLength: 0
    }
  },
  methods: {
    imgLoad() {
      if(++this.count === this.imgLength){
        this.$emit('imgLoad')
      }
    }
  },
  watch: {
    detailImage() {
      this.imgLength = this.detailImage.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
  #detail-image-image {
  width: 100%;
}

  #detail-image-image img {
    width: 100%;
  }
</style>
