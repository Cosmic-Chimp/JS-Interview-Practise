// Write a program that prints the numbers
// from 1 to 100. But for multiples of three
//  print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers that're multiples of both three & five
//  print “FizzBuzz”.

// Ternary =>> condition ? value if true : value if false
// get remainder : take int  divide by val then multiply it by that val
// so 1 divide 3 is .33333 then time 3 == 1

// REVISE THIS PROBLEM MORE

// for (i = 1; i <= 100; i++)
//   console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);

// for (let j = 1; j <= 100; j++) {
//   let f = j % 3 == 0,
//     b = j % 5 == 0;
//   console.log(f ? (b ? "FizzBuzz" : "Fizz") : b ? "Buzz" : j);
// }

for (i = 1; i <= 100; i++) console.log(i % 2 === 0 ? i : "not a multiple of 3");
