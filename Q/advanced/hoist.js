/// hoisting

//egv1
// FUNCTION DECLARATION

hoistMe();
function hoistMe() {
  console.log(hoist);
  let what = "var and func declarations";
  console.log("what is hoisted? " + what);
  var hoist = "this is not nice";
  console.log(hoist);
}

//egV2
//function expressions

let a = 10;
let b = 5;

const sum = function () {
  console.log(a + b + " this is nice");
};
sum();

/// so general tip: declare vars on top rather {makes it more readable
// but it is accepted to declare them like the first example with function declarations}
