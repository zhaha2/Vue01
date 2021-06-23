// 1.使用commonJS模块化规范
const {sum, mul} = require('./js/mathUtil.js');

console.log(sum(20, 30));
console.log(mul(20, 30));

// 2.使用ES6
import {name, age, height} from './js/info';

console.log(name, age, height);

// 3.依赖css文件
require('./css/normal.css')

// 4.依赖Less文件
require('./css/special.less')
// 测试
document.writeln('<h2>Hello</h2>');

// 5.使用Vue进行开发
import Vue from 'vue'
import App from './vue/App'
 
new Vue({
  el: '#app',
  // template会替换掉el的元素, 会自动放入#app的元素替换
  template: '<App/>',
  components: {
    App
  }
})

document.writeln('<h2>Hi Zha</h2>');
