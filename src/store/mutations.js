export default {
  addCount(state, payload) {
    payload.count++
  },
  pushCartList(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  /*    addToCart(state, payload) {
        /!*            let oldProduct = null
                    for(let item of context.state.cartList){
                      if(item.id === payload.id){
                        oldProduct = item
                      }
                    }*!/
        let oldProduct = state.cartList.find(item => item.id === payload.id)


        if(oldProduct) {
          oldProduct.count++
        }else {
          payload.count = 1
          state.cartList.push(payload)
        }
      }*/

  isSelectAll2(state) {
    if (state.cartList.length === 0) return false
    return !(state.cartList.find(item => !item.checked))
  },
  checkClick2(state) {
    if (this.isSelectAll2) {
      state.cartList.forEach(item => item.checked = false)
    } else {
      state.cartList.forEach(item => item.checked = true)
    }
    console.log('---');
  }
}
