// Q3: How to check if an object is an array ?
// Provide some code.

let trueArr = [1, 2, 3];
const falseArr = {};
const num = 1;
let checkTrueArr = Array.isArray(trueArr);
// console.log(checkTrueArr);
let checkFalseArr = Array.isArray(num);
// console.log(checkFalseArr);

/// Question4:s
// How to empty an array in JavaScript?
// method1
// let empty = [];
// trueArr = empty;
// console.log(trueArr)

// method2:
// trueArr.length = 0;
// console.log(trueArr);

// method2:
// trueArr.splice(0, trueArr.length);
// ||
// arrayList.splice(0);
// console.log(trueArr);
// method 3:
// while (trueArr.length) {
//   trueArr.pop();
// }
// console.log(trueArr);
