// Q2: Given a string, reverse each word
// in the sentence
// For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG

const reverseStr = (str) => {
  return str.split("").reverse().join("");
};

// function reverseStr(str)
// split, splits string-object into an array if
// strings separating the str into substr's

//reverse, reverse elements in the arr
// join, joins the els from the arr into ONE string

let revStr = reverseStr("Welcome to this Javascript Guide!");
console.log(revStr);
