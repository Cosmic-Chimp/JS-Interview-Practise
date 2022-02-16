//  main method

let firstWord = "moronic";
let secondWord = "omicron";

isAnagram(firstWord, secondWord);

function isAnagram(first, second) {
  // let a = first.toLowerCase();
  // let b = second.toLowerCase();
  // above is optional ya know
  let a = first;
  let b = second;
  //sort strs and join result arr to a str
  // & then compare results
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}

console.log(isAnagram(firstWord, secondWord));
