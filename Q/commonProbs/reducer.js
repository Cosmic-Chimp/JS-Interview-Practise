// const arr = [1, 2];
// const sum = arr.reduce((acc, currVal) => {
//   return acc + currVal;
// }, 0); // the 0 is the init acc and 0 == default
// console.log(sum);

const arr = [1, 2];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = arr.reduce((acc, currVal) => {
  return acc + currVal;
}, 0); // here we started counting at 10
console.log(sum);

// reduceRight
