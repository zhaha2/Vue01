// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { readSync } from 'fs';
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

/* eslint-disable no-new */
const cpn = {
  template: '<div>{{message}}</div>',
  data() {
    return {
      message: 'cpn message'
    }
  }
}

new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>',

  // 也可用render函数（像runtime only一样）
  render: function (createElement) {
    // 1. 普通用法 createElement(标签，标签属性，标签内的内容)
  //   return createElement('h2', 
  //     {class: 'box'}, 
  //     ['Hello World', createElement('button', ['button'])])
  // }

    // 2.传入组件对象
      // return createElement(cpn)
      // 等于runtime only做法
      return createElement(App)
  }
});

// 而.vue文件中的template是由vue-template-compiler处理成render函数的