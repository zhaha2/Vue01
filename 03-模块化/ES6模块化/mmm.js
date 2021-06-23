import {flag, sum} from "./aaa.js";

// 1.直接导入
if(flag) {
  console.log(wwwwwwwwwwww);
  console.log(sum(20, 30));
}

import {num1, height} from "./aaa.js";
console.log(num1, height);

// 2.导入函数，类
import {mul, Person} from "./aaa.js";
console.log(mul(100,200));
const p = new Person();

// 3.default
import addr from "./aaa.js";
console.log(addr);

// 4.全部导入
import * as aaa from "./aaa.js";
console.log(aaa.flag);
console.log(aaa.height);