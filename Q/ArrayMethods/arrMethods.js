// add elems to arr:

// .push() method :
// adds elem to end of arr
const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

// salad.push("🥜");

// & if you want the elem to be added
// //  at the start of the arr use .unshift() method
// salad.unshift("🥜");

// removing elems from arrs :
// .shift() & .pop() methods
// .pop() => removes from end
// .shift() => removes from start

// copying and cloning arrs :
// const saladCopy = salad.slice();
// console.log(saladCopy); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']
// salad === saladCopy; // returns false

// Array.isArray(valuePasses) returns true if valuepassed is an array
// Array.isArray(salad);
// console.log(Array.isArray(salad));
