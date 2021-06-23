import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// // 1.axios基本使用
// // 返回Promise 默认是get请求
// axios({
//   // 网络请求常用网址
//   // url: 'httpbin.org/'
//   url: 'http://152.136.185.210:8000/api/w6/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// axios({
//   // 网络请求常用网址
//   // url: 'httpbin.org/'
//   // url: 'http://152.136.185.210:8000/api/w6/home/data?type=sell&page=3'
//   url: 'http://152.136.185.210:8000/api/w6/home/data',
//   // get请求的参数拼接，就是?后面的参数
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// //2.axios并发请求
// // 类似promis.all
// axios.all([
//   axios({
//     url: 'http://152.136.185.210:8000/api/w6/home/multidata'
//   }),
//   axios({
//     url: 'http://152.136.185.210:8000/api/w6/home/data',
//     params: {
//       type: 'sell',
//       page: 3
//     }
//   })
//  ]).then(axios.spread((res1, res2) => {   //spread把结果数组拆开
//    console.log(res1);
//    console.log(res2);
//  }))

// //  3.全局配置(尽量少用)
// axios.defaults.baseURL = 'http://152.136.185.210:8000/api/w6/'
// axios.defaults.timeout = 5000

// axios.all([
//   axios({
//     url: '/home/data',
//     params: {
//       type: 'sell',
//       page: 3
//     }
//   }),
//   axios({
//     url: '/home/multidata'
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// // 4.创建对应的axios实例（对应多个ip地址时）
// const instance1 = axios.create({
//   baseURL: 'http://1.1.5.0:8000/',
//   timeout: 2000
// })

// instance1({
//   url: '/home/mutidata'
// }).then()

// const instance2 = axios.create({
//   baseURL: 'http://2.2.2.2:8000/',
//   timeout: 20000,
//   headers: {}
// })

// 5.封装request模块
import {request} from './network/request'

request({
  url: '/home/multidata'
}).then(res => console.log(res))
  .catch(err => console.log(err))

// 6.axios拦截器
