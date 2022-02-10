// Q7: Make this work
// Problem

// duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

//method1( implements immutability- i think)
let currArr = [1, 2, 3, 4, 5];
let combined = [...currArr, ...currArr];
console.log(combined);
// ||

// method2, the way of the retard

function duplicate(arr) {
  return arr.concat(arr);
}

console.log(duplicate([1, 2, 3, 4, 5]));
