export default {
  // 异步操作
  asyncAddAddress(context, payload) {
    // 返回promise以便回调
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('addAddress')
        console.log(payload);
        resolve('111111111')
      }, 1000)
    })
  }
}