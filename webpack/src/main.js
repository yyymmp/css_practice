import {name} from "./js/a"
import {age} from "./js/b"

console.log(name);
console.log(age);

//入口依赖css文件
require('./css/normal.css')

//入口依赖less文件
require('./css/special.less')