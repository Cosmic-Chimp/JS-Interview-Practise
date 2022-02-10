// get this to work when called like below
// console.log(mul(2)(3)(4));  output : 24
// console.log(mul(4)(3)(4));  output : 48
//mul func:

function mult(x) {
  return (y) => {
    return (z) => {
      return x * y * z;
    };
  };
}
console.log(mult(2)(3)(4));
