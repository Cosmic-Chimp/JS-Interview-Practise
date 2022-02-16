// Q5: How would you check if a number is an integer?
// A very simple way to check if a number is
// a decimal or integer is to see if there
// is a remainder left when you divide by 1.

function isInt(num) {
  return num % 1 === 0;
}
console.log(isInt(0)); // true
console.log(isInt(1)); // true
console.log(isInt(12.1)); // false
console.log(isInt(0.1)); // false
