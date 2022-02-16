//convert obj to array and then loop over it or use
// array methods

const obj = { 1: "1", 2: "2", 3: "3" };

const obj2Arr = new Map(Object.entries({ ...obj }));
//calling arr methods on obj2Arr wont work dont know tho ask chris or matt
let access2ArrMethods = [...obj2Arr];
// access2ArrMethods.push("issa meee");
console.log(access2ArrMethods);

for (i of obj2Arr.values()) {
  console.log(i);
}
