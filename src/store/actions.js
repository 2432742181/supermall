export default {
  getCart(context, payload){
    return new Promise((resolve, reject) => {
      let oldProduct = null
      for(let item of context.state.cartList){
        if(item.id === payload.id){
          oldProduct = item
        }
      }
      if(oldProduct){
        context.commit('addCount',oldProduct)
        resolve('当前数量加以')
      }else{
        payload.count = 1
        context.commit('addCart',payload)
        resolve('当前商品添加')
      }
    })
  }
}