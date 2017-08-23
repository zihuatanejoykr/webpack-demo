// 导入公共css


// 导入js方法
import {fun} from "./print.js";

// 导入js模块
import nameA from "./scripts/modules/a.js";
import nameB from "./scripts/modules/a.js";

$("body").on("click",fun);
fun();
var objA = new nameA();
objA.print();
objA.addNum(10);
objA.print();
objA.attrB.print();
objA.print();

var objB = new nameB();
objB.print();
objB.addNum(3);
objB.print();