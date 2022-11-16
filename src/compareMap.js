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
import _ from "lodash";
import fp from "lodash/fp";
// export default () => {
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

// 非纯函数 => curried
class Container {
  static of(x) {
    return new Container(x);
  }
  constructor(x) {
    this._value = x;
  }
  map(fn) {
    return Container.of(fn(this._value));
  }
}
class IO {
  static of(x) {
    return new IO(function () {
      return x;
    });
  }

  constructor(fn) {
    this._value = fn;
  }
  map(fn) {
    return new IO(fp.flowRight(fn, this._value));
  }
}

export default () => {
  let i = 0;
  let count = 1000000;
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
  function getSumByCurriedFunctor() {
    let sum = { value: 0 };
    const fp = function (v1, v2) {
      return v1.value + v2;
    };
    const curriedFn = _.curry(fp);
    const curriedFnSum = curriedFn(sum);
    const start = Date.now();
    for (i = 0; i < count; i++) {
      sum.value = curriedFnSum(i);
    }
    console.log("getSumByCurriedFunctor", sum.value, Date.now() - start + "ms");
  }

  // 纯函数
  function getSumByFp() {
    let sum = 0;
    function fp(v1, v2) {
      return v1 + v2;
    }
    const start = Date.now();
    for (i = 0; i < count; i++) {
      sum = fp(sum, i);
    }
    console.log("getSumByFp", sum, Date.now() - start + "ms");
  }

  getSumByFp();
  getSumByCurriedFunctor();
};
