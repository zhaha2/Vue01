import axios from "axios";
// 导出多个实例
export function request(config) {
  // return new Promise((resolve, reject) => {
  //   // 1.创建axios实例
  //   const instance1 = axios.create({
  //     baseURL: 'http://152.136.185.210:8000/api/w6/',
  //     timeout: 5000
  //   })

  //   instance1(config)
  //     .then(res => resolve(res))
  //     .catch(err => reject(err))
  // })

  // 1.创建axios实例
  const instance1 = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6/',
    timeout: 5000
  })

  // 2.axios拦截器
  // 2.1请求拦截
  instance1.interceptors.request.use(config => {
    console.log(config);

    // a.比如config中的一些信息不符合服务器的要求
    // b.比如每次每次发送网络请求时，都希望在界面显示一个请求图标
    // c.某些网络请求（比如登录），必须携带一些特殊信息（token）
    
    // 拦截之后要返回
    return config
  }, err => {
    console.log(err);
    return err
  })

  // 2.2响应拦截
  instance1.interceptors.response.use(res => {
    console.log(res);
    return res.data
  }, err => {
    console.log(err);
    return err
  })

  // 3.发送真正的网络请求
  return instance1(config)
}

console.log(123);