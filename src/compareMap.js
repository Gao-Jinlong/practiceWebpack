// const _ = require('lodash')

// let arr = []
// let count = 10
// for (i = 0; i < count; i++) {
//   arr.push(i)
// }
// console.log(arr)
// function arrMap() {
//   const start = new Date.now()
//   arr.map((item) => item + 1)
// }
// console.log(arr)

// let a = 2
// let b = 3
// // 非函数式
// let sum = a + b

// // 函数式
// function add(v1, v2) {
//   return v1 + v2
// }

// sum = add(a, b)
// ------------------------------------------
// const count = 1000
// function getSumByfor() {
//   let sum = 0
//   const start = Date.now()
//   for (i = 0; i < count; i++) {
//     sum = sum + i
//   }
//   console.log('getSumByfor', sum, Date.now() - start + 'ms')
// }
// // 非纯函数
// function getSumByUnFp() {
//   let sum = 0
//   const start = Date.now()
//   function unFp(v2) {
//     return sum + v2
//   }
//   for (i = 0; i < count; i++) {
//     sum = unFp(i)
//   }
//   console.log('getSumByUnFp', sum, Date.now() - start + 'ms')
// }

// // 纯函数
// function getSumByFp() {
//   let sum = 0
//   const start = Date.now()
//   function fp(v1, v2) {
//     return v1 + v2
//   }
//   for (i = 0; i < count; i++) {
//     sum = fp(sum, i)
//   }
//   console.log('getSumByFp', sum, Date.now() - start + 'ms')
// }

// getSumByFp()
// getSumByUnFp()
// getSumByFp()
// getSumByUnFp()
//  -----------------------------------------
import _ from "../../node_modules/lodash";

let arr = [];
const count = 1000000;
for (i = 0; i < count; i++) arr.push(i);
// console.log(arr)

function arrFliter() {
  const start = Date.now();
  arr.filter((item) => item % 2 === 0);
  console.log(Date.now() - start + "ms");
}

function lodashFliter() {
  const start = Date.now();
  arr.filter((item) => item % 2 === 0);
  console.log(Date.now() - start + "ms");
}

arrFliter();
