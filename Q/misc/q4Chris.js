// Why does this return NaN??
// function mult(num1, num2) {
//   return function () {
//     return num1 * num2;
//   };
// }
// console.log(mult(2)(2));

// but this works?
function mult(num1) {
  return function (num2) {
    return num1 * num2;
  };
}
console.log(mult(2)(2));
