// includes [NOT mutative, doestn modify og array]
// |>|> returns bool, true if item that is tested is included in arr, false if not
const array = [1, 2, 3, 4, 5];

console.log(array.includes(4)); // true
console.log(array.includes(50)); // false
// OR
//pass it an index to start looking FROM
// second arg is where to start looking FROM
console.log(array.includes(2, 1)); // true
console.log(array.includes(2, 2)); // false bc 2 is found before the idx where it started searching

// ------------------------------------------------------

// from
// |>|> [creates arr from something that you pass to it]
// when u use doc.getElsByClassname etc it will return a node list,
//  you can convert this nodelist by using Array.from() and then u can use all array methods
const ar = [1, 2, 3];
const newAr = Array.from(ar);
//mutate newAr:
newAr[1] = 0;
console.log(ar); // logs [1,2,3]
console.log(newAr); // logs [1,0,3] this way the og arr is not mutated

// ------------------------------------------------------

// of [takes any num of args, it then makes an arr of those args]
const dehArray = Array.of(1, undefined, [1, 2], "hello");
console.log(dehArray); //logs [ 1, undefined, [1, 2], 'hello]

// ------------------------------------------------------

// indexOf [find idx of passed val in targeted arr]
// |> if it cannot find it, it returns -1
// |> if theres 2 of same val, it find the first one

// ------------------------------------------------------

// lastIndexOf [ find last instance idx of passed val's ]

// ------------------------------------------------------

// toString [return string representing arr without mutating OG arr]
// same array as above( ar [1, 2, 3])
let stringed = ar.toString();
console.log(stringed); // logs 1,2,3

// ------------------------------------------------------

// toLocaleString
let curencyStr = ar.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(curencyStr);

// ------------------------------------------------------

// join [takes arr & convert to string, you can provide your own separators]
//  with toString() it joins the stuff with a comman separator
let customSeparator = ar.join(" nxt num is = ");
console.log(customSeparator);

// ------------------------------------------------------

// slice [returns copy of arr from Startingpoint to an Endingpoint & doesnt mutate OG arr]
// Endingpoint is exclusive => up to but not including
const array2 = ["a", "b", "c", "d", "e", "f", "g"];
let arrAfterC = array2.slice(3); // starting point to end of arrLength if endpoint not provided
console.log(arrAfterC); // [d,e,f,g]

// ------------------------------------------------------

// forEach [just iterates through each item in arr]
const arrayNew = ["Learn", "arr", "methods"];
arrayNew.forEach((item, index, array) => {
  console.log(item); // current iteration
  console.log(index); // idx of current iteration
  console.log(array); // the full targeted arr
});

// ------------------------------------------------------

// find [finds first instance of passed val, or returns undefined]

// findIndex || revise later time

// ------------------------------------------------------

// some [find out if some items in targeted arr pass given test]
// |>|> returns bool , return true if atleast ONE item passes given test else returns false
const grades = [100, 80, 58, 91];
const failed = grades.some((grade) => grade < 70); // if any are less than 70 then failed will be true
console.log(failed); // true

// ------------------------------------------------------

// every
const evens = [2, 4, 6, 8];
const notAllEvens = [2, 4, 7, 6, 8];
const isEven = (num) => num % 2 === 0;
console.log(evens.every(isEven)); // logs true bc every item is even
console.log(notAllEvens.every(isEven)); // logs false bc one item is NOT even

// ------------------------------------------------------

// filter [ give it a test, any items that pass test
//  will be included in the array that it returns
//  so it is NOT mutative ]
const one_Ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(one_Ten); // logs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNums = one_Ten.filter(isEven);
console.log(evenNums); // logs [ 2, 4, 6, 8, 10 ]

// ------------------------------------------------------

// map [  ]
const oddNums = [1, 3, 5, 7, 9];
const evenNumberos = oddNums.map((item) => {
  return item + 1;
});
console.log(evenNumberos); //logs [ 2, 4, 6, 8, 10 ]
// map also can accept other args like (item,index,array)

// ------------------------------------------------------

// concat
// fill
// flat
// flatMap

// ------------------------------------------------------

// splice [mutates OG arr]
const numrs = [1, 2, 3, 4, 5]; // replace 3 n 4 with a b
numrs.splice(2, 2, "a", "b");
console.log(numrs); // logs [ 1, 2, 'a', 'b', 5 ] = it changed OG arr

// ------------------------------------------------------

// keys
const alpha = ["a", "b", "c", "d"];
console.log(Object.keys(alpha)); // logs [ '0', '1', '2', '3' ] -> these are the idxs of the items
// but
console.log(alpha.keys()); // logs Object [Array Iterator] {}
// can do the following :
for (let item of alpha.keys()) {
  console.log(item);
} // logs idxs of items but not as strings within an arr but as numbers
// if there are 'holes' in an array the keys method doesnt ignore them:
const beta = ["d", "b", , "z"]; // has a hole between b and z
for (let itm of alpha.keys()) {
  console.log(itm);
} // logs ALL the idx even the 'hole's' idx

// ------------------------------------------------------

// values [ same as keys above method BUT it
// returns the actual values not the idx like keys method]

// ------------------------------------------------------

// entries [ basically keys + values] -> returns an array of boths idx and values

// ------------------------------------------------------

// sort [is Mutatative,changes OG arr]
console.log(beta.sort()); // logs [ 'b', 'd', 'z', <1 empty item> ]
let ages = [20, 29, 333, 24];
ages.sort((a, b) => {
  return b - a; // ascending order would be a - b
});
console.log(ages); // ages arr has been changed to [ 333, 29, 24, 20 ]
// sort arr with objects ??:
const people = [
  {
    name: "Goku",
    age: 30,
  },
  {
    name: "Vegeta",
    age: 40,
  },
  {
    name: "Broly",
    age: 28,
  },
  {
    name: "Whis",
    age: 30000000000000,
  },
];
people.sort((a, b) => {
  return a.age - b.age; // ascending order
});
console.log(people);

// ------------------------------------------------------

// copyWithin [ mutates OG arr] -> revise this one later
