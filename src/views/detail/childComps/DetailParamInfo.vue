<template>
  <div v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table, index) in paramInfo.sizes" :key="index">
      <tr v-for="(tr, indexy) in table" :key="indexy">
        <td v-for="(td, indexx) in tr">{{td}}</td>
      </tr>
    </table>

    <table>
      <tr v-for="(info, index) in paramInfo.infos">
        <td>{{info.key}}</td>
        <td>{{info.value}}</td>
      </tr>
    </table>

    <div>
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>
