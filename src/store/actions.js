export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      /*            let oldProduct = null
            for(let item of context.state.cartList){
              if(item.id === payload.id){
                oldProduct = item
              }
            }*/
      let oldProduct = context.state.cartList.find(item => item.id === payload.id)

      if(oldProduct) {
        context.commit('addCount', oldProduct)
        resolve('当前商品数量+1')
      }else {
        payload.count = 1
        context.commit('pushCartList', payload)
        resolve('添加商品成功')
      }
    })
  }
}
