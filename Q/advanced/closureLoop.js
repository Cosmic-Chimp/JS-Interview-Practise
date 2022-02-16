// for (var i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   };
//   setTimeout(log, 200);
// }
///above will log 3 3 3 :(

//this happens bc var is hoisted to its parent's scope
//which in this case is the global scope
// and the loop is executed long b4 setTimeout calls
// the log func
// by then the loop has already incremented i 3 times

///BUT this:
for (let i = 0; i < 3; i++) {
  const print = () => {
    console.log(i);
  };
  setTimeout(print, 200);
}
//will log 0 1 2
// this happens bc let is block scoped,
// meaning its scoped to the place/for loop
// its declared in
