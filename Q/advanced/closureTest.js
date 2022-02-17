// How would you use a closure to create
//  a private counter?
const counter = (() => {
  var privateCounter = 0;
  let privChangByFunc = (val) => {
    privateCounter += val;
  };
  return {
    increment: function () {
      privChangByFunc(1);
    },
    decrement: function () {
      privChangByFunc(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();
//IIFE: ()
// this anon func is executed as soon as its defined
console.log(counter.value()); // 0
counter.increment(); // 0 + 1
// counter.increment();
console.log(counter.value()); // 1
counter.decrement(); // 1 -1 === 0
counter.decrement(); // 0 - 1 === -1

console.log(counter.value()); // -1
