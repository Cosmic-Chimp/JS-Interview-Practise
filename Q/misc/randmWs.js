// convert this:
let x = "hi";
// to this:
let y = "ih";

// solution:
const reverseString = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseString("hi"));

// break
// // clone arr and add new things
// const arr1 = [1, 2, 3, 4, 5];

// const clonedArr = ["Hi", ...arr1, "awesome", "BYE"];

// console.log(clonedArr);

// // break

// let newNums = arr1
//   .slice("")
//   .reverse()
//   .reduce((a) => {
//     return a * 10;
//   });

// console.log(newNums);
