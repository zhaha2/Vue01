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