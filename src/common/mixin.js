import {debounce} from "./utils";

export const itemListerMixin = {
  data() {
    itemImgLister: null
  },
  mounted() {
    const  refresh = debounce(this.$refs.scroll.refresh)
    this.itemImgLister = () => {refresh()}
    this.$bus.$on('itemImgLoad', this.itemImgLister)
  }
}
