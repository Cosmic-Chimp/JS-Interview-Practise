// Q9: Write a function that would allow you to do
// this?
// Problem:
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); //returns 27

// function updateNum(startNum) {
//   return function (n) {
//     return startNum + n;
//   };
// }
// let add6 = updateNum(6);
// console.log(add6(2));

changeNum = (initNum) => {
  return function (n) {
    return initNum + n;
  };
};

const add2 = changeNum(2);
const add6 = changeNum(6);

console.log(add2(1));
console.log(add6(6));
