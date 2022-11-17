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
// 非纯函数
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
// import _ from "lodash";
// export default () => {
//   // console.log(arr)

//   // function arr() {
//   //   let arr = [];
//   //   const count = 1000000;
//   //   for (let i = 0; i < count; i++) arr.push(i);

//   //   const start = Date.now();
//   //   arr.forEach((item) => item++);
//   //   console.log(arr[0]);
//   //   console.log("arrFliter", Date.now() - start + "ms");
//   // }

//   // function lodash() {
//   //   let arr = [];
//   //   const count = 1000000;
//   //   for (let i = 0; i < count; i++) arr.push(i);

//   //   const start = Date.now();
//   //   _.each(arr, (item) => item++);
//   //   console.log(arr[0]);
//   //   console.log("lodashFliter", Date.now() - start + "ms");
//   // }

//   // arr();
//   // lodash();
//   // =============================

//   class Container {
//     static of(x) {
//       return new Container(x);
//     }
//     constructor(x) {
//       this._value = x;
//     }
//     map(fn) {
//       return Container.of(fn(this._value));
//     }
//   }

//   // =============================
//   let count1 = 100000000;
//   let count2 = 77777777;

//   function getSumByFunctor() {
//     let sum1 = Container.of(0);
//     let sum2 = Container.of(0);
//     function add(a, b) {
//       return a + b;
//     }
//     const curriedSigma = _.curry(function (count, x) {
//       let i = 0;
//       for (i = 0; i < count; i++) {
//         x = add(x, i);
//       }
//       return x;
//     });
//     const sigmaCount1 = curriedSigma(count1);
//     const sigmaCount2 = curriedSigma(count2);
//     let start = Date.now();
//     sum1 = sum1.map(sigmaCount1);
//     console.log("getSumByFunctor", sum1, Date.now() - start + "ms");
//     start = Date.now();
//     sum2 = sum2.map(sigmaCount2);
//     console.log("getSumByFunctor", sum2, Date.now() - start + "ms");
//   }
//   function getSumByFor() {
//     let sum1 = 0;
//     let sum2 = 0;
//     let i = 0;
//     let start = Date.now();
//     for (i = 0; i < count1; i++) {
//       sum1 += i;
//     }
//     console.log("getSumByFor", sum1, Date.now() - start + "ms");
//     start = Date.now();
//     for (i = 0; i < count2; i++) {
//       sum2 += i;
//     }
//     console.log("getSumByFor", sum2, Date.now() - start + "ms");
//   }
//   function getSumByFun() {
//     let sum = 0;
//     let i = 0;
//     let start = Date.now();
//     function add(a, b) {
//       return a + b;
//     }
//     for (i = 0; i < count1; i++) {
//       sum = add(sum, i);
//     }
//     console.log("getSumByFun", sum, Date.now() - start + "ms");
//   }

//   getSumByFunctor();
//   getSumByFor();
//   getSumByFun();
//   getSumByFunctor();
//   getSumByFor();
//   getSumByFun();

//   const title = document.createElement("h2");
//   title.textContent = "CompareLodash";
//   document.body.append(title);
// };

// ====================================
// ====================================
// ====================================

/*
假设有一个班级的成绩表,结构如下
[
  {name:'张三', chinese:89,math:59,english:77},
  {name:'李四', chinese:89,math:49,english:97}
  ...
]
// 统计班级中各科目不及格的人数
// */
// import _ from "lodash";
// import fp from "lodash/fp";
// // export default () => {
//   // console.log(arr)

//   function arr() {
//     let arr = [];
//     const count = 1000000;
//     for (let i = 0; i < count; i++) arr.push(i);

//     const start = Date.now();
//     arr.forEach((item) => item++);
//     console.log(arr[0]);
//     console.log("arrFliter", Date.now() - start + "ms");
//   }

//   function lodash() {
//     let arr = [];
//     const count = 1000000;
//     for (let i = 0; i < count; i++) arr.push(i);

//     const start = Date.now();
//     _.each(arr, (item) => item++);
//     console.log(arr[0]);
//     console.log("lodashFliter", Date.now() - start + "ms");
//   }

//   arr();
//   lodash();

//   const title = document.createElement("h2");
//   title.textContent = "CompareLodash";
//   document.body.append(title);
// };

// // 非纯函数 => curried
// class Container {
//   static of(x) {
//     return new Container(x);
//   }
//   constructor(x) {
//     this._value = x;
//   }
//   map(fn) {
//     return Container.of(fn(this._value));
//   }
// }
// class IO {
//   static of(x) {
//     return new IO(function () {
//       return x;
//     });
//   }

//   constructor(fn) {
//     this._value = fn;
//   }
//   map(fn) {
//     return new IO(fp.flowRight(fn, this._value));
//   }
// }

// export default () => {
//   let i = 0;
//   let count = 1000000;
// function getSumByCurriedFunctor() {
//   let sum = Container.of(0);
//   const fp = function (container, v2) {
//     return container.map((item) => item + v2)._value;
//   };
//   const curriedFn = _.curry(fp);
//   const curriedFnSum = curriedFn(sum);
//   const start = Date.now();
//   for (i = 0; i < count; i++) {
//     curriedFnSum(i);
//   }
//   console.log(
//     "getSumByCurriedFunctor",
//     sum._value,
//     Date.now() - start + "ms"
//   );
// }
//   function getSumByCurriedFunctor() {
//     let sum = { value: 0 };
//     const fp = function (v1, v2) {
//       return v1.value + v2;
//     };
//     const curriedFn = _.curry(fp);
//     const curriedFnSum = curriedFn(sum);
//     const start = Date.now();
//     for (i = 0; i < count; i++) {
//       sum.value = curriedFnSum(i);
//     }
//     console.log("getSumByCurriedFunctor", sum.value, Date.now() - start + "ms");
//   }

//   // 纯函数
//   function getSumByFp() {
//     let sum = 0;
//     function fp(v1, v2) {
//       return v1 + v2;
//     }
//     const start = Date.now();
//     for (i = 0; i < count; i++) {
//       sum = fp(sum, i);
//     }
//     console.log("getSumByFp", sum, Date.now() - start + "ms");
//   }

//   getSumByFp();
//   getSumByCurriedFunctor();
// let arr = [];
// let count = 1000000;

// for (let i = 0; i < count; i++) {
//   arr.push({
//     name: `${
//       ["张", "李", "孙", "王", "钱", "黄"][
//         ((Math.random() * 100) % 6).toFixed()
//       ]
//     }${
//       ["一", "二", "三", "四", "五", "六"][
//         ((Math.random() * 100) % 6).toFixed()
//       ]
//     }${
//       ["一", "二", "三", "四", "五", "六"][
//         ((Math.random() * 100) % 6).toFixed()
//       ]
//     }`,
//     chinese: (Math.random() * 100).toFixed(),
//     math: (Math.random() * 100).toFixed(),
//     english: (Math.random() * 100).toFixed(),
//   });
// }

// const getByForeach = () => {
//   let count = [0, 0, 0];
//   let start = Date.now();
//   arr.forEach((item) => {
//     if (item.chinese > 60) count[0]++;
//     if (item.math > 60) count[1]++;
//     if (item.english > 60) count[2]++;
//   });

//   console.log("getByForeach", count, Date.now() - start + "ms");
// };

// const getByFilter = () => {
//   let count = [0, 0, 0];
//   let start = Date.now();
//   count[0] = arr.filter((item) => item.chinese > 60).length;
//   count[1] = arr.filter((item) => item.math > 60).length;
//   count[2] = arr.filter((item) => item.english > 60).length;
//   console.log("getByFilter", count, Date.now() - start + "ms");
// };

// const getByFp = () => {
//   class Container {
//     static of(x) {
//       return new Container(x);
//     }
//     constructor(x) {
//       this._value = x;
//     }
//     map(fn) {
//       return Container.of(fn(this._value));
//     }
//   }

//   const curriedFilterItem = _.curry(function (threshold, arr, item) {
//     return arr.filter((it) => it[item] > threshold).length;
//   })(60);

//   const arrFilter = curriedFilterItem(arr);

//   let count = [0, 0, 0];
//   let start = Date.now();
//   count[0] = arrFilter("chinese");
//   count[1] = arrFilter("math");
//   count[2] = arrFilter("english");
//   console.log("getByFp", count, Date.now() - start + "ms");
// };

// getByForeach();
// getByFilter();
// getByFp();
// getByForeach();
// getByFilter();
// getByFp();

// getByForeach();
// getByFilter();
// getByFp();
